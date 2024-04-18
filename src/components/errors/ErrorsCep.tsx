import { FieldErrors, FieldValues } from 'react-hook-form'

export default function ErrorsCepComponent({
  errors,
}: {
  errors: FieldErrors<FieldValues>
}) {
  return (
    <>
      {errors.cep?.message && typeof errors.cep.message === 'string' && (
        <span className="text-12 font-semibold text-red-500">
          {errors.cep.message}
        </span>
      )}
    </>
  )
}
