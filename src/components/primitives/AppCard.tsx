import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/card"

/**
 * AppCard — A flexible container component for displaying content in a box.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCard(props: React.ComponentProps<typeof Card>) {
  return <Card {...props} />
}

/**
 * AppCardHeader — The header section of an AppCard.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCardHeader(props: React.ComponentProps<typeof CardHeader>) {
  return <CardHeader {...props} />
}

/**
 * AppCardTitle — The title component for AppCard.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCardTitle(props: React.ComponentProps<typeof CardTitle>) {
  return <CardTitle {...props} />
}

/**
 * AppCardDescription — The description component for AppCard.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCardDescription(
  props: React.ComponentProps<typeof CardDescription>
) {
  return <CardDescription {...props} />
}

/**
 * AppCardAction — An action component for AppCard.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCardAction(props: React.ComponentProps<typeof CardAction>) {
  return <CardAction {...props} />
}

/**
 * AppCardContent — The main content area of an AppCard.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCardContent(props: React.ComponentProps<typeof CardContent>) {
  return <CardContent {...props} />
}

/**
 * AppCardFooter — The footer section of an AppCard.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppCardFooter(props: React.ComponentProps<typeof CardFooter>) {
  return <CardFooter {...props} />
}

export {
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardAction,
  AppCardContent,
  AppCardFooter,
}
