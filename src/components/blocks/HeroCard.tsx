"use client";

import { AppBadge } from "@/components/primitives/AppBadge";
import {
  AppCard,
  AppCardContent,
  AppCardDescription,
  AppCardHeader,
  AppCardTitle,
} from "@/components/primitives/AppCard";
import { AppText } from "@/components/primitives/AppText";

type HeroCardProps = {
  property1: "Variant 1" | "Variant 2";
};

const CARD_CONTENT = {
  "Variant 1": {
    eyebrow: "Customer Flow",
    title: "Customer Flow and Space Engagement",
    description: "Track occupancy, dwell time, and high-interest zones across your sites.",
    stats: [
      { label: "VISITORS TODAY", value: "12,480" },
      { label: "AVERAGE DWELL", value: "18.4 min" },
      { label: "TOP ZONE", value: "Front Display" },
    ],
  },
  "Variant 2": {
    eyebrow: "Network Overview",
    title: "Network Overview",
    description: "See the health of your connected locations and devices at a glance.",
    stats: [
      { label: "ACTIVE SITES", value: "28" },
      { label: "ONLINE DEVICES", value: "214" },
      { label: "ALERTS OPEN", value: "06" },
    ],
  },
} satisfies Record<HeroCardProps["property1"], {
  eyebrow: string;
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
}>;

export function HeroCard({ property1 }: HeroCardProps) {
  const content = CARD_CONTENT[property1];

  return (
    <AppCard className="rounded-3xl">
      <AppCardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <AppBadge variant="secondary">{content.eyebrow}</AppBadge>
          <div className="space-y-1">
            <AppCardTitle>{content.title}</AppCardTitle>
            <AppCardDescription>{content.description}</AppCardDescription>
          </div>
        </div>
        <AppText variant="muted">Updated 5 minutes ago</AppText>
      </AppCardHeader>
      <AppCardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {content.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-muted/40 p-4">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="mt-2 text-2xl font-semibold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </AppCardContent>
    </AppCard>
  );
}
