# AppAccordion

> Docs: https://viana-kit.vercel.app/docs/components/accordion

```tsx
import { AppAccordion, AppAccordionItem, AppAccordionTrigger, AppAccordionContent } from "@/components/primitives/AppAccordion"
```

## AppAccordion

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"single" \| "multiple"` | — | Determines whether a single or multiple items can be opened at once |
| `collapsible` | `boolean` | `false` | When `type` is "single", allows closing the open item by clicking the trigger |
| `defaultValue` | `string \| string[]` | — | The value of the item(s) to expand by default |
| `value` | `string \| string[]` | — | Controlled value of the expanded item(s) |
| `onValueChange` | `(value: string \| string[]) => void` | — | Event handler called when the expanded state changes |

## AppAccordionItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | A unique value for the item |
| `disabled` | `boolean` | `false` | When `true`, prevents the user from interacting with the item |

## Usage

### Basic
```tsx
<AppAccordion type="single" collapsible>
  <AppAccordionItem value="item-1">
    <AppAccordionTrigger>Is it accessible?</AppAccordionTrigger>
    <AppAccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AppAccordionContent>
  </AppAccordionItem>
</AppAccordion>
```

### Multiple
```tsx
<AppAccordion type="multiple">
  <AppAccordionItem value="item-1">
    <AppAccordionTrigger>First Item</AppAccordionTrigger>
    <AppAccordionContent>Content for first item.</AppAccordionContent>
  </AppAccordionItem>
  <AppAccordionItem value="item-2">
    <AppAccordionTrigger>Second Item</AppAccordionTrigger>
    <AppAccordionContent>Content for second item.</AppAccordionContent>
  </AppAccordionItem>
</AppAccordion>
```

## Rules
- ✅ Always use `AppAccordion` components together as a set
- ✅ Provide a unique `value` to each `AppAccordionItem`
- ✅ Use `collapsible` with `type="single"` if you want users to be able to close all items
- ❌ Do not place interactive elements (buttons, links) inside `AppAccordionTrigger`
- ❌ Do not override the chevron rotation or transition manually — it is handled by the primitive
- ❌ If a prop you need is missing, stop and inform the design team
