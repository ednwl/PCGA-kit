"use client"

import { Skeleton } from "../ui/skeleton"

/**
 * AppSkeleton — Used to show a placeholder while content is loading.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppSkeleton(props: React.HTMLAttributes<HTMLDivElement>) {
  return <Skeleton {...props} />
}

export { AppSkeleton }
