import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Realtime from './pages/Realtime'

export default function App(){
  return (
    <div>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="/realtime">Realtime</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/realtime' element={<Realtime/>} />
      </Routes>
    </div>
  )
}
