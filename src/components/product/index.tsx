import { prisma } from '@/lib/prisma'
import Container from '../Container'
import { ProductList } from './productList'

export const ProductRoot = async () => {
  const products = await prisma.product.findMany({})

  return (
    <main>
      <Container>
        <ProductList products={products} />
      </Container>
    </main>
  )
}
