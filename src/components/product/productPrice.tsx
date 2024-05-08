import { ProductButton } from './productButton'

interface ProductProps {
  price: number
  slug: string
}

export const ProductPrice = ({ price, slug }: ProductProps) => {
  return (
    <div className="flex items-end justify-between flex-1 px-3 pb-3">
      <h2 className="font-semibold text-18 text-textPrice">$ {price}</h2>
      <ProductButton slug={slug} />
    </div>
  )
}
