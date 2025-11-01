"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-blue-700 text-white py-4 text-center text-sm">
      © {new Date().getFullYear()} VIJRA HEALTHCARE. All Rights Reserved.
    </footer>
  );
}
