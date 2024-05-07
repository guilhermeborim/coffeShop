export const ProductPrice = ({ price }: { price: number }) => {
  return (
    <div className="flex items-end justify-between flex-1 p-3">
      <h2 className="font-semibold text-18 text-textPrice">$ {price}</h2>
      <div className="bg-orange rounded-[10px] text-white w-8 h-8 flex items-center justify-center text-20">
        +
      </div>
    </div>
  )
}
