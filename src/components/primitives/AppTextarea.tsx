"use client"

import { Textarea } from "../ui/textarea"

type AppTextareaProps = React.ComponentPropsWithoutRef<typeof Textarea>

function AppTextarea(props: AppTextareaProps) {
  return <Textarea {...props} />
}

export { AppTextarea }
