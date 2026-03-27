"use client"

import { Toggle, toggleVariants } from "../ui/toggle"
import type { VariantProps } from "class-variance-authority"

type AppToggleProps = React.ComponentProps<typeof Toggle> &
  VariantProps<typeof toggleVariants>

function AppToggle(props: AppToggleProps) {
  return (
    <Toggle {...props} />
  )
}

export { AppToggle }
