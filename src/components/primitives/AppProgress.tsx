"use client"

import { Progress } from "../ui/progress"

type AppProgressProps = React.ComponentPropsWithoutRef<typeof Progress>

/**
 * AppProgress — Displays an indicator showing the completion progress of a task.
 * @note Never use the raw HTML equivalent. Use AppProgress.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppProgress(props: AppProgressProps) {
  return <Progress {...props} />
}

export { AppProgress }
