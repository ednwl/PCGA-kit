"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

function AppSelect(props: React.ComponentProps<typeof Select>) {
  return <Select {...props} />
}

function AppSelectTrigger(props: React.ComponentPropsWithoutRef<typeof SelectTrigger>) {
  return <SelectTrigger {...props} />
}

function AppSelectValue(props: React.ComponentPropsWithoutRef<typeof SelectValue>) {
  return <SelectValue {...props} />
}

function AppSelectContent(props: React.ComponentPropsWithoutRef<typeof SelectContent>) {
  return <SelectContent {...props} />
}

function AppSelectItem(props: React.ComponentPropsWithoutRef<typeof SelectItem>) {
  return <SelectItem {...props} />
}

function AppSelectLabel(props: React.ComponentPropsWithoutRef<typeof SelectLabel>) {
  return <SelectLabel {...props} />
}

export { AppSelect, AppSelectTrigger, AppSelectValue, AppSelectContent, AppSelectItem, AppSelectLabel }
