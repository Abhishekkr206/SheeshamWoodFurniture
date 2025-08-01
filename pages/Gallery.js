import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from 'lucide-react';

const galleryImages = [
  { id: 1, src: "/images/indeximg/ProductChair.png", alt: "Elegant Sheesham wood chair", title: "The Artisan Chair", ratio: "aspect-[9/16]" },
  { id: 2, src: "/images/indeximg/ProductBed.png", alt: "Solid Teak wood bed frame", title: "The Monarch Bed", ratio: "aspect-[16/9]" },
  { id: 3, src: "/images/indeximg/ProductTable.png", alt: "Handcrafted dining table", title: "The Family Table", ratio: "aspect-[5/4]" },
  { id: 4, src: "/images/indeximg/ProductTvSideboard.png", alt: "Modern wooden sideboard", title: "The Minimalist Sideboard", ratio: "aspect-[1/1]" },
  { id: 5, src: "/images/indeximg/ProductChair.png", alt: "Tall Sheesham bookshelf", title: "The Scholar Bookshelf", ratio: "aspect-[5/4]" },
  { id: 6, src: "/images/indeximg/ProductTable.png", alt: "Low-profile coffee table", title: "The Centerpiece Table", ratio: "aspect-[16/9]" },
  { id: 7, src: "/images/indeximg/ProductBed.png", alt: "Ornate storage cabinet", title: "The Heritage Cabinet", ratio: "aspect-[9/16]" },
  { id: 8, src: "/images/indeximg/ProductTvSideboard.png", alt: "Solid wood writing desk", title: "The Executive Desk", ratio: "aspect-[5/4]" },
  { id: 9, src: "/images/indeximg/ProductTable.png", alt: "Entryway wooden bench", title: "The Welcome Bench", ratio: "aspect-[1/1]" },
  { id: 10, src: "/images/indeximg/ProductChair.png", alt: "Rustic wooden armchair", title: "The Heritage Chair", ratio: "aspect-[5/4]" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] px-4 py-28 text-[#201F1B]">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extralight mb-4">
            Our Furniture Gallery
          </h1>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of our handcrafted Sheesham and Teak wood pieces. Find inspiration for your home in our collection of timeless designs.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`group relative break-inside-avoid overflow-hidden rounded-xl shadow-sm bg-white ${img.ratio}`}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Bottom hover overlay */}
              <div className="absolute bottom-0 left-0 w-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 flex items-center justify-between">
                <span className="text-2xl w-[80%]">{img.title}</span>
                <Link
                  href="/#products"
                  className="bg-amber-500 p-3 rounded-full hover:bg-amber-600 transition"
                >
                  <ArrowUpRight size={18}/> 
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
