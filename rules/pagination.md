# AppPagination

> Docs: https://viana-kit.vercel.app/docs/components/pagination

```tsx
import {
  AppPagination,
  AppPaginationContent,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationPrevious,
  AppPaginationNext,
  AppPaginationEllipsis,
} from "@/components/primitives/AppPagination"
```

## AppPaginationLink

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isActive` | `boolean` | `false` | Whether the link represents the current page. |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"icon"` | The size of the link. |

## Usage

### Default Pagination
```tsx
<AppPagination>
  <AppPaginationContent>
    <AppPaginationItem>
      <AppPaginationPrevious href="#" />
    </AppPaginationItem>
    <AppPaginationItem>
      <AppPaginationLink href="#">1</AppPaginationLink>
    </AppPaginationItem>
    <AppPaginationItem>
      <AppPaginationLink href="#" isActive>2</AppPaginationLink>
    </AppPaginationItem>
    <AppPaginationItem>
      <AppPaginationEllipsis />
    </AppPaginationItem>
    <AppPaginationItem>
      <AppPaginationNext href="#" />
    </AppPaginationItem>
  </AppPaginationContent>
</AppPagination>
```

## Rules

- **Do** use `AppPagination` for navigating through paginated lists.
- **Do** mark the current page with `isActive`.
- **Don't** show too many page links; use `AppPaginationEllipsis` for collapsed ranges.
- If a prop you need is missing, stop and inform the design team.
