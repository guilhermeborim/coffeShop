'use client'

interface CategoryItemProps {
  name: string
}
export default function CategoryItemComponent({ name }: CategoryItemProps) {
  return (
    <li className="bg-white font-semibold text-14 py-2 text-textPrice px-4 rounded-lg my-2">
      {name}
    </li>
  )
}
