'use client'

interface CategoryItemProps {
  name: string
}
export default function CategoryItemComponent({ name }: CategoryItemProps) {
  return (
    <li className="bg-white font-semibold text-sm p-1 rounded-lg my-2">
      {name}
    </li>
  )
}
