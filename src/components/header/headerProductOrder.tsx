import { ChevronLeft } from 'lucide-react'

interface HeaderProductOrderProps {
  text: string
  children?: React.ReactNode
}

// TODO: - Testar esse header sem o children para ver se o text vai acabar ficando do outro lado ao inves de ficar no meio, se ele ficar no meio, acho que teria que colocar uma div envolta do text e icon e ajustar o css

export const HeaderProductOrder = ({
  text,
  children,
}: HeaderProductOrderProps) => {
  return (
    <header>
      <section className="flex items-center justify-between">
        <div>
          <ChevronLeft size={24} />
        </div>
        <div>
          <h4 className="text-textName font-semibold text-18">{text}</h4>
        </div>
        <div>{children}</div>
      </section>
    </header>
  )
}
