# AppNavigationMenu

> Docs: https://viana-kit.vercel.app/docs/components/navigation-menu

```tsx
import {
  AppNavigationMenu,
  AppNavigationMenuList,
  AppNavigationMenuItem,
  AppNavigationMenuTrigger,
  AppNavigationMenuContent,
  AppNavigationMenuLink,
  AppNavigationMenuIndicator,
  AppNavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/primitives/AppNavigationMenu"
```

## AppNavigationMenu

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | The orientation of the menu. |

## AppNavigationMenuLink

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `active` | `boolean` | - | Whether the link is currently active. |
| `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child. |

## Usage

### Standard Navigation Menu
```tsx
<AppNavigationMenu>
  <AppNavigationMenuList>
    <AppNavigationMenuItem>
      <AppNavigationMenuTrigger>Components</AppNavigationMenuTrigger>
      <AppNavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4">
          <li>
            <AppNavigationMenuLink asChild>
              <a href="/docs/alert">Alert</a>
            </AppNavigationMenuLink>
          </li>
        </ul>
      </AppNavigationMenuContent>
    </AppNavigationMenuItem>
    <AppNavigationMenuItem>
      <AppNavigationMenuLink className={navigationMenuTriggerStyle()} href="/docs">
        Documentation
      </AppNavigationMenuLink>
    </AppNavigationMenuItem>
  </AppNavigationMenuList>
</AppNavigationMenu>
```

## Rules

- **Do** use `AppNavigationMenu` for primary website navigation.
- **Do** use `navigationMenuTriggerStyle()` for consistent styling on top-level links.
- **Don't** nest `AppNavigationMenu` components.
- If a prop you need is missing, stop and inform the design team.
