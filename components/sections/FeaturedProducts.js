import { useEffect, useRef, useState } from 'react'

const originalCards = [
  { id: 1, title: 'Jay', img: '/images/AboutImg1.png' },
  { id: 2, title: 'Marc', img: '/images/AboutImg2.png' },
  { id: 3, title: 'Fel', img: '/img3.png' },
  { id: 4, title: 'Mira', img: '/img4.png' },
  { id: 5, title: 'Zac', img: '/img5.png' },
]

export default function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(2)
  const cardWidth = 320
  const gap = 20
  const visibleCards = 3

  const cards = [
    ...originalCards.slice(-2),
    ...originalCards,
    ...originalCards.slice(0, 2),
  ]

  const realStartIndex = 2
  const realEndIndex = originalCards.length + 2

  // Touch handling
  const touchStartX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) handleNext()
    else if (diff < -50) handlePrev()
    touchStartX.current = null
  }

  const handleNext = () => {
    if (activeIndex < cards.length - 2) setActiveIndex(prev => prev + 1)
  }

  const handlePrev = () => {
    if (activeIndex > 1) setActiveIndex(prev => prev - 1)
  }

  useEffect(() => {
    if (activeIndex === cards.length - 2) {
      setTimeout(() => setActiveIndex(realStartIndex), 300)
    } else if (activeIndex === 1) {
      setTimeout(() => setActiveIndex(realEndIndex - 1), 300)
    }
  }, [activeIndex])

  const totalTranslate = (cardWidth + gap) * (activeIndex - Math.floor(visibleCards / 2))

  return (
    <section className='bg-[#FAF9F6] h-fit w-full flex justify-center items-center p-10'>
        <div className="relative bg-white rounded-3xl my-10 flex flex-col items-center">
          <h1 className="text-7xl font-bold my-6 pb-10 ">Featured Products</h1>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75rem] mt-10'>
                <button onClick={handlePrev} className="absolute left-10 top-1/2 -translate-y-1/2 z-10 text-3xl px-3 h-15 w-15 bg-black/85 text-white rounded-full">←</button>
                <button onClick={handleNext} className="absolute right-10 top-1/2 -translate-y-1/2 z-10 text-3xl px-3 h-15 w-15 bg-black/85 text-white rounded-full text-center">→</button>
            </div>

          {/* Carousel */}
          <div className="relative w-[1000px] overflow-x-clip">

            {/* Buttons */}

            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out gap-[20px] touch-pan-x"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ transform: `translateX(-${totalTranslate}px)` }}
            >
              {cards.map((card, i) => (
                <div
                  key={card.id + '-' + i}
                  className={`w-[320px] border p-10 h-[450px] flex-shrink-0 transition-all duration-500 ease-in-out rounded-xl relative overflow-hidden ${
                    i === activeIndex ? 'scale-110 z-20' : 'scale-90 opacity-70 z-10'
                  }`}
                >
                  <img src={card.img} className="w-full h-full object-cover" alt={card.title} />
                  <div className="bottom-2 left-1/2 -translate-x-1/2 text-white text-center font-bold bg-black/70 bg-opacity-50 px-4 py-1 rounded-full">
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
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activeIndex - realStartIndex === i ? 'bg-black' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
    </section>
  )
}
