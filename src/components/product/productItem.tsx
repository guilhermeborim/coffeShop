import { Product } from '@prisma/client'
import { ProductImage } from './productImage'
import { ProductName } from './productName'
import { ProductPrice } from './productPrice'

interface ProductItemProps {
  products: Product
}

export const ProductItem = ({ products }: ProductItemProps) => {
  return (
    <section className="bg-white rounded-2xl w-[232px] mobile:w-[150px] tablet:w-[184px] flex flex-col">
      <ProductImage
        image={products.image}
        rating={products.rating}
        slug={products.slug}
      />
      <ProductName name={products.name} slug={products.slug} />
      <ProductPrice price={products.price} />
    </section>
  )
}
