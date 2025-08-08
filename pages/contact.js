import Head from "next/head";

export default function Contact() {
  return (
    <>
    <Head>
        <title>Contact Us | Sheesham Wood Furniture</title>
        <meta name="description" content="Contact Sheesham Wood Furniture for custom orders, bulk enquiries, and support." />
        <meta name="keywords" content="contact sheesham wood, wooden furniture enquiry, Lucknow furniture contact" />
        <meta property="og:url" content="https://sheeshamwoodfurniture.in/contact" />
    </Head>

    <section className="bg-[#FAF9F6] py-25 w-full flex justify-center items-center">
      <div className="w-[98%] sm:w-[90%] max-w-[1300px]">

        {/* Section Header */}
        <div className="relative text-center mb-20">
          <h1 className="text-5xl md:text-7xl text-[#201F1B] tracking-wide">
            Contact Us
          </h1>
          <p className="text-lg text-[#5F5C57] mt-4 max-w-xl mx-auto px-2">
            Let&apos;s craft something beautiful together. Reach out for orders, queries, or just to say hi!
          </p>
          <div className="mt-6 w-24 h-[3px] bg-[#A47B5E] mx-auto rounded-full"></div>

          {/* Optional wood texture overlay - place /public/wood-texture.png */}
          <div className="absolute inset-0 opacity-5 bg-[url('/wood-texture.png')] bg-cover bg-center pointer-events-none rounded-xl z-[-1]"></div>
        </div>

        {/* Main Content */}
        <div className="bg-[#201F1B] rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 grid-cols-1">
          
          {/* Left Side - Info & Map */}
          <div className="p-8 pt-10 sm:p-10 text-white space-y-8 bg-[#282621]">
            <h2 className="text-4xl">Get in Touch</h2>

            <div className="space-y-4">
              <div>
                <p className="text-lg font-medium">Address</p>
                <p className="text-gray-300">Showroom Kalyanpur Sub Post Office G 4 Shop White House Ring Road By Pass Kalyanpur, Lucknow U.P. - 226022</p>
              </div>

              <div>
                <p className="text-lg font-medium">Phone</p>
                <a href="tel:+919310977715" className="mt-4 inline-block hover:text-amber-300 hover:underline transition-colors">
                  +91 93109 77715
                </a>
                <br/>
                <a href="tel:+919910231870" className=" inline-block hover:text-amber-300 hover:underline transition-colors">
                  +91 99102 31870
                </a>
              </div>

              <div>
                <p className="text-lg font-medium">Email</p>
                <p className="text-gray-300">sheeshamwoodfurniturelko@gmail.com</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.46738134489!2d80.9701851!3d26.8964275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999570049b5729b%3A0xf42e69bde623ad30!2sWhite%20House%2C%20Adarsh%20Nagar%2C%20Kalyanpur%2C%20Lucknow%2C%20Uttar%20Pradesh%20226022!5e0!3m2!1sen!2sin!4v1691505459246!5m2!1sen!2sin"                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="sm:p-10 p-8 pt-10 bg-[#1D1C19] text-white flex flex-col justify-center">
            <h2 className="text-4xl mb-6">Send Us a Message</h2>
            
            <form
              action="https://formsubmit.co/sheeshamwoodfurniturelko@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Optional: Protect from spam */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
            
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-[#2C2B27] placeholder:text-gray-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-[#2C2B27] placeholder:text-gray-400 focus:outline-none"
              />
              <textarea
                name="message"
                required
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
    </>
  );
}
