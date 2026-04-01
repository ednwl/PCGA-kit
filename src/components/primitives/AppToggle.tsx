"use client"

import { Toggle, toggleVariants } from "../ui/toggle"
import type { VariantProps } from "class-variance-authority"

type AppToggleProps = React.ComponentProps<typeof Toggle> &
  VariantProps<typeof toggleVariants>

/**
 * AppToggle — A two-state button that can be either on or off.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppToggle(props: AppToggleProps) {
  return (
    <Toggle {...props} />
  )
}

export { AppToggle }
