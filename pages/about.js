"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- REWRITTEN & SIMPLIFIED CONTENT ---
  const craftPhilosophy = [
    {
      title: "Solid Wood",
      description: "We start with the best. Only 100% solid Sheesham and Teak wood, chosen for its strength and grain.",
      image: "/images/indeximg/ProductChair.png",
      category:"chair"
    },
    {
      title: "Handcrafted",
      description: "Our skilled Delhi artisans build every piece by hand, ensuring quality in every joint and curve.",
      image: "/images/indeximg/ProductBed.png",
      category:"bed"
    },
    {
      title: "Lasting Finish",
      description: "Each piece is carefully sanded and finished to protect the wood and highlight its natural beauty.",
      image: "/images/indeximg/ProductCupboard.png",
      category:"cupboard"
    },
    {
      title: "Built to Last",
      description: "We build strong, durable furniture that's ready for everyday life and designed to become a family heirloom.",
      image: "/images/indeximg/ProductDiningset.png",
      category:"diningset"
    }
  ];

    const router = useRouter();
  
    const handleClick = (category) => {
      router.push(`/product/${category}`);
      };

  return (

    <>
      <Head>
        <title>About Us | Sheesham Wood Furniture</title>
        <meta name="description" content="Sheesham Wood Furniture offers premium handmade wooden furniture in Lucknow. Discover our story and craftsmanship." />
        <meta name="keywords" content="sheesham wood, wooden furniture, handmade furniture, Lucknow furniture" />
        <meta name="author" content="Sheesham Wood Furniture" />

        {/* Open Graph Meta Tags for Facebook / LinkedIn */}
        <meta property="og:title" content="About Us | Sheesham Wood Furniture" />
        <meta property="og:description" content="Premium handmade wooden furniture crafted with care in Lucknow, India." />
        <meta property="og:image" content="https://sheeshamwoodfurniture.in/images/og-About.png" />
        <meta property="og:url" content="https://sheeshamwoodfurniture.in/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Sheesham Wood Furniture" />
        <meta name="twitter:description" content="Premium handmade wooden furniture crafted with care in Lucknow, India." />
        <meta name="twitter:image" content="https://sheeshamwoodfurniture.in/images/ogAbout.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>


    <div className="bg-stone-50 text-stone-900">

      {/* Hero Section - Simple & Direct */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-stone-900"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/50 to-stone-900/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm uppercase tracking-[0.3em] text-stone-300 font-light">
              lucknow, India
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-8 tracking-tight leading-[0.9]">
            Sheesham
            <span className="block font-light italic text-amber-200"> Wood Furniture</span>
          </h1>

          <p className="text-xl md:text-2xl font-light leading-relaxed text-stone-200 max-w-2xl mx-auto">
            Solid wood furniture. Handcrafted in lucknow. Built to last.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-white/30 mx-auto mb-4"></div>
          <span className="text-white/60 text-xs uppercase tracking-wider">Scroll</span>
        </div>
      </section>

      {/* Story Section - Short & Clear */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
                Our Promise
              </h2>
              <div className="w-24 h-px bg-amber-600 mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-stone-600 mb-8">
                At Sheesham Wood Furniture, we keep things simple. We use 100% solid wood, and our skilled artisans build each piece by hand with a focus on quality.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-stone-600 mb-12">
                No shortcuts, just beautiful furniture that&apos;s made to be lived with.
              </p>
              <div>
                <h3 className="text-3xl font-light text-amber-700 mb-2">100%</h3>
                <p className="text-stone-600 uppercase text-sm tracking-wide">Solid Wood</p>
              </div>
            </div>

            <div className="relative">
              <Link
                href="/product/mandir"
                >
                <div className="aspect-[4/5] relative rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src="/images/indeximg/ProductMandir.png"
                    alt="Handcrafted solid Sheesham wood chair"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Process - Using the simplified content */}
      <section className="py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6">How We Build</h2>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Quality is in every step, from the raw wood to the final polish.
            </p>
          </div>

          <div className="space-y-32">
            {craftPhilosophy.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(item.category)}
                className={`grid lg:grid-cols-2 gap-16 items-center group cursor-pointer ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="mb-6">
                    <span className="text-sm text-amber-600 uppercase tracking-[0.2em] font-medium">
                      Step {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-[5/4] relative rounded-sm overflow-hidden shadow-xl">
                    <Image
                      src={item.image}
                      alt={item.title + " - Solid wood furniture crafting process"}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section - Simplified descriptions */}
      <section className="py-32 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight mb-8 leading-tight">
                Our Wood
              </h2>
              <div className="w-24 h-px bg-amber-400 mb-8"></div>

              <div className="space-y-8">
                <div className="border-l-2 border-amber-400 pl-6">
                  <h3 className="text-xl font-medium mb-3 text-amber-200">Sheesham Wood</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Known for its rich grain and durability. A classic choice for strong, beautiful furniture.
                  </p>
                </div>

                <div className="border-l-2 border-amber-400 pl-6">
                  <h3 className="text-xl font-medium mb-3 text-amber-200">Teak Wood</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Prized for its natural strength and resistance to moisture. The best wood for long-lasting quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Link
                href="/product/table"
                >
                <div className="aspect-[3/2] relative rounded-sm overflow-hidden">
                  <Image
                    src="/images/indeximg/ProductTable.png"
                    alt="Close-up on the grain of a solid Teak wood table"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple & action-oriented */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-8">
            See the Quality
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Explore our collection online or visit our showroom in Delhi to see our craftsmanship up close.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/product">
              <button className="px-8 py-4 bg-stone-900 text-white hover:bg-amber-700 transition-colors duration-300 uppercase text-sm tracking-wide font-medium">
                Browse Collection
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wide font-medium">
                Visit Showroom
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}