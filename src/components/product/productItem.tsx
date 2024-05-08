import { Product } from '@prisma/client'
import { ProductImage } from './productImage'
import { ProductName } from './productName'
import { ProductPrice } from './productPrice'

interface ProductItemProps {
  products: Product
}

export const ProductItem = ({ products }: ProductItemProps) => {
  return (
    <article className="bg-white rounded-2xl w-full flex flex-col">
      <ProductImage
        image={products.image}
        rating={products.rating}
        slug={products.slug}
      />
      <ProductName name={products.name} slug={products.slug} />
      <ProductPrice price={products.price} slug={products.slug} />
    </article>
  )
}
