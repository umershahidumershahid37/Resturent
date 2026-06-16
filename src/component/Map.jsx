import React from 'react'

const Map = ({ address = 'Dum Pukht House, Lahore, Pakistan', zoom = 15 }) => {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=${zoom}&output=embed`

  return (
    <section id="map" className="w-full ">
      <div className="w-full mx-auto">
        <div className="relative  overflow-hidden shadow-lg h-64 sm:h-72 md:h-96">
          <iframe
            src={src}
            title="Dum Pukht House location"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Map
