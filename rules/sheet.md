# AppSheet

> Docs: https://viana-kit.vercel.app/docs/components/sheet

```tsx
import {
  AppSheet,
  AppSheetTrigger,
  AppSheetContent,
  AppSheetHeader,
  AppSheetTitle,
  AppSheetDescription
} from "@/components/primitives/AppSheet"
```

## AppSheet

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | - | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | - | Callback for open state changes. |
| `defaultOpen` | `boolean` | - | Initial open state. |

## AppSheetTrigger

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `asChild` | `boolean` | `false` | Change the rendered element to the child. |

## AppSheetContent

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"right"` | The side the sheet slides from. |

## Usage

### Default Sheet
```tsx
<AppSheet>
  <AppSheetTrigger asChild>
    <AppButton variant="outline">Open Sheet</AppButton>
  </AppSheetTrigger>
  <AppSheetContent>
    <AppSheetHeader>
      <AppSheetTitle>Edit Profile</AppSheetTitle>
      <AppSheetDescription>Make changes to your profile here.</AppSheetDescription>
    </AppSheetHeader>
    <div className="py-4">Profile edit form...</div>
  </AppSheetContent>
</AppSheet>
```

### Left Side Sheet
```tsx
<AppSheet>
  <AppSheetTrigger asChild>
    <AppButton variant="ghost">Menu</AppButton>
  </AppSheetTrigger>
  <AppSheetContent side="left">
    <AppSheetHeader>
      <AppSheetTitle>Navigation</AppSheetTitle>
    </AppSheetHeader>
    <nav>Links...</nav>
  </AppSheetContent>
</AppSheet>
```

## Rules

- **Do** use `AppSheet` for secondary information or forms that don't fit in a standard dialog.
- **Do** provide a clear `AppSheetTitle` and `AppSheetDescription` for accessibility.
- **Don't** overfill the sheet with complex multi-step workflows.
- **Don't** use `AppSheet` for small confirmation tasks; use `AppAlertDialog` instead.

If a prop you need is missing, stop and inform the design team.
