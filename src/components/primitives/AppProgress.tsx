"use client"

import { Progress } from "../ui/progress"

type AppProgressProps = React.ComponentPropsWithoutRef<typeof Progress>

function AppProgress(props: AppProgressProps) {
  return <Progress {...props} />
}

export { AppProgress }
