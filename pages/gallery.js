import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ArrowUpRight, X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "/images/productimg/chair5.jpg", ratio: "aspect-[9/16]", category:"chair" },
  { id: 2, src: "/images/productimg/mandir2.jpg", ratio: "aspect-[5/4]", category:"mandir" },
  { id: 3, src: "/images/productimg/mandir4.jpg", ratio: "aspect-[5/4]", category:"mandir" },
  { id: 4, src: "/images/productimg/table3.jpg", ratio: "aspect-[5/4]", category:"table" },
  { id: 5, src: "/images/productimg/diningset6.jpg", ratio: "aspect-[1/1]", category:"diningset" },
  { id: 6, src: "/images/productimg/cupboard3.jpg", ratio: "aspect-[16/9]", category:"sideboard" },
  { id: 7, src: "/images/productimg/table.jpg", ratio: "aspect-[16/9]", category:"table" },
  { id: 8, src: "/images/productimg/chair6.jpg", ratio: "aspect-[9/16]", category:"chair" },
  { id: 9, src: "/images/productimg/table1.jpg", ratio: "aspect-[1/1]", category:"table" },
  { id: 10, src: "/images/productimg/gallery3.jpg", ratio: "aspect-[5/4]", category:"" },
  { id: 11, src: "/images/productimg/bed.jpg", ratio: "aspect-[5/4]", category:"bed" },
  { id: 12, src: "/images/productimg/gallery1.jpg", ratio: "aspect-[5/4]", category:"" },
  { id: 13, src: "/images/productimg/diningset12.jpg", ratio: "aspect-[16/9]", category:"diningset" },
  { id: 14, src: "/images/productimg/mandir3.jpg", ratio: "aspect-[1/1]", category:"mandir" },
  { id: 15, src: "/images/productimg/gallery2.jpg", ratio: "aspect-[1/1]", category:"" },
  { id: 16, src: "/images/productimg/sideboard4.jpg", ratio: "aspect-[9/16]", category:"cupboard" },
  { id: 17, src: "/images/productimg/sideboard1.jpg", ratio: "aspect-[9/16]", category:"cupboard" },
  { id: 18, src: "/images/productimg/diningset16.jpg", ratio: "aspect-[5/4]", category:"diningset" },
];

export default function GalleryPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (category) => {
    router.push(`/product/${category}`);
  };

  const openModal = (img, e) => {
    e.stopPropagation();
    setSelectedImage(img);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

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
              <div 
                className="relative w-full h-full cursor-pointer"
                onClick={(e) => openModal(img, e)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Bottom hover overlay */}
              <div
                onClick={() => handleClick(img.category)}
                className="bg-amber-500 p-3 rounded-full hover:bg-amber-600 transition group cursor-pointer absolute bottom-2 right-2 text-white"
              >
                <ArrowUpRight size={18}/> 
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 bg-opacity-80"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Image */}
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title || 'Gallery image'}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}