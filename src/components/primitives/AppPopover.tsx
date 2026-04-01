"use client"

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

type AppPopoverProps = React.ComponentProps<typeof Popover>

/**
 * AppPopover — Displays rich content in a portal, triggered by a button.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPopover(props: AppPopoverProps) {
  return <Popover {...props} />
}

/**
 * AppPopoverTrigger — The trigger component for AppPopover.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPopoverTrigger(props: React.ComponentProps<typeof PopoverTrigger>) {
  return <PopoverTrigger {...props} />
}

/**
 * AppPopoverContent — The content component for AppPopover.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPopoverContent(props: React.ComponentPropsWithoutRef<typeof PopoverContent>) {
  return <PopoverContent {...props} />
}

export { AppPopover, AppPopoverTrigger, AppPopoverContent }
