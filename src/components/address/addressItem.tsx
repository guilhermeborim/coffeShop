'use client'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import { DrawerAddress } from '../drawer'

export const AddressItem = () => {
  const { localidade, logradouro } = useSelector(
    (state: RootState) => state.addressUserSlice,
  )
  return (
    <>
      {localidade ? (
        <>
          <h3 className="text-whiteD mobile:font-semibold mobile:text-14 tablet:font-semibold tablet:text-[24px] font-semibold text-[32px]">
            {logradouro},{localidade}
          </h3>
        </>
      ) : (
        <DrawerAddress />
      )}
    </>
  )
}
