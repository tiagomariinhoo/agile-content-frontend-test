import React, { createContext, useContext, useState, PropsWithChildren } from 'react'

interface SearchProps {
  isShowingPreview: boolean;
  setIsShowingPreview: (value: boolean) => void;
}

const SearchContext = createContext<SearchProps>({} as SearchProps);

const SearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isShowingPreview, setIsShowingPreview] = useState(false)

  return (
    <SearchContext.Provider value={{ isShowingPreview, setIsShowingPreview }}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearch = () => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }

  return context
}

export { SearchProvider, useSearch }