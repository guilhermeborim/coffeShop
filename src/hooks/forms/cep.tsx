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
