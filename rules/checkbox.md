# AppCheckbox

> Docs: https://viana-kit.vercel.app/docs/components/checkbox

```tsx
import { AppCheckbox } from "@/components/primitives/AppCheckbox"
```

## AppCheckbox

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `checked` | `boolean \| "indeterminate"` | - | The controlled checked state of the checkbox. |
| `defaultChecked` | `boolean` | - | The checked state of the checkbox when it is initially rendered. |
| `onCheckedChange` | `(checked: boolean \| "indeterminate") => void` | - | Event handler called when the checked state of the checkbox changes. |
| `disabled` | `boolean` | - | When true, prevents the user from interacting with the checkbox. |
| `required` | `boolean` | - | When true, indicates that the user must check the checkbox before the owning form can be submitted. |
| `name` | `string` | - | The name of the checkbox. Submitted with its owning form as part of a name/value pair. |
| `value` | `string` | `"on"` | The value given as data to the checkbox when submitted in a form. |

## Usage

### Default Checkbox
```tsx
<div className="flex items-center gap-2">
  <AppCheckbox id="terms" />
  <label htmlFor="terms" className="text-sm font-medium">
    Accept terms and conditions
  </label>
</div>
```

### Disabled State
```tsx
<div className="flex items-center gap-2">
  <AppCheckbox id="disabled-terms" disabled />
  <label htmlFor="disabled-terms" className="text-sm font-medium opacity-50">
    Disabled checkbox
  </label>
</div>
```

## Rules

- **Do** use `AppCheckbox` for all checkbox needs.
- **Do** always provide a corresponding label for accessibility.
- **Don't** use the raw HTML `<input type="checkbox">`.
- **Don't** manually style the checkbox unless absolutely necessary.
- If a prop you need is missing, stop and inform the design team.
