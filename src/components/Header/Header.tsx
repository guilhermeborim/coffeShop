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
    <header className="bg-neutral-500 px-10 py-5">
      <section className="flex justify-between items-center">
        <article className="flex flex-col gap-1">
          <span>Location</span>

          {address ? (
            <h1>{address}</h1>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <button>Insira seu endereço</button>
              </SheetTrigger>
              <ModalComponent />
            </Sheet>
          )}
        </article>
        <AvatarProfileComponent imageUrl={imageUrl} />
      </section>
      <section className="relative flex items-center bg-neutral-600 rounded-3xl mt-4">
        <InputHeaderComponent />
      </section>
    </header>
  )
}
