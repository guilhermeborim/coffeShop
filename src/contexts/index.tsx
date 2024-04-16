import { CategoryProvider } from './category'
import { CepProvider } from './cep'
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CepProvider>
      <CategoryProvider>{children}</CategoryProvider>
    </CepProvider>
  )
}

export default AppProvider
