import { useRouter } from "next/router";
import Image from "next/image";

const productInfo = [
  {
    name: "Artisan Bed",
    description: "A strong and stylish Sheesham wood bed, handmade with care for daily comfort and long-lasting use.",
    image: "/images/indeximg/ProductBed.png",
    category: "bed"
  },
  {
    name: "Executive Chair",
    description: "Comfortable wooden chair with a sleek design, perfect for work or relaxing at home.",
    image: "/images/indeximg/ProductChair.png",
    category: "chair"
  },
  {
    name: "Executive Diningset",
    description: "A well-crafted dining set made from solid wood — ideal for family meals and daily use.",
    image: "/images/indeximg/ProductDiningset.png",
    category: "diningset"
  },
  {
    name: "Executive Cup Board",
    description: "Spacious and sturdy wooden cupboard to keep your things organized with style.",
    image: "/images/indeximg/ProductCupboard.png",
    category: "cupboard"
  },
  {
    name: "Executive Side Board",
    description: "Smart wooden sideboard for your living or dining space — great for storage and display.",
    image: "/images/indeximg/ProductTvSideboard.png",
    category: "sideboard"
  },
  {
    name: "Executive Mandir",
    description: "Beautifully designed wooden mandir to create a peaceful and sacred space at home.",
    image: "/images/indeximg/ProductMandir.png",
    category: "mandir"
  },
  {
    name: "Heritage Table",
    description: "Strong and elegant wooden table with fine detailing — perfect for everyday use or hosting guests.",
    image: "/images/indeximg/ProductTable.png",
    category: "table"
  },
];


export default function Product() {
  const router = useRouter();

  const handleClick = (category) => {
    router.push(`/product/${category}`);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#FBF8F3] via-[#F8F4EC] to-[#F5F0E8] py-24 px-2 sm:px-4 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-sm rounded-full shadow-lg">
              Premium Wood Collection
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#2E2B22] via-[#4A3B2A] to-[#8B4513] mb-2 md:mb-6 leading-tight">
            Crafted with
            <br />
            <span className="italic text-4xl md:text-7xl font-light">Perfection</span>
          </h2>
          <p className="text-md sm:text-xl text-[#5A5954] max-w-2xl  leading-relaxed">
            Discover our exclusive collection of handcrafted wooden furniture, where traditional artistry meets contemporary design.
          </p>
        </div>

        {/* Products Grid - Updated for 2 columns on small devices */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 xl:gap-12">
          {productInfo.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.category)}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative bg-white/80 sm:min-h-[470px] md:min-h-[535px] rounded-xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-white/20 hover:border-[#8B4513]/20">

                {/* Image Container */}
                <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-75 overflow-hidden rounded-t-xl sm:rounded-t-3xl">
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8 relative">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1E1D1A] mb-2 sm:mb-3 group-hover:text-[#8B4513] transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="text-[#5A5954] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                    {item.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center justify-start">
                    <div className="flex items-center space-x-2 text-[#8B4513] group-hover:text-[#A0522D] transition-colors duration-300">
                      <span className="text-xs sm:text-sm font-semibold">Explore Collection</span>
                      <svg 
                        className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-[#8B4513] group-hover:to-[#A0522D] transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full mx-5 sm:mx-0 px-6 sm:px-8 py-3 sm:py-4 shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#A0522D] to-[#D2691E] rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#D2691E] to-[#CD853F] rounded-full border-2 border-white"></div>
            </div>
            <span className="text-[#5A5954] font-medium text-sm sm:text-base">Trusted by 2,500+ satisfied customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}