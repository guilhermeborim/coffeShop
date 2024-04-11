'use client'
import Image from 'next/image'

interface AvatarProfileProps {
  imageUrl: string
}
export default function AvatarProfileComponent({
  imageUrl,
}: AvatarProfileProps) {
  return (
    <Image
      src={imageUrl}
      alt="Avatar Profile"
      width={0}
      height={0}
      className="w-11 h-11"
      priority
    />
  )
}
