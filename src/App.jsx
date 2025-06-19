import './App.css'
import Detail from './components/Detail'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
    <Routes>

      <Route index element={<Home />} />
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
    </>
  )
}

export default App
