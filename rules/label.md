# AppLabel

> Docs: https://viana-kit.vercel.app/docs/components/label

```tsx
import { AppLabel } from "@/components/primitives/AppLabel"
```

## AppLabel

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `htmlFor` | `string` | - | The ID of the form element the label is associated with. |

## Usage

### Basic Label
```tsx
<div className="flex items-center space-x-2">
  <AppCheckbox id="terms" />
  <AppLabel htmlFor="terms">Accept terms and conditions</AppLabel>
</div>
```

## Rules

- **Do** use `AppLabel` for all form control labels to ensure accessibility.
- **Do** use the `htmlFor` prop to link the label to its corresponding input.
- **Don't** use raw `<label>` elements.
- If a prop you need is missing, stop and inform the design team.
