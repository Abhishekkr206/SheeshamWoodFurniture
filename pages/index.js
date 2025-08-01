import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
}
