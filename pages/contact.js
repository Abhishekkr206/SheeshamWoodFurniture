export default function Contact() {
  return (
    <section className="bg-[#FAF9F6] py-25 w-full flex justify-center items-center">
      <div className="w-[98%] sm:w-[90%] max-w-[1300px]">

        {/* Section Header */}
        <div className="relative text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-[#201F1B] tracking-wide">
            Contact Us
          </h1>
          <p className="text-lg text-[#5F5C57] mt-4 max-w-xl mx-auto">
            Let’s craft something beautiful together. Reach out for orders, queries, or just to say hi!
          </p>
          <div className="mt-6 w-24 h-[3px] bg-[#A47B5E] mx-auto rounded-full"></div>

          {/* Optional wood texture overlay - place /public/wood-texture.png */}
          <div className="absolute inset-0 opacity-5 bg-[url('/wood-texture.png')] bg-cover bg-center pointer-events-none rounded-xl z-[-1]"></div>
        </div>

        {/* Main Content */}
        <div className="bg-[#201F1B] rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 grid-cols-1">
          
          {/* Left Side - Info & Map */}
          <div className="p-8 pt-10 sm:p-10 text-white space-y-8 bg-[#282621]">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>

            <div className="space-y-4">
              <div>
                <p className="text-lg font-medium">Address</p>
                <p className="text-gray-300">123 Sheesham Lane, New Delhi, India</p>
              </div>

              <div>
                <p className="text-lg font-medium">Phone</p>
                <p className="text-gray-300">+91 98765 43210</p>
              </div>

              <div>
                <p className="text-lg font-medium">Email</p>
                <p className="text-gray-300">support@sheeshamfurni.com</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.835897354893!2d77.21672135!3d28.6448007"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="sm:p-10 p-8 pt-10 bg-[#1D1C19] text-white flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-[#2C2B27] placeholder:text-gray-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-[#2C2B27] placeholder:text-gray-400 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 rounded-xl bg-[#2C2B27] placeholder:text-gray-400 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#A47B5E] hover:bg-[#926f54] transition rounded-xl px-6 py-3 text-white text-lg font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
