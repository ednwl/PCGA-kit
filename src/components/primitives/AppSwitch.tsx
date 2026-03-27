"use client"

import { Switch } from "../ui/switch"

type AppSwitchProps = React.ComponentPropsWithoutRef<typeof Switch>

function AppSwitch(props: AppSwitchProps) {
  return <Switch {...props} />
}

export { AppSwitch }
