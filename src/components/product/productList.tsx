'use client'
import { ProductsFindByCategory } from '@/hooks/productsByCategory/productsByCategory'
import { Product } from '@prisma/client'
import { ProductItem } from './productItem'

interface productsProps {
  products: Product[]
}
export const ProductList = ({ products }: productsProps) => {
  const { productByCategory } = ProductsFindByCategory({ products })

  return (
    <>
      {productByCategory && (
        <section className="grid grid-cols-4 justify-items-center gap-y-3 mobile:grid-cols-2 tablet:grid-cols-3 pb-6">
          {productByCategory.map((product) => (
            <ProductItem products={product} key={product.id} />
          ))}
        </section>
      )}
      {productByCategory.length < 1 && (
        <section className="grid grid-cols-4 justify-items-center gap-y-3 mobile:grid-cols-2 tablet:grid-cols-3 pb-6">
          {products.map((product) => (
            <ProductItem products={product} key={product.id} />
          ))}
        </section>
      )}
    </>
  )
}
