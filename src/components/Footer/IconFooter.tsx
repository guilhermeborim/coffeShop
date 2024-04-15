import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface IconFooterProps {
  icon: StaticImport
}
export default function IconFooterComponent({ icon }: IconFooterProps) {
  return (
    <div>
      <Image src={icon} width={24} height={24} alt="icons footer" />
    </div>
  )
}
