"use client"

import { ScrollArea, ScrollBar } from "../ui/scroll-area"

/**
 * AppScrollArea — Augments native scroll functionality for custom, cross-browser styling.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppScrollArea(props: React.ComponentProps<typeof ScrollArea>) {
  return <ScrollArea {...props} />
}

/**
 * AppScrollBar — The scrollbar component for AppScrollArea.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppScrollBar(props: React.ComponentProps<typeof ScrollBar>) {
  return <ScrollBar {...props} />
}

export { AppScrollArea, AppScrollBar }
