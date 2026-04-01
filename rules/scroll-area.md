# AppScrollArea

> Docs: https://viana-kit.vercel.app/docs/components/scroll-area

```tsx
import { AppScrollArea, AppScrollBar } from "@/components/primitives/AppScrollArea"
```

## AppScrollArea

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `type` | `"auto" \| "always" \| "scroll" \| "hover"` | `"hover"` | Describes the nature of scrollbar visibility. |

## Usage

### Simple Scroll Area
```tsx
<AppScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't help but laugh at the
  jokes.
</AppScrollArea>
```

## Rules

- **Do** use `AppScrollArea` for custom-styled scrollbars that work across browsers.
- **Do** specify a height for the `AppScrollArea` container.
- **Don't** use `AppScrollArea` for the entire page; use native browser scrolling for better performance.
- If a prop you need is missing, stop and inform the design team.
