import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage'
import Layout from './components/layout'
import About from './pages/AboutPage'
import Services from './pages/ServicesPage'
import Team from './pages/TeamPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/*' element={<HomePage/>}></Route>
        <Route path='/about-us' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/our-team' element={<Team/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
