import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  // Handle body scroll lock when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <nav
          className={`w-[90%] max-w-7xl mx-auto px-6 py-4 mt-2 flex items-center justify-between rounded-4xl shadow-md transition-all duration-300 ${
            isTop
              ? "bg-[#FAF9F6]"
              : "bg-white/50 backdrop-blur-md border border-white/20"
          }`}
        >
          {/* Left - Logo */}
          <Link href="/" className="group inline-flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="transition-transform"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-light text-gray-900 leading-none group-hover:text-amber-800 transition-colors">
                Sheesham
              </h1>
              <p className="text-[10px] font-medium text-amber-950 uppercase tracking-widest leading-none mt-0.5">
                Wood Furniture
              </p>
            </div>
          </Link>

          {/* Center - Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link href="/about" className="hover:text-black transition">About</Link>
            <Link href="/product" className="hover:text-black transition">Product</Link>
            <Link href="/gallery" className="hover:text-black transition">Gallery</Link>
          </div>

          {/* Right - Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="block bg-black text-white font-medium px-6 py-2 rounded-full hover:bg-gray-900 transition duration-300 shadow"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden bg-black/30 "
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-65 sm:w-90 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link href="/" className="group inline-flex items-center gap-2" onClick={closeSidebar}>
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={28} 
                height={28} 
                className="transition-transform"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-light text-gray-900 leading-none group-hover:text-amber-800 transition-colors">
                  Sheesham
                </h1>
                <p className="text-[9px] font-medium text-amber-950 uppercase tracking-widest leading-none mt-0.5">
                  Wood Furniture
                </p>
              </div>
            </Link>
            
            <button
              onClick={closeSidebar}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <Link 
                href="/about" 
                className="block text-lg font-medium text-gray-700 hover:text-black transition-colors py-2"
                onClick={closeSidebar}
              >
                About
              </Link>
              <Link 
                href="/product" 
                className="block text-lg font-medium text-gray-700 hover:text-black transition-colors py-2"
                onClick={closeSidebar}
              >
                Product
              </Link>
              <Link 
                href="/gallery" 
                className="block text-lg font-medium text-gray-700 hover:text-black transition-colors py-2"
                onClick={closeSidebar}
              >
                Gallery
              </Link>
            </div>
          </nav>

          {/* Contact Button */}
          <div className="p-6 border-t border-gray-200">
            <Link
              href="/contact"
              className="block w-full bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300 shadow text-center"
              onClick={closeSidebar}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}