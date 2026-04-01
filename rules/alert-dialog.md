# AppAlertDialog

> Docs: https://viana-kit.vercel.app/docs/components/alert-dialog

```tsx
import {
  AppAlertDialog,
  AppAlertDialogTrigger,
  AppAlertDialogContent,
  AppAlertDialogHeader,
  AppAlertDialogFooter,
  AppAlertDialogTitle,
  AppAlertDialogDescription,
  AppAlertDialogAction,
  AppAlertDialogCancel,
} from "@/components/primitives/AppAlertDialog"
```

## AppAlertDialogAction / AppAlertDialogCancel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "secondary" \| "outline"` | `"default"` | Visual style of the action/cancel button |

## Usage

### Basic
```tsx
<AppAlertDialog>
  <AppAlertDialogTrigger asChild>
    <AppButton variant="outline">Show Dialog</AppButton>
  </AppAlertDialogTrigger>
  <AppAlertDialogContent>
    <AppAlertDialogHeader>
      <AppAlertDialogTitle>Are you absolutely sure?</AppAlertDialogTitle>
      <AppAlertDialogDescription>
        This action cannot be undone.
      </AppAlertDialogDescription>
    </AppAlertDialogHeader>
    <AppAlertDialogFooter>
      <AppAlertDialogCancel>Cancel</AppAlertDialogCancel>
      <AppAlertDialogAction>Continue</AppAlertDialogAction>
    </AppAlertDialogFooter>
  </AppAlertDialogContent>
</AppAlertDialog>
```

### Destructive Action
```tsx
<AppAlertDialogFooter>
  <AppAlertDialogCancel variant="outline">Cancel</AppAlertDialogCancel>
  <AppAlertDialogAction variant="destructive">Delete Item</AppAlertDialogAction>
</AppAlertDialogFooter>
```

## Rules
- ✅ Use `AppAlertDialog` for actions that require explicit confirmation and interrupt the workflow
- ✅ Always provide both an action and a cancel button in the `AppAlertDialogFooter`
- ✅ Use `variant="destructive"` for actions that permanently delete or change data
- ❌ Do not use `AppAlertDialog` for simple information or non-critical choices — use `AppDialog` instead
- ❌ Do not place complex forms inside `AppAlertDialog` — use `AppDialog` for form-based interactions
- ❌ If a prop you need is missing, stop and inform the design team
