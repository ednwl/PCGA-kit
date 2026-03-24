// ─────────────────────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update AppCheckbox` to get the latest version.
// ─────────────────────────────────────────────────────────────────────────────

"use client"

import { cn } from "@/lib/utils"
import { Checkbox as CheckboxPrimitive } from "../ui/checkbox"

type AppCheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive>

function AppCheckbox({ className, ...props }: AppCheckboxProps) {
  return (
    <CheckboxPrimitive
      className={cn("rounded", className)}
      {...props}
    />
  )
}

export { AppCheckbox }