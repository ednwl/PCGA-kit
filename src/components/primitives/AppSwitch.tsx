"use client"

import { Switch } from "../ui/switch"

type AppSwitchProps = React.ComponentPropsWithoutRef<typeof Switch>

/**
 * AppSwitch — A control that allows the user to toggle between checked and unchecked states.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppSwitch(props: AppSwitchProps) {
  return <Switch {...props} />
}

export { AppSwitch }
