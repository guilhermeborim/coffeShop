import CategoryItemComponent from '@/components/Categorys/CategoryItem'
import HeaderComponent from '@/components/Header/Header'

export default function Home() {
  return (
    <main>
      <HeaderComponent imageUrl="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" />
      <section className="px-10 py-5 bg-neutral-200">
        <nav>
          <ul className="flex justify-between flex-1 overflow-x-auto gap-2">
            <CategoryItemComponent name="Americano" />
            <CategoryItemComponent name="Americano" />
            <CategoryItemComponent name="Americano" />
            <CategoryItemComponent name="Americano" />
          </ul>
        </nav>
      </section>
    </main>
  )
}
