import { addressUser } from '@/redux/addressUser/addressUserSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as z from 'zod'
import fetchAddress from './fetchAddress'

type CepProps = {
  cep: string
}
const HookFormCep = () => {
  const cepFormValidationSchema = z.object({
    cep: z.string().nonempty('O campo "cep" é obrigatório.'),
  })

  const { register, handleSubmit, formState, getValues } = useForm<CepProps>({
    resolver: zodResolver(cepFormValidationSchema),
  })

  return { register, handleSubmit, formState, getValues }
}

export const FindUserCepByApi = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = HookFormCep()
  const handleSubmitCep = async () => {
    try {
      const value = getValues()

      const { localidade, logradouro } = await fetchAddress(value.cep)
      return dispatch(addressUser({ localidade, logradouro }))
    } catch (e: unknown) {
      console.log(e)
    }
  }

  return { register, handleSubmit, errors, handleSubmitCep }
}
