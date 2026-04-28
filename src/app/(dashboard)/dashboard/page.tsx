"use client";

import { AppButton } from "@/components/primitives/AppButton";
import { AppInput } from "@/components/primitives/AppInput";
import { AppSeparator } from "@/components/primitives/AppSeparator";
import { AppText } from "@/components/primitives/AppText";
import { HeroCard } from "@/components/blocks/HeroCard";
import imgRectangle1 from "@/assets/images/rectangle1.svg";
import imgDriveThru1 from "@/assets/images/drive-thru1.png";
import imgPersistentIcon from "@/assets/images/persistent-icon.png";

function Img({
  src,
  alt,
  name,
  className,
}: {
  src?: string;
  alt: string;
  name: string;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        className={`bg-muted border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground ${className ?? ""}`}
        title={`[missing asset: ${name}]`}
      >
        {name}
      </div>
    );
  }
  return <img alt={alt} className={className} src={src} />;
}

export default function DashboardPage() {
  return (
    <div className="flex flex-1 gap-6">
      <div className="flex flex-1 flex-col space-y-8">
        <div className="flex items-center gap-4">
          <img
            src={imgPersistentIcon.src}
            alt="Dashboard icon"
            className="h-16 w-auto shrink-0"
          />
          <div className="flex flex-col gap-1">
            <AppText variant="muted">Dashboard</AppText>
            <AppText variant="h1" className="text-primary">Hi Kevin! Welcome to Viana</AppText>
            <AppText variant="muted">Stay up to date to everything in your network</AppText>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <AppText variant="h3">Your Operations at a Glance</AppText>
            <AppText variant="muted">As of 31 May, 6:00 PM</AppText>
          </div>
          <AppButton variant="outline">Customize Dashboard</AppButton>
        </div>

        <div className="bg-muted border border-border rounded-2xl p-6 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-[15px] relative shrink-0 w-[16px]">
              <Img src={imgRectangle1.src} alt="icon" name="rectangle1" className="absolute block inset-0 max-w-none size-full" />
            </div>
            <AppText variant="small" className="font-semibold text-primary">
              Ask questions about your dashboard data and get instant insights.
            </AppText>
          </div>
          <AppInput
            placeholder="Ask about today's data, trends, or status"
            className="w-full bg-input"
          />
        </div>

        <div className="flex flex-col gap-7">
          <HeroCard property1="Variant 1" />

          <div className="flex flex-col gap-[10px] items-start relative w-full">
            <div className="bg-card border border-border rounded-3xl w-full">
              <div className="flex items-center justify-between gap-6 p-6">
                <div className="flex flex-1 items-start gap-6">
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <AppText variant="h3">Drive Thru Performance</AppText>
                      <AppText variant="muted">
                        Monitor queue efficiency, throughput, and visit trends.
                      </AppText>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      <div>
                        <p className="text-2xl leading-8 text-primary">4.2 min</p>
                        <p className="text-xs leading-4 text-muted-foreground">AVERAGE SERVICE TIME</p>
                      </div>
                      <div>
                        <p className="text-2xl leading-8 text-primary">Luxury Sedan</p>
                        <p className="text-xs leading-4 text-muted-foreground">TOP VEHICLE CLASS AND TYPE</p>
                      </div>
                      <div>
                        <p className="text-2xl leading-8 text-primary">1488</p>
                        <p className="text-xs leading-4 text-muted-foreground">TOTAL SERVED</p>
                      </div>
                      <div>
                        <p className="text-2xl leading-8 text-primary">87.8 sec</p>
                        <p className="text-xs leading-4 text-muted-foreground">LONGEST JOURNEY TIME</p>
                      </div>
                    </div>
                  </div>
                  <AppSeparator orientation="vertical" className="bg-border self-stretch shrink-0 w-px" />
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">See more data</p>
                    <AppButton variant="link">Retail Engagement Dashboard</AppButton>
                    <AppButton variant="link">People Counting</AppButton>
                    <AppButton variant="link">Zone Engagement</AppButton>
                  </div>
                </div>
                <div className="relative h-[268px] w-[344px] shrink-0">
                  <div className="absolute left-0 top-[-44px] size-[393px]" data-name="drive-thru 1">
                    <Img src={imgDriveThru1.src} alt="Drive thru" name="drive-thru1" className="absolute inset-0 max-w-none size-full object-cover pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HeroCard property1="Variant 2" />
        </div>
      </div>

      <div className="w-80 shrink-0 space-y-8 p-6">
        <div>
          <AppText variant="h4" className="text-muted-foreground">Quick Tasks</AppText>
          <div className="mt-2 flex flex-col space-y-2">
            <AppButton variant="link" className="justify-start">Manage Floor Plan</AppButton>
            <AppButton variant="link" className="justify-start">Manage Sensors</AppButton>
            <AppButton variant="link" className="justify-start">Manage Shelves</AppButton>
            <AppButton variant="link" className="justify-start">Manage Planograms</AppButton>
          </div>
        </div>

        <div>
          <AppText variant="h4" className="text-muted-foreground">Add New Components</AppText>
          <div className="mt-2 flex flex-col space-y-2">
            <AppButton variant="link" className="justify-start">+ Add Site</AppButton>
            <AppButton variant="link" className="justify-start">+ Add Device</AppButton>
            <AppButton variant="link" className="justify-start">+ Add Sensor</AppButton>
          </div>
        </div>

        <div>
          <AppText variant="h4" className="text-muted-foreground">Other Shortcuts</AppText>
          <div className="mt-2 flex flex-col space-y-2">
            <AppButton variant="link" className="justify-start">Open Retail Engagement Dashboard</AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
