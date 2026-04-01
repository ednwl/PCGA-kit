# AppAspectRatio

> Docs: https://viana-kit.vercel.app/docs/components/aspect-ratio

```tsx
import { AppAspectRatio } from "@/components/primitives/AppAspectRatio"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ratio` | `number` | `1` | The desired aspect ratio (e.g., 16/9, 4/3, 1) |

## Usage

### Basic (16:9)
```tsx
<div className="w-[450px]">
  <AppAspectRatio ratio={16 / 9}>
    <img
      src="..."
      alt="Image"
      className="rounded-md object-cover"
    />
  </AppAspectRatio>
</div>
```

### Square (1:1)
```tsx
<div className="w-[200px]">
  <AppAspectRatio ratio={1}>
    <img
      src="..."
      alt="Profile"
      className="rounded-full object-cover"
    />
  </AppAspectRatio>
</div>
```

## Rules
- ✅ Always wrap `AppAspectRatio` in a container with a defined width
- ✅ Use `object-cover` on images inside `AppAspectRatio` to ensure they fill the container without distortion
- ❌ Do not set a height on the `AppAspectRatio` container — height is determined by the ratio and width
- ❌ If a prop you need is missing, stop and inform the design team
