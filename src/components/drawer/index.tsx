'use client'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ChevronDown } from 'lucide-react'
import { FormDrawer } from './formDrawer'

export function DrawerAddress() {
  return (
    <Drawer>
      <DrawerTrigger asChild className="flex items-center gap-1">
        <button className="text-whiteD mobile:font-semibold mobile:text-14 tablet:font-semibold tablet:text-[24px] font-semibold text-[32px]">
          Insira seu endereço
          <ChevronDown size={14} className="mobile:hidden" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Digite seu CEP</DrawerTitle>
          </DrawerHeader>
          <FormDrawer />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
