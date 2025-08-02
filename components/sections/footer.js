import Link from 'next/link';
import { MessageCircle, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#241B11] text-zinc-100 font-sans pt-12 md:pt-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Column 1: Brand and Address */}
          <div className="mb-6">
            <h3 className="text-xl lg:text-2xl font-semibold text-white border-b border-[#463427] pb-4 mb-6">
              Sheesham Wood Furniture
            </h3>
            <p className="italic text-zinc-300 mb-4 leading-relaxed">
              Crafted with Passion, Built to Last.
            </p>
            {/* UPDATED: The phone number has been added back to the address section. */}
            <address className="not-italic leading-relaxed">
              123 Woodcraft Lane,
              <br />
              Furniture City, FC 12345
              <br />
              <a href="tel:+919876543210" className="mt-2 inline-block hover:text-amber-300 hover:underline transition-colors">
                +91 98765 43210
              </a>
            </address>
          </div>

          {/* Column 2: Navigation */}
          <div className="mb-6">
            <h3 className="text-xl lg:text-2xl font-semibold text-white border-b border-[#463427] pb-4 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-amber-300 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-300 transition-colors">About</Link></li>
              <li>
                <Link href="/product" className="hover:text-amber-300 transition-colors">Product</Link>
                <ul className="pl-5 mt-3 space-y-2 border-l border-[#463427] text-sm">
                  <li><Link href="/product/bed" className="hover:text-amber-300 transition-colors">Beds</Link></li>
                  <li><Link href="/product/chair" className="hover:text-amber-300 transition-colors">Chairs</Link></li>
                  <li><Link href="/product/table" className="hover:text-amber-300 transition-colors">Tables</Link></li>
                </ul>
              </li>
              <li><Link href="/gallery" className="hover:text-amber-300 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-amber-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="mb-6">
            <h3 className="text-xl lg:text-2xl font-semibold text-white border-b border-[#463427] pb-4 mb-6">
              Connect With Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-amber-300 transition-colors">
                  <Phone size={20} />
                  {/* UPDATED: Simplified text as the number is now back in the address. */}
                  <span>Call Us</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-300 transition-colors">
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-300 transition-colors">
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-300 transition-colors">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@sheeshamwood.com" className="flex items-center gap-3 hover:text-amber-300 transition-colors">
                  <Mail size={20} />
                  <span>Email Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 py-5 border-t border-[#463427] bg-black/10">
        <div className="container mx-auto px-6 lg:px-8 text-center text-sm text-zinc-300">
          <p>&copy; {new Date().getFullYear()} Sheesham Wood Furniture. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;