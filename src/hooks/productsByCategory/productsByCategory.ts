import { useCategory } from '@/contexts/category'
import { Product } from '@prisma/client'

export const ProductsFindByCategory = ({
  products,
}: {
  products: Product[]
}) => {
  const { category } = useCategory()
  const productByCategory = products.filter(
    (product) => product.categoryId === category?.categoryId,
  )

  return { productByCategory }
}
