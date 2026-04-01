# AppRadioGroup

> Docs: https://viana-kit.vercel.app/docs/components/radio-group

```tsx
import { AppRadioGroup, AppRadioGroupItem } from "@/components/primitives/AppRadioGroup"
```

## AppRadioGroup

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `defaultValue` | `string` | - | The value of the radio item that should be checked by default. |
| `onValueChange` | `(value: string) => void` | - | Event handler called when the value changes. |

## AppRadioGroupItem

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | - | The value given as data to the radio item when submitted in a form. |
| `id` | `string` | - | A unique ID for the radio item, used to link with a label. |

## Usage

### Default Radio Group
```tsx
<AppRadioGroup defaultValue="option-one">
  <div className="flex items-center gap-2">
    <AppRadioGroupItem value="option-one" id="option-one" />
    <AppLabel htmlFor="option-one">Option One</AppLabel>
  </div>
  <div className="flex items-center gap-2">
    <AppRadioGroupItem value="option-two" id="option-two" />
    <AppLabel htmlFor="option-two">Option Two</AppLabel>
  </div>
</AppRadioGroup>
```

## Rules

- **Do** use `AppRadioGroup` when only one option can be selected from a set.
- **Do** always provide a label for each `AppRadioGroupItem`.
- **Don't** use `AppRadioGroup` for multi-select; use `AppCheckbox` instead.
- If a prop you need is missing, stop and inform the design team.
