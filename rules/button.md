# AppButton

> Docs: https://viana-kit.vercel.app/docs/components/button

```tsx
import { AppButton } from "@/components/primitives/AppButton"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "link"` | `"default"` | Visual style of the button |
| `size` | `"default" \| "xs" \| "sm" \| "lg" \| "icon" \| "icon-xs" \| "icon-sm" \| "icon-lg"` | `"default"` | Size of the button |
| `loading` | `boolean` | `false` | Shows a spinner and disables the button |
| `iconLeft` | `ReactNode` | — | Icon rendered before the label |
| `iconRight` | `ReactNode` | — | Icon rendered after the label |
| `disabled` | `boolean` | `false` | Disables the button |
| `asChild` | `boolean` | `false` | Renders as child element via Radix Slot |
| `className` | `string` | — | Additional Tailwind classes |

## Usage

### Basic
```tsx
<AppButton>Save</AppButton>
<AppButton variant="outline">Cancel</AppButton>
<AppButton variant="destructive">Delete account</AppButton>
<AppButton variant="ghost">Dismiss</AppButton>
```

### Sizes
```tsx
<AppButton size="sm">Small</AppButton>
<AppButton size="lg">Large</AppButton>
<AppButton size="icon"><TrashIcon /></AppButton>
```

### Loading state
```tsx
<AppButton loading>Saving...</AppButton>
<AppButton loading variant="outline">Submitting</AppButton>
```

### With icons
```tsx
<AppButton iconLeft={<PlusIcon />}>Add item</AppButton>
<AppButton iconRight={<ArrowRightIcon />}>Continue</AppButton>
<AppButton iconLeft={<DownloadIcon />} variant="outline">Export</AppButton>
```

### As a link
```tsx
<AppButton asChild>
  <a href="/dashboard">Go to dashboard</a>
</AppButton>
```

## Rules
- ✅ Always use `AppButton` — never use a raw `<button>` element
- ✅ Use the `loading` prop for async actions — do not place `AppSpinner` inside manually
- ✅ Use `iconLeft` / `iconRight` for icons — do not wrap icons in extra `<div>` or `<span>`
- ✅ Use `variant` for color intent — do not override button color with Tailwind color classes
- ❌ Do not use `size="icon"` with text children — icon size is for icon-only buttons
- ❌ Do not set `gap` or `flex` on the button — icon spacing is controlled by the size variant
- ❌ If a prop you need is missing, stop and inform the design team
