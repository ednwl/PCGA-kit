"use client"

import { cn } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

function AppHoverCard(props: React.ComponentProps<typeof HoverCard>) {
  return <HoverCard {...props} />
}

function AppHoverCardTrigger({ children }: { children: React.ReactNode }) {
  return <HoverCardTrigger>{children}</HoverCardTrigger>
}

function AppHoverCardContent({ className,
  ...props }:
  React.ComponentPropsWithoutRef<typeof 
  HoverCardContent>) {
    return <HoverCardContent 
  className={cn("px-2 py-1 drop-shadow-xl shadow-none", className)} {...props} />
  }

export { AppHoverCard, AppHoverCardTrigger, AppHoverCardContent }
