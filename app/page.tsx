"use client";
import React from "react";
import Header from "./Components/Header";
import CategorySection from "./Components/CategorySection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />

      {/* Main Intro Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          Empowering Health Through Innovation
        </h2>
        <p className="max-w-2xl text-lg text-gray-600">
          At <strong>Vijra Healthcare</strong>, we connect client requirements
          with trusted manufacturing partners to deliver quality{" "}
          <strong>pharmaceuticals, nutraceuticals,</strong> and{" "}
          <strong>medical devices</strong>. From production to packaging and
          shipping, we ensure seamless, compliant, and reliable supply for every
          order.
        </p>
      </section>

      <CategorySection />
      <Footer />
    </main>
  );
}
