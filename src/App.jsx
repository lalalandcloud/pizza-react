import './App.css'
import Contenu from './components/Contenu'
import Detail from './components/Detail'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
switch
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route index element={<Contenu/>} />
        <Route path='/pizza/:name' element={<Detail/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
