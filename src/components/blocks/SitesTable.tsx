"use client";

import { AppBadge } from "@/components/primitives/AppBadge";
import {
  AppCard,
  AppCardContent,
  AppCardDescription,
  AppCardHeader,
  AppCardTitle,
} from "@/components/primitives/AppCard";
import {
  AppTable,
  AppTableBody,
  AppTableCaption,
  AppTableCell,
  AppTableHead,
  AppTableHeader,
  AppTableRow,
} from "@/components/primitives/AppTable";

type SitesTableProps = {
  selectedLocation: string | null;
};

type SiteRow = {
  id: string;
  name: string;
  location: string;
  status: "Active" | "Needs Attention";
  devices: number;
};

const SITE_ROWS: SiteRow[] = [
  { id: "site-1", name: "Ayala North Exchange", location: "Makati", status: "Active", devices: 18 },
  { id: "site-2", name: "IT Park Flagship", location: "Cebu", status: "Active", devices: 12 },
  { id: "site-3", name: "Lanang Center", location: "Davao", status: "Needs Attention", devices: 9 },
  { id: "site-4", name: "ION Orchard", location: "Orchard", status: "Active", devices: 14 },
  { id: "site-5", name: "Jurong Point", location: "Jurong", status: "Needs Attention", devices: 7 },
  { id: "site-6", name: "South Eveleigh", location: "Sydney", status: "Active", devices: 11 },
];

function matchesLocation(row: SiteRow, selectedLocation: string | null) {
  if (selectedLocation === null) return true;
  if (selectedLocation === "__unallocated__") return false;
  return row.location === selectedLocation || row.name === selectedLocation;
}

export function SitesTable({ selectedLocation }: SitesTableProps) {
  const rows = SITE_ROWS.filter((row) => matchesLocation(row, selectedLocation));
  const caption = selectedLocation === null
    ? "Showing all sites."
    : selectedLocation === "__unallocated__"
      ? "No unallocated sites in this starter dataset."
      : `Filtered by ${selectedLocation}.`;

  return (
    <AppCard className="min-w-0 flex-1 rounded-3xl">
      <AppCardHeader>
        <AppCardTitle>Site Inventory</AppCardTitle>
        <AppCardDescription>
          Review site health, deployment coverage, and operating status.
        </AppCardDescription>
      </AppCardHeader>
      <AppCardContent className="min-w-0">
        <AppTable>
          <AppTableCaption>{caption}</AppTableCaption>
          <AppTableHeader>
            <AppTableRow>
              <AppTableHead>Site</AppTableHead>
              <AppTableHead>Location</AppTableHead>
              <AppTableHead>Status</AppTableHead>
              <AppTableHead className="text-right">Devices</AppTableHead>
            </AppTableRow>
          </AppTableHeader>
          <AppTableBody>
            {rows.map((row) => (
              <AppTableRow key={row.id}>
                <AppTableCell className="font-medium">{row.name}</AppTableCell>
                <AppTableCell>{row.location}</AppTableCell>
                <AppTableCell>
                  <AppBadge variant={row.status === "Active" ? "secondary" : "outline"}>
                    {row.status}
                  </AppBadge>
                </AppTableCell>
                <AppTableCell className="text-right">{row.devices}</AppTableCell>
              </AppTableRow>
            ))}
            {rows.length === 0 && (
              <AppTableRow>
                <AppTableCell colSpan={4} className="py-10 text-center text-muted-foreground">
                  No sites match this filter yet.
                </AppTableCell>
              </AppTableRow>
            )}
          </AppTableBody>
        </AppTable>
      </AppCardContent>
    </AppCard>
  );
}
