interface ChildrenContainerProps {
  children: React.ReactNode
}
export default function Container({ children }: ChildrenContainerProps) {
  return <div className="px-[30px] py-6">{children}</div>
}
