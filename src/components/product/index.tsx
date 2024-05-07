import { prisma } from '@/lib/prisma'
import { ProductList } from './productList'

export const ProductRoot = async () => {
  const products = await prisma.product.findMany({})

  return <ProductList products={products} />
}
