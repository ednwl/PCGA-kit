"use client"

import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

type AppRadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroup>

function AppRadioGroup(props: AppRadioGroupProps) {
  return <RadioGroup {...props} />
}

function AppRadioGroupItem(props: React.ComponentPropsWithoutRef<typeof RadioGroupItem>) {
  return <RadioGroupItem {...props} />
}

export { AppRadioGroup, AppRadioGroupItem }
