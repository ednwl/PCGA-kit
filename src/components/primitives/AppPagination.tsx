"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination"

/**
 * AppPagination — Displays pagination for navigating through multiple pages.
 * @note Never use the raw HTML equivalent. Use AppPagination.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPagination(props: React.ComponentProps<typeof Pagination>) {
  return <Pagination {...props} />
}

/**
 * AppPaginationContent — The list container for AppPagination items.
 * @note Never use the raw HTML equivalent. Use AppPaginationContent.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPaginationContent(props: React.ComponentProps<typeof PaginationContent>) {
  return <PaginationContent {...props} />
}

/**
 * AppPaginationItem — An individual item within AppPagination.
 * @note Never use the raw HTML equivalent. Use AppPaginationItem.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPaginationItem(props: React.ComponentProps<typeof PaginationItem>) {
  return <PaginationItem {...props} />
}

/**
 * AppPaginationLink — A link component within AppPagination.
 * @note Never use the raw HTML equivalent. Use AppPaginationLink.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPaginationLink(props: React.ComponentProps<typeof PaginationLink> & { isActive?: boolean }) {
  return <PaginationLink {...props} />
}

/**
 * AppPaginationPrevious — A button for navigating to the previous page in AppPagination.
 * @note Never use the raw HTML equivalent. Use AppPaginationPrevious.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPaginationPrevious(props: React.ComponentProps<typeof PaginationPrevious>) {
  return <PaginationPrevious {...props} />
}

/**
 * AppPaginationNext — A button for navigating to the next page in AppPagination.
 * @note Never use the raw HTML equivalent. Use AppPaginationNext.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPaginationNext(props: React.ComponentProps<typeof PaginationNext>) {
  return <PaginationNext {...props} />
}

/**
 * AppPaginationEllipsis — An ellipsis indicator for collapsed AppPagination items.
 * @note Never use the raw HTML equivalent. Use AppPaginationEllipsis.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppPaginationEllipsis(props: React.ComponentProps<typeof PaginationEllipsis>) {
  return <PaginationEllipsis {...props} />
}

export {
  AppPagination,
  AppPaginationContent,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationPrevious,
  AppPaginationNext,
  AppPaginationEllipsis,
}
