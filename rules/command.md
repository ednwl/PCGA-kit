# AppCommand

> Docs: https://viana-kit.vercel.app/docs/components/command

```tsx
import {
  AppCommand,
  AppCommandDialog,
  AppCommandInput,
  AppCommandList,
  AppCommandEmpty,
  AppCommandGroup,
  AppCommandItem,
  AppCommandShortcut,
  AppCommandSeparator,
} from "@/components/primitives/AppCommand"
```

## AppCommand

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | - | Accessible label for the command menu. |
| `shouldFilter` | `boolean` | `true` | Whether to filter items based on the search input. |

## AppCommandInput

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `placeholder` | `string` | - | Placeholder text for the search input. |

## AppCommandItem

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `onSelect` | `(value: string) => void` | - | Event handler called when the item is selected. |
| `disabled` | `boolean` | - | Whether the item is disabled. |
| `value` | `string` | - | Optional value for the item. Defaults to text content. |

## Usage

### Default Command Menu
```tsx
<AppCommand className="rounded-lg border shadow-md">
  <AppCommandInput placeholder="Type a command or search..." />
  <AppCommandList>
    <AppCommandEmpty>No results found.</AppCommandEmpty>
    <AppCommandGroup heading="Suggestions">
      <AppCommandItem>Calendar</AppCommandItem>
      <AppCommandItem>Search Emoji</AppCommandItem>
      <AppCommandItem>Calculator</AppCommandItem>
    </AppCommandGroup>
    <AppCommandSeparator />
    <AppCommandGroup heading="Settings">
      <AppCommandItem>
        <span>Profile</span>
        <AppCommandShortcut>⌘P</AppCommandShortcut>
      </AppCommandItem>
      <AppCommandItem>
        <span>Settings</span>
        <AppCommandShortcut>⌘S</AppCommandShortcut>
      </AppCommandItem>
    </AppCommandGroup>
  </AppCommandList>
</AppCommand>
```

## Rules

- **Do** use `AppCommand` for searchable lists and command palettes.
- **Do** use `AppCommandDialog` for full-screen or modal command interfaces.
- **Don't** forget to handle `onSelect` for interactive items.
- If a prop you need is missing, stop and inform the design team.
