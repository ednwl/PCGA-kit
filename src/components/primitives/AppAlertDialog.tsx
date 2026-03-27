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

const AppAlertDialog = AlertDialog
const AppAlertDialogPortal = AlertDialogPortal
const AppAlertDialogOverlay = AlertDialogOverlay
const AppAlertDialogTrigger = AlertDialogTrigger
const AppAlertDialogContent = AlertDialogContent
const AppAlertDialogHeader = AlertDialogHeader
const AppAlertDialogFooter = AlertDialogFooter


const AppAlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof AlertDialogTitle>,
  React.ComponentPropsWithoutRef<typeof AlertDialogTitle>
>(({ className, ...props }, ref) => (
  <AlertDialogTitle ref={ref} className={cn("text-2xl", className)} {...props} />
))
AppAlertDialogTitle.displayName = "AppAlertDialogTitle"

const AppAlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDialogDescription>,
  React.ComponentPropsWithoutRef<typeof AlertDialogDescription>
>(({ className, ...props }, ref) => (
  <AlertDialogDescription ref={ref} className={cn("text-base", className)} {...props} />
))

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
