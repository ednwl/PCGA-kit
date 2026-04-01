# AppToaster

> Docs: https://viana-kit.vercel.app/docs/components/toaster

```tsx
import { AppToaster, toast } from "@/components/primitives/AppToaster"
```

## AppToaster

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| — | — | — | No primary props; configuration is handled internally |

## toast (sonnerToast)

| Method | Description |
|--------|-------------|
| `toast(message, options?)` | Show a default toast |
| `toast.success(message, options?)` | Show a success toast |
| `toast.error(message, options?)` | Show an error toast |
| `toast.info(message, options?)` | Show an info toast |

## Usage

### Setup (Layout)
```tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <AppToaster />
      </body>
    </html>
  )
}
```

### Triggering toast
```tsx
<AppButton
  onClick={() =>
    toast.success("Event created", {
      description: "Monday, January 3rd at 6:00pm",
    })
  }
>
  Show success
</AppButton>
```

## Rules
- ✅ Place `<AppToaster />` once in your root layout
- ✅ Use `toast.success` or `toast.error` for feedback on user actions
- ✅ Use the `description` option for additional context
- ❌ Do not create multiple `AppToaster` instances
- ❌ If a prop you need is missing, stop and inform the design team
