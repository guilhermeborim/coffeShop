import { signIn } from 'next-auth/react'
import { ButtonIcon } from '../button/buttonIcon'
export const Login = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ButtonIcon
        className="border border-black/50 py-[15px] px-10 rounded-[10px]"
        onClick={() => signIn()}
      >
        <div className="flex items-center font-medium text-20 text-black/50 gap-[15px]">
          Continue with Google
        </div>
      </ButtonIcon>
    </div>
  )
}
