import Image from "next/image";
import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <Gallery />
      <Testimonials />
    </>
  );
}
