"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

// ─── Perlin Noise ─────────────────────────────────────────────────────────────

class PerlinNoise {
  private p: Uint8Array
  private grad3: number[][]

  constructor(seed?: number) {
    this.p = new Uint8Array(512)
    this.grad3 = [
      [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
      [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
      [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
    ]
    const s = (seed !== undefined && seed > 0 && seed < 1) ? seed : Math.random()
    const perm = new Uint8Array(256)
    for (let i = 0; i < 256; i++) perm[i] = i
    for (let i = 0; i < 256; i++) {
      const j = Math.floor(s * (i + 1)) % 256
      const k = perm[i]; perm[i] = perm[j]; perm[j] = k
    }
    for (let i = 0; i < 512; i++) this.p[i] = perm[i & 255]
  }

  private dot(g: number[], x: number, y: number) {
    return g[0] * x + g[1] * y
  }

  perlin2(x: number, y: number): number {
    const X = Math.floor(x) & 255
    const Y = Math.floor(y) & 255
    x -= Math.floor(x)
    y -= Math.floor(y)
    const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)
    const u = fade(x), v = fade(y)
    const p = this.p, g = this.grad3
    const n00 = this.dot(g[p[X + p[Y]] % 12], x, y)
    const n01 = this.dot(g[p[X + p[Y + 1]] % 12], x, y - 1)
    const n10 = this.dot(g[p[X + 1 + p[Y]] % 12], x - 1, y)
    const n11 = this.dot(g[p[X + 1 + p[Y + 1]] % 12], x - 1, y - 1)
    const lerp = (a: number, b: number, t: number) => a + t * (b - a)
    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), v)
  }
}

// ─── Animation config ─────────────────────────────────────────────────────────

const WAVE_CONFIG = {
  // Grid
  GRID_X_GAP: 10,
  GRID_Y_GAP: 32,
  GRID_WIDTH_OFFSET: 80,
  GRID_HEIGHT_OFFSET: 30,
  // Perlin wave
  WAVE_TIME_X_FACTOR: 0.013,
  WAVE_NOISE_X_FACTOR: 0.003,
  WAVE_TIME_Y_FACTOR: 0.0022,
  WAVE_NOISE_Y_FACTOR: 0.0015,
  WAVE_NOISE_MAGNITUDE: 9,
  WAVE_AMPLITUDE_X: 30,
  WAVE_AMPLITUDE_Y: 14,
  // Mouse
  MOUSE_INFLUENCE_RADIUS: 175,
  MOUSE_FALLOFF_FACTOR: 0.001,
  MOUSE_FORCE_FACTOR: 0.0004,
  MOUSE_SMOOTHING_FACTOR: 0.1,
  MAX_MOUSE_VELOCITY: 100,
  // Physics
  TENSION_STRENGTH: 0.002,
  FRICTION: 0.74,
  CURSOR_DISPLACEMENT_STRENGTH: 0.6,
  MAX_CURSOR_DISPLACEMENT: 500,
  // Line opacity
  LINE_BASE_OPACITY: 0.45,
  LINE_HOVER_OPACITY: 0.85,
} as const

// ─── Internal types ───────────────────────────────────────────────────────────

type WavePoint = {
  x: number
  y: number
  wave: { x: number; y: number }
  cursor: { x: number; y: number; vx: number; vy: number }
}

type AnimState = {
  ctx: CanvasRenderingContext2D | null
  mouse: { x: number; y: number; lx: number; ly: number; sx: number; sy: number; v: number; vs: number; a: number; set: boolean }
  lines: WavePoint[][]
  noise: PerlinNoise
  bounding: DOMRect | null
  rafId: number
  lineColor: string
}

/**
 * AppDashboardBackground — Canvas-driven Perlin noise wave grid with mouse-follow glow.
 * Renders as an absolute-positioned layer behind all dashboard content.
 * Background uses a bg-gradient-to-br from --card to --secondary.
 * Wave lines use --accent; glow uses --primary, --muted, --sidebar-primary.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDashboardBackground({
  interactive = true,
  className,
  ...props
}: {
  interactive?: boolean
} & React.ComponentProps<typeof motion.div>) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const glowRef = React.useRef<HTMLDivElement>(null)
  const stateRef = React.useRef<AnimState>({
    ctx: null,
    mouse: { x: -10, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false },
    lines: [],
    noise: new PerlinNoise(),
    bounding: null,
    rafId: 0,
    lineColor: "var(--muted-foreground)",
  })

  const moved = React.useCallback((point: WavePoint, withCursor = true) => ({
    x: Math.round((point.x + point.wave.x + (withCursor ? point.cursor.x : 0)) * 10) / 10,
    y: Math.round((point.y + point.wave.y + (withCursor ? point.cursor.y : 0)) * 10) / 10,
  }), [])

  React.useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const s = stateRef.current
    s.ctx = canvas.getContext("2d")

    // Read line color from CSS variable — resolves to dark token since container has .dark class
    const computed = getComputedStyle(container).getPropertyValue("--accent").trim()
    if (computed) s.lineColor = computed

    const setSize = () => {
      s.bounding = container.getBoundingClientRect()
      canvas.width = s.bounding.width
      canvas.height = s.bounding.height
    }

    const setLines = () => {
      if (!s.bounding) return
      const { width, height } = s.bounding
      s.lines = []
      const { GRID_X_GAP, GRID_Y_GAP, GRID_WIDTH_OFFSET, GRID_HEIGHT_OFFSET } = WAVE_CONFIG
      const totalLines = Math.ceil((width + GRID_WIDTH_OFFSET) / GRID_X_GAP)
      const totalPoints = Math.ceil((height + GRID_HEIGHT_OFFSET) / GRID_Y_GAP)
      const xStart = (width - GRID_X_GAP * totalLines) / 2
      const yStart = (height - GRID_Y_GAP * totalPoints) / 2
      for (let i = 0; i <= totalLines; i++) {
        const points: WavePoint[] = []
        for (let j = 0; j <= totalPoints; j++) {
          points.push({
            x: xStart + GRID_X_GAP * i,
            y: yStart + GRID_Y_GAP * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          })
        }
        s.lines.push(points)
      }
    }

    const movePoints = (time: number) => {
      const { lines, mouse, noise } = s
      const {
        WAVE_TIME_X_FACTOR, WAVE_NOISE_X_FACTOR, WAVE_TIME_Y_FACTOR, WAVE_NOISE_Y_FACTOR,
        WAVE_NOISE_MAGNITUDE, WAVE_AMPLITUDE_X, WAVE_AMPLITUDE_Y,
        MOUSE_INFLUENCE_RADIUS, MOUSE_FALLOFF_FACTOR, MOUSE_FORCE_FACTOR,
        TENSION_STRENGTH, FRICTION, CURSOR_DISPLACEMENT_STRENGTH, MAX_CURSOR_DISPLACEMENT,
      } = WAVE_CONFIG

      for (const points of lines) {
        for (const p of points) {
          const move = noise.perlin2(
            (p.x + time * WAVE_TIME_X_FACTOR) * WAVE_NOISE_X_FACTOR,
            (p.y + time * WAVE_TIME_Y_FACTOR) * WAVE_NOISE_Y_FACTOR,
          ) * WAVE_NOISE_MAGNITUDE
          p.wave.x = Math.cos(move) * WAVE_AMPLITUDE_X
          p.wave.y = Math.sin(move) * WAVE_AMPLITUDE_Y

          if (interactive) {
            const dx = p.x - mouse.sx
            const dy = p.y - mouse.sy
            const d = Math.hypot(dx, dy)
            const radius = Math.max(MOUSE_INFLUENCE_RADIUS, mouse.vs)
            if (d < radius) {
              const falloff = 1 - d / radius
              const ff = Math.cos(d * MOUSE_FALLOFF_FACTOR) * falloff * radius * mouse.vs * MOUSE_FORCE_FACTOR
              p.cursor.vx += Math.cos(mouse.a) * ff
              p.cursor.vy += Math.sin(mouse.a) * ff
            }
            p.cursor.vx += (0 - p.cursor.x) * TENSION_STRENGTH
            p.cursor.vy += (0 - p.cursor.y) * TENSION_STRENGTH
            p.cursor.vx *= FRICTION
            p.cursor.vy *= FRICTION
            p.cursor.x = Math.min(MAX_CURSOR_DISPLACEMENT, Math.max(-MAX_CURSOR_DISPLACEMENT, p.cursor.x + p.cursor.vx * CURSOR_DISPLACEMENT_STRENGTH))
            p.cursor.y = Math.min(MAX_CURSOR_DISPLACEMENT, Math.max(-MAX_CURSOR_DISPLACEMENT, p.cursor.y + p.cursor.vy * CURSOR_DISPLACEMENT_STRENGTH))
          }
        }
      }
    }

    const drawLines = () => {
      const { ctx, bounding, lines, mouse } = s
      if (!ctx || !bounding) return
      ctx.clearRect(0, 0, bounding.width, bounding.height)
      ctx.strokeStyle = s.lineColor
      ctx.lineWidth = 0.5

      const { MOUSE_INFLUENCE_RADIUS, LINE_BASE_OPACITY, LINE_HOVER_OPACITY } = WAVE_CONFIG

      for (const points of lines) {
        // Each line's opacity is driven by its horizontal distance from the mouse.
        // Lines use their original x (before wave displacement) for a stable fade boundary.
        let opacity: number = LINE_BASE_OPACITY
        if (interactive && mouse.set) {
          const dist = Math.abs(points[0].x - mouse.sx)
          const t = Math.max(0, 1 - dist / MOUSE_INFLUENCE_RADIUS)
          opacity = LINE_BASE_OPACITY + (LINE_HOVER_OPACITY - LINE_BASE_OPACITY) * t
        } else if (!interactive) {
          opacity = LINE_HOVER_OPACITY
        }
        ctx.globalAlpha = opacity

        ctx.beginPath()
        const p0 = moved(points[0], false)
        ctx.moveTo(p0.x, p0.y)
        for (let i = 0; i < points.length - 1; i++) {
          const cur = moved(points[i], true)
          const nxt = moved(points[i + 1], true)
          ctx.quadraticCurveTo(cur.x, cur.y, (cur.x + nxt.x) / 2, (cur.y + nxt.y) / 2)
        }
        ctx.stroke()
      }

      ctx.globalAlpha = 1
    }

    const tick = (time: number) => {
      const { mouse } = s
      const { MOUSE_SMOOTHING_FACTOR, MAX_MOUSE_VELOCITY } = WAVE_CONFIG
      mouse.sx += (mouse.x - mouse.sx) * MOUSE_SMOOTHING_FACTOR
      mouse.sy += (mouse.y - mouse.sy) * MOUSE_SMOOTHING_FACTOR
      const dx = mouse.sx - mouse.lx
      const dy = mouse.sy - mouse.ly
      const d = Math.hypot(dx, dy)
      mouse.v = d
      mouse.vs += (d - mouse.vs) * MOUSE_SMOOTHING_FACTOR
      mouse.vs = Math.min(MAX_MOUSE_VELOCITY, mouse.vs)
      mouse.a = Math.atan2(dy, dx)
      mouse.lx = mouse.sx
      mouse.ly = mouse.sy

      if (interactive && glowRef.current) {
        glowRef.current.style.transform = `translate(${mouse.sx - 300}px, ${mouse.sy - 300}px)`
      }

      movePoints(time)
      drawLines()
      s.rafId = requestAnimationFrame(tick)
    }

    const updateMouse = (x: number, y: number) => {
      if (!s.bounding) return
      const { mouse } = s
      mouse.x = x - s.bounding.left
      mouse.y = y - s.bounding.top
      if (!mouse.set) {
        mouse.sx = mouse.x; mouse.sy = mouse.y
        mouse.lx = mouse.x; mouse.ly = mouse.y
        mouse.set = true
        if (glowRef.current) glowRef.current.style.opacity = "1"
      }
    }

    const onMouseMove = (e: MouseEvent) => updateMouse(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      updateMouse(e.touches[0].clientX, e.touches[0].clientY)
    }
    const onResize = () => { setSize(); setLines() }

    setSize()
    setLines()
    window.addEventListener("resize", onResize)
    if (interactive) {
      window.addEventListener("mousemove", onMouseMove)
      container.addEventListener("touchmove", onTouchMove, { passive: false })
    }
    s.rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(s.rafId)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMouseMove)
      container.removeEventListener("touchmove", onTouchMove)
    }
  }, [interactive, moved])

  return (
    <motion.div
      ref={containerRef}
      className={cn("dark absolute inset-0 overflow-hidden bg-card", className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
      {interactive && (
        <div
          ref={glowRef}
          className="pointer-events-none absolute left-0 top-0"
          style={{
            width: 600,
            height: 600,
            opacity: 0,
            transition: "opacity 0.4s ease",
            willChange: "transform",
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, color-mix(in oklch, var(--primary) 50%, transparent) 0%, color-mix(in oklch, var(--muted) 10%, transparent) 30%, transparent 90%)",
              filter: "blur(100px)",
            }}
          />
          <div
            className="absolute inset-0 rounded-full mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle at center, color-mix(in oklch, var(--sidebar-primary) 20%, transparent) 0%, transparent 50%)",
              filter: "blur(100px)",
            }}
          />
        </div>
      )}
    </motion.div>
  )
}
AppDashboardBackground.displayName = "AppDashboardBackground"

/**
 * AppDashboard — Full-page layout shell with an animated wave background.
 * Composes AppSidebarProvider > AppSidebar + AppDashboardContent > AppHeader + AppDashboardMain.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDashboard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex min-h-svh w-full",
        className
      )}
      {...props}
    >
      <AppDashboardBackground />
      {children}
    </div>
  )
}
AppDashboard.displayName = "AppDashboard"

/**
 * AppDashboardContent — The main column next to the sidebar.
 * Wraps the header and main content area.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDashboardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative flex min-w-0 flex-1 flex-col", className)}
      {...props}
    />
  )
}
AppDashboardContent.displayName = "AppDashboardContent"

/**
 * AppDashboardMain — The primary content area with a rounded top-left corner.
 * Sits below the header inside AppDashboardContent.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDashboardMain({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <main
      className={cn(
        "flex-1 rounded-tl-3xl bg-background/96 shadow-2xl",
        className
      )}
      {...props}
    />
  )
}
AppDashboardMain.displayName = "AppDashboardMain"

export {
  AppDashboard,
  AppDashboardBackground,
  AppDashboardContent,
  AppDashboardMain,
}
