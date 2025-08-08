import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
        <Head>
        <title>Sheesham Wood Furniture | Handmade Wooden Furniture in Lucknow</title>
        <meta name="description" content="Buy premium sheesham wood furniture handcrafted in Lucknow. Beds, sofas, dining tables and more." />
        <meta name="keywords" content="sheesham wood, wooden furniture, Lucknow furniture, handcrafted furniture, premium furniture" />
        <meta name="author" content="Sheesham Wood Furniture" />

        <meta property="og:title" content="Sheesham Wood Furniture | Handmade Furniture" />
        <meta property="og:description" content="Discover beautiful handmade wooden furniture from Lucknow, India." />
        <meta property="og:image" content="https://sheeshamwoodfurniture.in/images/ogHome.jpg" />
        <meta property="og:url" content="https://sheeshamwoodfurniture.in/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sheesham Wood Furniture" />
        <meta name="twitter:description" content="Explore our collection of handcrafted wooden furniture from Lucknow." />
        <meta name="twitter:image" content="https://sheeshamwoodfurniture.in/images/ogHome.png" />
      </Head>

      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
}
