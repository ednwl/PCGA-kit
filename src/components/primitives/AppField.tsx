"use client"

import * as React from "react"
import { Label } from "../ui/label"
import { cn } from "@/lib/utils"

/**
 * AppField — A layout component for grouping a label, input, and description.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppField({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1.5", className)} {...props} />
}
AppField.displayName = "AppField"

type AppFieldLabelProps = React.ComponentPropsWithoutRef<typeof Label> & {
  required?: boolean
}

/**
 * AppFieldLabel — The label component for AppField.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppFieldLabel = React.forwardRef<
  React.ComponentRef<typeof Label>,
  AppFieldLabelProps
>(({ className, required, children, ...props }, ref) => (
  <Label ref={ref} className={cn(className)} {...props}>
    {children}
    {required && <span className="text-destructive">*</span>}
  </Label>
))
AppFieldLabel.displayName = "AppFieldLabel"

/**
 * AppFieldDescription — The description component for AppField.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppFieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
AppFieldDescription.displayName = "AppFieldDescription"

/**
 * AppFieldError — The error message component for AppField.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppFieldError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-destructive", className)} {...props} />
))
AppFieldError.displayName = "AppFieldError"

export { AppField, AppFieldLabel, AppFieldDescription, AppFieldError }
export type { AppFieldLabelProps }
