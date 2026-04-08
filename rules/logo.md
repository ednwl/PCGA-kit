# Logo Assets

```tsx
import { PrimaryLogo, DarkLogo, WhiteLogo } from "@/assets/logos"
import { PrimarySymbol, DarkSymbol, WhiteSymbol } from "@/assets/logos"
```

Also available from the package root:

```tsx
import { PrimaryLogo, WhiteLogo } from "@viana/ui"
```

## Variants

| Component | Fill color | Use on |
|-----------|-----------|--------|
| `PrimaryLogo` | Brand blue (`#1565C0`) | Light backgrounds, white surfaces |
| `DarkLogo` | Dark | Light backgrounds when primary blue is too prominent |
| `WhiteLogo` | White | Dark backgrounds, colored sidebars, dark-mode |
| `PrimarySymbol` | Brand blue | Icon-only contexts on light backgrounds |
| `DarkSymbol` | Dark | Icon-only on light |
| `WhiteSymbol` | White | Icon-only on dark backgrounds or colored fills |

## Default dimensions

All logos share the same `265 × 83` viewBox. Pass `width` and `height` to scale proportionally:

```tsx
<PrimaryLogo width={120} height={38} />   {/* standard header size */}
<WhiteLogo width={160} height={50} />     {/* larger marketing use */}
<WhiteSymbol width={32} height={32} />    {/* icon-only mark */}
```

## Usage

### Docs site header (light + dark mode)

```tsx
<PrimaryLogo className="block dark:hidden" width={120} height={38} />
<WhiteLogo className="hidden dark:block" width={120} height={38} />
```

### Symbol only

```tsx
<WhiteSymbol width={28} height={28} />
```

## Rules

- ✅ Use `PrimaryLogo` on light backgrounds (docs, marketing pages, cards)
- ✅ Use `WhiteLogo` or `WhiteSymbol` on dark backgrounds
- ✅ Support dark mode in the docs site with `block dark:hidden` / `hidden dark:block` pair
- ❌ Do not hardcode logo colors with Tailwind color classes — use the correct variant instead
- ❌ Do not distort the logo — always scale both `width` and `height` proportionally from the `265 × 83` viewBox ratio
- ❌ If you need a logo variant that doesn't exist, inform the design team — do not create ad-hoc SVGs
