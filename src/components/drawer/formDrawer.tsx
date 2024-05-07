import { FindUserCepByApi } from '@/hooks/forms/cep'
import { DrawerClose, DrawerFooter } from '../ui/drawer'

export const FormDrawer = () => {
  const { errors, handleSubmit, handleSubmitCep, register } = FindUserCepByApi()
  return (
    <form
      className="flex items-center justify-center flex-col gap-2"
      onSubmit={handleSubmit(handleSubmitCep)}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label
            htmlFor="cep"
            className="font-semibold text-14 text-textBadges"
          >
            Cep
          </label>
          <input
            id="cep"
            type="text"
            className="border border-black rounded-md p-1"
            {...register('cep')}
          />
        </div>
        <span className="font-semibold text-12 text-red-500 text-center pt-2">
          {errors.cep?.message}
        </span>
      </div>
      <DrawerFooter className="flex flex-row gap-6">
        <input
          type="submit"
          value="Cadastrar"
          className="bg-orange text-white rounded-lg p-1 cursor-pointer"
        />
        <DrawerClose asChild>
          <button className="border border-orange rounded-lg p-1">
            Cancelar
          </button>
        </DrawerClose>
      </DrawerFooter>
    </form>
  )
}
