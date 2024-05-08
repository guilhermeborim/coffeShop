import { Footer } from '.'
import Container from '../Container'
import { Button } from '../button'

export const FooterDetail = ({ price }: { price: number }) => {
  return (
    <Footer>
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex-1 gap-2 flex flex-col">
            <h3 className="font-normal mobile:text-14 tablet:text-16 text-18 text-textDescription">
              Preço
            </h3>
            <h2 className="font-semibold mobile:text-18 tablet:text-20 text-[24px] text-orange">
              $ {price}
            </h2>
          </div>
          <Button
            text="Compre Agora"
            className="flex-1 text-white h-[62px] rounded-2xl"
          />
        </div>
      </Container>
    </Footer>
  )
}
