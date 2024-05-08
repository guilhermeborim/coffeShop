interface ProductProps {
  name: string
  slug: string
}

export const ProductName = ({ name, slug }: ProductProps) => {
  return (
    <div className="px-3 flex flex-col gap-1 flex-1 flex-wrap justify-between">
      <h3 className="font-semibold text-16 text-textName">{name}</h3>
      <h4 className="font-normal text-12 text-textDescription">{slug}</h4>
    </div>
  )
}
