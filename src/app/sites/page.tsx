"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  MapPin,
  Server,
  Cpu,
  Bell,
  Scan,
  MessageSquare,
  FileText,
  Download,
  Plus,
} from "lucide-react"
import { AppDashboard } from "@/components/blocks/AppDashboard"
import { AppButton } from "@/components/primitives/AppButton"
import { SitesLocationTree } from "@/components/blocks/SitesLocationTree"
import { SitesTable } from "@/components/blocks/SitesTable"

const nav = [
  {
    items: [{ title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" }],
  },
  {
    label: "Manage",
    items: [
      { title: "Sites", icon: MapPin, href: "/sites", isActive: true },
      { title: "Devices", icon: Server, href: "/devices" },
      { title: "Sensors", icon: Cpu, href: "/sensors" },
      { title: "Alerts", icon: Bell, href: "/alerts" },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "X-ray", icon: Scan, href: "/xray" },
      { title: "Ask Vi", icon: MessageSquare, href: "/ask-vi" },
      { title: "Manifest", icon: FileText, href: "/manifest" },
    ],
  },
  {
    label: "Downloads",
    items: [{ title: "Installers", icon: Download, href: "/installers" }],
  },
]

export default function SitesPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  return (
    <AppDashboard
      nav={nav}
      pageTitle={{
        title: "Manage Sites",
        subtitle: "Manage all your sites in one place.",
        breadcrumbs: [{ label: "Sites" }],
        actions: (
          <AppButton>
            <Plus className="size-4" />
            New Site
          </AppButton>
        ),
      }}
    >
      <div className="flex gap-6 flex-1 min-w-0">
        <SitesLocationTree
          selected={selectedLocation}
          onSelect={setSelectedLocation}
        />
        <SitesTable selectedLocation={selectedLocation} />
      </div>
    </AppDashboard>
  )
}
