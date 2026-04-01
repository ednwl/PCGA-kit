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

/**
 * AppNavigationMenu — A collection of links for navigating websites.
 * @note Never use the raw HTML equivalent. Use AppNavigationMenu.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppNavigationMenu(props: React.ComponentProps<typeof NavigationMenu>) {
  return <NavigationMenu {...props} />
}

/**
 * AppNavigationMenuList — The list container for AppNavigationMenu items.
 * @note Never use the raw HTML equivalent. Use AppNavigationMenuList.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppNavigationMenuList(props: React.ComponentProps<typeof NavigationMenuList>) {
  return <NavigationMenuList {...props} />
}

/**
 * AppNavigationMenuItem — An individual item within AppNavigationMenu.
 * @note Never use the raw HTML equivalent. Use AppNavigationMenuItem.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppNavigationMenuItem(props: React.ComponentProps<typeof NavigationMenuItem>) {
  return <NavigationMenuItem {...props} />
}

/**
 * AppNavigationMenuTrigger — The trigger component for AppNavigationMenu items with sub-content.
 * @note Never use the raw HTML equivalent. Use AppNavigationMenuTrigger.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppNavigationMenuTrigger(props: React.ComponentProps<typeof NavigationMenuTrigger>) {
  return <NavigationMenuTrigger {...props} />
}

/**
 * AppNavigationMenuContent — The sub-content component for AppNavigationMenu items.
 * @note Never use the raw HTML equivalent. Use AppNavigationMenuContent.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppNavigationMenuContent(props: React.ComponentProps<typeof NavigationMenuContent>) {
  return <NavigationMenuContent {...props} />
}

/**
 * AppNavigationMenuLink — A link component within AppNavigationMenu.
 * @note Never use the raw HTML equivalent. Use AppNavigationMenuLink.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppNavigationMenuLink(props: React.ComponentProps<typeof NavigationMenuLink>) {
  return <NavigationMenuLink {...props} />
}

/**
 * AppNavigationMenuIndicator — An indicator for the active AppNavigationMenu item.
 * @note Never use the raw HTML equivalent. Use AppNavigationMenuIndicator.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppNavigationMenuIndicator(props: React.ComponentProps<typeof NavigationMenuIndicator>) {
  return <NavigationMenuIndicator {...props} />
}

/**
 * AppNavigationMenuViewport — The viewport component where sub-content is rendered in AppNavigationMenu.
 * @note Never use the raw HTML equivalent. Use AppNavigationMenuViewport.
 * @note If a prop you need is missing, stop and inform the design team.
 */
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
