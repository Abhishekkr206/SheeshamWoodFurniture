import React from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "We recently got a Sheesham wood dining table, and it's just perfect. The wood looks so rich and real—it’s clearly made with care. Everyone who visits our home in Alambagh compliments it!",
    name: "Priya Sharma",
    title: "Homeowner, Alambagh",
  },
  {
    quote:
      "I ordered a bookshelf, and I have to say, the whole process was smooth. From checking designs online to getting it delivered in Kanpur, everything was on point. The build is solid and looks amazing.",
    name: "Arjun Menon",
    title: "Architect, Kanpur",
  },
  {
    quote:
      "I wanted something eye-catching for my client’s living room and found the perfect coffee table here. It’s strong, elegant, and adds so much character. Really happy with how it turned out.",
    name: "Ananya Deshpande",
    title: "Interior Designer, Faizabad",
  },
  {
    quote:
      "Bought a Sheesham wood bed recently and it changed the entire vibe of our bedroom. It feels warm and cozy now. The team delivered and set it up in no time here in Lucknow. Great experience.",
    name: "Vikram Singh",
    title: "Software Engineer, Lucknow",
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const getInitials = (name) => {
    if (!name) return "";
    const names = name.split(" ");
    return names.length > 1
      ? (names[0][0] + names[1][0]).toUpperCase()
      : name.substring(0, 2).toUpperCase();
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="antialiased bg-[#FAF9F6] text-slate-800 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-6xl mx-auto p-2 sm:p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[610px] bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left: Title Section */}
          <div className="relative flex flex-col items-center justify-center p-12 bg-[#201F1B]">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-50">
                Words from Our
                <br />
                Happy Customers
              </h2>
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="flex items-center justify-center p-6 md:p-12 bg-white">
            <div className="w-full max-w-md flex flex-col justify-between h-full">
              <div className="flex-grow">
                <Quote className="w-10 h-10 text-sky-500 mb-6" />
                <div className="relative">
                  <p
                    key={activeIndex}
                    className="text-md sm:text-xl font-medium text-slate-700 leading-relaxed animate-fade-in"
                  >
                    {activeTestimonial.quote}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-4">
                  <div className="sm:w-14 w-12 h-12 sm:h-14 rounded-full bg-slate-200 flex items-center justify-center border-2 border-slate-300">
                    <span className="text-lg font-bold text-slate-600">
                      {getInitials(activeTestimonial.name)}
                    </span>
                  </div>
                  <div>
                    <p className="text-md sm:text-lg font-semibold text-slate-900">
                      {activeTestimonial.name}
                    </p>
                    <p className="text-sm sm:text-md text-slate-500">
                      {activeTestimonial.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-10">
                  {/* Dots */}
                  <div className="flex gap-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeIndex === index
                            ? "bg-sky-500 scale-125"
                            : "bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Arrows */}
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

      {/* Animation style */}
      <style>{`
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
