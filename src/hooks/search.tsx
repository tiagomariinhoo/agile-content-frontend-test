import React, { createContext, useContext, useState, PropsWithChildren } from 'react'
//TODO: REMOVE THIS CONTEXT
//TODO2: TRY TO MAKE AN USEFETCH HOOK
interface SearchProps {
  isShowingPreview: boolean;
  setIsShowingPreview: (value: boolean) => void;
  text: string;
  setText: (value: string) => void;
}

const SearchContext = createContext<SearchProps>({} as SearchProps);

const SearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isShowingPreview, setIsShowingPreview] = useState(false)
  const [text, setText] = useState("")

  return (
    <SearchContext.Provider value={{ isShowingPreview, setIsShowingPreview, text, setText }}>
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