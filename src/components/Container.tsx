'use client'

interface ChildrenContainerProps {
  children: React.ReactNode
}
export default function Container({ children }: ChildrenContainerProps) {
  return <div className="max-w-screen-2xl mx-auto">{children}</div>
}
