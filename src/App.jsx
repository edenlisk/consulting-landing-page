import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<HomePage/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
