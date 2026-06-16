import React from "react";

const Story = () => {
  return (
    <section id="our-story" className="bg-slate-100 py-20 px-6 text-slate-900">
      <div className="max-w-[93%] mx-auto px-6 md:px-0 ">
        <div className="mb-10 text-center">
          <p className="text-lg uppercase tracking-[0.35em] text-amber-500">Our Story</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900">
            A warm and authentic Pakistani dining experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 leading-relaxed">
            At Dum Pukht House, we blend rich culinary tradition with comfortable hospitality to create meals that feel both familiar and special.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="space-y-7">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">Crafted with care</h3>
                <p className="mt-4 text-slate-600 leading-7">
                  Our menu is inspired by Pakistani heritage and prepared with premium ingredients, gentle spices, and a focus on comforting flavors.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Slow-cooked recipes",
                    description: "Traditional dishes made with time and attention.",
                  },
                  {
                    title: "Premium quality",
                    description: "Fresh local ingredients for every plate.",
                  },
                  {
                    title: "Inviting atmosphere",
                    description: "A relaxed dining space for families and friends.",
                  },
                  {
                    title: "Thoughtful service",
                    description: "Friendly hospitality that makes you feel at home.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-600">Guest review</p>
                <p className="mt-4 text-base leading-7 text-slate-800">
                  “A comforting dining experience with authentic flavors and warm hospitality.”
                </p>
                <p className="mt-3 text-sm text-slate-600">— Zara H., Lahore</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <img
              src="/Story.png"
              alt="Restaurant interior"
              className="w-full h-full min-h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
