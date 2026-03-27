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

function AppDialog({ children, ...props }: AppDialogProps) {
  return <Dialog {...props}>{children}</Dialog>
}

function AppDialogTrigger(props: React.ComponentProps<typeof DialogTrigger>) {
  return <DialogTrigger {...props} />
}

function AppDialogContent({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogContent>) {
  return <DialogContent className={cn("rounded-md", className)} {...props} />
}

function AppDialogHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <DialogHeader {...props} />
}

function AppDialogTitle(props: React.ComponentPropsWithoutRef<typeof DialogTitle>) {
  return <DialogTitle {...props} />
}

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
