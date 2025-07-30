import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Added for button icons

const originalCards = [
  { id: 1, title: 'Elegant Sheesham Chair', img: '/images/AboutImg1.png' },
  { id: 2, title: 'Rustic Wooden Bed', img: '/images/AboutImg2.png' },
  { id: 3, title: 'Modern Coffee Table', img: '/img3.png' },
  { id: 4, title: 'Classic Dining Set', img: '/img4.png' },
  { id: 5, title: 'Handcrafted Bookshelf', img: '/img5.png' },
];

export default function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(2);
  const cardWidth = 320;
  const gap = 20;
  const visibleCards = 3;

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
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  const handleNext = () => {
    if (activeIndex < cards.length - 2) setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (activeIndex > 1) setActiveIndex((prev) => prev - 1);
  };

  useEffect(() => {
    let timeoutId;
    if (activeIndex === cards.length - 2) {
      timeoutId = setTimeout(() => setActiveIndex(realStartIndex), 500);
    } else if (activeIndex === 1) {
      timeoutId = setTimeout(() => setActiveIndex(realEndIndex - 1), 500);
    }
    return () => clearTimeout(timeoutId);
  }, [activeIndex, cards.length, realStartIndex, realEndIndex]);

  const totalTranslate =
    (cardWidth + gap) * (activeIndex - Math.floor(visibleCards / 2));

  return (
    // Changed: Section background remains a warm off-white
    <section className="bg-[#FAF9F6] h-fit w-full flex justify-center items-center p-4 md:p-10">
      {/* Changed: Container background is now the dark wood color */}
      <div className="relative bg-[#4a3728] rounded-3xl my-10 py-7 flex flex-col items-center w-full max-w-7xl">
        {/* Changed: Heading text is now light to contrast with the dark background */}
        <h1 className="text-5xl md:text-7xl font-bold my-6 pb-10 text-zinc-100 text-center px-4">
          Featured Products
        </h1>

        {/* Buttons */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[85rem] mt-10 px-2 md:px-0">
          {/* Changed: Buttons use warm amber accent color and lucide icons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 z-30 h-12 w-12 bg-amber-400 text-[#4a3728] rounded-full flex justify-center items-center hover:bg-amber-500 transition-colors shadow-lg"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 z-30 h-12 w-12 bg-amber-400 text-[#4a3728] rounded-full flex justify-center items-center hover:bg-amber-500 transition-colors shadow-lg"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-[1000px] overflow-x-clip">
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out gap-[20px] touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(-${totalTranslate}px)` }}
          >
            {cards.map((card, i) => (
              <div
                key={card.id + '-' + i}
                // Changed: Border color matches the theme
                className={`w-[320px] border border-[#7a5c48] p-4 h-[450px] flex-shrink-0 transition-all duration-500 ease-in-out rounded-xl relative overflow-hidden ${
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
                {/* Changed: Title overlay uses a thematic, semi-transparent background */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center font-semibold bg-[#4a3728]/70 backdrop-blur-sm px-4 py-2 rounded-full w-11/12">
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 my-5 pt-5">
          {originalCards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(i + realStartIndex)}
              // Changed: Dot colors match the new theme
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === i + realStartIndex || (activeIndex === 1 && i === originalCards.length-1) || (activeIndex === cards.length - 2 && i === 0)
                  ? 'bg-amber-400 scale-125'
                  : 'bg-[#7a5c48]'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}