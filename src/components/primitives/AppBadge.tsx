import { Badge, badgeVariants } from "../ui/badge"
import type { VariantProps } from "class-variance-authority"

type AppBadgeProps = React.ComponentProps<typeof Badge> &
  VariantProps<typeof badgeVariants>

function AppBadge(props: AppBadgeProps) {
  return <Badge {...props} />
}

export { AppBadge, type AppBadgeProps }
