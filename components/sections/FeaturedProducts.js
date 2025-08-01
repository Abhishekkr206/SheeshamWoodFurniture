import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const originalCards = [
  { id: 1, title: 'Elegant Sheesham Chair', img: '/images/indexImg/ProductChair.png' },
  { id: 2, title: 'Rustic Wooden Bed', img: '/images/indexImg/ProductBed.png' },
  { id: 3, title: 'Modern Coffee Table', img: '/images/indexImg/ProductTable.png' },
  { id: 4, title: 'Classic Dining Set', img: '/images/indexImg/ProductTvSideboard.png' },
  { id: 5, title: 'Handcrafted Mandir', img: '/images/indexImg/ProductMandir.png' },
];

export default function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [gap, setGap] = useState(20);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardWidth = 320;
  const autoScrollInterval = useRef(null);

  // Update gap based on screen size
  useEffect(() => {
    const updateGap = () => {
      if (window.innerWidth < 640) {
        setGap(-30);
        setVisibleCards(1);
      } else if (window.innerWidth < 768) {
        setGap(-30);
        setVisibleCards(1);
      } else {
        setGap(20);
        setVisibleCards(3);
      }
    };

    updateGap();
    window.addEventListener('resize', updateGap);
    return () => window.removeEventListener('resize', updateGap);
  }, []);

  const cards = [
    ...originalCards.slice(-2),
    ...originalCards,
    ...originalCards.slice(0, 2),
  ];

  const realStartIndex = 2;
  const realEndIndex = originalCards.length + 2;

  // Touch handling
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    // Stop auto-scroll when user starts interacting
    clearInterval(autoScrollInterval.current);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
    // Restart auto-scroll after user interaction
    startAutoScroll();
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  const startAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
    if (!isHovered) {
      autoScrollInterval.current = setInterval(() => {
        handleNext();
      }, 3000); // Auto-scroll every 3 seconds
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(autoScrollInterval.current);
  }, [isHovered]);

  // Handle infinite loop transitions
  useEffect(() => {
    let timeoutId;
    
    if (activeIndex >= cards.length - 1) {
      timeoutId = setTimeout(() => {
        setActiveIndex(realStartIndex);
        setIsTransitioning(false);
      }, 500);
    } else if (activeIndex <= 0) {
      timeoutId = setTimeout(() => {
        setActiveIndex(realEndIndex - 1);
        setIsTransitioning(false);
      }, 500);
    } else {
      // Normal transition completion
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
    
    return () => clearTimeout(timeoutId);
  }, [activeIndex, cards.length, realStartIndex, realEndIndex]);

  const totalTranslate =
    (cardWidth + gap) * (activeIndex - Math.floor(visibleCards / 2));

  return (
    <section className="bg-[#FAF9F6] h-fit w-full flex justify-center items-center sm:p-4 md:p-10">
      <div 
        className="relative bg-[#20160e] sm:rounded-3xl my-10 py-12 flex flex-col items-center w-full md:max-w-[85rem]"
        onMouseEnter={() => {
          setIsHovered(true);
          clearInterval(autoScrollInterval.current);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <h1 className="text-5xl md:text-7xl pb-12 text-zinc-100 text-center px-4">
          Featured Products
        </h1>

        {/* Buttons */}
        <div className="absolute bottom-23 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:max-w-[85rem] md:mt-10">
          <button
            onClick={() => {
              handlePrev();
              clearInterval(autoScrollInterval.current);
              setTimeout(startAutoScroll, 5000); // Restart auto-scroll after 5 seconds
            }}
            className="absolute left-10 md:left-10 top-1/2 -translate-y-1/2 z-30 h-12 w-12 bg-amber-300 text-[#4a3728] rounded-full flex justify-center items-center hover:bg-amber-400 transition-colors shadow-lg"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => {
              handleNext();
              clearInterval(autoScrollInterval.current);
              setTimeout(startAutoScroll, 5000); // Restart auto-scroll after 5 seconds
            }}
            className="absolute right-10 md:right-10 top-1/2 -translate-y-1/2 z-30 h-12 w-12 bg-amber-300 text-[#4a3728] rounded-full flex justify-center items-center hover:bg-amber-400 transition-colors shadow-lg"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-[1000px] overflow-x-clip">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-[20px] touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(-${totalTranslate}px)` }}
          >
            {cards.map((card, i) => (
              <div
                key={card.id + '-' + i}
                className={` border border-[#7a5c48] w-[280px] h-[410px] sm:w-[320px] sm:h-[450px] flex-shrink-0 transition-all duration-500 ease-in-out rounded-xl relative overflow-hidden ${
                  i === activeIndex
                    ? 'scale-110 z-20 shadow-2xl'
                    : 'scale-90 opacity-60 z-10'
                }`}
              >
                <img
                  src={card.img}
                  className="w-full h-full object-cover rounded-md"
                  alt={card.title}
                />
                <div className="absolute bottom-0 text-white text-5xl m-4">
                  <h3>{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 md:my-5 pt-25 md:pt-5">
          {originalCards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => {
                setActiveIndex(i + realStartIndex);
                clearInterval(autoScrollInterval.current);
                setTimeout(startAutoScroll, 5000); // Restart auto-scroll after 5 seconds
              }}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === i + realStartIndex || 
                (activeIndex === 1 && i === originalCards.length-1) || 
                (activeIndex === cards.length - 2 && i === 0)
                  ? 'bg-amber-300 scale-125'
                  : 'bg-[#7a5c48]'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}