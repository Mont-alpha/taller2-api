import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hello World</h1>} />
        <Route path='/Implementación' element={<h1>Home Page</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
