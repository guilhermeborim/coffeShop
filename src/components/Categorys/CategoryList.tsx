'use client'
import { useCategory } from '@/contexts/category'
import { Category } from '@prisma/client'
import CategoryItemComponent from './CategoryItem'

interface CategoryListProps {
  categorys: Category[]
}

export default function CategoryListComponent({
  categorys,
}: CategoryListProps) {
  const { setCategory } = useCategory()

  const handleCategoryClick = (categoryId: string) => {
    setCategory({
      categoryId,
    })
  }

  return (
    <nav>
      <ul className="flex justify-between flex-1 overflow-x-auto gap-2 ">
        {categorys.map((category) => (
          <CategoryItemComponent
            name={category.name}
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </ul>
    </nav>
  )
}
