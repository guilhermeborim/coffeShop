import { Plus, Star } from 'lucide-react'

export default function ProductComponent() {
  return (
    <div className="bg-white px-1 pt-1 pb-3 rounded-2xl">
      <div className="rounded-2xl h-32 bg-center bg-cover bg-[url('https://static.vecteezy.com/ti/fotos-gratis/t1/25282026-estoque-do-misturar-uma-copo-cafe-cafe-com-leite-mais-motivo-topo-visao-comidagrafia-generativo-ai-foto.jpg')]">
        <div className="flex items-center pl-2 pt-2">
          <Star color="#FBBE21" fill="#FBBE21" size={10} />
          <span className="font-semibold text-10 text-white">4.8</span>
        </div>
      </div>
      <div className="mt-3 px-2">
        <h2 className="font-semibold text-16 text-textName pb-1">Capuccino</h2>
        <h3 className="font-normal text-12 text-textDescription">
          with Chocolate
        </h3>
        <div className="flex items-center justify-between mt-2">
          <h2 className="font-semibold text-18 text-textPrice">$ 4.53</h2>
          <button className="bg-orange rounded-xl p-2">
            <Plus color="white" />
          </button>
        </div>
      </div>
    </div>
  )
}
