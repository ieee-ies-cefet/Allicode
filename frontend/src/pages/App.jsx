import { Routes, Route, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import logo from '../assets/Logo.svg'

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
  </Routes>
  )
}

export default App
