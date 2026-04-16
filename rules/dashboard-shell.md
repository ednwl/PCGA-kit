# AppDashboardShell

> **Primary entry point** — Use this for every new page. Do not compose the dashboard scaffold manually.

## When to use

Any time you are building a new page that requires the standard application layout: animated dot background, collapsible sidebar with brand, and a top header.

## Import

```tsx
import { AppDashboardShell } from "@/components/blocks/AppDashboardShell"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `nav` | `AppDashboardShellNavSection[]` | required | Sidebar navigation. Each section renders a group with an optional label. |
| `headerActions` | `ReactNode` | — | Right-side header slot — `AppSelect`, `AppAvatar`, icon buttons, etc. Omit to render nothing. |
| `headerSearchbar` | `ReactNode` | Standard search input | Searchbar slot. Pass `null` to suppress entirely. |
| `sidebarWidth` | `string` | `"14rem"` | Overrides the `--sidebar-width` CSS variable. |
| `headerHeight` | `string` | `"3.5rem"` | Overrides the `--header-height` CSS variable. |
| `mainClassName` | `string` | `"p-6"` | Extra classes forwarded to `AppDashboardMain`. Use to override padding or add layout utilities. |
| `children` | `ReactNode` | required | Your page content. Renders inside `AppDashboardMain`. |

### AppDashboardShellNavSection

```ts
type AppDashboardShellNavSection = {
  label?: string                      // optional group label
  items: AppDashboardShellNavItem[]
}
```

### AppDashboardShellNavItem

```ts
type AppDashboardShellNavItem = {
  title: string                       // label and tooltip text
  icon: React.ElementType             // lucide-react icon component
  isActive?: boolean                  // marks the current route
}
```

## Usage

### Minimal

```tsx
import { LayoutDashboard } from "lucide-react"
import { AppDashboardShell } from "@/components/blocks/AppDashboardShell"

const nav = [
  { items: [{ title: "Dashboard", icon: LayoutDashboard, isActive: true }] },
]

export default function Page() {
  return (
    <AppDashboardShell nav={nav}>
      <p>Page content here.</p>
    </AppDashboardShell>
  )
}
```

### With header actions and sectioned nav

```tsx
import {
  LayoutDashboard, MapPin, Server, Cctv,
  LineChart, FileText, LayoutGrid,
} from "lucide-react"
import {
  AppSelect, AppSelectTrigger, AppSelectValue,
  AppSelectContent, AppSelectItem,
  AppAvatar, AppAvatarFallback,
} from "@/components/primitives"
import { AppDashboardShell } from "@/components/blocks/AppDashboardShell"
import { ManifestContent } from "@/components/blocks/ManifestContent"

const nav = [
  {
    items: [{ title: "Dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Manage",
    items: [
      { title: "Sites",   icon: MapPin },
      { title: "Devices", icon: Server },
      { title: "Sensors", icon: Cctv },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "Analytics", icon: LineChart },
      { title: "Manifest",  icon: FileText, isActive: true },
      { title: "Overview",  icon: LayoutGrid },
    ],
  },
]

const headerActions = (
  <>
    <AppSelect defaultValue="network-1">
      <AppSelectTrigger className="w-40">
        <AppSelectValue />
      </AppSelectTrigger>
      <AppSelectContent>
        <AppSelectItem value="network-1">MeldCX Network</AppSelectItem>
      </AppSelectContent>
    </AppSelect>
    <AppAvatar className="size-8">
      <AppAvatarFallback>KA</AppAvatarFallback>
    </AppAvatar>
  </>
)

export default function ManifestPage() {
  return (
    <AppDashboardShell nav={nav} headerActions={headerActions}>
      <ManifestContent />
    </AppDashboardShell>
  )
}
```

### Custom searchbar

```tsx
<AppDashboardShell
  nav={nav}
  headerSearchbar={
    <AppButtonGroup className="w-full max-w-md">
      <AppInput placeholder="Search sessions..." />
      <AppButton variant="outline">
        <Search className="h-4 w-4" />
      </AppButton>
    </AppButtonGroup>
  }
>
  <PageContent />
</AppDashboardShell>
```

### No searchbar

```tsx
<AppDashboardShell nav={nav} headerSearchbar={null}>
  <PageContent />
</AppDashboardShell>
```

### Override padding

```tsx
<AppDashboardShell nav={nav} mainClassName="p-0">
  <FullBleedContent />
</AppDashboardShell>
```

## Rules

- **Do** use `AppDashboardShell` as the default layout for every page — do not compose the scaffold manually.
- **Do** set `isActive` on exactly one nav item per page to mark the current route.
- **Do** pass all icons as `React.ElementType` (the component itself, not `<Icon />`).
- **Do** use `headerActions` for right-side controls (selects, avatar, icon buttons).
- **Don't** add background colors, `dark` class, or layout wrappers around `AppDashboardShell` — it manages its own full-page layout.
- **Don't** try to override the sidebar brand, the `border-none` on the header, or `collapsible="icon"` on the sidebar — these are fixed by the shell.
- **Don't** import `AppDashboard`, `AppDashboardContent`, `AppSidebarProvider`, `AppHeader`, etc. to rebuild the scaffold yourself — that is what this component replaces.

If a prop you need is missing, stop and inform the design team.
