"use client"

import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

type AppRadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroup>

/**
 * AppRadioGroup — A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time.
 * @note Never use the raw HTML equivalent. Use AppRadioGroup.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppRadioGroup(props: AppRadioGroupProps) {
  return <RadioGroup {...props} />
}

/**
 * AppRadioGroupItem — An individual radio button within AppRadioGroup.
 * @note Never use the raw HTML equivalent. Use AppRadioGroupItem.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppRadioGroupItem(props: React.ComponentPropsWithoutRef<typeof RadioGroupItem>) {
  return <RadioGroupItem {...props} />
}

export { AppRadioGroup, AppRadioGroupItem }
