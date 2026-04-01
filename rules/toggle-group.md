# AppToggleGroup

> Docs: https://viana-kit.vercel.app/docs/components/toggle-group

```tsx
import { AppToggleGroup, AppToggleGroupItem } from "@/components/primitives/AppToggleGroup"
```

## AppToggleGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"single" \| "multiple"` | — | Determines if one or multiple items can be pressed |
| `variant` | `"default" \| "outline"` | `"default"` | Visual style shared by all items |
| `size` | `"default" \| "sm" \| "lg"` | `"default"` | Size shared by all items |
| `value` | `string \| string[]` | — | Controlled value |
| `onValueChange` | `(value: any) => void` | — | Callback when value changes |

## AppToggleGroupItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Unique value for this item |
| `disabled` | `boolean` | `false` | Disables this item |

## Usage

### Single Select
```tsx
<AppToggleGroup type="single">
  <AppToggleGroupItem value="left">Left</AppToggleGroupItem>
  <AppToggleGroupItem value="center">Center</AppToggleGroupItem>
  <AppToggleGroupItem value="right">Right</AppToggleGroupItem>
</AppToggleGroup>
```

### Multiple Select (Outline)
```tsx
<AppToggleGroup type="multiple" variant="outline">
  <AppToggleGroupItem value="bold"><Bold /></AppToggleGroupItem>
  <AppToggleGroupItem value="italic"><Italic /></AppToggleGroupItem>
</AppToggleGroup>
```

## Rules
- ✅ Use `AppToggleGroup` for related sets of options
- ✅ Set `type="single"` or `type="multiple"` explicitly
- ✅ Use `variant="outline"` when items should be clearly separated
- ❌ If a prop you need is missing, stop and inform the design team
