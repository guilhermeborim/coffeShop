'use client'
import { ProductsFindByCategory } from '@/hooks/productsByCategory/productsByCategory'
import { Product } from '@prisma/client'
import { ProductItem } from './productItem'
import { ProductListContainer } from './productListContainer'

interface productsProps {
  products: Product[]
}
export const ProductList = ({ products }: productsProps) => {
  const { productByCategory } = ProductsFindByCategory({ products })

  return (
    <>
      {productByCategory.length < 1 ? (
        <ProductListContainer>
          {products.map((product) => (
            <ProductItem products={product} key={product.id} />
          ))}
        </ProductListContainer>
      ) : (
        <ProductListContainer>
          {productByCategory.map((product) => (
            <ProductItem products={product} key={product.id} />
          ))}
        </ProductListContainer>
      )}
    </>
  )
}
