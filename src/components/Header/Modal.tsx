/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import GET from '@/app/api/cep/routes'
import { FormEvent, useState } from 'react'
import { SheetContent } from '../ui/sheet'

export default function ModalComponent() {
  const [cep, setCep] = useState<string | null>(null)
  function handleChange(e: any) {
    setCep(e.target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const response = await GET(cep)
    console.log(response.ok)
  }
  return (
    <SheetContent>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="cep" onChange={handleChange} />
          <input type="submit" placeholder="Enviar" />
        </div>
      </form>
    </SheetContent>
  )
}
