"use client"

import * as React from "react"
import { Button, buttonVariants } from "../ui/button"
import type { VariantProps } from "class-variance-authority"
import { AppSpinner } from "./AppSpinner"

/**
 * AppButton — the primary action primitive for Viana Kit.
 *
 * @prop loading - Replaces iconLeft with a spinner and disables the button.
 *   Do not add an AppSpinner manually — use this prop instead.
 * @prop iconLeft - Renders an icon before the button label using the button's
 *   built-in inline-start slot. Do not wrap in extra divs.
 * @prop iconRight - Renders an icon after the button label using the button's
 *   built-in inline-end slot. Do not wrap in extra divs.
 *
 * @note Never use a raw <button> element. Use AppButton.
 * @note If a prop you need is missing, stop and inform the design team.
 * @note Gap between icons and label is controlled by the size variant — do not override it.
 */
type AppButtonProps = React.ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
  }

function AppButton({
  loading = false,
  iconLeft,
  iconRight,
  disabled,
  children,
  ...props
}: AppButtonProps) {
  const leadingIcon = loading ? <AppSpinner /> : iconLeft

  return (
    <Button disabled={disabled || loading} {...props}>
      {leadingIcon && <span data-icon="inline-start">{leadingIcon}</span>}
      {children}
      {iconRight && <span data-icon="inline-end">{iconRight}</span>}
    </Button>
  )
}

export { AppButton, type AppButtonProps }
