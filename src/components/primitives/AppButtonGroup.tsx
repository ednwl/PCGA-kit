import * as React from "react"
import { cn } from "@/lib/utils"

function AppButtonGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:last-child)]:border-r-0",
        className
      )}
      {...props}
    />
  )
}
AppButtonGroup.displayName = "AppButtonGroup"

export { AppButtonGroup }
