# AppAvatar

> Docs: https://viana-kit.vercel.app/docs/components/avatar

```tsx
import { AppAvatar, AppAvatarImage, AppAvatarFallback } from "@/components/primitives/AppAvatar"
```

## AppAvatar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional Tailwind classes for size and styling |

## Usage

### Basic
```tsx
<AppAvatar>
  <AppAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AppAvatarFallback>CN</AppAvatarFallback>
</AppAvatar>
```

### Custom Sizes
```tsx
<AppAvatar className="h-12 w-12">
  <AppAvatarImage src="..." />
  <AppAvatarFallback>JD</AppAvatarFallback>
</AppAvatar>
```

### Avatar Group
```tsx
<div className="flex -space-x-2">
  <AppAvatar className="border-2 border-background">
    <AppAvatarImage src="..." />
    <AppAvatarFallback>U1</AppAvatarFallback>
  </AppAvatar>
  <AppAvatar className="border-2 border-background">
    <AppAvatarImage src="..." />
    <AppAvatarFallback>U2</AppAvatarFallback>
  </AppAvatar>
</div>
```

## Rules
- ✅ Always provide `AppAvatarFallback` for cases where the image fails to load or is not provided
- ✅ Use `alt` text on `AppAvatarImage` for accessibility
- ✅ Use `border-background` on avatars when used in a group to create visual separation
- ❌ Do not use raw `<img>` tags for user avatars — use `AppAvatar` to handle loading and fallback states automatically
- ❌ If a prop you need is missing, stop and inform the design team
