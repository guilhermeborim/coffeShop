interface ButtonProps {
  text: string
  className: string
}

export const Button = ({ text, className }: ButtonProps) => {
  return (
    <button className={`${className} bg-orange font-semibold text-16`}>
      {text}
    </button>
  )
}
