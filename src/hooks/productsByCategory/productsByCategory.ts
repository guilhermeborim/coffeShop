'use client'
import { RootState } from '@/redux/store'
import { Product } from '@prisma/client'
import { useSelector } from 'react-redux'

export const ProductsFindByCategory = ({
  products,
}: {
  products: Product[]
}) => {
  const { categoryId } = useSelector(
    (state: RootState) => state.categoryIdSlice,
  )
  const productByCategory = products.filter(
    (product) => product.categoryId === categoryId,
  )

  return { productByCategory }
}
