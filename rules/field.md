# AppField

> Docs: https://viana-kit.vercel.app/docs/components/field

```tsx
import { AppField, AppFieldLabel, AppFieldDescription, AppFieldError } from "@/components/primitives/AppField"
```

## AppField

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `className` | `string` | - | Additional CSS classes for the container. |

## AppFieldLabel

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `required` | `boolean` | `false` | If true, appends a red asterisk to the label. |
| `htmlFor` | `string` | - | The ID of the form element the label is associated with. |

## Usage

### Default Field
```tsx
<AppField>
  <AppFieldLabel htmlFor="email" required>Email Address</AppFieldLabel>
  <AppInput id="email" type="email" placeholder="you@example.com" />
  <AppFieldDescription>We'll never share your email.</AppFieldDescription>
</AppField>
```

### Field with Error
```tsx
<AppField>
  <AppFieldLabel htmlFor="password">Password</AppFieldLabel>
  <AppInput id="password" type="password" className="border-destructive" />
  <AppFieldError>Password is too short.</AppFieldError>
</AppField>
```

## Rules

- **Do** use `AppField` to group related form elements (label, input, description).
- **Do** use the `required` prop on `AppFieldLabel` for mandatory fields.
- **Don't** manually position labels and inputs; let `AppField` handle the spacing.
- If a prop you need is missing, stop and inform the design team.
