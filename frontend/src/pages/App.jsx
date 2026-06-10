import { Routes, Route, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import logo from '../assets/Logo.svg'
import Account from './account'
import Contact from './contact'
import Login from './login'

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/about' element={<About />} />
    <Route path='/account' element={<Account/>} />
    <Route path='/contact' element={<Contact/>} />
  </Routes>
  )
}

export default App
