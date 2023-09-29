import { PropsWithChildren } from 'react'
import { SearchProvider } from "./search"

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SearchProvider>
      {children}
    </SearchProvider>
  )
}