import { Plus, Star } from 'lucide-react'

interface ProductProps {
  name: string
  price: string
  rating: number
  image: string
}

export default function ProductComponent({
  image,
  name,
  price,
  rating,
}: ProductProps) {
  return (
    <div className="bg-white px-1 pt-1 pb-3 rounded-2xl flex flex-col justify-between">
      <div
        className="rounded-2xl h-32 bg-center bg-cover mb-3"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="flex items-center pl-2 pt-2">
          <Star color="#FBBE21" fill="#FBBE21" size={10} />
          <span className="font-semibold text-10 text-white">{rating}</span>
        </div>
      </div>
      <div className="px-2 flex-1">
        <h2 className="font-semibold text-16 text-textName pb-1">{name}</h2>
        <h3 className="font-normal text-12 text-textDescription">
          with Chocolate
        </h3>
      </div>
      <div className="mt-3 px-2">
        <div className="flex items-center justify-between mt-2">
          <h2 className="font-semibold text-18 text-textPrice">$ {price}</h2>
          <button className="bg-orange rounded-xl p-2">
            <Plus color="white" />
          </button>
        </div>
      </div>
    </div>
  )
}
