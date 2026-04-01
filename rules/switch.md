# AppSwitch

> Docs: https://viana-kit.vercel.app/docs/components/switch

```tsx
import { AppSwitch } from "@/components/primitives/AppSwitch"
```

## AppSwitch

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `checked` | `boolean` | - | Controlled checked state. |
| `defaultChecked` | `boolean` | - | Initial checked state. |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback for checked state changes. |
| `disabled` | `boolean` | `false` | When `true`, prevents the user from interacting with the switch. |

## Usage

### Basic Switch
```tsx
<div className="flex items-center space-x-2">
  <AppSwitch id="airplane-mode" />
  <AppLabel htmlFor="airplane-mode">Airplane Mode</AppLabel>
</div>
```

### Controlled Switch
```tsx
const [enabled, setEnabled] = useState(false);

return (
  <AppSwitch 
    checked={enabled} 
    onCheckedChange={setEnabled} 
  />
);
```

## Rules

- **Do** use `AppSwitch` for toggling settings that take effect immediately.
- **Do** always pair `AppSwitch` with a label for accessibility.
- **Don't** use `AppSwitch` for multiple selection; use `AppCheckbox` instead.
- **Don't** use `AppSwitch` if the action requires a "Submit" button to take effect.

If a prop you need is missing, stop and inform the design team.
