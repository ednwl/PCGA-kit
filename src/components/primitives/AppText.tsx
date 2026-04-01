import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * AppText — the typography primitive for Viana Kit.
 *
 * @prop variant - Controls the visual style and default HTML tag. Required.
 * @prop as - Overrides the rendered HTML tag while keeping the variant's styles.
 *   Use when semantic HTML requires a different tag than the visual style.
 *
 * @note Never use raw <h1>, <h2>, <h3>, <h4>, or <p> for styled text — use AppText.
 * @note Never set font-size, font-weight, or color directly — use the variant prop.
 * @note If a variant you need is missing, stop and inform the design team.
 */

const variantConfig = {
  display: {
    tag: "h1",
    classes: "text-4xl font-bold tracking-tight text-foreground",
  },
  h1: {
    tag: "h1",
    classes: "text-3xl font-bold tracking-tight text-foreground",
  },
  h2: {
    tag: "h2",
    classes: "text-2xl font-semibold tracking-tight text-foreground",
  },
  h3: {
    tag: "h3",
    classes: "text-xl font-semibold tracking-tight text-foreground",
  },
  h4: {
    tag: "h4",
    classes: "text-lg font-medium text-foreground",
  },
  lead: {
    tag: "p",
    classes: "text-lg text-muted-foreground",
  },
  body: {
    tag: "p",
    classes: "text-base leading-7 text-foreground",
  },
  small: {
    tag: "p",
    classes: "text-sm text-foreground",
  },
  muted: {
    tag: "p",
    classes: "text-sm text-muted-foreground",
  },
  mono: {
    tag: "p",
    classes: "text-sm font-mono text-foreground",
  },
} as const

type AppTextVariant = keyof typeof variantConfig

type AppTextProps = {
  variant: AppTextVariant
  as?: React.ElementType
  className?: string
  children?: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLElement>, "className" | "children">

function AppText({ variant, as, className, children, ...props }: AppTextProps) {
  const config = variantConfig[variant]
  const Tag = (as ?? config.tag) as React.ElementType

  return (
    <Tag className={cn(config.classes, className)} {...props}>
      {children}
    </Tag>
  )
}

export { AppText }
export type { AppTextProps, AppTextVariant }
