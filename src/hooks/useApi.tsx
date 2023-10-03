import { useContext, createContext } from 'react' 
import { animals } from '../api/animals'

interface ApiInterface {
  get: Function;
}

interface ApiProps {
  animals: ApiInterface;
}

const ApiContext = createContext<ApiProps>({} as ApiProps)

const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={{ animals }}>
      {children}
    </ApiContext.Provider>
  )
}

const useApi = () => {
  const context = useContext(ApiContext)
  
  if (!context) {
    throw new Error('useApi must be used within a SearchProvider')
  }

  return context
}

export { ApiProvider, useApi }