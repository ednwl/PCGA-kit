"use client";

import { useState } from "react";
import { SitesLocationTree } from "@/components/blocks/SitesLocationTree";
import { SitesTable } from "@/components/blocks/SitesTable";

export default function SitesPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <div className="flex flex-1 min-w-0 gap-6">
      <SitesLocationTree
        selected={selectedLocation}
        onSelect={setSelectedLocation}
      />
      <SitesTable selectedLocation={selectedLocation} />
    </div>
  );
}
