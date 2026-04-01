# AppCalendar

> Docs: https://viana-kit.vercel.app/docs/components/calendar

```tsx
import { AppCalendar } from "@/components/primitives/AppCalendar"
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `"single" \| "range" \| "multiple"` | `"single"` | Selection mode |
| `selected` | `Date \| Date[] \| DateRange` | — | The selected date(s) |
| `onSelect` | `(date) => void` | — | Event handler for date selection |
| `numberOfMonths` | `number` | `1` | Number of months to display |
| `showOutsideDays` | `boolean` | `true` | Whether to show days from preceding/following months |
| `disabled` | `boolean \| Date[] \| Matcher` | — | Disable specific dates |

## Usage

### Basic
```tsx
<AppCalendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>
```

### Date Range
```tsx
<AppCalendar
  mode="range"
  selected={range}
  onSelect={setRange}
  numberOfMonths={2}
  className="rounded-md border"
/>
```

### With Popover (Date Picker)
```tsx
<AppPopover>
  <AppPopoverTrigger asChild>
    <AppButton variant="outline" iconLeft={<CalendarIcon />}>
      {date ? format(date, "PPP") : "Pick a date"}
    </AppButton>
  </AppPopoverTrigger>
  <AppPopoverContent className="w-auto p-0">
    <AppCalendar mode="single" selected={date} onSelect={setDate} />
  </AppPopoverContent>
</AppPopover>
```

## Rules
- ✅ Always use `mode` to specify the selection behavior
- ✅ Use `AppPopover` to create a dropdown date picker
- ✅ Use `numberOfMonths={2}` for range selection to improve usability
- ❌ Do not use `AppCalendar` for simple month/year selection — it is optimized for date selection
- ❌ If a prop you need is missing, stop and inform the design team
