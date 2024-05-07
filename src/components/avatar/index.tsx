'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export const Avatar = () => {
  const { data } = useSession()
  return (
    data && (
      <Image
        src={data.user!.image!}
        alt={data.user!.name!}
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-full rounded-[14px]"
      />
    )
  )
}
