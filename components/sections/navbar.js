"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setIsTop(true);
        setShowNavbar(true);
      } else {
        setIsTop(false);
        if (currentScrollY > lastScrollY.current) {
          setShowNavbar(false); // scrolling down
        } else {
          setShowNavbar(true); // scrolling up
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <nav
        className={`w-[90%] max-w-7xl mx-auto px-6 py-4 flex items-center justify-between rounded-4xl shadow-md transition-all duration-300 ${
          isTop
            ? "bg-[#FAF9F6]"
            : "bg-white/50 backdrop-blur-md border border-white/20"
        }`}
      >
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Furniture</Link>
        </div>

        {/* Center - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/about" className="hover:text-black transition">About</Link>
          <Link href="/products" className="hover:text-black transition">Products</Link>
          <Link href="/gallery" className="hover:text-black transition">Gallery</Link>
        </div>

        {/* Right - Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="block bg-black text-white font-medium px-6 py-2 rounded-full hover:bg-gray-900 transition duration-300 shadow"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
