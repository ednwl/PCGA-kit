"use client"

import { useState } from "react"
import { Search, ChevronRight, ChevronDown, Flag, HelpCircle } from "lucide-react"
import {
  AppCollapsible,
  AppCollapsibleContent,
  AppCollapsibleTrigger,
} from "@/components/primitives/AppCollapsible"
import { AppInput } from "@/components/primitives/AppInput"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

type LocationNode = {
  label: string
  count: number
  children?: LocationNode[]
}

// ─── Placeholder data — replace with API call ─────────────────────────────────

const LOCATION_TREE: LocationNode[] = [
  {
    label: "All",
    count: 73,
    children: [
      { label: "Australia", count: 6 },
      { label: "China", count: 1 },
      { label: "Germany", count: 1 },
      { label: "Kiribati", count: 1 },
      { label: "Philippines", count: 58 },
      { label: "South Africa", count: 1 },
      { label: "United States", count: 1 },
      { label: "United States of America", count: 4 },
    ],
  },
]

// ─── TreeNode ─────────────────────────────────────────────────────────────────

type TreeNodeProps = {
  node: LocationNode
  depth?: number
  selected: string | null
  onSelect: (location: string | null) => void
}

function TreeNode({ node, depth = 0, selected, onSelect }: TreeNodeProps) {
  const [open, setOpen] = useState(depth === 0)
  const hasChildren = !!node.children?.length
  const isAll = node.label === "All"
  const isSelected = isAll ? selected === null : selected === node.label

  if (!hasChildren) {
    return (
      <button
        onClick={() => onSelect(node.label)}
        className={cn(
          "flex w-full items-center gap-1.5 rounded px-2 py-0.5 text-sm text-left",
          "hover:bg-accent hover:text-accent-foreground transition-colors",
          isSelected && "bg-accent text-accent-foreground font-medium"
        )}
        style={{ paddingLeft: `${(depth + 1) * 14}px` }}
      >
        <Flag className="size-3.5 shrink-0 text-muted-foreground" />
        <span className="truncate flex-1">{node.label}</span>
        <span className="text-muted-foreground text-xs">({node.count})</span>
      </button>
    )
  }

  return (
    <AppCollapsible open={open} onOpenChange={setOpen}>
      <AppCollapsibleTrigger asChild>
        <button
          onClick={() => onSelect(isAll ? null : node.label)}
          className={cn(
            "flex w-full items-center gap-1 rounded px-2 py-0.5 text-sm text-left",
            "hover:bg-accent hover:text-accent-foreground transition-colors",
            isSelected && "bg-accent text-accent-foreground font-medium"
          )}
          style={{ paddingLeft: `${depth * 14}px` }}
        >
          {open ? (
            <ChevronDown className="size-3.5 shrink-0" />
          ) : (
            <ChevronRight className="size-3.5 shrink-0" />
          )}
          <span className="truncate flex-1 font-medium">{node.label}</span>
          <span className="text-muted-foreground text-xs">({node.count})</span>
        </button>
      </AppCollapsibleTrigger>
      <AppCollapsibleContent>
        <div className="flex flex-col gap-0.5 mt-0.5">
          {node.children!.map((child) => (
            <TreeNode
              key={child.label}
              node={child}
              depth={depth + 1}
              selected={selected}
              onSelect={onSelect}
            />
          ))}
        </div>
      </AppCollapsibleContent>
    </AppCollapsible>
  )
}

// ─── SitesLocationTree ────────────────────────────────────────────────────────

export type SitesLocationTreeProps = {
  selected: string | null
  onSelect: (location: string | null) => void
}

export function SitesLocationTree({ selected, onSelect }: SitesLocationTreeProps) {
  const [search, setSearch] = useState("")

  const filteredTree: LocationNode[] = search
    ? LOCATION_TREE.map((node) => ({
        ...node,
        children: node.children?.filter((c) =>
          c.label.toLowerCase().includes(search.toLowerCase())
        ),
      }))
    : LOCATION_TREE

  return (
    <div className="flex flex-col gap-3 w-56 shrink-0">
      <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
        Filter by Location
        <HelpCircle className="size-3.5 text-muted-foreground" />
      </div>
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
        <AppInput
          className="pl-8 text-sm h-8"
          placeholder="Search for a country, state, or..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        {filteredTree.map((node) => (
          <TreeNode
            key={node.label}
            node={node}
            depth={0}
            selected={selected}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}
