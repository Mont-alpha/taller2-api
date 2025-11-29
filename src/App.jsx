import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home'
import Implementacion from './pages/Implementacion'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Implementación' element={<Implementacion />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
