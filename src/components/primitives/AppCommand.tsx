"use client"

import {
  Command,
  CommandDialog as CommandDialogBase,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../ui/command"

function AppCommand(props: React.ComponentProps<typeof Command>) {
  return <Command {...props} />
}

function AppCommandDialog(props: React.ComponentProps<typeof CommandDialogBase>) {
  return <CommandDialogBase {...props} />
}

function AppCommandInput(props: React.ComponentProps<typeof CommandInput>) {
  return <CommandInput {...props} />
}

function AppCommandList(props: React.ComponentProps<typeof CommandList>) {
  return <CommandList {...props} />
}

function AppCommandEmpty(props: React.ComponentProps<typeof CommandEmpty>) {
  return <CommandEmpty {...props} />
}

function AppCommandGroup(props: React.ComponentProps<typeof CommandGroup>) {
  return <CommandGroup {...props} />
}

function AppCommandItem(props: React.ComponentProps<typeof CommandItem>) {
  return <CommandItem {...props} />
}

function AppCommandShortcut(props: React.HTMLAttributes<HTMLSpanElement>) {
  return <CommandShortcut {...props} />
}

function AppCommandSeparator(props: React.ComponentProps<typeof CommandSeparator>) {
  return <CommandSeparator {...props} />
}

export {
  AppCommand,
  AppCommandDialog,
  AppCommandInput,
  AppCommandList,
  AppCommandEmpty,
  AppCommandGroup,
  AppCommandItem,
  AppCommandShortcut,
  AppCommandSeparator,
}
