# AppSkeleton

> Docs: https://viana-kit.vercel.app/docs/components/skeleton

```tsx
import { AppSkeleton } from "@/components/primitives/AppSkeleton"
```

## AppSkeleton

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `className` | `string` | - | Used to set dimensions and shape (e.g. `h-10 w-10 rounded-full`). |

## Usage

### Simple Card Skeleton
```tsx
<div className="flex items-center space-x-4">
  <AppSkeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <AppSkeleton className="h-4 w-[250px]" />
    <AppSkeleton className="h-4 w-[200px]" />
  </div>
</div>
```

### Profile Skeleton
```tsx
<div className="flex flex-col space-y-3">
  <AppSkeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <AppSkeleton className="h-4 w-[250px]" />
    <AppSkeleton className="h-4 w-[200px]" />
  </div>
</div>
```

## Rules

- **Do** use `AppSkeleton` to indicate content is loading, mirroring the actual layout.
- **Do** use consistent spacing and sizing that matches the final component.
- **Don't** use `AppSkeleton` for purely decorative elements.
- **Don't** use too many skeletons at once if it causes excessive flickering on fast connections.

If a prop you need is missing, stop and inform the design team.
