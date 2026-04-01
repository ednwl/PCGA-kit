"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

/**
 * AppAvatar — An image element with a fallback for representing the user.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppAvatar(props: React.ComponentProps<typeof Avatar>) {
  return <Avatar {...props} />
}

/**
 * AppAvatarImage — The image component for AppAvatar.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppAvatarImage(props: React.ComponentProps<typeof AvatarImage>) {
  return <AvatarImage {...props} />
}

/**
 * AppAvatarFallback — The fallback component for AppAvatar.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function AppAvatarFallback(props: React.ComponentProps<typeof AvatarFallback>) {
  return <AvatarFallback {...props} />
}

export { AppAvatar, AppAvatarImage, AppAvatarFallback }
