# AppScrollText

> Docs: https://viana-kit.vercel.app/docs/components/scroll-text

```tsx
import { AppScrollText } from "@/components/primitives/AppScrollText"
```

## AppScrollText

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `direction` | `"left" \| "right"` | `"left"` | The direction of the scrolling text. |
| `speed` | `number` | `50` | The speed of the scrolling animation. |
| `pauseOnHover` | `boolean` | `false` | Whether to pause the animation when hovered. |

## Usage

### Left Scrolling Text
```tsx
<AppScrollText direction="left" className="text-2xl font-bold">
  <span>Special Offer!</span>
  <span>50% Off all items</span>
  <span>Ends tonight!</span>
</AppScrollText>
```

### Fast Right Scrolling Text
```tsx
<AppScrollText direction="right" speed={100} className="text-lg">
  <span>Breaking News: New components released!</span>
</AppScrollText>
```

## Rules

- **Do** use `AppScrollText` for marquee-like announcements.
- **Do** ensure the text remains readable at the chosen `speed`.
- **Don't** use `AppScrollText` for critical information that the user might miss.
- If a prop you need is missing, stop and inform the design team.
