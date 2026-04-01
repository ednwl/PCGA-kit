"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

/**
 * AppSheet — Extends the Dialog component to display content that complements the main screen content.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppSheet(props: React.ComponentProps<typeof Sheet>) {
  return <Sheet {...props} />
}

/**
 * AppSheetTrigger — The trigger component for AppSheet.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppSheetTrigger(props: React.ComponentProps<typeof SheetTrigger>) {
  return <SheetTrigger {...props} />
}

/**
 * AppSheetContent — The content component for AppSheet.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppSheetContent(props: React.ComponentPropsWithoutRef<typeof SheetContent>) {
  return <SheetContent {...props} />
}

/**
 * AppSheetHeader — The header section of an AppSheet.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppSheetHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <SheetHeader {...props} />
}

/**
 * AppSheetTitle — The title component for AppSheet.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppSheetTitle(props: React.ComponentPropsWithoutRef<typeof SheetTitle>) {
  return <SheetTitle {...props} />
}

/**
 * AppSheetDescription — The description component for AppSheet.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppSheetDescription(props: React.ComponentPropsWithoutRef<typeof SheetDescription>) {
  return <SheetDescription {...props} />
}

export { AppSheet, AppSheetTrigger, AppSheetContent, AppSheetHeader, AppSheetTitle, AppSheetDescription }
