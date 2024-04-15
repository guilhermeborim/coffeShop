'use client'

import { Sheet, SheetTrigger } from '../ui/sheet'
import AvatarProfileComponent from './AvatarProfile'
import InputHeaderComponent from './InputHeader'
import ModalComponent from './Modal'

interface HeaderProps {
  address?: string
  imageUrl: string
}
export default function HeaderComponent({ address, imageUrl }: HeaderProps) {
  return (
    <header className="bg-gradient-to-l from-bgGradiantOne to-bgGradiantTwo px-10 py-5">
      <section className="flex justify-between items-center">
        <article className="flex flex-col gap-1">
          <span className="text-12 text-whiteB font-normal">Location</span>

          {address ? (
            <h1 className="text-14 text-whiteD font-semibold">{address}</h1>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-14 text-whiteD font-semibold">
                  Insira seu endereço
                </button>
              </SheetTrigger>
              <ModalComponent />
            </Sheet>
          )}
        </article>
        <AvatarProfileComponent imageUrl={imageUrl} />
      </section>
      <section className="relative flex items-center rounded-3xl mt-7">
        <InputHeaderComponent />
      </section>
    </header>
  )
}
