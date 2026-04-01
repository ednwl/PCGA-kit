import { Badge, badgeVariants } from "../ui/badge"
import type { VariantProps } from "class-variance-authority"

type AppBadgeProps = React.ComponentProps<typeof Badge> &
  VariantProps<typeof badgeVariants>

/**
 * AppBadge — Displays a badge or a component that looks like a badge.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppBadge(props: AppBadgeProps) {
  return <Badge {...props} />
}

export { AppBadge, type AppBadgeProps }
