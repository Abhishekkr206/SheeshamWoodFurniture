import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import bedData from "../../data/bed.json";
import chairData from "../../data/chair.json";

const productDataMap = {
  bed: bedData,
  chair: chairData
  // add more categories here
};

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!category) return;
    const data = productDataMap[category.toLowerCase()];
    if (data) {
      setProducts(data);
    } else {
      console.error("Category not found:", category);
      setProducts([]);
    }
  }, [category]);

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 capitalize">{category}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 hover:scale-105 transition">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-4 text-lg font-semibold">{item.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
