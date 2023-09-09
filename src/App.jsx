import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Us from './components/Us'
import Agenda from './components/Agenda'
import Speakers from './components/Speakers'
import Faq from './components/Faq'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/us" element={<Us/>}/>
      <Route exact path="/agenda" element={<Agenda/>}/>
      <Route exact path="/speakers" element={<Speakers/>}/>
      <Route exact path="/faq" element={<Faq/>}/>
    </Routes>
    </>
  )
}

export default App
