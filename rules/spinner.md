# AppSpinner

> Docs: https://viana-kit.vercel.app/docs/components/spinner

```tsx
import { AppSpinner } from "@/components/primitives/AppSpinner"
```

## AppSpinner

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `"Loading..."` | The accessible label for screen readers. |
| `className` | `string` | - | Used to set size (`h-x w-x`) and color (`text-x`). |

## Usage

### Default Spinner
```tsx
<AppSpinner />
```

### Colored and Sized Spinner
```tsx
<AppSpinner className="h-8 w-8 text-primary" label="Uploading..." />
```

### Spinner in Button
```tsx
<AppButton disabled>
  <AppSpinner className="h-4 w-4" />
  Saving...
</AppButton>
```

## Rules

- **Do** use `AppSpinner` for discrete loading states within components.
- **Do** provide a descriptive `label` if the loading context isn't obvious.
- **Don't** use `AppSpinner` for full-page loading if a skeleton is more appropriate.
- **Don't** forget to disable interaction on buttons when showing a spinner inside them.

If a prop you need is missing, stop and inform the design team.
