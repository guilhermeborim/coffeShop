'use client'

import { useCategory } from '@/contexts/category'
import { Category } from '@prisma/client'

type CategorysProps = {
  categorys: Category[]
}

export default function CategoryItemComponent({ categorys }: CategorysProps) {
  const { setCategory } = useCategory()

  const handleCategoryClick = (categoryId: string) => {
    setCategory({
      categoryId,
    })
  }
  return categorys.map((item) => (
    <li
      onClick={() => handleCategoryClick(item.id)}
      key={item.id}
      className="bg-white font-semibold text-14 py-2 text-textPrice px-4 rounded-lg my-2 flex-1 text-center hover:bg-orange hover:text-white"
    >
      {item.name}
    </li>
  ))
}
