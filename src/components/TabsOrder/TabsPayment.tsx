type TabsPaymentProps = {
  text: string
  children: React.ReactNode
}

export default function TabsPaymentComponent({
  text,
  children,
}: TabsPaymentProps) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-textName font-normal text-14">{text}</p>
      <span className="text-textName font-semibold text-14">$ {children}</span>
    </div>
  )
}
