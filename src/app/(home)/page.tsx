import CategoryItemComponent from '@/components/Categorys/CategoryItem'
import FooterComponent from '@/components/Footer/Footer'
import HeaderComponent from '@/components/Header/Header'
import ProductListComponent from '@/components/Products/ProductList'

export default function Home() {
  return (
    <main>
      <HeaderComponent imageUrl="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" />
      <section className="px-10 py-5 bg-backgroundMain">
        <article>
          <nav>
            <ul className="flex justify-between flex-1 overflow-x-auto gap-2 ">
              <CategoryItemComponent name="Capuccino" />
              <CategoryItemComponent name="Machiato" />
              <CategoryItemComponent name="latte" />
              <CategoryItemComponent name="Americano" />
            </ul>
          </nav>
        </article>
        <ProductListComponent />
      </section>
      <FooterComponent />
    </main>
  )
}
