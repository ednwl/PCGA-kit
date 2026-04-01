# AppTable

> Docs: https://viana-kit.vercel.app/docs/components/table

```tsx
import { 
  AppTable, 
  AppTableHeader, 
  AppTableBody, 
  AppTableFooter, 
  AppTableHead, 
  AppTableRow, 
  AppTableCell, 
  AppTableCaption 
} from "@/components/primitives/AppTable"
```

## AppTable

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Table content (Header, Body, etc.) |

## AppTableRow

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Row content (Cells or Heads) |

## Usage

### Basic
```tsx
<AppTable>
  <AppTableHeader>
    <AppTableRow>
      <AppTableHead>Name</AppTableHead>
      <AppTableHead>Role</AppTableHead>
    </AppTableRow>
  </AppTableHeader>
  <AppTableBody>
    <AppTableRow>
      <AppTableCell>John Doe</AppTableCell>
      <AppTableCell>Admin</AppTableCell>
    </AppTableRow>
  </AppTableBody>
</AppTable>
```

## Rules
- ✅ Always use `AppTable` and its sub-components — never use raw `<table>`, `<tr>`, `<td>`, etc.
- ✅ Use `AppTableHeader` for the column titles section
- ✅ Use `AppTableBody` for the main data rows
- ❌ Do not apply direct width/height to table cells unless absolutely necessary; use Tailwind classes on the container if needed
- ❌ If a prop you need is missing, stop and inform the design team
