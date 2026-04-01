"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { AppSpinner } from "./AppSpinner"

/**
 * AppSelect — the root of the select primitive. Composes with AppSelectTrigger,
 * AppSelectValue, AppSelectContent, and AppSelectItem.
 *
 * @note Never use a raw <select> element. Use AppSelect.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppSelect(props: React.ComponentProps<typeof Select>) {
  return <Select {...props} />
}

/**
 * AppSelectTrigger — the visible button that opens the select dropdown.
 *
 * @prop loading - Shows a spinner and disables the trigger while data is loading.
 *   Do not render an AppSpinner manually inside the trigger — use this prop instead.
 *
 * @note Gap and icon alignment are handled internally — do not add wrappers inside the trigger.
 */
type AppSelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectTrigger> & {
  loading?: boolean
}

function AppSelectTrigger({ className, loading = false, disabled, children, ...props }: AppSelectTriggerProps) {
  return (
    <SelectTrigger
      className={cn("shadow-none", className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <AppSpinner className="mr-1 h-4 w-4 shrink-0" />}
      {children}
    </SelectTrigger>
  )
}

/**
 * AppSelectValue — displays the current selected value inside AppSelectTrigger.
 */
function AppSelectValue(props: React.ComponentPropsWithoutRef<typeof SelectValue>) {
  return <SelectValue {...props} />
}

/**
 * AppSelectContent — the dropdown panel containing AppSelectItem entries.
 */
function AppSelectContent(props: React.ComponentPropsWithoutRef<typeof SelectContent>) {
  return <SelectContent {...props} />
}

/**
 * AppSelectItem — a single option inside AppSelectContent.
 */
function AppSelectItem(props: React.ComponentPropsWithoutRef<typeof SelectItem>) {
  return <SelectItem {...props} />
}

/**
 * AppSelectLabel — a non-interactive label for grouping items inside AppSelectContent.
 */
function AppSelectLabel(props: React.ComponentPropsWithoutRef<typeof SelectLabel>) {
  return <SelectLabel {...props} />
}

export {
  AppSelect,
  AppSelectTrigger,
  AppSelectValue,
  AppSelectContent,
  AppSelectItem,
  AppSelectLabel,
}
export type { AppSelectTriggerProps }
