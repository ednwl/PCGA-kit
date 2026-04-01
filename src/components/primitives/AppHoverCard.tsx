"use client"

import { cn } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

/**
 * AppHoverCard — For sighted users to preview content available behind a link.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppHoverCard(props: React.ComponentProps<typeof HoverCard>) {
  return <HoverCard {...props} />
}

/**
 * AppHoverCardTrigger — The trigger component for AppHoverCard.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppHoverCardTrigger({ children }: { children: React.ReactNode }) {
  return <HoverCardTrigger>{children}</HoverCardTrigger>
}

/**
 * AppHoverCardContent — The content component for AppHoverCard.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppHoverCardContent({ className,
  ...props }:
  React.ComponentPropsWithoutRef<typeof 
  HoverCardContent>) {
    return <HoverCardContent 
  className={cn("px-2 py-1 drop-shadow-xl shadow-none", className)} {...props} />
  }

export { AppHoverCard, AppHoverCardTrigger, AppHoverCardContent }
