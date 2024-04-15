'use client'
import GET from '@/app/api/cep/routes'
import { FormEvent, useState } from 'react'
import { SheetContent } from '../ui/sheet'

export default function ModalComponent() {
  const [cep, setCep] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCep(e.target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const data = await GET(cep)
    console.log(data)
  }
  return (
    <SheetContent>
      <form>
        <div>
          <input type="text" placeholder="cep" onChange={handleChange} />
          <input type="submit" placeholder="Enviar" onClick={handleSubmit} />
        </div>
      </form>
    </SheetContent>
  )
}
