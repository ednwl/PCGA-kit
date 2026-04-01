"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { cn } from "@/lib/utils"

type AppDialogProps = {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * AppDialog — A window overlaid on either the primary window or another dialog window.
 * @note Never use the raw HTML equivalent. Use AppDialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDialog({ children, ...props }: AppDialogProps) {
  return <Dialog {...props}>{children}</Dialog>
}

/**
 * AppDialogTrigger — The trigger component for AppDialog.
 * @note Never use the raw HTML equivalent. Use AppDialogTrigger.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDialogTrigger(props: React.ComponentProps<typeof DialogTrigger>) {
  return <DialogTrigger {...props} />
}

/**
 * AppDialogContent — The content component for AppDialog.
 * @note Never use the raw HTML equivalent. Use AppDialogContent.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDialogContent({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogContent>) {
  return <DialogContent className={cn("rounded-md", className)} {...props} />
}

/**
 * AppDialogHeader — The header section of an AppDialog.
 * @note Never use the raw HTML equivalent. Use AppDialogHeader.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDialogHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <DialogHeader {...props} />
}

/**
 * AppDialogTitle — The title component for AppDialog.
 * @note Never use the raw HTML equivalent. Use AppDialogTitle.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDialogTitle(props: React.ComponentPropsWithoutRef<typeof DialogTitle>) {
  return <DialogTitle {...props} />
}

/**
 * AppDialogDescription — The description component for AppDialog.
 * @note Never use the raw HTML equivalent. Use AppDialogDescription.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppDialogDescription(props: React.ComponentPropsWithoutRef<typeof DialogDescription>) {
  return <DialogDescription {...props} />
}

export {
  AppDialog,
  AppDialogTrigger,
  AppDialogContent,
  AppDialogHeader,
  AppDialogTitle,
  AppDialogDescription,
}
