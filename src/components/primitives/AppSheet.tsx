"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

function AppSheet(props: React.ComponentProps<typeof Sheet>) {
  return <Sheet {...props} />
}

function AppSheetTrigger(props: React.ComponentProps<typeof SheetTrigger>) {
  return <SheetTrigger {...props} />
}

function AppSheetContent(props: React.ComponentPropsWithoutRef<typeof SheetContent>) {
  return <SheetContent {...props} />
}

function AppSheetHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <SheetHeader {...props} />
}

function AppSheetTitle(props: React.ComponentPropsWithoutRef<typeof SheetTitle>) {
  return <SheetTitle {...props} />
}

function AppSheetDescription(props: React.ComponentPropsWithoutRef<typeof SheetDescription>) {
  return <SheetDescription {...props} />
}

export { AppSheet, AppSheetTrigger, AppSheetContent, AppSheetHeader, AppSheetTitle, AppSheetDescription }
