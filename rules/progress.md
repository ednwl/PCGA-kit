# AppProgress

> Docs: https://viana-kit.vercel.app/docs/components/progress

```tsx
import { AppProgress } from "@/components/primitives/AppProgress"
```

## AppProgress

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `number \| null` | - | The progress value. |
| `max` | `number` | `100` | The maximum progress value. |

## Usage

### Simple Progress Bar
```tsx
<AppProgress value={33} />
```

### Progress with Label
```tsx
<div className="w-full space-y-1.5">
  <div className="flex justify-between text-sm">
    <span>Uploading…</span>
    <span>66%</span>
  </div>
  <AppProgress value={66} />
</div>
```

## Rules

- **Do** use `AppProgress` to show completion status of a task.
- **Do** provide additional context (like percentages) for better clarity when needed.
- **Don't** use `AppProgress` for indeterminate loading states where time is unknown; use `AppSpinner` or a skeleton instead if appropriate.
- If a prop you need is missing, stop and inform the design team.
