# AppSeparator

> Docs: https://viana-kit.vercel.app/docs/components/separator

```tsx
import { AppSeparator } from "@/components/primitives/AppSeparator"
```

## AppSeparator

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | The orientation of the separator. |
| `decorative` | `boolean` | `true` | Whether the separator is purely decorative. If `false`, it's accessible to screen readers as a separator. |

## Usage

### Horizontal Separator
```tsx
<div className="space-y-4">
  <p>Top section</p>
  <AppSeparator />
  <p>Bottom section</p>
</div>
```

### Vertical Separator
```tsx
<div className="flex h-5 items-center space-x-4">
  <div>Item 1</div>
  <AppSeparator orientation="vertical" />
  <div>Item 2</div>
</div>
```

## Rules

- **Do** use `AppSeparator` to visually divide content.
- **Do** set `orientation="vertical"` when used within flex containers for side-by-side items.
- **Don't** use raw `<hr />` tags for separation.
- **Don't** use `AppSeparator` for purely layout purposes if a border on a container is more appropriate.

If a prop you need is missing, stop and inform the design team.
