"use client"

import { Checkbox as CheckboxPrimitive } from "../ui/checkbox"

type AppCheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive>

/**
 * AppCheckbox — A control that allows the user to select one or more options from a set.
 * @note Never use the raw HTML equivalent. Use AppCheckbox.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCheckbox(props: AppCheckboxProps) {
  return (
    <CheckboxPrimitive {...props} />
  )
}

export { AppCheckbox }
