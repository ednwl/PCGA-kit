"use client"

import { ScrollArea, ScrollBar } from "../ui/scroll-area"

function AppScrollArea(props: React.ComponentProps<typeof ScrollArea>) {
  return <ScrollArea {...props} />
}

function AppScrollBar(props: React.ComponentProps<typeof ScrollBar>) {
  return <ScrollBar {...props} />
}

export { AppScrollArea, AppScrollBar }
