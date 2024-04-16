import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export default function IconDetailComponent({
  icon,
  alt,
}: {
  icon: StaticImport
  alt: string
}) {
  return (
    <div className="bg-backgroundMain p-2 rounded-xl">
      <Image src={icon} alt={alt} width={24} height={24} />
    </div>
  )
}
