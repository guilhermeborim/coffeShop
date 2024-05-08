interface ChildrenContainerProps {
  children: React.ReactNode
}
export default function Container({ children }: ChildrenContainerProps) {
  return (
    <div className="max-w-[1440px] tablet:max-w-[720px] mobile:max-w-[350px] w-full mx-auto py-6 px-[30px]">
      {children}
    </div>
  )
}
