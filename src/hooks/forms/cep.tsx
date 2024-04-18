import GET from '@/app/api/cep/routes'
import { useCepUser } from '@/contexts/cep'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export const HookFormCep = () => {
  const cepFormValidationSchema = z.object({
    cep: z.string().nonempty('O campo "cep" é obrigatório.'),
  })

  const { register, handleSubmit, formState, getValues } = useForm({
    resolver: zodResolver(cepFormValidationSchema),
  })

  return { register, handleSubmit, formState, getValues }
}

export const FindUserCepByApi = () => {
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

  return { register, handleSubmit, errors, handleSubmitCep }
}
