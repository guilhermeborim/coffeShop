import { prisma } from '@/lib/prisma'

export const ProductsDatabase = async () => {
  const products = await prisma.product.findMany({})

  return { products }
}
