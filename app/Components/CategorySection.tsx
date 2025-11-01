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
    <section id="products" className="py-16 px-6 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700">Products</h2>
        <p className="text-gray-600 mt-2">
          Explore our wide range of healthcare solutions
        </p>
      </div>

      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {categories.map((item, i) => (
          <div
            key={i}
            className="w-64 h-48 shadow-md rounded-2xl flex flex-col justify-center items-center bg-white hover:shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-blue-700">{item.name}</h3>
            <p className="mt-2 text-sm text-gray-600 text-center px-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
