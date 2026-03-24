"use client"

import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cn } from "../../lib/utils"

const AppCollapsible = CollapsiblePrimitive.Root

const AppCollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const AppCollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    className={cn(
      "overflow-hidden transition-all data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down rounded-md",
      className
    )}
    {...props}
  >
    {children}
  </CollapsiblePrimitive.CollapsibleContent>
))
AppCollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName

export { AppCollapsible, AppCollapsibleTrigger, AppCollapsibleContent }