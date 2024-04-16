'use client'

import Bean from '@/../public/bean.svg'
import Milk from '@/../public/milk.svg'
import { Product } from '@prisma/client'
import { Star } from 'lucide-react'
import FooterDetailComponent from '../Footer/FooterDetail'
import IconDetailComponent from '../Icons/IconDetail'
interface ProductDetailProps {
  products: Product | null
}
export default function ProductDetailComponent({
  products,
}: ProductDetailProps) {
  if (!products) return
  const character = 108
  const descriptionSort = products?.description.length > character
  const truncatedDescription = products?.description.slice(0, character)
  return (
    <>
      <section className="px-10 mb-28 pb-5">
        <div
          style={{ backgroundImage: `url('${products?.image}')` }}
          className="rounded-2xl h-56 bg-center bg-cover mb-5"
        />
        <section className="border-b pb-5 border-b-[#EAEAEA]">
          <article className="flex flex-col gap-2">
            <h1 className="text-textName text-20 font-semibold">
              {products?.name}
            </h1>
            <p className="text-textDescription text-12 font-normal">
              with Chocolate
            </p>
          </article>
          <article className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-1">
              <Star color="#FBBE21" fill="#FBBE21" size={20} />
              <div className="flex items-center">
                <p className="text-textName text-16 font-semibold">
                  {products?.rating}
                  <span className="text-12 text-textReviews font-normal pl-1">
                    ({products?.reviews})
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <IconDetailComponent icon={Bean} alt="Bean" />
              <IconDetailComponent icon={Milk} alt="Milk" />
            </div>
          </article>
        </section>
        <section>
          <article className="my-5 flex flex-col gap-3">
            <h2 className="text-textName text-16 font-semibold">Description</h2>
            <p className="text-textDescription text-14 font-normal">
              {descriptionSort ? truncatedDescription : products?.description}
              {descriptionSort && (
                <span className="text-orange cursor-pointer">...Read more</span>
              )}
            </p>
          </article>
          <article>
            <h2 className="text-textName text-16 font-semibold">Size</h2>
            <div className="flex items-center justify-between mt-3 gap-3">
              <div className="border border-borderSize font-normal text-14 text-textName w-full text-center p-2 rounded-xl hover:bg-backgroundSize hover:border-orange hover:text-orange">
                S
              </div>
              <div className="border border-borderSize font-normal text-14 text-textName w-full text-center p-2 rounded-xl hover:bg-backgroundSize hover:border-orange hover:text-orange">
                M
              </div>
              <div className="border border-borderSize font-normal text-14 text-textName w-full text-center p-2 rounded-xl hover:bg-backgroundSize hover:border-orange hover:text-orange">
                L
              </div>
            </div>
          </article>
        </section>
      </section>
      <FooterDetailComponent price={products?.price} />
    </>
  )
}
