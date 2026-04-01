import * as React from "react"
import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "../ui/alert-dialog"
import { cn } from "@/lib/utils"

const actionVariantClasses = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
} as const

const cancelVariantClasses = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
} as const

type ActionVariant = keyof typeof actionVariantClasses

type AppAlertDialogActionProps = React.ComponentPropsWithoutRef<typeof AlertDialogAction> & {
  variant?: ActionVariant
}

/**
 * AppAlertDialog — A modal dialog that interrupts the user with important content and expects a response.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialog = AlertDialog

/**
 * AppAlertDialogPortal — The portal component for AppAlertDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialogPortal = AlertDialogPortal

/**
 * AppAlertDialogOverlay — The overlay component for AppAlertDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialogOverlay = AlertDialogOverlay

/**
 * AppAlertDialogTrigger — The trigger component for AppAlertDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialogTrigger = AlertDialogTrigger

/**
 * AppAlertDialogContent — The content component for AppAlertDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialogContent = AlertDialogContent

/**
 * AppAlertDialogHeader — The header component for AppAlertDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialogHeader = AlertDialogHeader

/**
 * AppAlertDialogFooter — The footer component for AppAlertDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialogFooter = AlertDialogFooter

/**
 * AppAlertDialogTitle — The title component for AppAlertDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof AlertDialogTitle>,
  React.ComponentPropsWithoutRef<typeof AlertDialogTitle>
>(({ className, ...props }, ref) => (
  <AlertDialogTitle ref={ref} className={cn("text-2xl", className)} {...props} />
))
AppAlertDialogTitle.displayName = "AppAlertDialogTitle"

/**
 * AppAlertDialogDescription — The description component for AppAlertDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDialogDescription>,
  React.ComponentPropsWithoutRef<typeof AlertDialogDescription>
>(({ className, ...props }, ref) => (
  <AlertDialogDescription ref={ref} className={cn("text-base", className)} {...props} />
))

/**
 * AppAlertDialogAction — The action button component for AppAlertDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialogAction = React.forwardRef<
  React.ComponentRef<typeof AlertDialogAction>,
  AppAlertDialogActionProps
>(({ className, variant = "default", ...props }, ref) => (
  <AlertDialogAction
    ref={ref}
    className={cn(actionVariantClasses[variant], className)}
    {...props}
  />
))
AppAlertDialogAction.displayName = "AppAlertDialogAction"

/**
 * AppAlertDialogCancel — The cancel button component for AppAlertDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDialogCancel = React.forwardRef<
  React.ComponentRef<typeof AlertDialogCancel>,
  AppAlertDialogActionProps
>(({ className, variant = "default", ...props }, ref) => (
  <AlertDialogCancel
    ref={ref}
    className={cn(cancelVariantClasses[variant], className)}
    {...props}
  />
))
AppAlertDialogCancel.displayName = "AppAlertDialogCancel"
AppAlertDialogDescription.displayName = "AppAlertDialogDescription"

export {
  AppAlertDialog,
  AppAlertDialogPortal,
  AppAlertDialogOverlay,
  AppAlertDialogTrigger,
  AppAlertDialogContent,
  AppAlertDialogHeader,
  AppAlertDialogFooter,
  AppAlertDialogTitle,
  AppAlertDialogDescription,
  AppAlertDialogAction,
  AppAlertDialogCancel,
}
export type { AppAlertDialogActionProps, ActionVariant }
