'use client'

import { MouseEventHandler } from 'react'

interface CategoryItemProps {
  name: string
  onClick: MouseEventHandler<HTMLLIElement>
}
export default function CategoryItemComponent({
  name,
  onClick,
}: CategoryItemProps) {
  return (
    <li
      className="bg-white font-semibold text-14 py-2 text-textPrice px-4 rounded-lg my-2 flex-1 text-center hover:bg-orange hover:text-white"
      onClick={onClick}
    >
      {name}
    </li>
  )
}
