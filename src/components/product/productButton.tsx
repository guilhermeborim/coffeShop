import { Plus } from 'lucide-react'
import Link from 'next/link'
import { ButtonIcon } from '../button/buttonIcon'

export const ProductButton = ({ slug }: { slug: string }) => {
  return (
    <Link href={`/${slug}`}>
      <ButtonIcon className="bg-orange w-8 h-8 flex items-center justify-center rounded-[10px]">
        <Plus color="white" />
      </ButtonIcon>
    </Link>
  )
}
