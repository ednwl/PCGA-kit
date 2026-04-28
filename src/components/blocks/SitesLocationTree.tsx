"use client";

import { AppLocationTreeFilter, type TreeNode } from "@/components/blocks/AppLocationTreeFilter";

type SitesLocationTreeProps = {
  selected: string | null;
  onSelect: (value: string | null) => void;
};

const LOCATION_TREE: TreeNode[] = [
  {
    label: "All Sites",
    count: 12,
    children: [
      {
        label: "Philippines",
        count: 7,
        children: [
          { label: "Makati", count: 3 },
          { label: "Cebu", count: 2 },
          { label: "Davao", count: 2 },
        ],
      },
      {
        label: "Singapore",
        count: 3,
        children: [
          { label: "Orchard", count: 2 },
          { label: "Jurong", count: 1 },
        ],
      },
      {
        label: "Australia",
        count: 2,
        children: [
          { label: "Sydney", count: 1 },
          { label: "Melbourne", count: 1 },
        ],
      },
    ],
  },
];

export function SitesLocationTree({ selected, onSelect }: SitesLocationTreeProps) {
  return (
    <AppLocationTreeFilter
      data={LOCATION_TREE}
      selected={selected}
      onSelect={onSelect}
      showHelp
      unallocated={{ label: "Unallocated Sites", count: 2 }}
      className="w-64"
    />
  );
}
