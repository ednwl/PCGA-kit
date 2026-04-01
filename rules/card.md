# AppCard

> Docs: https://viana-kit.vercel.app/docs/components/card

```tsx
import {
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardAction,
  AppCardContent,
  AppCardFooter,
} from "@/components/primitives/AppCard"
```

## AppCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"default" \| "sm"` | `"default"` | Padding and spacing size |

## Usage

### Basic
```tsx
<AppCard>
  <AppCardHeader>
    <AppCardTitle>Project Update</AppCardTitle>
    <AppCardDescription>Deploying to production tomorrow.</AppCardDescription>
  </AppCardHeader>
  <AppCardContent>
    <p>Everything is looking good. All tests passed.</p>
  </AppCardContent>
  <AppCardFooter>
    <AppButton>Dismiss</AppButton>
  </AppCardFooter>
</AppCard>
```

### With Action
```tsx
<AppCardHeader>
  <AppCardTitle>Settings</AppCardTitle>
  <AppCardDescription>Manage your account settings.</AppCardDescription>
  <AppCardAction>
    <AppButton variant="outline" size="sm">Edit</AppButton>
  </AppCardAction>
</AppCardHeader>
```

### Small Size
```tsx
<AppCard size="sm">
  <AppCardHeader>
    <AppCardTitle>Summary</AppCardTitle>
  </AppCardHeader>
  <AppCardContent>
    <p>Compact card content.</p>
  </AppCardContent>
</AppCard>
```

## Rules
- ✅ Use `AppCardAction` for actions that should live in the header (aligned top-right)
- ✅ Use `AppCardHeader` to group Title, Description, and Action together
- ✅ Use `AppCard` as the standard container for grouped information
- ❌ Do not nest multiple `AppCard` components unless visually distinct
- ❌ Do not manually apply padding to children — use the `size` prop or Tailwind on the child if necessary
- ❌ If a prop you need is missing, stop and inform the design team
