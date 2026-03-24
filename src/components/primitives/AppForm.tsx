"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider as RhfFormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "../../lib/utils"

const AppForm = RhfFormProvider

type AppFormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const AppFormFieldContext = React.createContext<AppFormFieldContextValue>(
  {} as AppFormFieldContextValue
)

const AppFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <AppFormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </AppFormFieldContext.Provider>
  )
}

const AppFormItemContext = React.createContext<{ id: string }>(
  {} as { id: string }
)

const AppFormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <AppFormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </AppFormItemContext.Provider>
  )
})
AppFormItem.displayName = "AppFormItem"

const AppFormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { id: formItemId } = React.useContext(AppFormItemContext)
  const form = useFormContext()
  const error = form.formState.errors[props.htmlFor || ""]

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        error && "text-destructive",
        className
      )}
      htmlFor={formItemId}
      {...props}
    />
  )
})
AppFormLabel.displayName = LabelPrimitive.Root.displayName

const AppFormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { id: formItemId } = React.useContext(AppFormItemContext)
  const form = useFormContext()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-invalid={!!form.formState.errors[formItemId]}
      {...props}
    />
  )
})
AppFormControl.displayName = "AppFormControl"

const AppFormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { id } = React.useContext(AppFormItemContext)

  return (
    <p
      ref={ref}
      id={`${id}-form-item-description`}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
AppFormDescription.displayName = "AppFormDescription"

const AppFormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { id } = React.useContext(AppFormItemContext)
  const form = useFormContext()
  const error = form.formState.errors[id]
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={`${id}-form-item-message`}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
AppFormMessage.displayName = "AppFormMessage"

export {
  AppForm,
  AppFormItem,
  AppFormLabel,
  AppFormControl,
  AppFormDescription,
  AppFormMessage,
  AppFormField,
}