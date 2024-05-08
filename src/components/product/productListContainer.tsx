export const ProductListContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section className="grid grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2 small:flex small:flex-wrap gap-x-3 gap-y-3 mb-[72px]">
      {children}
    </section>
  )
}
