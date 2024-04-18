'use client'

import { FindUserCepByApi } from '@/hooks/forms/cep'
import ErrorsCepComponent from '../errors/ErrorsCep'
import { SheetContent } from '../ui/sheet'

export default function ModalComponent() {
  const { errors, handleSubmit, handleSubmitCep, register } = FindUserCepByApi()

  return (
    <SheetContent>
      <form onSubmit={handleSubmit(handleSubmitCep)} className="mt-4">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="0000-000"
            id="cep"
            {...register('cep')}
            className=" text-black focus-visible:outline-none border border-bgInput rounded-lg pl-4"
          />
          <ErrorsCepComponent errors={errors} />
          <input type="submit" placeholder="Enviar" />
        </div>
      </form>
    </SheetContent>
  )
}
