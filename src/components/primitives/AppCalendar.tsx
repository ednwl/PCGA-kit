"use client"

import { Calendar } from "../ui/calendar"

/**
 * AppCalendar — A date picker component.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCalendar(props: React.ComponentProps<typeof Calendar>) {
  return <Calendar {...props} />
}

export { AppCalendar }
