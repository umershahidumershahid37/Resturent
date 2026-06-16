import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Deals from './Pages/Deals'
import Reservation from './Pages/Reservation'
import Feedback from './Pages/Feedback'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Imeges from './component/Imeges'
import Gallery from './Pages/Gallery'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Deals" element={<Deals />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App