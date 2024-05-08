import { HeaderProductOrder } from '@/components/header/headerProductOrder'
import { prisma } from '@/lib/prisma'

interface PageParams {
  params: {
    slug: string
  }
}

export default async function OrderProduct({ params }: PageParams) {
  const productSlug = await prisma.product.findFirst({
    where: {
      slug: params.slug,
    },
  })
  console.log(productSlug)

  return (
    <div className="bg-backgroundMain min-h-screen relative">
      <HeaderProductOrder text="Pedido" />
    </div>
  )
}
