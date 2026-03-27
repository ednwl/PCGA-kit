"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

function AppAvatar(props: React.ComponentProps<typeof Avatar>) {
  return <Avatar {...props} />
}

function AppAvatarImage(props: React.ComponentProps<typeof AvatarImage>) {
  return <AvatarImage {...props} />
}

function AppAvatarFallback(props: React.ComponentProps<typeof AvatarFallback>) {
  return <AvatarFallback {...props} />
}

export { AppAvatar, AppAvatarImage, AppAvatarFallback }
