import Link from "next/link";
import { ArrowRight, Fullscreen } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="bg-[#FAF9F6] h-screen w-full flex justify-center items-center">
            <div className=" relative p-10 text-white h-[42.5rem] w-[92.5rem] rounded-3xl bg-[url('/images/indeximg/hero.png')] bg-cover bg-center flex justify-center items-center">
                <div className="h-[25rem] w-[45rem] text-center">
                    <h1 className="text-9xl font-bold">Sheesham</h1>
                    <h4 className="text-xl font-semibold ">Wood Furniture</h4>
                </div>
                <div className=" h-20 w-75 rounded-tl-full bg-[#FAF9F6] flex justify-center items-center absolute bottom-0 right-0">
                    <Link
                         href="/products"
                         className="p-3 flex justify-around items-center w-45 h-15 mt-4 text-center text-2xl bg-black text-white rounded-full hover:bg-gray-900 transition duration-300 shadow"
                        >
                            Products
                            <ArrowRight size={28}/>
                    </Link>
                </div>
                <div></div>
            </div>
        </section>
    );
}