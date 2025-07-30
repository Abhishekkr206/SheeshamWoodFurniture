import React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for the testimonials
const testimonials = [
  {
    quote: "This is hands down the best service I've ever used. The team is incredibly responsive, the platform is intuitive, and it has completely transformed our workflow. I can't recommend it enough to everyone.",
    name: "Sarah Johnson",
    title: "CEO, Innovatech",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=SJ",
  },
    {
    quote: "A game-changer for our entire organization. The ROI was almost immediate. The features are powerful yet easy to learn, and the customer support is second to none. Truly a five-star experience.",
    name: "Michael Chen",
    title: "CTO, Quantum Solutions",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=MC",
  },
  {
    quote: "I was skeptical at first, but this product exceeded all my expectations. It's reliable, efficient, and has saved us countless hours of manual work. An essential tool for any modern business.",
    name: "Emily Rodriguez",
    title: "Marketing Director, Creative Co.",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=ER",
  },
];

// Main App Component
export default function App() {
  // State to manage which testimonial is currently active
  const [activeIndex, setActiveIndex] = React.useState(0);

  const activeTestimonial = testimonials[activeIndex];

  // Navigation functions
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-scroll functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    // Main container with a light theme background
    <section className="antialiased bg-[#FAF9F6] text-slate-800 min-h-[95vh] flex items-center justify-center font-sans">
      <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
        {/* Grid layout for the two-column structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Left Side: Title Section */}
          <div className="relative flex flex-col items-center justify-center p-8 md:p-12 bg-slate-100">
             <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                    What Our
                    <br />
                    Customers Say
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-xs mx-auto">
                    Real stories from real people who have transformed their business with us.
                </p>
             </div>
          </div>

          {/* Right Side: Testimonial Card Section */}
          <div className="flex items-center justify-center p-8 md:p-12 bg-white">
            {/* The testimonial card */}
            <div className="w-full max-w-md flex flex-col justify-between h-full">
                <div className="flex-grow">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-sky-500 mb-6" />

                    {/* Testimonial Content */}
                    <div className="relative">
                        <p key={activeIndex} className="text-xl font-medium text-slate-700 leading-relaxed animate-fade-in">
                            "{activeTestimonial.quote}"
                        </p>
                    </div>
                </div>

                {/* Author and Navigation */}
                <div className="mt-8">
                    <div className="flex items-center gap-4">
                        <img 
                            src={activeTestimonial.avatar} 
                            alt={activeTestimonial.name}
                            className="w-14 h-14 rounded-full border-2 border-slate-200 object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/E2E8F0/4A5568?text=User'; }}
                        />
                        <div>
                            <p className="text-lg font-semibold text-slate-900">{activeTestimonial.name}</p>
                            <p className="text-md text-slate-500">{activeTestimonial.title}</p>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-10">
                        {/* Navigation Dots */}
                        <div className="flex gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        activeIndex === index ? 'bg-sky-500 scale-125' : 'bg-slate-300 hover:bg-slate-400'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                                                
                        {/* Left/Right Arrow Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center justify-center transition-all duration-300 hover:scale-105"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-600" />
                            </button>
                            
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center justify-center transition-all duration-300 hover:scale-105"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5 text-slate-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* Basic CSS for the animation */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}