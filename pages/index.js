import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/sections/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
