# AppHoverCard

> Docs: https://viana-kit.vercel.app/docs/components/hover-card

```tsx
import { AppHoverCard, AppHoverCardTrigger, AppHoverCardContent } from "@/components/primitives/AppHoverCard"
```

## AppHoverCard

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `openDelay` | `number` | `700` | The duration from when the mouse enters the trigger until the hover card opens. |
| `closeDelay` | `number` | `300` | The duration from when the mouse leaves the trigger or content until the hover card closes. |

## AppHoverCardContent

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | The preferred side of the trigger to render against when open. |
| `align` | `"start" \| "center" \| "end"` | `"center"` | The preferred alignment against the trigger. |

## Usage

### Simple Hover Card
```tsx
<AppHoverCard>
  <AppHoverCardTrigger>
    <a href="https://twitter.com/nextjs" className="underline">@nextjs</a>
  </AppHoverCardTrigger>
  <AppHoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm text-muted-foreground">
          The React Framework – created and maintained by @vercel.
        </p>
      </div>
    </div>
  </AppHoverCardContent>
</AppHoverCard>
```

## Rules

- **Do** use `AppHoverCard` to provide a preview of content behind a link.
- **Do** use `AppHoverCard` for sighted users on desktop; ensure information is accessible via other means for mobile/screen readers.
- **Don't** use `AppHoverCard` for critical actions; it is for informational previews.
- If a prop you need is missing, stop and inform the design team.
