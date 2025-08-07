import { useState, useEffect } from 'react';
import ProductData from '../../data/product';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticPaths() {
  const paths = ProductData.map((cat) => ({
    params: { category: cat.category.toLowerCase() },
  }));

  return {
    paths,
    fallback: false, // unknown categories = 404
  };
}

export async function getStaticProps({ params }) {
  const categoryParam = params.category.toLowerCase();

  const match = ProductData.find(
    (cat) => cat.category.toLowerCase() === categoryParam
  );

  if (!match) {
    return { notFound: true };
  }

  return {
    props: {
      category: match.category,
      products: match.items,
    },
  };
}

export default function CategoryPage({ category, products }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageUrl, itemName) => {
    setSelectedImage({ url: imageUrl, name: itemName });
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    // Hide navbar if it exists
    const navbar = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('[class*="nav"]');
    if (navbar) {
      navbar.style.display = 'none';
    }
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
    // Show navbar again
    const navbar = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('[class*="nav"]');
    if (navbar) {
      navbar.style.display = '';
    }
  };

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
      // Restore navbar on cleanup
      const navbar = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('[class*="nav"]');
      if (navbar) {
        navbar.style.display = '';
      }
    };
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeImageModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FAF9F6] via-[#F8F4EC] to-[#F5F0E8] relative overflow-hidden">

      <div className="relative z-10 px-2 py-25 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 text-sm text-[#8B4513] mb-6">
              <Link href="/"><span>Home</span></Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/product"><span>Products</span></Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#2E2B22] font-medium capitalize">{category}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl text-[#2E2B22] mb-6 capitalize">
              {category} Collection
            </h1>
            
            {/* Product Count */}
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
              <span className="text-[#5A5954] font-medium">
                {products.length} {products.length === 1 ? 'Product' : 'Products'} Available
              </span>
            </div>
          </div>

          {/* Products Grid - Updated for 2 columns on small devices */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 lg:gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                {/* Product Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-[#8B4513]/20 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-xl cursor-pointer" onClick={() => openImageModal(item.image, item.name)}>
                    <div className="aspect-square w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Expand Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/90 p-2 rounded-full shadow-lg">
                        <svg className="w-5 h-5 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7V5a2 2 0 012-2h2m0 0V1m0 2h2m8 0h2a2 2 0 012 2v2m0 0V1m0 2v2m0 14v2a2 2 0 01-2 2h-2m0 0v2m0-2h-2m-8 0H5a2 2 0 01-2-2v-2m0 0v2m0-2H1" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-2xl text-center text-[#1E1D1A] mb-2 group-hover:text-[#8B4513] transition-colors duration-300">
                      {item.name}
                    </h3>
                    
                    {item.description && (
                      <p className="text-[#5A5954] text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    
                    {/* Action Area */}
                    <div className="mt-2 sm:mt-4">
                      <div className="text-center">
                        <span className="text-[10px] sm:text-sm text-[#8B4513] font-medium">Click image to view full size</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#8B4513]/30 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {products.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-[#8B4513]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#2E2B22] mb-2">No Products Found</h3>
              <p className="text-[#5A5954] max-w-md mx-auto">
                We&apos;re currently updating our {category} collection. Please check back soon for new arrivals.
              </p>
            </div>
          )}
        </div>

        {/* Improved Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeImageModal}
            style={{ 
              zIndex: 99999 
            }}
          >
            {/* Modal Container */}
            <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
              {/* Close Button */}
              <button 
                onClick={closeImageModal}
                className="absolute -top-2 -right-2 z-50 bg-white text-black hover:bg-gray-100 transition-all duration-200 rounded-full p-3 shadow-lg"
                style={{ zIndex: 100001 }}
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image Container - Properly centered */}
              <div 
                className="relative bg-white rounded-lg shadow-2xl overflow-hidden flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: 'min(90vw, 90vh)',
                  height: 'min(90vh, 90vw)',
                  maxWidth: '800px',
                  maxHeight: '800px'
                }}
              >
                {/* Using regular img tag as fallback */}
                <img
                  src={selectedImage.url}
                  alt={selectedImage.name}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  style={{
                    width: 'auto',
                    height: 'auto'
                  }}
                />
                
                {/* Image Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold text-center break-words">
                    {selectedImage.name}
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm text-center">
              <p>Press ESC or click outside to close</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}