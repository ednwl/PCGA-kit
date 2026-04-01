"use client"

import { Toaster as AppSonnerToaster, toast as appToast } from "sonner"

/**
 * AppToaster — A component that displays toast notifications.
 * @note If a prop you need is missing, stop and inform the design team.
 */
const AppToaster = () => {
  return (
    <AppSonnerToaster
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  )
}

export { AppToaster, appToast as toast }
