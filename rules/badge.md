# AppBadge

> Docs: https://viana-kit.vercel.app/docs/components/badge

```tsx
import { AppBadge } from "@/components/primitives/AppBadge"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "secondary" \| "destructive" \| "outline" \| "ghost" \| "link"` | `"default"` | Visual style of the badge |
| `asChild` | `boolean` | `false` | Renders as child element via Radix Slot |

## Usage

### Basic
```tsx
<AppBadge>Active</AppBadge>
<AppBadge variant="secondary">Draft</AppBadge>
<AppBadge variant="outline">Pending</AppBadge>
<AppBadge variant="destructive">Error</AppBadge>
```

### With Icons
```tsx
<AppBadge>
  <CheckIcon className="size-3" />
  Verified
</AppBadge>

<AppBadge variant="secondary" className="gap-1 pr-1">
  React
  <AppButton size="icon" variant="ghost" className="size-3.5 p-0">
    <XIcon className="size-2.5" />
  </AppButton>
</AppBadge>
```

### As a Link
```tsx
<AppBadge asChild>
  <a href="/tags/react">React</a>
</AppBadge>
```

## Rules
- ✅ Use `AppBadge` for status indicators, tags, or small labels
- ✅ Use `asChild` when the badge should behave as a link
- ✅ Use `gap-1` when adding icons or small buttons inside the badge
- ❌ Do not use `AppBadge` for main navigation actions — use `AppButton` instead
- ❌ Do not use long text strings inside a badge — keep it to 1-2 words
- ❌ If a prop you need is missing, stop and inform the design team
