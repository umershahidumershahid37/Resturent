import React from 'react';
import { Zap, Clock } from 'lucide-react';
import Footer from '../component/Footer';

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "Family Feast Bundle",
      description: "Serves 4-5 people. Includes 2 mains, 1 rice, 1 bread, 1 raita & 1 dessert",
      originalPrice: 18500,
      dealPrice: 14999,
      discount: 19,
      image: "/family-feast.jpg",
      tag: "Family Deal"
    },
    {
      id: 2,
      title: "Lunch Special",
      description: "Available 12 PM - 3 PM. Any main with rice, bread & raita",
      originalPrice: 2800,
      dealPrice: 1999,
      discount: 29,
      image: "/lunch-special.jpg",
      tag: "Time Limited"
    },
    {
      id: 3,
      title: "Dinner Combo",
      description: "Evening special. 2 different mains with rice and complimentary dessert",
      originalPrice: 7500,
      dealPrice: 5499,
      discount: 27,
      image: "/dinner-combo.jpg",
      tag: "Evening Deal"
    },
    {
      id: 4,
      title: "Seafood Extravaganza",
      description: "Premium selection. Seafood platter, grilled fish, shrimp biryani & dessert",
      originalPrice: 12999,
      dealPrice: 9999,
      discount: 23,
      image: "/seafood-special.jpg",
      tag: "Premium"
    },
    {
      id: 5,
      title: "Weekend Celebration",
      description: "Friday-Sunday. Complete meal for 6 with premium meats & special preparations",
      originalPrice: 22000,
      dealPrice: 16999,
      discount: 23,
      image: "/weekend-special.jpg",
      tag: "Weekend"
    },
    {
      id: 6,
      title: "Romantic Dinner for Two",
      description: "Special plating. 2 premium mains, wine-paired rice, bread & chocolate dessert",
      originalPrice: 8999,
      dealPrice: 6499,
      discount: 28,
      image: "/romantic-dinner.jpg",
      tag: "Couple Deal"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 pt-8 ">
      <div className=" max-w-[93%] mx-auto px-6 md:px-0">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-500 mb-4">
            Exclusive Deals & Offers
          </h1>
          <p className="text-lg text-slate-700">
            Discover our special combos and limited-time offers
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Deal Tag */}
                <div className="absolute top-4 left-4 bg-amber-500 text-zinc-950 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {deal.tag}
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{deal.discount}%
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-zinc-950 mb-2">
                  {deal.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {deal.description}
                </p>

                {/* Price Section */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-amber-600">
                    PKR {deal.dealPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-500 line-through">
                    PKR {deal.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-zinc-950 font-bold py-2 rounded-lg transition-all duration-300 transform active:scale-95">
                  Get Offer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Terms Section */}
        <div className="mt-20 bg-white rounded-lg p-8 shadow-md mb-5">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">
                Valid Timings & Terms
              </h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Lunch Special: 12 PM - 3 PM (Monday - Friday)</li>
                <li>• Dinner Combo: 6 PM - 10 PM (Everyday)</li>
                <li>• Weekend deals available Friday 6 PM - Sunday 11 PM</li>
                <li>• All prices include GST</li>
                <li>• Orders must be placed at least 30 minutes in advance</li>
                <li>• Cannot be combined with other offers</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <Footer/>

    </div>
    
  );
};

export default Deals;
