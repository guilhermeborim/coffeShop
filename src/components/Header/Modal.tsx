'use client'

import GET from '@/app/api/cep/routes'
import { useCepUser } from '@/contexts/cep'
import { HookFormCep } from '@/hooks/forms/cep'
import { SheetContent } from '../ui/sheet'

export default function ModalComponent() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = HookFormCep()
  const { setAddress } = useCepUser()
  const handleSubmitCep = async () => {
    try {
      const value = getValues()
      const { localidade, logradouro } = await GET(value.cep)
      setAddress({
        locagradouro: logradouro,
        localidade,
      })
    } catch (e: unknown) {
      console.log(e)
    }
  }
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
          {errors.cep?.message && typeof errors.cep.message === 'string' && (
            <span className="text-12 font-semibold text-red-500">
              {errors.cep.message}
            </span>
          )}
          <input type="submit" placeholder="Enviar" />
        </div>
      </form>
    </SheetContent>
  )
}
