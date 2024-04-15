/* eslint-disable prettier/prettier */
'use client'

import { createContext, useContext, useState } from 'react'

interface CepProps {
  localidade: string
  locagradouro: string
}

type CepContextProps = {
  address: CepProps | null
  setAddress: (address: CepProps | null) => void
}

const CepContext = createContext<CepContextProps>({} as CepContextProps)

const CepProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<CepProps | null>(null)

  return (
    <CepContext.Provider value={{address, setAddress}}>
      {children}
    </CepContext.Provider>
  )
}

const useCepUser = () => {
  const context = useContext(CepContext)

  return context
}

export { CepContext, CepProvider, useCepUser }

