"use client"

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table"

/**
 * AppTable — A responsive table component for displaying data in rows and columns.
 * @note Never use the raw HTML equivalent. Use AppTable.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTable(props: React.ComponentProps<typeof Table>) {
  return <Table {...props} />
}

/**
 * AppTableHeader — The header section of an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableHeader.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTableHeader(props: React.ComponentProps<typeof TableHeader>) {
  return <TableHeader {...props} />
}

/**
 * AppTableBody — The body section of an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableBody.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTableBody(props: React.ComponentProps<typeof TableBody>) {
  return <TableBody {...props} />
}

/**
 * AppTableFooter — The footer section of an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableFooter.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTableFooter(props: React.ComponentProps<typeof TableFooter>) {
  return <TableFooter {...props} />
}

/**
 * AppTableHead — A header cell within an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableHead.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTableHead(props: React.ComponentProps<typeof TableHead>) {
  return <TableHead {...props} />
}

/**
 * AppTableRow — A row within an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableRow.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTableRow(props: React.ComponentProps<typeof TableRow>) {
  return <TableRow {...props} />
}

/**
 * AppTableCell — A cell within an AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableCell.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTableCell(props: React.ComponentProps<typeof TableCell>) {
  return <TableCell {...props} />
}

/**
 * AppTableCaption — A caption component for AppTable.
 * @note Never use the raw HTML equivalent. Use AppTableCaption.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppTableCaption(props: React.ComponentProps<typeof TableCaption>) {
  return <TableCaption {...props} />
}

export { AppTable, AppTableHeader, AppTableBody, AppTableFooter, AppTableHead, AppTableRow, AppTableCell, AppTableCaption }
