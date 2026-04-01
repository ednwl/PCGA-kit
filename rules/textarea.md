# AppTextarea

> Docs: https://viana-kit.vercel.app/docs/components/textarea

```tsx
import { AppTextarea } from "@/components/primitives/AppTextarea"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | — | Placeholder text |
| `disabled` | `boolean` | `false` | Disables the textarea |
| `className` | `string` | — | Additional Tailwind classes |

> Accepts all standard HTML `<textarea>` attributes in addition to the props above.

## Usage

### Basic
```tsx
<AppTextarea placeholder="Type your message here..." />
```

### With Label
```tsx
<div className="grid w-full gap-1.5">
  <AppLabel htmlFor="message">Your message</AppLabel>
  <AppTextarea placeholder="Type your message here." id="message" />
</div>
```

## Rules
- ✅ Always use `AppTextarea` — never use a raw `<textarea>` element
- ✅ Use `AppLabel` for accessibility
- ✅ Control height via `rows` attribute or Tailwind `h-*` classes
- ❌ If a prop you need is missing, stop and inform the design team
