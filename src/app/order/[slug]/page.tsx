import FooterOrderComponent from '@/components/Footer/FooterOrder'
import HeaderDetailOrderComponent from '@/components/Header/Header-detail-order'
import { Tabs } from '@/components/TabsOrder'
import { prisma } from '@/lib/prisma'

type OrderParams = {
  params: {
    slug: string
  }
}

export default async function OrderPage({ params }: OrderParams) {
  const orderByNameProduct = await prisma.product.findFirst({
    where: {
      slug: params.slug,
    },
  })
  return (
    <main className="bg-backgroundMain">
      <HeaderDetailOrderComponent name="Order" className="px-10 py-5 flex" />
      <Tabs.Tabs>
        <Tabs.Content
          orderProduct={orderByNameProduct}
          key={orderByNameProduct?.id}
        />
      </Tabs.Tabs>
      <FooterOrderComponent />
    </main>
  )
}
