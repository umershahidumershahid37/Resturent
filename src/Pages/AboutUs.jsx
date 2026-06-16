import React from 'react'
import Story from '../component/Story' // Check: Kya folder ka naam 'component' hai?
import Footer from '../component/Footer'

const AboutUs = () => {
  return (
    <main className="mt-14 min-h-screen flex flex-col">
      <Story />
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
}

export default AboutUs