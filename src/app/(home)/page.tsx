import CategoryListComponent from '@/components/Categorys/CategoryList'
import FooterComponent from '@/components/Footer/Footer'
import HeaderComponent from '@/components/Header/Header'
import ProductListComponent from '@/components/Products/ProductList'
import { CategorysDatabase } from '@/hooks/database/categorys'
import { ProductsDatabase } from '@/hooks/database/products'

export default async function Home() {
  const { products } = await ProductsDatabase()
  const { categorys } = await CategorysDatabase()
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
