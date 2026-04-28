"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  Bell,
  Cpu,
  Download,
  FileText,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Plus,
  Scan,
  Server,
} from "lucide-react";
import { AppDashboard, type AppDashboardProps } from "@/components/blocks/AppDashboard";
import { AppButton } from "@/components/primitives/AppButton";

function getDashboardConfig(pathname: string): Pick<AppDashboardProps, "nav" | "pageTitle"> {
  const nav = [
    {
      items: [
        {
          title: "Dashboard",
          icon: LayoutDashboard,
          isActive: pathname === "/dashboard",
        },
      ],
    },
    {
      label: "Manage",
      items: [
        { title: "Sites", icon: MapPin, isActive: pathname === "/sites" },
        { title: "Devices", icon: Server, isActive: pathname === "/devices" },
        { title: "Sensors", icon: Cpu, isActive: pathname === "/sensors" },
        { title: "Alerts", icon: Bell, isActive: pathname === "/alerts" },
      ],
    },
    {
      label: "Insights",
      items: [
        { title: "X-ray", icon: Scan, isActive: pathname === "/xray" },
        { title: "Ask Vi", icon: MessageSquare, isActive: pathname === "/ask-vi" },
        { title: "Manifest", icon: FileText, isActive: pathname === "/manifest" },
      ],
    },
    {
      label: "Downloads",
      items: [
        { title: "Installers", icon: Download, isActive: pathname === "/installers" },
      ],
    },
  ];

  if (pathname === "/sites") {
    return {
      nav,
      pageTitle: {
        title: "Manage Sites",
        subtitle: "Manage all your sites in one place.",
        breadcrumbs: [{ label: "Sites" }],
        actions: (
          <AppButton>
            <Plus className="size-4" />
            New Site
          </AppButton>
        ),
      },
    };
  }

  if (pathname === "/dashboard") {
    return {
      nav,
      pageTitle: false,
    };
  }

  return {
    nav,
    pageTitle: {},
  };
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const config = getDashboardConfig(pathname);

  return <AppDashboard {...config}>{children}</AppDashboard>;
}
