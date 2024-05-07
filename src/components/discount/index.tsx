import { BadgePercent, ChevronRight } from 'lucide-react'

export const Discount = () => {
  return (
    <section className="flex items-center justify-between bg-white py-[19px] px-4">
      <div className="flex items-center gap-3">
        <BadgePercent color="##C67C4E" fill="white" />
        <h4 className="font-semibold text-14 text-textName">
          1 Desconto Aplicado
        </h4>
      </div>
      <div>
        <ChevronRight size={20} color="#2F2D2C" />
      </div>
    </section>
  )
}
