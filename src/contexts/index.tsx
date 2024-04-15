import { CepProvider } from './cep'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <CepProvider>{children}</CepProvider>
}

export default AppProvider
