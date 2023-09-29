import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { AppProvider } from './hooks'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
