import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

export default function AboutSection(){
    return(
        <section className=" bg-[#FAF9F6] h-fit w-full flex justify-center items-center  overflow-x-hidden">
            <div className="relative my-10 p-10 md:px-65 h-fit sm:h-[32rem] w-full md:max-w-[85rem] bg-[#201F1B] md:rounded-3xl">
                <div className="relative z-10">
                    <h1 className="text-[#FFFF] text-5xl sm:text-7xl mt-10 ">
                        About Us
                    </h1>
                    <p className=" text-md sm:text-xl sm:max-w-[38rem] mt-7 text-white">
                        We craft handmade wooden furniture built with precision and passion.  
                        Each piece is made from high-quality, sustainable wood designed to last for years.  
                        Our goal is to blend timeless design with everyday comfort — for homes that feel personal.
                    </p>
                    <div className="w-full flex justify-start items-center">
                        <Link
                             href="/about"
                             className=" flex justify-around items-center w-38 sm:w-41 h-14 mt-7 px-3 text-center text-xl sm:text-2xl bg-white text-black rounded-full hover:bg-gray-200 transition duration-300 shadow"
                            >
                                About Us
                                <ArrowRight size={28}/>
                        </Link>
                    </div>
                </div>


                <div className=" z-0 absolute md:bg-[#FAF9F6] rounded-bl-4xl sm:max-h-70 sm:min-h-40 sm:max-w-60 sm:min-w-30 right-0 top-0 hidden md:flex justify-center items-center ">
                    {/* chair img */}
                    <Image src="/images/indeximg/AboutImg1.png" alt="About section mandir image" width={300} height={400} className="rotate-10 "/>                
                    </div>
                <div className=" z-0 absolute md:bg-[#FAF9F6] rounded-tr-4xl sm:max-h-70 sm:min- sm:max-w-60 sm:min- bottom-0 left-0 hidden md:flex justify-center items-center pb-10">
                    {/* chair img */}
                    <Image src="/images/indeximg/AboutImg2.png" alt="About section chair image" width={250} height={400} className="rotate-350"/>
                </div>
            </div>
        </section>
    )
}