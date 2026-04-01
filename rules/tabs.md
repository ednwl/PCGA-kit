# AppTabs

> Docs: https://viana-kit.vercel.app/docs/components/tabs

```tsx
import { AppTabs, AppTabsList, AppTabsTrigger, AppTabsContent } from "@/components/primitives/AppTabs"
```

## AppTabs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | — | The value of the tab that should be active by default |
| `value` | `string` | — | The controlled value of the active tab |
| `onValueChange` | `(value: string) => void` | — | Event handler called when the value changes |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | The orientation of the tabs |

## AppTabsTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | A unique value for the tab |
| `disabled` | `boolean` | `false` | When true, prevents the user from interacting with the tab |

## AppTabsContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | A unique value that associates the content with a trigger |

## Usage

### Basic
```tsx
<AppTabs defaultValue="account">
  <AppTabsList>
    <AppTabsTrigger value="account">Account</AppTabsTrigger>
    <AppTabsTrigger value="password">Password</AppTabsTrigger>
  </AppTabsList>
  <AppTabsContent value="account">Account settings content.</AppTabsContent>
  <AppTabsContent value="password">Password settings content.</AppTabsContent>
</AppTabs>
```

## Rules
- ✅ Always use `AppTabs` — never use a custom tab implementation
- ✅ Ensure `value` on `AppTabsTrigger` matches the `value` on the corresponding `AppTabsContent`
- ✅ Use `defaultValue` for uncontrolled tabs
- ❌ Do not use `AppTabs` for navigation between pages — use `AppNavigationMenu` or simple links instead
- ❌ If a prop you need is missing, stop and inform the design team
