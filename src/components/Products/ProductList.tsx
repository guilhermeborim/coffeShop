'use client'
import { useCategory } from '@/contexts/category'
import { Product } from '@prisma/client'
import ProductComponent from './Product'

interface ProductListProps {
  products: Product[]
}

export default function ProductListComponent({ products }: ProductListProps) {
  const { category } = useCategory()
  const productByCategory = products.filter(
    (product) => product.categoryId === category?.categoryId,
  )
  return (
    <article className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 mb-[72px]">
      {productByCategory.length < 1 &&
        products.map((product) => (
          <ProductComponent
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            key={product.id}
            slug={product.slug}
          />
        ))}
      {productByCategory.map((product) => (
        <ProductComponent
          image={product.image}
          name={product.name}
          price={product.price}
          rating={product.rating}
          key={product.id}
          slug={product.slug}
        />
      ))}
    </article>
  )
}
