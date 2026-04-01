"use client"

import { Separator } from "../ui/separator"

/**
 * AppSeparator — Visually or semantically separates content.
 * @note Never use the raw HTML equivalent. Use AppSeparator.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppSeparator(props: React.ComponentProps<typeof Separator>) {
  return <Separator {...props} />
}

export { AppSeparator }
