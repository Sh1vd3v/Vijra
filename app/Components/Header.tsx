"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-4 border-b shadow-sm bg-white">
      <h1 className="text-2xl font-semibold tracking-wide text-blue-700">
        VIJRA HEALTHCARE
      </h1>
      <nav className="space-x-6 text-sm font-medium">
        <a href="#products" className="hover:text-blue-600 transition">
          Products
        </a>
        <a href="#about" className="hover:text-blue-600 transition">
          About Us
        </a>
        <a href="#contact" className="hover:text-blue-600 transition">
          Contact Us
        </a>
      </nav>
    </header>
  );
}
