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

function AppPagination(props: React.ComponentProps<typeof Pagination>) {
  return <Pagination {...props} />
}

function AppPaginationContent(props: React.ComponentProps<typeof PaginationContent>) {
  return <PaginationContent {...props} />
}

function AppPaginationItem(props: React.ComponentProps<typeof PaginationItem>) {
  return <PaginationItem {...props} />
}

function AppPaginationLink(props: React.ComponentProps<typeof PaginationLink> & { isActive?: boolean }) {
  return <PaginationLink {...props} />
}

function AppPaginationPrevious(props: React.ComponentProps<typeof PaginationPrevious>) {
  return <PaginationPrevious {...props} />
}

function AppPaginationNext(props: React.ComponentProps<typeof PaginationNext>) {
  return <PaginationNext {...props} />
}

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
