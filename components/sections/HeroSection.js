import Link from "next/link";
import { ArrowRight, Fullscreen } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="bg-[#FAF9F6] h-screen w-full flex justify-center items-center">
            <div className=" relative p-10 text-white h-full  md:max-h-[42.5rem] lg:min-h-[42.5rem] w-full sm:mx-3 md:rounded-3xl bg-[url('/images/indeximg/heroPhone.png')] md:bg-[url('/images/indeximg/hero.png')] bg-cover bg-center flex justify-center items-center">
                <div className="h-[25rem] w-[45rem] text-center mb-5">
                    <h1 className=" text-7xl sm:text-8xl md:text-9xl">Sheesham</h1>
                    <h4 className="text-3xl font-light">Wood Furniture</h4>
                </div>
                <div className=" h-20 w-55 sm:w-75 rounded-tl-full bg-[#FAF9F6] flex justify-center items-center absolute bottom-0 right-0">
                    <Link
                         href="/product"
                         className="p-3 flex justify-around items-center w-40 sm:w-45 h-15 ml-7 sm:ml-0 mt-2 sm:mt-4 text-center text-xl sm:text-2xl bg-black text-white rounded-full hover:bg-gray-900 transition duration-300 shadow"
                        >
                            Products
                            <ArrowRight size={22}/>
                    </Link>
                </div>
                <div></div>
            </div>
        </section>
    );
}