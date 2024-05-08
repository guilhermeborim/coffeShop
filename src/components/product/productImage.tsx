import { Star } from 'lucide-react'
import Image from 'next/image'
interface ProductProps {
  image: string
  slug: string
  rating: number
}

export const ProductImage = ({ image, rating, slug }: ProductProps) => {
  return (
    <div className="relative p-1 mb-3">
      <Image
        priority
        src={image}
        alt={slug}
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-[212px] mobile:h-[132px] rounded-2xl"
      />
      <div className="absolute top-2 left-3 flex items-center gap-1">
        <Star size={10} color="#FBBE21" fill="#FBBE21" />
        <span className=" font-semibold text-10 text-white">{rating}</span>
      </div>
    </div>
  )
}
