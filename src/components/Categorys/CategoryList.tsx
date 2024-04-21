export default function CategoryListComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <nav>
      <ul className="flex justify-between flex-1 overflow-x-auto gap-2 ">
        {children}
      </ul>
    </nav>
  )
}
