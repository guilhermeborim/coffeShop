import Container from '@/components/Container'
import { BadgeCategoryList } from '@/components/badge/badgeCategoryList'
import { Footer } from '@/components/footer'
import { FooterIcon } from '@/components/footer/footerIcon'
import { HeaderHome } from '@/components/header/headerHome'
import { ProductRoot } from '@/components/product'

export default function Home() {
  return (
    <div className="bg-backgroundMain min-h-screen relative">
      <HeaderHome />
      <BadgeCategoryList />
      <ProductRoot />
      <Footer>
        <Container>
          <FooterIcon />
        </Container>
      </Footer>
    </div>
  )
}
