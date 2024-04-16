/* eslint-disable prettier/prettier */
'use client'

import { createContext, useContext, useState } from 'react'

interface CategoryProps {
  categoryId: string | null
}

type CategoryContextProps = {
  category: CategoryProps | null
  setCategory: (category: CategoryProps | null) => void
}

const CategoryContext = createContext<CategoryContextProps>({} as CategoryContextProps)

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<CategoryProps | null>(null)

  return (
    <CategoryContext.Provider value={{category, setCategory}}>
      {children}
    </CategoryContext.Provider>
  )
}

const useCategory = () => {
  const context = useContext(CategoryContext)

  return context
}

export { CategoryContext, CategoryProvider, useCategory }

