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

/**
 * AppCommand — A fast and extensible command menu.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCommand(props: React.ComponentProps<typeof Command>) {
  return <Command {...props} />
}

/**
 * AppCommandDialog — A command menu displayed in a dialog.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCommandDialog(props: React.ComponentProps<typeof CommandDialogBase>) {
  return <CommandDialogBase {...props} />
}

/**
 * AppCommandInput — The input field for AppCommand.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCommandInput(props: React.ComponentProps<typeof CommandInput>) {
  return <CommandInput {...props} />
}

/**
 * AppCommandList — The list container for AppCommand items.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCommandList(props: React.ComponentProps<typeof CommandList>) {
  return <CommandList {...props} />
}

/**
 * AppCommandEmpty — The empty state indicator for AppCommand.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCommandEmpty(props: React.ComponentProps<typeof CommandEmpty>) {
  return <CommandEmpty {...props} />
}

/**
 * AppCommandGroup — A grouping component for AppCommand items.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCommandGroup(props: React.ComponentProps<typeof CommandGroup>) {
  return <CommandGroup {...props} />
}

/**
 * AppCommandItem — An individual item within AppCommand.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCommandItem(props: React.ComponentProps<typeof CommandItem>) {
  return <CommandItem {...props} />
}

/**
 * AppCommandShortcut — A keyboard shortcut indicator for AppCommand items.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCommandShortcut(props: React.HTMLAttributes<HTMLSpanElement>) {
  return <CommandShortcut {...props} />
}

/**
 * AppCommandSeparator — A separator component for AppCommand groups.
 * @note If a prop you need is missing, stop and inform the design team.
 */
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
