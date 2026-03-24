"use client"

import { cn } from "../../lib/utils"

interface ScrollTextProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number
  direction?: "left" | "right" | "up" | "down"
}

export function ScrollText({
  children,
  className,
  speed = 50,
  direction = "left",
  ...props
}: ScrollTextProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        direction === "up" || direction === "down" ? "py-2" : "py-4",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex w-max",
          direction === "up" && "flex-col",
          direction === "down" && "flex-col"
        )}
        style={{
          animation: `scroll-${direction} ${30 / speed}s linear infinite`,
        }}
      >
        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes scroll-up {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          @keyframes scroll-down {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}</style>
        <div className="flex-shrink-0">{children}</div>
        <div className="flex-shrink-0">{children}</div>
      </div>
    </div>
  )
}