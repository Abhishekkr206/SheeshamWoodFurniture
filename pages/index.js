import Image from "next/image";
import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <Testimonials />
      <Footer/>
    </>
  );
}
