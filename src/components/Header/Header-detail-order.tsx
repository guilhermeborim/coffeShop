'use client'

import { ChevronLeft } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderDetailOrderProps {
  name: string
  icon?: StaticImport
  className?: string
}

export default function HeaderDetailOrderComponent({
  icon,
  name,
  className,
}: HeaderDetailOrderProps) {
  return (
    <header className={className}>
      <Link href={'/'}>
        <ChevronLeft />
      </Link>
      <div className="m-auto text-textName font-semibold text-18">{name}</div>
      {icon && <Image src={icon} alt="Hearth" width={24} height={24} />}
    </header>
  )
}
