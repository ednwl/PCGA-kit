# AppDrawer

> Docs: https://viana-kit.vercel.app/docs/components/drawer

```tsx
import {
  AppDrawer,
  AppDrawerTrigger,
  AppDrawerContent,
  AppDrawerHeader,
  AppDrawerFooter,
  AppDrawerTitle,
  AppDrawerDescription,
  AppDrawerClose,
} from "@/components/primitives/AppDrawer"
```

## AppDrawer

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | - | The controlled open state of the drawer. |
| `onOpenChange` | `(open: boolean) => void` | - | Event handler called when the open state of the drawer changes. |
| `shouldScaleBackground` | `boolean` | `false` | Whether to scale the background when the drawer is open. |

## AppDrawerTrigger

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child. |

## Usage

### Default Drawer
```tsx
<AppDrawer>
  <AppDrawerTrigger asChild>
    <AppButton>Open Drawer</AppButton>
  </AppDrawerTrigger>
  <AppDrawerContent>
    <AppDrawerHeader>
      <AppDrawerTitle>Edit Profile</AppDrawerTitle>
      <AppDrawerDescription>
        Make changes to your profile here. Click save when you are done.
      </AppDrawerDescription>
    </AppDrawerHeader>
    <div className="p-4">
      {/* Drawer Content */}
    </div>
    <AppDrawerFooter>
      <AppButton>Save Changes</AppButton>
      <AppDrawerClose asChild>
        <AppButton variant="outline">Cancel</AppButton>
      </AppDrawerClose>
    </AppDrawerFooter>
  </AppDrawerContent>
</AppDrawer>
```

## Rules

- **Do** use `AppDrawer` for mobile-friendly overlays or supplemental content.
- **Do** ensure `AppDrawerTitle` is provided for accessibility.
- **Don't** use `AppDrawer` if the content is too small; use `AppDialog` or `AppPopover` instead.
- If a prop you need is missing, stop and inform the design team.
