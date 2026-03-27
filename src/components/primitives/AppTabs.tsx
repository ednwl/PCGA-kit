"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

type AppTabsProps = React.ComponentProps<typeof Tabs>

function AppTabs(props: AppTabsProps) {
  return <Tabs {...props} />
}

function AppTabsList(props: React.ComponentProps<typeof TabsList>) {
  return <TabsList {...props} />
}

function AppTabsTrigger(props: React.ComponentProps<typeof TabsTrigger>) {
  return <TabsTrigger {...props} />
}

function AppTabsContent(props: React.ComponentProps<typeof TabsContent>) {
  return <TabsContent {...props} />
}

export { AppTabs, AppTabsList, AppTabsTrigger, AppTabsContent }
