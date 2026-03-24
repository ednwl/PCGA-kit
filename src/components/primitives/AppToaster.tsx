"use client"

import * as React from "react"
import {
  AppToast,
  AppToastClose,
  AppToastDescription,
  AppToastProvider,
  AppToastTitle,
  AppToastViewport,
} from "./AppToast"
import { useAppToast } from "./use-app-toast"

export function AppToaster() {
  const { toasts } = useAppToast()

  return (
    <AppToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <AppToast key={id} {...props}>
            <div className="grid gap-1">
              {title && <AppToastTitle>{title}</AppToastTitle>}
              {description && (
                <AppToastDescription>{description}</AppToastDescription>
              )}
            </div>
            {action}
            <AppToastClose />
          </AppToast>
        )
      })}
      <AppToastViewport />
    </AppToastProvider>
  )
}