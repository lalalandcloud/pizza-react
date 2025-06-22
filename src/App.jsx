import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import CartPage from './pages/CartPage'
import Confirmation from './pages/Confirmation'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
    </>
  )
}

export default App
