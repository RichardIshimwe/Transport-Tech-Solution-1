import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './component/routes'
// import './App.css'

import Contact from "../src/pages/contact-us/contactUs"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Contact />
       
    </>
  )
}

export default App
