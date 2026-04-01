"use client"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"

/**
 * AppBreadcrumb — Displays the path to the current resource using a hierarchy of links.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppBreadcrumb(props: React.ComponentProps<typeof Breadcrumb>) {
  return <Breadcrumb {...props} />
}

/**
 * AppBreadcrumbList — The list container for AppBreadcrumb.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppBreadcrumbList(props: React.ComponentProps<typeof BreadcrumbList>) {
  return <BreadcrumbList {...props} />
}

/**
 * AppBreadcrumbItem — An individual item within AppBreadcrumb.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppBreadcrumbItem(props: React.ComponentProps<typeof BreadcrumbItem>) {
  return <BreadcrumbItem {...props} />
}

/**
 * AppBreadcrumbLink — A link component for AppBreadcrumb.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppBreadcrumbLink(props: React.ComponentProps<typeof BreadcrumbLink> & { asChild?: boolean }) {
  return <BreadcrumbLink {...props} />
}

/**
 * AppBreadcrumbPage — The current page indicator for AppBreadcrumb.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppBreadcrumbPage(props: React.ComponentProps<typeof BreadcrumbPage>) {
  return <BreadcrumbPage {...props} />
}

/**
 * AppBreadcrumbSeparator — The separator component for AppBreadcrumb items.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppBreadcrumbSeparator(props: React.ComponentProps<typeof BreadcrumbSeparator>) {
  return <BreadcrumbSeparator {...props} />
}

/**
 * AppBreadcrumbEllipsis — An ellipsis indicator for collapsed AppBreadcrumb items.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppBreadcrumbEllipsis(props: React.ComponentProps<typeof BreadcrumbEllipsis>) {
  return <BreadcrumbEllipsis {...props} />
}

export {
  AppBreadcrumb,
  AppBreadcrumbList,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
  AppBreadcrumbEllipsis,
}
