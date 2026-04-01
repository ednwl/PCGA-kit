"use client"

import { Textarea } from "../ui/textarea"

type AppTextareaProps = React.ComponentPropsWithoutRef<typeof Textarea>

/**
 * AppTextarea — A multi-line text input component.
 * @note Never use the raw HTML equivalent. Use AppTextarea.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTextarea(props: AppTextareaProps) {
  return <Textarea {...props} />
}

export { AppTextarea }
