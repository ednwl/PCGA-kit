import * as React from "react"
import { cn } from "@/lib/utils"

type AppSpinnerProps = React.SVGAttributes<SVGSVGElement> & {
  label?: string
}

const AppSpinner = React.forwardRef<SVGSVGElement, AppSpinnerProps>(
  ({ className, label = "Loading...", ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-label={label}
      role="status"
      className={cn("h-5 w-5 animate-spin text-current", className)}
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
)
AppSpinner.displayName = "AppSpinner"

export { AppSpinner }
export type { AppSpinnerProps }
