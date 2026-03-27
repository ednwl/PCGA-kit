import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/card"

function AppCard(props: React.ComponentProps<typeof Card>) {
  return <Card {...props} />
}

function AppCardHeader(props: React.ComponentProps<typeof CardHeader>) {
  return <CardHeader {...props} />
}

function AppCardTitle(props: React.ComponentProps<typeof CardTitle>) {
  return <CardTitle {...props} />
}

function AppCardDescription(
  props: React.ComponentProps<typeof CardDescription>
) {
  return <CardDescription {...props} />
}

function AppCardAction(props: React.ComponentProps<typeof CardAction>) {
  return <CardAction {...props} />
}

function AppCardContent(props: React.ComponentProps<typeof CardContent>) {
  return <CardContent {...props} />
}

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
