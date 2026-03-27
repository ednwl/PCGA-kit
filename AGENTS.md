# Viana Kit — AI Agent Guide

This file tells AI agents how to work in this codebase. Read it fully before writing any code.

---

## What this repo is

`viana-kit` is a **distribution repo** for the Viana Kit design system. It contains:
- Pre-built UI primitives you must use as-is
- Design tokens wired into Tailwind CSS v4
- A place for you to build product UI on top of the system

Source of truth for primitives lives in `viana-kit-core`. Updates flow down into this repo via the Viana CLI.

---

## Architecture — three layers

```
src/components/
├── ui/           ← Layer 1: shadcn/ui base components. NEVER TOUCH.
├── primitives/   ← Layer 2: Viana Kit wrappers. NEVER TOUCH.
└── blocks/       ← Layer 3: YOUR work lives here. Compose primitives into product UI.

src/app/          ← Pages. Import from blocks/ or primitives/ directly.
```

**The rule is simple:**
- `ui/` and `primitives/` are managed files. The Viana CLI overwrites them on update.
- `blocks/` is yours. Create freely. Never edit managed files.
- If a primitive doesn't do what you need, wrap it — don't modify it.

---

## Available primitives

Import from the individual file path or from the barrel:

```tsx
// Barrel (all components)
import { AppButton, AppCard } from "@/components/primitives"

// Individual (preferred for tree-shaking)
import { AppButton } from "@/components/primitives/AppButton"
```

### Full component list

| Component | Export(s) |
|-----------|-----------|
| **AppAccordion** | `AppAccordion`, `AppAccordionItem`, `AppAccordionTrigger`, `AppAccordionContent` |
| **AppAlert** | `AppAlert`, `AppAlertTitle`, `AppAlertDescription` |
| **AppAlertDialog** | `AppAlertDialog`, `AppAlertDialogTrigger`, `AppAlertDialogContent`, `AppAlertDialogHeader`, `AppAlertDialogFooter`, `AppAlertDialogTitle`, `AppAlertDialogDescription`, `AppAlertDialogAction`, `AppAlertDialogCancel` |
| **AppAspectRatio** | `AppAspectRatio` |
| **AppAvatar** | `AppAvatar`, `AppAvatarImage`, `AppAvatarFallback` |
| **AppBadge** | `AppBadge` |
| **AppBreadcrumb** | `AppBreadcrumb`, `AppBreadcrumbList`, `AppBreadcrumbItem`, `AppBreadcrumbLink`, `AppBreadcrumbPage`, `AppBreadcrumbSeparator`, `AppBreadcrumbEllipsis` |
| **AppButton** | `AppButton` |
| **AppButtonGroup** | `AppButtonGroup` |
| **AppCalendar** | `AppCalendar` |
| **AppCard** | `AppCard`, `AppCardHeader`, `AppCardTitle`, `AppCardDescription`, `AppCardAction`, `AppCardContent`, `AppCardFooter` |
| **AppCheckbox** | `AppCheckbox` |
| **AppCollapsible** | `AppCollapsible`, `AppCollapsibleTrigger`, `AppCollapsibleContent` |
| **AppCommand** | `AppCommand`, `AppCommandDialog`, `AppCommandInput`, `AppCommandList`, `AppCommandEmpty`, `AppCommandGroup`, `AppCommandItem`, `AppCommandShortcut`, `AppCommandSeparator` |
| **AppContextMenu** | `AppContextMenu`, `AppContextMenuTrigger`, `AppContextMenuContent`, `AppContextMenuItem`, `AppContextMenuSeparator`, `AppContextMenuLabel` |
| **AppDialog** | `AppDialog`, `AppDialogTrigger`, `AppDialogContent`, `AppDialogHeader`, `AppDialogTitle`, `AppDialogDescription`, `AppDialogFooter`, `AppDialogClose` |
| **AppDrawer** | `AppDrawer`, `AppDrawerTrigger`, `AppDrawerContent`, `AppDrawerHeader`, `AppDrawerTitle`, `AppDrawerDescription`, `AppDrawerFooter`, `AppDrawerClose` |
| **AppDropdownMenu** | `AppDropdownMenu`, `AppDropdownMenuTrigger`, `AppDropdownMenuContent`, `AppDropdownMenuItem`, `AppDropdownMenuSeparator`, `AppDropdownMenuLabel`, `AppDropdownMenuCheckboxItem`, `AppDropdownMenuRadioGroup`, `AppDropdownMenuRadioItem`, `AppDropdownMenuSub`, `AppDropdownMenuSubTrigger`, `AppDropdownMenuSubContent`, `AppDropdownMenuShortcut` |
| **AppField** | `AppField`, `AppFieldLabel`, `AppFieldDescription`, `AppFieldError` |
| **AppForm** | `AppForm`, `AppFormField`, `AppFormItem`, `AppFormLabel`, `AppFormControl`, `AppFormDescription`, `AppFormMessage` |
| **AppHoverCard** | `AppHoverCard`, `AppHoverCardTrigger`, `AppHoverCardContent` |
| **AppInput** | `AppInput` |
| **AppLabel** | `AppLabel` |
| **AppNavigationMenu** | `AppNavigationMenu`, `AppNavigationMenuList`, `AppNavigationMenuItem`, `AppNavigationMenuTrigger`, `AppNavigationMenuContent`, `AppNavigationMenuLink` |
| **AppPagination** | `AppPagination`, `AppPaginationContent`, `AppPaginationItem`, `AppPaginationLink`, `AppPaginationPrevious`, `AppPaginationNext`, `AppPaginationEllipsis` |
| **AppPopover** | `AppPopover`, `AppPopoverTrigger`, `AppPopoverContent` |
| **AppProgress** | `AppProgress` |
| **AppRadioGroup** | `AppRadioGroup`, `AppRadioGroupItem` |
| **AppScrollArea** | `AppScrollArea`, `AppScrollBar` |
| **AppScrollText** | `AppScrollText` |
| **AppSelect** | `AppSelect`, `AppSelectTrigger`, `AppSelectValue`, `AppSelectContent`, `AppSelectItem`, `AppSelectLabel`, `AppSelectSeparator` |
| **AppSeparator** | `AppSeparator` |
| **AppSheet** | `AppSheet`, `AppSheetTrigger`, `AppSheetContent`, `AppSheetHeader`, `AppSheetTitle`, `AppSheetDescription`, `AppSheetFooter`, `AppSheetClose` |
| **AppSkeleton** | `AppSkeleton` |
| **AppSpinner** | `AppSpinner` |
| **AppSwitch** | `AppSwitch` |
| **AppTable** | `AppTable`, `AppTableHeader`, `AppTableBody`, `AppTableFooter`, `AppTableHead`, `AppTableRow`, `AppTableCell`, `AppTableCaption` |
| **AppTabs** | `AppTabs`, `AppTabsList`, `AppTabsTrigger`, `AppTabsContent` |
| **AppTextarea** | `AppTextarea` |
| **AppToast** | `useAppToast`, `toast` |
| **AppToaster** | `AppToaster`, `sonnerToast` |
| **AppToggle** | `AppToggle` |
| **AppToggleGroup** | `AppToggleGroup`, `AppToggleGroupItem` |
| **AppTooltip** | `AppTooltip`, `AppTooltipProvider`, `AppTooltipTrigger`, `AppTooltipContent` |

---

## How to create a block

A **block** is a named, product-specific composition of primitives. It lives in `src/components/blocks/`.

**When to create a block:**
- The pattern repeats across multiple pages (e.g. a login form, a data table row, a confirmation dialog)
- It has product-specific copy, layout, or logic baked in
- It is not generic enough to be a primitive

**File naming:** `PascalCase.tsx` matching what it renders. Examples: `LoginForm.tsx`, `UserTable.tsx`, `DeleteConfirmDialog.tsx`.

**Template:**

```tsx
// src/components/blocks/LoginForm.tsx

import { AppButton } from "@/components/primitives/AppButton"
import { AppInput } from "@/components/primitives/AppInput"
import { AppLabel } from "@/components/primitives/AppLabel"
import { AppCard, AppCardHeader, AppCardTitle, AppCardContent, AppCardFooter } from "@/components/primitives/AppCard"

export function LoginForm() {
  return (
    <AppCard className="w-full max-w-sm">
      <AppCardHeader>
        <AppCardTitle>Sign in</AppCardTitle>
      </AppCardHeader>
      <AppCardContent className="space-y-4">
        <div className="space-y-1.5">
          <AppLabel htmlFor="email">Email</AppLabel>
          <AppInput id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-1.5">
          <AppLabel htmlFor="password">Password</AppLabel>
          <AppInput id="password" type="password" placeholder="••••••••" />
        </div>
      </AppCardContent>
      <AppCardFooter>
        <AppButton className="w-full">Sign in</AppButton>
      </AppCardFooter>
    </AppCard>
  )
}
```

**Rules for blocks:**
- Only import from `@/components/primitives/*` — never from `@/components/ui/*`
- Add `"use client"` only if the block uses state or browser events
- Keep business logic (API calls, state management) in the page or a custom hook, not in the block itself
- Props should be typed explicitly — no implicit `any`

---

## How to create a custom component

A **custom component** is a reusable wrapper around a primitive that applies consistent product-level overrides. It lives in `src/components/blocks/` alongside blocks, or in its own directory if it grows complex.

**When to create a custom component instead of a block:**
- You need a variant of a primitive that isn't in the design system (e.g. a pill-shaped button used everywhere)
- You need to lock certain props so they can't be overridden accidentally

**Template:**

```tsx
// src/components/blocks/PrimaryActionButton.tsx
// A full-width, always-default-variant button for primary CTA slots.

import { AppButton, type AppButtonProps } from "@/components/primitives/AppButton"
import { cn } from "@/lib/utils"

type PrimaryActionButtonProps = Omit<AppButtonProps, "variant"> & {
  children: React.ReactNode
}

export function PrimaryActionButton({ className, children, ...props }: PrimaryActionButtonProps) {
  return (
    <AppButton
      variant="default"
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </AppButton>
  )
}
```

**Rules:**
- Always extend from `AppXxx` primitives, never from `ui/` directly
- Use `cn()` from `@/lib/utils` to merge classNames — never concatenate strings
- Use `Omit<AppXxxProps, "lockedProp">` to prevent callers from overriding locked props
- Export the component and its prop type

---

## Styling rules

Viana Kit uses **Tailwind CSS v4** with design tokens as CSS variables.

**Do:**
- Use Tailwind utility classes for all layout and spacing
- Use semantic token classes: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-primary-foreground`, etc.
- Use `cn()` to conditionally merge classes

**Do NOT — strictly enforced:**
- ❌ Set `font-family` — the system font stack is managed by the token layer
- ❌ Set raw color values (`text-[#fff]`, `bg-[#3b82f6]`, `text-blue-500`) — always use semantic token classes
- ❌ Set raw `font-size` values (`text-[13px]`, `text-[1.1rem]`) — use Tailwind scale (`text-sm`, `text-base`, `text-lg`, etc.)
- ❌ Write inline `style={{}}` objects for any visual property
- ❌ Use hardcoded hex/rgb/hsl values in className — always use token-mapped classes
- ❌ Add custom CSS outside of `globals.css`
- ❌ Import or extend Tailwind config — tokens are in `globals.css` under `@theme inline`
- ❌ Override spacing, radius, or shadow with arbitrary values when a Tailwind scale value exists

### Available semantic tokens (as Tailwind classes)

| Token | Class | Use for |
|-------|-------|---------|
| background | `bg-background` / `text-background` | Page background |
| foreground | `text-foreground` | Primary body text |
| muted | `bg-muted` | Subtle backgrounds, code blocks |
| muted-foreground | `text-muted-foreground` | Secondary text, placeholders |
| primary | `bg-primary` / `text-primary` | Brand color, primary actions |
| primary-foreground | `text-primary-foreground` | Text on primary backgrounds |
| secondary | `bg-secondary` | Lower-emphasis backgrounds |
| secondary-foreground | `text-secondary-foreground` | Text on secondary backgrounds |
| accent | `bg-accent` | Hover states, highlights |
| accent-foreground | `text-accent-foreground` | Text on accent backgrounds |
| destructive | `bg-destructive` / `text-destructive` | Errors, delete actions |
| border | `border-border` | All borders |
| input | `bg-input` / `border-input` | Input field backgrounds and borders |
| ring | `ring-ring` | Focus rings |
| card | `bg-card` | Card surfaces |
| card-foreground | `text-card-foreground` | Text on cards |
| popover | `bg-popover` | Popover and dropdown surfaces |
| popover-foreground | `text-popover-foreground` | Text on popover surfaces |

---

## How to create a Viana Kit skill (for Claude / paper.design)

A **skill** is a Markdown prompt file that teaches Claude or paper.design how to generate UI using Viana Kit components correctly. Skills enforce the design system constraints automatically so the AI never goes outside the system.

### Skill file location

Place skill files in:
```
.claude/skills/viana-ui.md       ← Claude Code skill
```

Or register them in your paper.design workspace as a custom prompt template.

### Skill file structure

```markdown
---
name: viana-ui
description: Generate UI using Viana Kit primitives. Use this for any screen, page, mockup, or component request.
---

You are building UI using the Viana Kit design system. Follow every rule below exactly.

## Component source
Import all components from `@/components/primitives/*`. Never import from `@/components/ui/*`.

## Available components
[paste the full component table from AGENTS.md here]

## Strict styling rules
- Use ONLY Tailwind utility classes. No inline styles.
- Use ONLY semantic token classes for color: bg-background, text-foreground, bg-primary,
  text-primary-foreground, text-muted-foreground, border-border, bg-muted, bg-card,
  text-card-foreground, bg-destructive, text-destructive, bg-secondary, bg-accent, etc.
- NEVER use raw color values: no text-blue-500, no bg-[#fff], no text-[#333].
- NEVER set font-family. The system font is managed by the token layer.
- NEVER set arbitrary font sizes like text-[13px]. Use Tailwind scale only: text-xs, text-sm,
  text-base, text-lg, text-xl, text-2xl, text-3xl, etc.
- NEVER use inline style={{}} for any visual property.
- Spacing: use Tailwind scale (p-2, p-4, gap-3, etc.). No arbitrary spacing like p-[7px].
- Border radius: use rounded-sm, rounded-md, rounded-lg, rounded-full. No arbitrary radius.

## Output format
Return a single .tsx file. Add "use client" if the component uses state or events.
Place all logic in the component function. No separate helper files unless asked.
```

### Rules for writing skills

- Keep the component table current — paste from this AGENTS.md whenever it changes
- The styling prohibitions must be explicit. List every forbidden pattern by name.
- Do not allow the skill to accept "make it blue" or "use Roboto" instructions — the AI must redirect to semantic tokens instead
- Skills are read-only prompts. They do not modify any source files.

### Using a skill in Claude Code

```bash
# Invoke manually
/viana-ui Build a user profile settings page with avatar, name field, email field, and save button

# Or reference in a prompt
Use the viana-ui skill to generate a dashboard with a stats grid and a recent activity table.
```

### Using a skill in paper.design

1. Open your paper.design workspace settings
2. Go to **Custom Prompts** → **Add Prompt**
3. Paste the skill file content as the system prompt
4. Name it `Viana Kit UI`
5. When generating mockups, select **Viana Kit UI** as the active prompt — all generated code will be system-compliant

---

## What NOT to do — hard rules

| ❌ Never | ✅ Instead |
|----------|-----------|
| Edit any file in `src/components/ui/` | Import from `@/components/primitives/*` |
| Edit any file in `src/components/primitives/` | Create a wrapper in `src/components/blocks/` |
| Import from `@/components/ui/*` in app code | Always go through the `App*` layer |
| Use inline styles | Use Tailwind utility classes |
| Use hardcoded or raw colors (`text-blue-500`, `bg-[#fff]`) | Use semantic token classes only |
| Set `font-family` anywhere | The system font is managed by the token layer |
| Set arbitrary `font-size` (`text-[13px]`) | Use Tailwind type scale (`text-sm`, `text-lg`, etc.) |
| Copy-paste shadcn component code into a block | Compose the existing `App*` primitive |
| Modify `globals.css` token block | The token block is managed — only edit below it |

---

## File structure reference

```
src/
├── app/
│   ├── globals.css          ← Tokens + Tailwind config. Token block is managed.
│   ├── layout.tsx           ← Root layout. Add providers here.
│   └── page.tsx             ← Home page.
├── components/
│   ├── ui/                  ← MANAGED. Do not touch.
│   ├── primitives/          ← MANAGED. Do not touch.
│   │   └── index.ts         ← Barrel export. Do not touch.
│   └── blocks/              ← YOUR CODE. Create blocks and custom components here.
└── lib/
    └── utils.ts             ← Contains cn(). Do not modify.
```

---

## Version tracking

The `.vianarc` file at the repo root tracks which version of each primitive is installed. Do not edit it manually. It is updated by the Viana CLI when primitives are added or updated.

---

## Documentation

Full component docs, props, and usage examples are at `https://viana-kit-core.vercel.app/docs/introduction`.
