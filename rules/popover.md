# AppPopover

> Docs: https://viana-kit.vercel.app/docs/components/popover

```tsx
import { AppPopover, AppPopoverTrigger, AppPopoverContent } from "@/components/primitives/AppPopover"
```

## AppPopoverContent

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | The preferred side of the trigger to render against when open. |
| `align` | `"start" \| "center" \| "end"` | `"center"` | The preferred alignment against the trigger. |
| `sideOffset` | `number` | `4` | The distance in pixels from the trigger. |

## Usage

### Basic Popover
```tsx
<AppPopover>
  <AppPopoverTrigger asChild>
    <AppButton variant="outline">Open Popover</AppButton>
  </AppPopoverTrigger>
  <AppPopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
      </div>
    </div>
  </AppPopoverContent>
</AppPopover>
```

## Rules

- **Do** use `AppPopover` for rich content that should appear upon click.
- **Do** use `asChild` on `AppPopoverTrigger` to use an `AppButton`.
- **Don't** use `AppPopover` if the content is just a simple text label; use `AppTooltip` instead.
- If a prop you need is missing, stop and inform the design team.
