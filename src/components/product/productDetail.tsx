import Bean from '@/../public/bean.svg'
import Milk from '@/../public/milk.svg'
import { Product } from '@prisma/client'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Container from '../Container'
import { Size } from '../size'
interface ProductProps {
  product: Product
}

export const ProductDetail = ({ product }: ProductProps) => {
  return (
    <Container>
      <main className="pb-[110px]">
        <section className="flex w-full justify-between gap-8 tablet:flex-col mobile:flex-col">
          <Image
            priority
            src={product.image}
            alt="image food"
            width={0}
            height={0}
            sizes="100%"
            className="rounded-2xl flex-1 tablet:flex-none mobile:flex-none h-[426px] tablet:h-[326px] mobile:h-[226px] tablet:w-full mobile:w-full"
          />
          <div className="flex-1">
            <div className="flex flex-col gap-2 pb-4">
              <h1 className="font-semibold text-textName mobile:text-20 tablet:text-[26px] text-[32px]">
                {product.name}
              </h1>
              <span className="font-normal mobile:text-12 tablet:text-16 text-18 text-textDescription">
                {product.slug}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-b-[#eaeaea] pb-5">
              <div className="flex items-center gap-1">
                <Star color="#FBBE21" fill="#FBBE21" />
                <h3 className="font-semibold text-textName mobile:text-18 tablet:text-20 text-[24px]">
                  {product.rating}
                </h3>
                <span className="font-normal text-textReviews mobile:text-14 tablet:text-16 text-18">
                  {product.reviews}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-backgroundMain rounded-[14px] w-11 h-11 flex items-center justify-center">
                  <Image src={Bean} alt="image" width={24} height={24} />
                </div>
                <div className="bg-backgroundMain rounded-[14px] w-11 h-11 flex items-center justify-center">
                  <Image src={Milk} alt="image" width={24} height={24} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-5">
              <h2 className="font-semibold mobile:text-16 tablet:text-18 text-20 text-textName">
                Descrição
              </h2>
              <p className="font-normal mobile:text-14 tablet:text-16 text-18 text-textDescription">
                {product.description}
              </p>
            </div>
          </div>
        </section>
        <section className="pt-5">
          <Size />
        </section>
      </main>
    </Container>
  )
}
