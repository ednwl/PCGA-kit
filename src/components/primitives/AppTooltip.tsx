"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

/**
 * AppTooltipProvider — Wraps components to provide context for AppTooltip.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTooltipProvider({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>
}

/**
 * AppTooltip — A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTooltip(props: React.ComponentProps<typeof Tooltip>) {
  return <Tooltip {...props} />
}

/**
 * AppTooltipTrigger — The trigger component for AppTooltip.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTooltipTrigger(props: React.ComponentProps<typeof TooltipTrigger>) {
  return <TooltipTrigger {...props} />
}

/**
 * AppTooltipContent — The content component for AppTooltip.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTooltipContent(props: React.ComponentPropsWithoutRef<typeof TooltipContent>) {
  return (
    <TooltipContent {...props}>
      {props.children}
    </TooltipContent>
  )
}

export { AppTooltip, AppTooltipProvider, AppTooltipTrigger, AppTooltipContent }
