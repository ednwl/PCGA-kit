# AppMenubar

> Docs: https://viana-kit.vercel.app/docs/components/menubar

```tsx
import {
  AppMenubar,
  AppMenubarMenu,
  AppMenubarTrigger,
  AppMenubarContent,
  AppMenubarItem,
  AppMenubarSeparator,
  AppMenubarLabel,
  AppMenubarCheckboxItem,
  AppMenubarRadioGroup,
  AppMenubarRadioItem,
  AppMenubarPortal,
  AppMenubarGroup,
  AppMenubarSub,
  AppMenubarSubContent,
  AppMenubarSubTrigger,
  AppMenubarShortcut,
} from "@/components/primitives/AppMenubar"
```

## AppMenubar

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `defaultValue` | `string` | - | The value of the menu that should be open by default. |

## AppMenubarTrigger

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child. |

## Usage

### Desktop-style Menubar
```tsx
<AppMenubar>
  <AppMenubarMenu>
    <AppMenubarTrigger>File</AppMenubarTrigger>
    <AppMenubarContent>
      <AppMenubarItem>
        New Tab <AppMenubarShortcut>⌘T</AppMenubarShortcut>
      </AppMenubarItem>
      <AppMenubarItem>
        New Window <AppMenubarShortcut>⌘N</AppMenubarShortcut>
      </AppMenubarItem>
      <AppMenubarSeparator />
      <AppMenubarItem>Print</AppMenubarItem>
    </AppMenubarContent>
  </AppMenubarMenu>
  <AppMenubarMenu>
    <AppMenubarTrigger>Edit</AppMenubarTrigger>
    <AppMenubarContent>
      <AppMenubarItem>Undo</AppMenubarItem>
      <AppMenubarItem>Redo</AppMenubarItem>
    </AppMenubarContent>
  </AppMenubarMenu>
</AppMenubar>
```

## Rules

- **Do** use `AppMenubar` for application-wide persistent menus.
- **Do** use `AppMenubarShortcut` to display keyboard shortcuts.
- **Don't** use `AppMenubar` for simple navigation; use `AppNavigationMenu` for website headers.
- If a prop you need is missing, stop and inform the design team.
