
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Speisekarte from './components/Speisekarte'
import Kontakt from './components/Kontakt'
import Offen from './components/Offen'
import Galerie from './components/Galerie'
import { useState } from 'react'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Speisekarte />} />
        <Route path='/Kontakt' element={<Kontakt />} />
        <Route path='/Offen' element={<Offen />} />
        <Route path='/Galerie' element={<Galerie />} />
      </Routes>
    </>
  )
}

export default App
