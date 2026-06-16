import React from "react";

const reviews = [
  {
    name: "Ayesha Khan",
    role: "Regular Guest",
    rating: 5,
    message:
      "Dum Pukht House delivered an unforgettable dinner. The biryani and kebabs were full of authentic flavor, and the service was warm and attentive.",
  },
  {
    name: "Bilal Ahmed",
    role: "Family Visitor",
    rating: 5,
    message:
      "This has become our go-to restaurant for family celebrations. The ambience is elegant, and every dish feels crafted with care.",
  },
  {
    name: "Sana Mirza",
    role: "Food Blogger",
    rating: 4,
    message:
      "A true taste of Pakistani hospitality. The spices were balanced beautifully and the presentation was modern yet respectful of tradition.",
  },
  {
    name: "Omar Sheikh",
    role: "Business Lunch",
    rating: 5,
    message:
      "Perfect place for client meetings. The menu has great variety and the atmosphere is polished without feeling stiff.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="bg-slate-50 py-8 ">
      <div className=" sm:px-6 max-w-[93%] mx-auto px-6 md:px-0">
        <div className="text-center mb-10">
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-amber-400 sm:text-5xl">
            Customer Reviews{" "}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl font-bold text-orange-600">
                  {review.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    {review.name}
                  </p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-1 text-amber-400">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, index) => (
                  <span key={index} className="text-slate-300">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm leading-7 text-slate-600">
                {review.message}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
