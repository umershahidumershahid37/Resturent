import React from 'react'

const dishes = [
  {
    name: 'Grilled Lamb Chops',
    image: "kabab.jpg",
    category: 'Signature Dish',
    price: 'PKR 4,199',
    description: 'Juicy lamb chops with aromatic spices, served with roasted vegetables.',
  },
  {
    name: 'Seafood Platter',
    image: './seafood.jpg',
    category: 'Chef Special',
    price: 'PKR 5,299',
    description: 'Fresh fish, prawns and calamari in a zesty garlic butter sauce.',
  },
  {
    name: 'Rice Feast',
    image: '/rice.jpg',
    category: 'House Favorite',
    price: 'PKR 3,250',
    description: 'Fragrant rice with tender meat and savory spices for a hearty meal.',
  },
  {
    name: 'Dessert Selection',
    image: '/sweet.jpg',
    category: 'Sweet Ending',
    price: 'PKR 1,499',
    description: 'A delightful assortment of pastries and sweets to finish your dinner.',
  },
]

const Cards = () => {
  return (
    <section className="bg-slate-100 py-12">
      <div className=" sm:px-6 max-w-[93%] mx-auto px-6 md:px-0">
        <div className="text-center mb-10">
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-amber-400 sm:text-5xl">
            Our top dishes
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="group flex h-full flex-col overflow-hidden rounded-[32px] bg-white shadow-[0_26px_60px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-300">
                    {dish.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {dish.name}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                <p className="text-sm leading-6 text-slate-600">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-bold text-amber-400">
                    {dish.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
