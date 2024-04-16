'use client'

import { ChevronLeft } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderDetailOrderProps {
  name: string
  icon?: StaticImport
}

export default function HeaderDetailOrderComponent({
  icon,
  name,
}: HeaderDetailOrderProps) {
  return (
    <header className="px-10 py-5 flex items-center justify-between">
      <Link href={'/'}>
        <ChevronLeft />
      </Link>
      <div>{name}</div>
      {icon && <Image src={icon} alt="Hearth" width={24} height={24} />}
    </header>
  )
}
