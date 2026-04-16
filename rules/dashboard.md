# Dashboard Block — Architecture Reference

> **Do not use these components directly to build pages.**
> Use `AppDashboardShell` instead — see `rules/dashboard-shell.md`.
>
> This file documents the underlying components for design-team reference only.
> AI agents should never compose this scaffold manually.

---

## Component overview

### AppDashboard

Full-page layout shell. Renders `AppDashboardBackground` as an absolute layer and accepts `AppSidebar` + `AppDashboardContent` as children.

```tsx
import { AppDashboard } from "@/components/blocks/AppDashboard"
```

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Extra classes on the root div. |
| `children` | `ReactNode` | Must be `AppSidebar` + `AppDashboardContent`. |

### AppDashboardBackground

Animated gradient dot pattern with mouse-follow glow. Renders as `position: absolute, inset: 0` behind all content. Managed internally by `AppDashboard` — do not render separately.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dotSize` | `number` | `8` | Dot radius in px. |
| `spacing` | `number` | `10` | Grid spacing in px. |
| `duration` | `number` | `30` | Animation cycle in seconds. |
| `interactive` | `boolean` | `true` | Enable mouse-follow glow. |

### AppDashboardContent

The right-hand column that holds the header and main content. `flex-1 flex flex-col`.

```tsx
import { AppDashboardContent } from "@/components/blocks/AppDashboard"
```

### AppDashboardMain

The primary content area. `rounded-tl-3xl bg-background shadow-2xl`. Always pass `className="p-6"` (or override via `mainClassName` on `AppDashboardShell`).

```tsx
import { AppDashboardMain } from "@/components/blocks/AppDashboard"
```

---

## Composition structure (reference)

```
AppSidebarProvider
  AppDashboard
    AppSidebar collapsible="icon"
      AppSidebarHeader
        AppSidebarBrand
      AppSidebarContent
        AppSidebarGroup
          AppSidebarGroupLabel
          AppSidebarGroupContent
            AppSidebarMenu
              AppSidebarMenuItem
                AppSidebarMenuButton isActive tooltip="..."
                  <Icon />
                  <span>Label</span>
      AppSidebarRail
    AppDashboardContent
      AppHeader className="border-none"
        AppHeaderContent
          AppSidebarTrigger
          AppSeparator orientation="vertical"
          AppHeaderSearchbar
          AppHeaderActions
      AppDashboardMain className="p-6"
        {/* page content */}
```

## Light/dark split

| Area | Theme |
|------|-------|
| `AppSidebar` | Always dark — transparent background, `dark` class |
| `AppHeader` | Always dark — transparent background, `dark` class |
| `AppDashboardBackground` | Always dark |
| `AppDashboardMain` | Follows the page theme |

Do not add background colors to `AppSidebar` or `AppHeader`. Both have a transparent background so the animated dot layer shows through. This is intentional and must not be overridden.

---

## Rules (design team)

- `AppDashboard` must always have `AppDashboardBackground` as its first rendered child (it is injected automatically).
- `AppDashboardMain` must always be a direct child of `AppDashboardContent`.
- `AppHeader` must always be the first child of `AppDashboardContent` with `className="border-none"`.
- `AppSidebar` must always use `collapsible="icon"`.
- `AppSidebarBrand` must always be the first child of `AppSidebarHeader`.
- `AppSidebarRail` must always be present inside `AppSidebar`.

If a prop you need is missing, inform the design team.
