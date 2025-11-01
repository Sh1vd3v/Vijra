"use client";

export default function CategorySection() {
  const categories = [
    {
      name: "Pharmaceutical",
      desc: "Pharmaceutical formulations and Parenterals product.",
    },
    {
      name: "Nutraceutical",
      desc: "Nutraceuticals and Wellness supplements.",
    },
    {
      name: "Medical Devices",
      desc: "Quality medical and Surgical products.",
    },
  ];

  return (
    <>
      <div className="products-header flex justify-center items-center py-8">
        <p className="text-3xl font-bold text-blue-700">Products</p>
      </div>
      <section
        id="products"
        className="flex flex-wrap justify-center gap-10 py-12 px-6"
      >
        {categories.map((item, i) => (
          <div
            key={i}
            className="w-64 h-48 shadow-md rounded-2xl flex flex-col justify-center items-center hover:shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-blue-700">{item.name}</h3>
            <p className="mt-2 text-sm text-gray-600 text-center px-4">
              {item.desc}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
