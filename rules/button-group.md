# AppButtonGroup

> Docs: https://viana-kit.vercel.app/docs/components/button-group

```tsx
import { AppButtonGroup } from "@/components/primitives/AppButtonGroup"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional Tailwind classes |

## Usage

### Button Group
```tsx
<AppButtonGroup>
  <AppButton variant="outline">Copy</AppButton>
  <AppButton variant="outline">Paste</AppButton>
  <AppButton variant="outline">Clear</AppButton>
</AppButtonGroup>
```

### Split Button
```tsx
<AppButtonGroup>
  <AppButton>Publish</AppButton>
  <AppDropdownMenu>
    <AppDropdownMenuTrigger asChild>
      <AppButton size="icon">
        <ChevronDownIcon className="size-4" />
      </AppButton>
    </AppDropdownMenuTrigger>
    <AppDropdownMenuContent align="end">
      <AppDropdownMenuItem>Schedule</AppDropdownMenuItem>
      <AppDropdownMenuItem>Save draft</AppDropdownMenuItem>
    </AppDropdownMenuContent>
  </AppDropdownMenu>
</AppButtonGroup>
```

### Input with Button
```tsx
<AppButtonGroup>
  <AppInput placeholder="Search..." />
  <AppButton variant="outline">Search</AppButton>
</AppButtonGroup>
```

## Rules
- ✅ Use `AppButtonGroup` to visually join related inputs and buttons
- ✅ Ensure all buttons within a group use the same `size` and `variant` for visual consistency
- ✅ Use `AppButtonGroup` for "Split Buttons" (primary action + dropdown)
- ❌ Do not use `AppButtonGroup` for disparate actions that aren't related
- ❌ Do not manually override border-radii of children — `AppButtonGroup` handles this automatically
- ❌ If a prop you need is missing, stop and inform the design team
