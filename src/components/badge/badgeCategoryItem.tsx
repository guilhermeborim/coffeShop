'use client'
import { categoryId } from '@/redux/categoryId/categoryIdSlice'
import { Category } from '@prisma/client'
import { useDispatch } from 'react-redux'

interface BadgeCategoryProps {
  category: Category
}

export const BadgeCategoryItem = ({ category }: BadgeCategoryProps) => {
  const dispatch = useDispatch()

  return (
    <li
      onClick={() => dispatch(categoryId(category.id))}
      className="bg-white font-semibold text-14 py-2 text-textPrice cursor-pointer px-4 rounded-lg my-2 flex-1 text-center hover:bg-orange hover:text-white"
    >
      {category.name}
    </li>
  )
}
