# AppForm

> Docs: https://viana-kit.vercel.app/docs/components/form

```tsx
import {
  AppForm,
  AppFormItem,
  AppFormLabel,
  AppFormControl,
  AppFormDescription,
  AppFormMessage,
  AppFormField,
  useAppFormField,
} from "@/components/primitives/AppForm"
```

## AppFormField

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `control` | `Control<any>` | - | The control object from `useForm`. |
| `name` | `string` | - | The name of the field in the form data. |
| `render` | `(props: { field: any }) => React.ReactNode` | - | A function that returns the component to render. |

## Usage

### Basic Form with Validation
```tsx
const form = useForm<FormValues>({
  defaultValues: { username: "" },
})

<AppForm {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <AppFormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <AppFormItem>
          <AppFormLabel>Username</AppFormLabel>
          <AppFormControl>
            <AppInput placeholder="Enter your username" {...field} />
          </AppFormControl>
          <AppFormDescription>Your public name.</AppFormDescription>
          <AppFormMessage />
        </AppFormItem>
      )}
    />
    <AppButton type="submit">Submit</AppButton>
  </form>
</AppForm>
```

## Rules

- **Do** use `AppForm` and `AppFormField` for all complex forms requiring validation.
- **Do** leverage `react-hook-form` for form management.
- **Don't** use raw `<form>` without `AppForm` if validation is needed.
- If a prop you need is missing, stop and inform the design team.
