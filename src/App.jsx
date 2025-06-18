import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
    </>
  )
}

export default App
