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

function AppBreadcrumb(props: React.ComponentProps<typeof Breadcrumb>) {
  return <Breadcrumb {...props} />
}

function AppBreadcrumbList(props: React.ComponentProps<typeof BreadcrumbList>) {
  return <BreadcrumbList {...props} />
}

function AppBreadcrumbItem(props: React.ComponentProps<typeof BreadcrumbItem>) {
  return <BreadcrumbItem {...props} />
}

function AppBreadcrumbLink(props: React.ComponentProps<typeof BreadcrumbLink> & { asChild?: boolean }) {
  return <BreadcrumbLink {...props} />
}

function AppBreadcrumbPage(props: React.ComponentProps<typeof BreadcrumbPage>) {
  return <BreadcrumbPage {...props} />
}

function AppBreadcrumbSeparator(props: React.ComponentProps<typeof BreadcrumbSeparator>) {
  return <BreadcrumbSeparator {...props} />
}

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
