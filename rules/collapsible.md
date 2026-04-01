# AppCollapsible

> Docs: https://viana-kit.vercel.app/docs/components/collapsible

```tsx
import { 
  AppCollapsible, 
  AppCollapsibleTrigger, 
  AppCollapsibleContent 
} from "@/components/primitives/AppCollapsible"
```

## AppCollapsible

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | - | The controlled open state of the collapsible. |
| `defaultOpen` | `boolean` | - | The open state of the collapsible when it is initially rendered. |
| `onOpenChange` | `(open: boolean) => void` | - | Event handler called when the open state of the collapsible changes. |
| `disabled` | `boolean` | - | When true, prevents the user from interacting with the collapsible. |

## AppCollapsibleTrigger

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |

## AppCollapsibleContent

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `forceMount` | `boolean` | - | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. |

## Usage

### Simple Collapsible
```tsx
const [isOpen, setIsOpen] = React.useState(false)

<AppCollapsible open={isOpen} onOpenChange={setIsOpen}>
  <AppCollapsibleTrigger asChild>
    <AppButton variant="ghost">Toggle Content</AppButton>
  </AppCollapsibleTrigger>
  <AppCollapsibleContent>
    <div className="p-4 border rounded-md">
      Hidden information revealed!
    </div>
  </AppCollapsibleContent>
</AppCollapsible>
```

## Rules

- **Do** use `AppCollapsible` for showing/hiding additional content.
- **Do** use `asChild` on the trigger if you want to use a custom component like `AppButton`.
- **Don't** use `AppCollapsible` for complex menus; use `AppAccordion` or `AppNavigationMenu` instead.
- If a prop you need is missing, stop and inform the design team.
