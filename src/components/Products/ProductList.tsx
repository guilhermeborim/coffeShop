'use client'
import { ProductsFindByCategory } from '@/hooks/productsByCategory/productsByCategory'
import { Product } from '@prisma/client'
import ProductComponent from './Product'

interface ProductListProps {
  products: Product[]
}

export default function ProductListComponent({ products }: ProductListProps) {
  const { productByCategory } = ProductsFindByCategory({ products })

  return (
    <article className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 mb-[72px]">
      {productByCategory.length < 1 &&
        products.map((product) => (
          <ProductComponent products={product} key={product.id} />
        ))}
      {productByCategory.map((product) => (
        <ProductComponent products={product} key={product.id} />
      ))}
    </article>
  )
}
