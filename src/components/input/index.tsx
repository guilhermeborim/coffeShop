import { Search, Settings2 } from 'lucide-react'

export const Input = () => {
  return (
    <div className="flex items-center justify-between py-1 px-1 rounded-2xl bg-bgInput">
      <div className="flex items-center w-full gap-3 mr-3">
        <Search size={20} color="white" />
        <input
          type="text"
          placeholder="Procure sua bebida"
          className="text-input font-normal text-14 w-full bg-transparent focus-visible:outline-none"
        />
      </div>
      <div className="bg-orange w-11 h-11 rounded-xl flex items-center justify-center">
        <Settings2 size={20} color="white" />
      </div>
    </div>
  )
}
