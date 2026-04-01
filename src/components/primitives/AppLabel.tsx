"use client"

import { Label } from "../ui/label"

/**
 * AppLabel — Renders an accessible label associated with a form control.
 * @note Never use the raw HTML equivalent. Use AppLabel.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppLabel(props: React.ComponentProps<typeof Label>) {
  return <Label {...props} />
}

export { AppLabel }
