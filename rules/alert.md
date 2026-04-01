# AppAlert

> Docs: https://viana-kit.vercel.app/docs/components/alert

```tsx
import { AppAlert, AppAlertTitle, AppAlertDescription, AppAlertContent } from "@/components/primitives/AppAlert"
```

## AppAlert

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "success" \| "warning" \| "info"` | `"default"` | Visual style of the alert |

## Usage

### Basic
```tsx
<AppAlert>
  <TerminalIcon className="size-4" />
  <AppAlertContent>
    <AppAlertTitle>Heads up!</AppAlertTitle>
    <AppAlertDescription>
      You can add components to your app using the cli.
    </AppAlertDescription>
  </AppAlertContent>
</AppAlert>
```

### Semantic Variants
```tsx
<AppAlert variant="success">
  <CheckCircleIcon className="size-4" />
  <AppAlertTitle>Success</AppAlertTitle>
</AppAlert>

<AppAlert variant="destructive">
  <AlertCircleIcon className="size-4" />
  <AppAlertTitle>Error</AppAlertTitle>
</AppAlert>
```

### With Action
```tsx
<AppAlert>
  <InfoIcon className="size-4" />
  <AppAlertContent>
    <AppAlertTitle>Update Available</AppAlertTitle>
    <AppAlertDescription>A new version is ready to install.</AppAlertDescription>
  </AppAlertContent>
  <AppButton size="sm" variant="outline" className="ml-auto">Update</AppButton>
</AppAlert>
```

## Rules
- ✅ Always use `AppAlertContent` to wrap title and description for proper alignment
- ✅ Use the semantic variants (`success`, `warning`, `info`, `destructive`) for status-driven messaging
- ✅ Icons should be placed as direct children of `AppAlert`, outside `AppAlertContent`
- ❌ Do not use `AppAlert` for transient messages — use `AppToaster` or `toast` instead
- ❌ Do not manually style colors when a semantic variant exists
- ❌ If a prop you need is missing, stop and inform the design team
