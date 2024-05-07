import { ButtonHTMLAttributes } from 'react'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const ButtonIcon = ({ children, ...props }: ButtonIconProps) => {
  return <button {...props}>{children}</button>
}
