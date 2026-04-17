import * as React from "react"
import { Alert, AlertTitle, AlertDescription } from "../ui/alert"
import { cn } from "@/lib/utils"

const nativeVariantClasses = {
  default: "bg-background [&>svg]:text-gray-400",
  destructive: "bg-destructive/5 [&>svg]:text-destructive",
} as const

const extendedVariantClasses = {
  success: "border text-green-700 dark:text-green-700 [&>svg]:text-green-700",
  warning: "border text-amber-600 dark:text-amber-600 [&>svg]:text-amber-600",
  info: "border text-blue-400 dark:text-blue-400 [&>svg]:text-blue-400",
} as const

type ExtendedVariant = "default" | "destructive" | keyof typeof extendedVariantClasses

type AppAlertProps = Omit<React.ComponentProps<typeof Alert>, "variant"> & {
  variant?: ExtendedVariant
}

/**
 * AppAlert — Displays a callout for user attention.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppAlert({ variant = "default", className, ...props }: AppAlertProps) {
  const isExtended = variant in extendedVariantClasses
  return (
    <Alert
      variant={isExtended ? "default" : (variant as "default" | "destructive")}
      className={cn(
        "flex items-center gap-3 px-3 py-2 [&>svg]:static [&>svg]:top-auto [&>svg]:left-auto [&>svg~*]:pl-0 [&>svg+div]:translate-y-0",
        isExtended
          ? extendedVariantClasses[variant as keyof typeof extendedVariantClasses]
          : nativeVariantClasses[variant as keyof typeof nativeVariantClasses],
        className
      )}
      {...props}
    />
  )
}

/**
 * AppAlertTitle — The title component for AppAlert.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertTitle = React.forwardRef<
  React.ComponentRef<typeof AlertTitle>,
  React.ComponentPropsWithoutRef<typeof AlertTitle>
>(({ className, ...props }, ref) => (
  <AlertTitle
    ref={ref}
    className={cn("text-base font-bold mb-0", className)}
    {...props}
  />
))
AppAlertTitle.displayName = "AppAlertTitle"

/**
 * AppAlertDescription — The description component for AppAlert.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDescription>,
  React.ComponentPropsWithoutRef<typeof AlertDescription>
>(({ className, ...props }, ref) => (
  <AlertDescription
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AppAlertDescription.displayName = "AppAlertDescription"

/**
 * AppAlertContent — The content container for AppAlert.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppAlertContent = React.forwardRef<                   
    HTMLDivElement,                                           
    React.HTMLAttributes<HTMLDivElement>                      
  >(({ className, ...props }, ref) => (                       
    <div                                                      
      ref={ref}                                             
      className={cn("flex flex-col",         
  className)}                                                 
      {...props}
    />                                                        
  ))                                                        
  AppAlertContent.displayName = "AppAlertContent" 

export { AppAlert, AppAlertTitle, AppAlertDescription, AppAlertContent }
export type { AppAlertProps }
