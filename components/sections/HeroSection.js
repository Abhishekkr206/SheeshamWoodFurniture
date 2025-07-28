export default function HeroSection() {
    return (
        <section className="bg-[#FAF9F6] h-screen w-full flex justify-center items-center mt-5">
            <div className="p-10 text-white  h-[42.5rem] w-[92.5rem] rounded-3xl bg-[url('/images/hero.png')] bg-cover bg-center flex justify-center items-center">
                <div className="h-[25rem] w-[45rem] text-center">
                    <h1 className="text-9xl font-bold">Sheesham</h1>
                    <h4 className="text-xl font-semibold ">Wood Furniture</h4>
                </div>
            </div>
        </section>
    );
}