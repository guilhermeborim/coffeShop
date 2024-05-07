import { BadgeCategoryList } from '@/components/badge/badgeCategoryList'
import { Footer } from '@/components/footer'
import { HeaderHome } from '@/components/header/headerHome'
import { ProductRoot } from '@/components/product'

export default function Home() {
  return (
    <>
      <HeaderHome />
      <main className="bg-backgroundMain -mx-[30px]">
        <BadgeCategoryList />
        <section className="mx-[30px]">
          <ProductRoot />
        </section>
      </main>
      <Footer />
    </>
  )
}
