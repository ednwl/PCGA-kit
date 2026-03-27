"use client"

import { Button, buttonVariants } from "../ui/button"
import type { VariantProps } from "class-variance-authority"

type AppButtonProps = React.ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants>

function AppButton(props: AppButtonProps) {
  return <Button {...props} />
}

export { AppButton, type AppButtonProps }
