# AppSelect

> Docs: https://viana-kit.vercel.app/docs/components/select

```tsx
import {
  AppSelect,
  AppSelectTrigger,
  AppSelectValue,
  AppSelectContent,
  AppSelectItem,
  AppSelectLabel,
} from "@/components/primitives/AppSelect"
```

## AppSelect

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `defaultValue` | `string` | - | The value of the select that should be open by default. |
| `onValueChange` | `(value: string) => void` | - | Event handler called when the value changes. |

## AppSelectTrigger

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `loading` | `boolean` | `false` | If true, shows a spinner and disables the trigger. |

## Usage

### Basic Select
```tsx
<AppSelect>
  <AppSelectTrigger>
    <AppSelectValue placeholder="Select a fruit" />
  </AppSelectTrigger>
  <AppSelectContent>
    <AppSelectItem value="apple">Apple</AppSelectItem>
    <AppSelectItem value="banana">Banana</AppSelectItem>
    <AppSelectItem value="blueberry">Blueberry</AppSelectItem>
  </AppSelectContent>
</AppSelect>
```

### Loading State
```tsx
<AppSelect>
  <AppSelectTrigger loading>
    <AppSelectValue placeholder="Loading options..." />
  </AppSelectTrigger>
  <AppSelectContent>
    {/* Items would be here after loading */}
  </AppSelectContent>
</AppSelect>
```

## Rules

- **Do** use `AppSelect` for picking a single value from a list of options.
- **Do** use the `loading` prop on `AppSelectTrigger` when fetching data.
- **Don't** use raw `<select>` elements.
- If a prop you need is missing, stop and inform the design team.
