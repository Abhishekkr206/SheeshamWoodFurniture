import productData from "../data/product.json"
import { useRouter } from "next/router";


export default function Product(){

    const router = useRouter()
    const handleClick = (category) => {
        router.push(`/products/${category}`)
    }

    return(
        <section className="flex w-screen min-h-[100vh] bg-blue-500 justify-center items-center text-center flex-col" >

            <h1 className="text-[42px] w-[100%] h-[10%]">Products</h1>

            <div className="w-[80%] bg-yellow-500 grid grid-cols-4 grid-auto-rows-[200px]  gap-[2%] p-[2%]">

                {productData.map((item,index) => (
                    <div key={index} className="w-[100%] h-[100%]" onClick={() => handleClick(item.category)}>
                        <img src= {item.image} alt={item.name} className="object-cover w-[100%] h-[70%]"></img>
                        <h2>{item.name}</h2>
                    </div>
                ))}

            </div>


        </section>
    );
}