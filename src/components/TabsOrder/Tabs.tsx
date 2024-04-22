import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TabsComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Tabs defaultValue="delivery" className="w-full px-10">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="delivery">Delivery</TabsTrigger>
        <TabsTrigger value="pick-up">Pick-up</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}
