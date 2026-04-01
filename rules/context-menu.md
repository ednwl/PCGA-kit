# AppContextMenu

> Docs: https://viana-kit.vercel.app/docs/components/context-menu

```tsx
import {
  AppContextMenu,
  AppContextMenuTrigger,
  AppContextMenuContent,
  AppContextMenuItem,
  AppContextMenuCheckboxItem,
  AppContextMenuRadioItem,
  AppContextMenuLabel,
  AppContextMenuSeparator,
  AppContextMenuShortcut,
  AppContextMenuGroup,
  AppContextMenuSub,
  AppContextMenuSubContent,
  AppContextMenuSubTrigger,
  AppContextMenuRadioGroup,
} from "@/components/primitives/AppContextMenu"
```

## AppContextMenuContent

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `loop` | `boolean` | `false` | Whether keyboard navigation should loop from last to first item. |

## AppContextMenuItem

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `onSelect` | `(event: Event) => void` | - | Event handler called when the item is selected. |
| `disabled` | `boolean` | - | Whether the item is disabled. |

## Usage

### Basic Context Menu
```tsx
<AppContextMenu>
  <AppContextMenuTrigger className="flex h-32 w-full items-center justify-center border border-dashed">
    Right click here
  </AppContextMenuTrigger>
  <AppContextMenuContent className="w-64">
    <AppContextMenuItem>
      <span>Copy</span>
      <AppContextMenuShortcut>⌘C</AppContextMenuShortcut>
    </AppContextMenuItem>
    <AppContextMenuItem>
      <span>Paste</span>
      <AppContextMenuShortcut>⌘V</AppContextMenuShortcut>
    </AppContextMenuItem>
    <AppContextMenuSeparator />
    <AppContextMenuItem>Settings</AppContextMenuItem>
  </AppContextMenuContent>
</AppContextMenu>
```

## Rules

- **Do** use `AppContextMenu` for secondary actions associated with a specific UI element.
- **Do** include shortcuts using `AppContextMenuShortcut` where appropriate.
- **Don't** overpopulate the context menu; keep it concise.
- If a prop you need is missing, stop and inform the design team.
