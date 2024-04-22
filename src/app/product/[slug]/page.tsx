import HearthDetail from '@/../public/Heart.svg'
import HeaderDetailOrderComponent from '@/components/Header/Header-detail-order'
import ProductDetailComponent from '@/components/Products/ProductDetail'
import { prisma } from '@/lib/prisma'
type params = {
  params: {
    slug: string
  }
}

export default async function ProductName({ params }: params) {
  const productByName = await prisma.product.findFirst({
    where: {
      slug: params.slug,
    },
  })

  return (
    <main className="bg-backgroundMain">
      <HeaderDetailOrderComponent
        name="Detail"
        icon={HearthDetail}
        className="px-10 py-5 flex items-center justify-between"
      />
      <ProductDetailComponent products={productByName} />
    </main>
  )
}
