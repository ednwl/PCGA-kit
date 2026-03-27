"use client"

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

type AppPopoverProps = React.ComponentProps<typeof Popover>

function AppPopover(props: AppPopoverProps) {
  return <Popover {...props} />
}

function AppPopoverTrigger(props: React.ComponentProps<typeof PopoverTrigger>) {
  return <PopoverTrigger {...props} />
}

function AppPopoverContent(props: React.ComponentPropsWithoutRef<typeof PopoverContent>) {
  return <PopoverContent {...props} />
}

export { AppPopover, AppPopoverTrigger, AppPopoverContent }
