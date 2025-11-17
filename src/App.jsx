import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import './App.css'
import Home from './Home'
import FindMetro from './FindMetro'


function App() {
 

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/findmetro' element={<FindMetro/>}/>
    </Routes>
    </>
  )
}

export default App
