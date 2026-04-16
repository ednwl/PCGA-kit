import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { AppDashboard, AppDashboardContent, AppDashboardMain } from "./AppDashboard"
import { AppHeader, AppHeaderContent, AppHeaderSearchbar, AppHeaderActions } from "./AppHeader"
import {
  AppSidebarProvider,
  AppSidebar,
  AppSidebarHeader,
  AppSidebarContent,
  AppSidebarGroup,
  AppSidebarGroupLabel,
  AppSidebarGroupContent,
  AppSidebarMenu,
  AppSidebarMenuItem,
  AppSidebarMenuButton,
  AppSidebarBrand,
  AppSidebarTrigger,
  AppSidebarRail,
} from "@/components/primitives/AppSidebar"
import { AppSeparator } from "@/components/primitives/AppSeparator"
import { AppButtonGroup } from "@/components/primitives/AppButtonGroup"
import { AppButton } from "@/components/primitives/AppButton"
import { AppInput } from "@/components/primitives/AppInput"

// ─── Types ────────────────────────────────────────────────────────────────────

export type AppDashboardShellNavItem = {
  title: string
  icon: React.ElementType
  isActive?: boolean
}

export type AppDashboardShellNavSection = {
  label?: string
  items: AppDashboardShellNavItem[]
}

export type AppDashboardShellProps = {
  /** Sidebar navigation sections. Each section renders a group with an optional label. */
  nav: AppDashboardShellNavSection[]
  /** Right-side header slot — AppSelect, AppAvatar, icon buttons, etc. */
  headerActions?: React.ReactNode
  /**
   * Searchbar slot. Defaults to a standard AppButtonGroup + AppInput + search button.
   * Pass `null` to suppress the searchbar entirely.
   */
  headerSearchbar?: React.ReactNode
  /** Override the sidebar CSS variable. Default: "14rem". */
  sidebarWidth?: string
  /** Override the header-height CSS variable. Default: "3.5rem". */
  headerHeight?: string
  /** Extra classes forwarded to AppDashboardMain. Default: "p-6". */
  mainClassName?: string
  /** Page content rendered inside AppDashboardMain. */
  children: React.ReactNode
}

// ─── Default searchbar ────────────────────────────────────────────────────────

function DefaultSearchbar() {
  return (
    <AppButtonGroup className="w-full max-w-sm">
      <AppInput placeholder="Search..." />
      <AppButton variant="outline">
        <Search className="h-4 w-4" />
      </AppButton>
    </AppButtonGroup>
  )
}

// ─── AppDashboardShell ────────────────────────────────────────────────────────

/**
 * AppDashboardShell — The single entry point for every page layout.
 *
 * Encapsulates the full immutable scaffold:
 *   AppSidebarProvider → AppDashboard → AppSidebar (with brand + rail)
 *   → AppDashboardContent → AppHeader → AppDashboardMain
 *
 * Agents should NEVER compose this scaffold manually. Use this component instead.
 *
 * @example
 * ```tsx
 * const nav = [
 *   { items: [{ title: "Dashboard", icon: LayoutDashboard, isActive: true }] },
 *   {
 *     label: "Manage",
 *     items: [
 *       { title: "Sites", icon: MapPin },
 *       { title: "Devices", icon: Server },
 *     ],
 *   },
 * ]
 *
 * export default function Page() {
 *   return (
 *     <AppDashboardShell nav={nav} headerActions={<AppAvatar .../>}>
 *       <YourPageContent />
 *     </AppDashboardShell>
 *   )
 * }
 * ```
 */
export function AppDashboardShell({
  nav,
  headerActions,
  headerSearchbar,
  sidebarWidth = "14rem",
  headerHeight = "3.5rem",
  mainClassName,
  children,
}: AppDashboardShellProps) {
  const searchbar = headerSearchbar === undefined ? <DefaultSearchbar /> : headerSearchbar

  return (
    <AppSidebarProvider
      style={
        {
          "--sidebar-width": sidebarWidth,
          "--header-height": headerHeight,
        } as React.CSSProperties
      }
    >
      <AppDashboard>
        <AppSidebar collapsible="icon">
          <AppSidebarHeader>
            <AppSidebarBrand />
          </AppSidebarHeader>
          <AppSidebarContent>
            {nav.map((section, i) => (
              <AppSidebarGroup key={i}>
                {section.label && (
                  <AppSidebarGroupLabel>{section.label}</AppSidebarGroupLabel>
                )}
                <AppSidebarGroupContent>
                  <AppSidebarMenu>
                    {section.items.map((item) => (
                      <AppSidebarMenuItem key={item.title}>
                        <AppSidebarMenuButton
                          isActive={item.isActive}
                          tooltip={item.title}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </AppSidebarMenuButton>
                      </AppSidebarMenuItem>
                    ))}
                  </AppSidebarMenu>
                </AppSidebarGroupContent>
              </AppSidebarGroup>
            ))}
          </AppSidebarContent>
          <AppSidebarRail />
        </AppSidebar>

        <AppDashboardContent>
          <AppHeader className="border-none">
            <AppHeaderContent>
              <AppSidebarTrigger />
              <AppSeparator orientation="vertical" className="mx-1 h-4" />
              {searchbar && (
                <AppHeaderSearchbar>{searchbar}</AppHeaderSearchbar>
              )}
              {headerActions && (
                <AppHeaderActions>{headerActions}</AppHeaderActions>
              )}
            </AppHeaderContent>
          </AppHeader>

          <AppDashboardMain className={cn("p-6", mainClassName)}>
            {children}
          </AppDashboardMain>
        </AppDashboardContent>
      </AppDashboard>
    </AppSidebarProvider>
  )
}
