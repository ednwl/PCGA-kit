# AppTooltip

> Docs: https://viana-kit.vercel.app/docs/components/tooltip

```tsx
import { AppTooltip, AppTooltipProvider, AppTooltipTrigger, AppTooltipContent } from "@/components/primitives/AppTooltip"
```

## AppTooltip

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delayDuration` | `number` | `700` | Delay in ms before showing the tooltip |
| `open` | `boolean` | — | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes |

## AppTooltipContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` | Preferred side for the content |
| `sideOffset` | `number` | `4` | Distance from the trigger in pixels |

## Usage

### Basic
```tsx
<AppTooltipProvider>
  <AppTooltip>
    <AppTooltipTrigger asChild>
      <AppButton variant="outline">Hover me</AppButton>
    </AppTooltipTrigger>
    <AppTooltipContent>
      <p>Add to library</p>
    </AppTooltipContent>
  </AppTooltip>
</AppTooltipProvider>
```

## Rules
- ✅ Always wrap `AppTooltip` components in an `AppTooltipProvider` (usually at the app root)
- ✅ Use `asChild` on `AppTooltipTrigger` if wrapping an `AppButton` or other interactive element
- ✅ Keep tooltip content brief and purely informative
- ❌ Do not put interactive elements (buttons, links) inside `AppTooltipContent`
- ❌ If a prop you need is missing, stop and inform the design team
