# AppDropdownMenu

> Docs: https://viana-kit.vercel.app/docs/components/dropdown-menu

```tsx
import {
  AppDropdownMenu,
  AppDropdownMenuTrigger,
  AppDropdownMenuContent,
  AppDropdownMenuItem,
  AppDropdownMenuCheckboxItem,
  AppDropdownMenuRadioItem,
  AppDropdownMenuLabel,
  AppDropdownMenuSeparator,
  AppDropdownMenuShortcut,
  AppDropdownMenuGroup,
  AppDropdownMenuSub,
  AppDropdownMenuSubContent,
  AppDropdownMenuSubTrigger,
  AppDropdownMenuRadioGroup,
} from "@/components/primitives/AppDropdownMenu"
```

## AppDropdownMenuContent

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | The preferred side of the trigger to render against when open. |
| `align` | `"start" \| "center" \| "end"` | `"center"` | The preferred alignment against the trigger. |

## AppDropdownMenuItem

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `onSelect` | `(event: Event) => void` | - | Event handler called when the item is selected. |
| `disabled` | `boolean` | - | Whether the item is disabled. |

## Usage

### Basic Dropdown Menu
```tsx
<AppDropdownMenu>
  <AppDropdownMenuTrigger asChild>
    <AppButton>Open Menu</AppButton>
  </AppDropdownMenuTrigger>
  <AppDropdownMenuContent className="w-56">
    <AppDropdownMenuLabel>My Account</AppDropdownMenuLabel>
    <AppDropdownMenuSeparator />
    <AppDropdownMenuItem>
      <UserIcon className="mr-2 h-4 w-4" />
      <span>Profile</span>
    </AppDropdownMenuItem>
    <AppDropdownMenuItem>
      <SettingsIcon className="mr-2 h-4 w-4" />
      <span>Settings</span>
    </AppDropdownMenuItem>
    <AppDropdownMenuSeparator />
    <AppDropdownMenuItem>Logout</AppDropdownMenuItem>
  </AppDropdownMenuContent>
</AppDropdownMenu>
```

## Rules

- **Do** use `AppDropdownMenu` for a list of actions or functions.
- **Do** use `AppDropdownMenuSeparator` to group related items.
- **Don't** use `AppDropdownMenu` for navigation; use `AppNavigationMenu` if appropriate.
- If a prop you need is missing, stop and inform the design team.
