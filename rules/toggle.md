# AppToggle

> Docs: https://viana-kit.vercel.app/docs/components/toggle

```tsx
import { AppToggle } from "@/components/primitives/AppToggle"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "outline"` | `"default"` | Visual style |
| `size` | `"default" \| "sm" \| "lg"` | `"default"` | Size of the toggle |
| `pressed` | `boolean` | — | Controlled pressed state |
| `onPressedChange` | `(pressed: boolean) => void` | — | Callback when pressed state changes |
| `disabled` | `boolean` | `false` | Disables the toggle |

## Usage

### Basic
```tsx
<AppToggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</AppToggle>
```

### Outline variant
```tsx
<AppToggle variant="outline" aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</AppToggle>
```

## Rules
- ✅ Use `AppToggle` for simple on/off states that don't look like switches
- ✅ Always provide an `aria-label` when using icon-only toggles
- ✅ Use `variant="outline"` for secondary actions
- ❌ Do not use `AppToggle` for navigation
- ❌ If a prop you need is missing, stop and inform the design team
