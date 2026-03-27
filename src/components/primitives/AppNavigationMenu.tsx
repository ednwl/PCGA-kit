"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"

function AppNavigationMenu(props: React.ComponentProps<typeof NavigationMenu>) {
  return <NavigationMenu {...props} />
}

function AppNavigationMenuList(props: React.ComponentProps<typeof NavigationMenuList>) {
  return <NavigationMenuList {...props} />
}

function AppNavigationMenuItem(props: React.ComponentProps<typeof NavigationMenuItem>) {
  return <NavigationMenuItem {...props} />
}

function AppNavigationMenuTrigger(props: React.ComponentProps<typeof NavigationMenuTrigger>) {
  return <NavigationMenuTrigger {...props} />
}

function AppNavigationMenuContent(props: React.ComponentProps<typeof NavigationMenuContent>) {
  return <NavigationMenuContent {...props} />
}

function AppNavigationMenuLink(props: React.ComponentProps<typeof NavigationMenuLink>) {
  return <NavigationMenuLink {...props} />
}

function AppNavigationMenuIndicator(props: React.ComponentProps<typeof NavigationMenuIndicator>) {
  return <NavigationMenuIndicator {...props} />
}

function AppNavigationMenuViewport(props: React.ComponentProps<typeof NavigationMenuViewport>) {
  return <NavigationMenuViewport {...props} />
}

export {
  AppNavigationMenu,
  AppNavigationMenuList,
  AppNavigationMenuItem,
  AppNavigationMenuTrigger,
  AppNavigationMenuContent,
  AppNavigationMenuLink,
  AppNavigationMenuIndicator,
  AppNavigationMenuViewport,
  navigationMenuTriggerStyle,
}
