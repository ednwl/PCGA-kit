"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

function AppTooltipProvider({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>
}

function AppTooltip(props: React.ComponentProps<typeof Tooltip>) {
  return <Tooltip {...props} />
}

function AppTooltipTrigger(props: React.ComponentProps<typeof TooltipTrigger>) {
  return <TooltipTrigger {...props} />
}

function AppTooltipContent(props: React.ComponentPropsWithoutRef<typeof TooltipContent>) {
  return (
    <TooltipContent {...props}>
      {props.children}
    </TooltipContent>
  )
}

export { AppTooltip, AppTooltipProvider, AppTooltipTrigger, AppTooltipContent }
