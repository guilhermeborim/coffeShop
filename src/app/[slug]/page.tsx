import { FooterDetail } from '@/components/footer/footerDetail'
import { HeaderProductOrder } from '@/components/header/headerProductOrder'
import { ProductDetail } from '@/components/product/productDetail'
import { prisma } from '@/lib/prisma'
import { Heart } from 'lucide-react'

interface PageParams {
  params: {
    slug: string
  }
}

export default async function Product({ params }: PageParams) {
  const productSlug = await prisma.product.findFirst({
    where: {
      slug: params.slug,
    },
  })
  console.log(productSlug)
  return (
    <div className="bg-backgroundMain min-h-screen relative">
      <HeaderProductOrder text="Detalhes">
        <button>
          <Heart />
        </button>
      </HeaderProductOrder>
      <ProductDetail product={productSlug!} />
      <FooterDetail price={productSlug!.price} />
    </div>
  )
}
