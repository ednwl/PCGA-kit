"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

type AppTabsProps = React.ComponentProps<typeof Tabs>

/**
 * AppTabs — A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTabs(props: AppTabsProps) {
  return <Tabs {...props} />
}

/**
 * AppTabsList — The list container for AppTabs triggers.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTabsList(props: React.ComponentProps<typeof TabsList>) {
  return <TabsList {...props} />
}

/**
 * AppTabsTrigger — The trigger component for AppTabs content panels.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTabsTrigger(props: React.ComponentProps<typeof TabsTrigger>) {
  return <TabsTrigger {...props} />
}

/**
 * AppTabsContent — The content panel associated with an AppTabs trigger.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTabsContent(props: React.ComponentProps<typeof TabsContent>) {
  return <TabsContent {...props} />
}

export { AppTabs, AppTabsList, AppTabsTrigger, AppTabsContent }
