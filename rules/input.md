# AppInput

> Docs: https://viana-kit.vercel.app/docs/components/input

```tsx
import { AppInput } from "@/components/primitives/AppInput"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `leftAdornment` | `ReactNode` | — | Icon or element rendered inside the left edge of the input |
| `rightAdornment` | `ReactNode` | — | Icon or element rendered inside the right edge of the input |
| `type` | `string` | `"text"` | HTML input type (text, email, password, number, etc.) |
| `placeholder` | `string` | — | Placeholder text |
| `disabled` | `boolean` | `false` | Disables the input |
| `className` | `string` | — | Additional Tailwind classes applied to the input element |

> Accepts all standard HTML `<input>` attributes in addition to the props above.

## Usage

### Basic
```tsx
<AppInput type="email" placeholder="you@example.com" />
<AppInput type="password" placeholder="••••••••" />
```

### With adornments
```tsx
<AppInput
  type="search"
  placeholder="Search..."
  leftAdornment={<SearchIcon className="size-4" />}
/>

<AppInput
  type="text"
  placeholder="Enter amount"
  leftAdornment={<span className="text-sm text-muted-foreground">$</span>}
  rightAdornment={<span className="text-sm text-muted-foreground">USD</span>}
/>
```

### Disabled
```tsx
<AppInput disabled placeholder="Not editable" />
```

### With label (use AppLabel)
```tsx
<div className="space-y-1.5">
  <AppLabel htmlFor="email">Email</AppLabel>
  <AppInput id="email" type="email" placeholder="you@example.com" />
</div>
```

## Rules
- ✅ Always use `AppInput` — never use a raw `<input>` element
- ✅ Use `leftAdornment` / `rightAdornment` for icons inside the input — do not wrap `AppInput` in a relative `<div>` to position them manually
- ✅ Pair with `AppLabel` using matching `id` and `htmlFor` — never use a raw `<label>`
- ✅ Pair with `AppField` or `AppForm` for full form field layout with error states
- ❌ Do not add `pl-*` or `pr-*` padding when using adornments — padding is adjusted automatically
- ❌ Do not set `width` directly on `AppInput` — control width from the parent container
- ❌ If a prop you need is missing, stop and inform the design team
