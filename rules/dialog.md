# AppDialog

> Docs: https://viana-kit.vercel.app/docs/components/dialog

```tsx
import {
  AppDialog,
  AppDialogTrigger,
  AppDialogContent,
  AppDialogHeader,
  AppDialogTitle,
  AppDialogDescription,
} from "@/components/primitives/AppDialog"
```

## AppDialog

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | - | The controlled open state of the dialog. |
| `onOpenChange` | `(open: boolean) => void` | - | Event handler called when the open state of the dialog changes. |

## AppDialogTrigger

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child. |

## Usage

### Default Dialog
```tsx
<AppDialog>
  <AppDialogTrigger asChild>
    <AppButton>Open Dialog</AppButton>
  </AppDialogTrigger>
  <AppDialogContent>
    <AppDialogHeader>
      <AppDialogTitle>Are you absolutely sure?</AppDialogTitle>
      <AppDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AppDialogDescription>
    </AppDialogHeader>
  </AppDialogContent>
</AppDialog>
```

## Rules

- **Do** always provide an `AppDialogTitle` for accessibility.
- **Do** use `asChild` on the trigger to use an `AppButton`.
- **Don't** use `AppDialog` for small tooltips; use `AppTooltip` or `AppPopover` instead.
- If a prop you need is missing, stop and inform the design team.
