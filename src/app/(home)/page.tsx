import CategoryListComponent from '@/components/Categorys/CategoryList'
import FooterComponent from '@/components/Footer/Footer'
import HeaderComponent from '@/components/Header/Header'
import ProductListComponent from '@/components/Products/ProductList'
import { prisma } from '@/lib/prisma'
export default async function Home() {
  const categorys = await prisma.category.findMany({})
  const products = await prisma.product.findMany({})
  return (
    <main>
      <HeaderComponent />
      <section className="px-10 py-5 bg-backgroundMain">
        <article>
          <CategoryListComponent categorys={categorys} />
        </article>
        <ProductListComponent products={products} />
      </section>
      <FooterComponent />
    </main>
  )
}
