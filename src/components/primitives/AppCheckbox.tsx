"use client"

import { Checkbox as CheckboxPrimitive } from "../ui/checkbox"

type AppCheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive>

function AppCheckbox(props: AppCheckboxProps) {
  return (
    <CheckboxPrimitive {...props} />
  )
}

export { AppCheckbox }
