'use client'
import Discount from '@/../public/Discount.svg'
import { TabsContent } from '@/components/ui/tabs'
import { useCepUser } from '@/contexts/cep'
import { Product } from '@prisma/client'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import TabsPaymentComponent from './TabsPayment'


type OrderContentProps = {
  orderProduct: Product | null
}
export default function TabsContentComponent({
  orderProduct,
}: OrderContentProps) {
  const [quantityProduct, setQuantityProduct] = useState<number>(1)
  const { address } = useCepUser()

  const ProductTotalPrice = () => {
    if (!orderProduct || quantityProduct < 1) return null
    const totalPrice = quantityProduct * orderProduct.price
    return totalPrice.toFixed(2)
  }

  const IncreaseProductQuantity = () => {
    setQuantityProduct((prev) => prev + 1)
  }
  const DecreaseProductQuantity = () => {
    setQuantityProduct((prev) => prev - 1)
  }
  return (
    <TabsContent value="delivery" className="pb-[112px]">
      <section className="flex flex-col gap-4 border-b-[#EAEAEA] border-b pb-5">
        <h2 className="text-textName font-semibold text-16">
          Delivery Address
        </h2>
        <article className="flex flex-col gap-2">
          {address && (
            <>
              <h3 className="text-textBadges font-semibold text-14">
                {address?.logradouro}
              </h3>
              <h4 className="font-normal text-12 text-textReviews">
                {address?.logradouro}, {address?.localidade}
              </h4>
            </>
          )}
          {!address && (
            <h3 className="text-textBadges font-semibold text-14">
              Por Favor, Registre seu endereço
            </h3>
          )}
        </article>
        <article className="flex items-center gap-2">
          <div className="text-textBadges font-normal text-12 border border-borderSize rounded-2xl py-[6px] px-3">
            Edit Address
          </div>
          <div className="text-textBadges font-normal text-12 border border-borderSize rounded-2xl py-[6px] px-3">
            Add Note
          </div>
        </article>
      </section>
      <section className="flex items-center justify-between py-5 border-b-2 border-[#eaeaea]">
        <article className="flex items-center gap-3">
          <div
            style={{ backgroundImage: `url('${orderProduct?.image}')` }}
            className="rounded-xl h-[54px] w-[54px] bg-center bg-cover"
          />
          <div>
            <h3 className="text-textName font-semibold text-16">
              {orderProduct?.name}
            </h3>
            <p className="text-textDescription font-normal text-12">
              with Chocolate
            </p>
          </div>
        </article>
        <div className="flex items-center gap-3">
          <button
            disabled={quantityProduct === 1}
            className="border border-[#eaeaea] rounded-full disabled:bg-red-500"
            onClick={DecreaseProductQuantity}
          >
            -
          </button>
          <span>{quantityProduct}</span>
          <button
            className="border border-[#eaeaea] rounded-full"
            onClick={IncreaseProductQuantity}
          >
            +
          </button>
        </div>
      </section>
      <section className="pt-5">
        <article className="flex items-center justify-between border border-[#eaeaea] rounded-[14px] p-4">
          <Image src={Discount} alt="discount" width={24} height={24} />
          <p className="text-textName font-semibold text-14	">
            1 Discount is applied
          </p>
          <ChevronRight />
        </article>
        <article className="pt-5">
          <h3 className="font-semibold text-16 text-textName">
            Payment Summary
          </h3>
          <article className="flex flex-col gap-4 border-b border-b-[#eaeaea] py-4 mb-4">
            <TabsPaymentComponent text="Price">
              {ProductTotalPrice()}
            </TabsPaymentComponent>
            <TabsPaymentComponent text="Delivery Fee">
              $ 0.0
            </TabsPaymentComponent>
          </article>
          <TabsPaymentComponent text="Total Payment">
            {ProductTotalPrice()}
          </TabsPaymentComponent>
        </article>
      </section>
    </TabsContent>
  )
}
