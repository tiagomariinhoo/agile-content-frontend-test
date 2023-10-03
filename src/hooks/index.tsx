import { PropsWithChildren } from 'react'
import { ApiProvider } from './useApi'

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApiProvider>
      {children}
    </ApiProvider>
  )
}