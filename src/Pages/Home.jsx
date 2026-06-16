import React from 'react'
import Navbar from '../component/Navbar'
import Landing from '../component/Landing'
import Cards from '../component/Cards'
import Story from '../component/Story'
import Reviews from '../component/Reviews'
import Map from '../component/Map'
import Footer from '../component/Footer'
import Imeges from '../component/Imeges'

const Home = () => {
  return (
    <div>
      <main className='bg-state-100 text-slate-900'>
        <Navbar/>
        <Landing/>
        <Cards/>
        <Imeges/>
        <Story/>
        <Reviews/>
        <Map/>
        <Footer/>

      </main>
    </div>
  )
}

export default Home
