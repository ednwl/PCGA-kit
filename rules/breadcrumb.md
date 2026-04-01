# AppBreadcrumb

> Docs: https://viana-kit.vercel.app/docs/components/breadcrumb

```tsx
import {
  AppBreadcrumb,
  AppBreadcrumbList,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
  AppBreadcrumbEllipsis,
} from "@/components/primitives/AppBreadcrumb"
```

## AppBreadcrumbLink

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | Renders as child element (e.g., for Next.js Link) |
| `href` | `string` | — | Link destination |

## Usage

### Basic
```tsx
<AppBreadcrumb>
  <AppBreadcrumbList>
    <AppBreadcrumbItem>
      <AppBreadcrumbLink href="/">Home</AppBreadcrumbLink>
    </AppBreadcrumbItem>
    <AppBreadcrumbSeparator />
    <AppBreadcrumbItem>
      <AppBreadcrumbLink href="/components">Components</AppBreadcrumbLink>
    </AppBreadcrumbItem>
    <AppBreadcrumbSeparator />
    <AppBreadcrumbItem>
      <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
    </AppBreadcrumbItem>
  </AppBreadcrumbList>
</AppBreadcrumb>
```

### With Ellipsis
```tsx
<AppBreadcrumbList>
  <AppBreadcrumbItem>
    <AppBreadcrumbLink href="/">Home</AppBreadcrumbLink>
  </AppBreadcrumbItem>
  <AppBreadcrumbSeparator />
  <AppBreadcrumbItem>
    <AppBreadcrumbEllipsis />
  </AppBreadcrumbItem>
  <AppBreadcrumbSeparator />
  <AppBreadcrumbItem>
    <AppBreadcrumbPage>Current Page</AppBreadcrumbPage>
  </AppBreadcrumbItem>
</AppBreadcrumbList>
```

## Rules
- ✅ Always end the breadcrumb trail with `AppBreadcrumbPage` for the current location
- ✅ Use `AppBreadcrumbSeparator` between items
- ✅ Use `asChild` with `AppBreadcrumbLink` when using framework routers (like Next.js `Link`)
- ❌ Do not use breadcrumbs as the primary navigation system
- ❌ Do not use more than one `AppBreadcrumbEllipsis` in a single trail
- ❌ If a prop you need is missing, stop and inform the design team
