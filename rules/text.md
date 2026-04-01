# AppText

> Docs: https://viana-kit.vercel.app/docs/components/text

```tsx
import { AppText } from "@/components/primitives/AppText"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | See table below | — | **Required.** Controls visual style and default HTML tag |
| `as` | `React.ElementType` | — | Overrides the rendered HTML tag while keeping the variant's styles |
| `className` | `string` | — | Additional Tailwind classes |

## Variants

| Variant | Tag | Style |
|---------|-----|-------|
| `display` | `h1` | `text-4xl font-bold tracking-tight` |
| `h1` | `h1` | `text-3xl font-bold tracking-tight` |
| `h2` | `h2` | `text-2xl font-semibold tracking-tight` |
| `h3` | `h3` | `text-xl font-semibold tracking-tight` |
| `h4` | `h4` | `text-lg font-medium` |
| `lead` | `p` | `text-lg text-muted-foreground` |
| `body` | `p` | `text-base leading-7` |
| `small` | `p` | `text-sm` |
| `muted` | `p` | `text-sm text-muted-foreground` |
| `mono` | `p` | `text-sm font-mono` |

## Usage

### Headings
```tsx
<AppText variant="display">Welcome to Viana Kit</AppText>
<AppText variant="h1">Page Title</AppText>
<AppText variant="h2">Section Heading</AppText>
<AppText variant="h3">Subsection</AppText>
<AppText variant="h4">Label</AppText>
```

### Body text
```tsx
<AppText variant="lead">A short introductory sentence that sets context.</AppText>
<AppText variant="body">Full paragraph body text with comfortable line height for reading.</AppText>
<AppText variant="small">Supplementary detail text.</AppText>
<AppText variant="muted">Helper text, captions, or secondary information.</AppText>
<AppText variant="mono">const value = 'code snippet'</AppText>
```

### Override tag (as prop)
```tsx
{/* Render h2 styles on an h3 element for correct document outline */}
<AppText variant="h2" as="h3">Section Title</AppText>

{/* Render body styles on a span for inline use */}
<AppText variant="body" as="span">Inline text</AppText>
```

## Rules
- ✅ Always use `AppText` for all styled text — never use raw `<h1>`, `<h2>`, `<h3>`, `<h4>`, or `<p>`
- ✅ Use the `as` prop when the semantic HTML tag must differ from the visual style
- ❌ Do not set `font-size`, `font-weight`, or text color directly — use the `variant` prop
- ❌ Do not use arbitrary Tailwind type classes (`text-[13px]`, `text-[2rem]`) — use a variant
- ❌ If a variant you need is missing, stop and inform the design team
