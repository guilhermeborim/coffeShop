import { AddressList } from '../address/addressList'
import { Avatar } from '../avatar'
import { Input } from '../input'

export const HeaderHome = () => {
  return (
    <header className="bg-gradient-to-l from-bgGradiantOne to-bgGradiantTwo calc-bg px-[30px] py-6">
      <section className="flex items-center justify-between  mb-6">
        <div className="flex flex-col gap-1">
          <p className="mobile:font-normal mobile:text-12 tablet:font-semibold tablet:text-20 font-semibold text-[24px] text-whiteB">
            Localização
          </p>
          <AddressList />
        </div>
        <div className="rounded-[14px] mobile:w-11 mobile:h-11 tablet:w-14 tablet:h-14 w-16 h-16 bg-neutral-500 flex items-center justify-center">
          <Avatar />
        </div>
      </section>
      <Input />
    </header>
  )
}
