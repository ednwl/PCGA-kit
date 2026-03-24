"use client"

import { cn } from "../../lib/utils"

interface AppScrollTextProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number
  direction?: "left" | "right" | "up" | "down"
}

export function AppScrollText({
  children,
  className,
  speed = 50,
  direction = "left",
  ...props
}: AppScrollTextProps) {
  const keyframes = `
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes scroll-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    @keyframes scroll-up {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
    @keyframes scroll-down {
      0% { transform: translateY(-50%); }
      100% { transform: translateY(0); }
    }
  `

  const animationDuration = 30 / speed

  return (
    <div
      className={cn(
        "overflow-hidden",
        (direction === "up" || direction === "down") ? "py-2" : "py-4",
        className
      )}
      {...props}
    >
      <style>{keyframes}</style>
      <div
        className={cn(
          "flex w-max",
          direction === "up" && "flex-col",
          direction === "down" && "flex-col"
        )}
        style={{
          animation: `scroll-${direction} ${animationDuration}s linear infinite`,
        }}
      >
        <div className="flex-shrink-0">{children}</div>
        <div className="flex-shrink-0">{children}</div>
      </div>
    </div>
  )
}