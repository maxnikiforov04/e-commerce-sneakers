import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import type { Product } from "../../../../entities/Product";
import { ProductCard } from "../../../../shared/ProductCard/ui/ProductCard.tsx";

async function fetchProducts(url: string) {
  try {
    const response = await axios.get<Product>(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export function SortingBar() {
  const [productList, setProductList] = useState<[] | Product[]>([]);
  useEffect(() => {
    (async () => {
      const products = await fetchProducts("http://localhost:3000/products");
      setProductList(products);
    })();
    return () => {};
  }, []);

  return (
    <section className="ml-20 mr-20 mt-10">
      <div>
        <div className="flex gap-x-8 ">
          <select className="select select-bordered select-lg w-full max-w-xs rounded-none border-4 border-black">
            <option disabled selected>
              Gender
            </option>
            <option>man</option>
            <option>women</option>
            <option>unisex</option>
          </select>
          <select className="select select-bordered select-lg w-full max-w-xs rounded-none border-4 border-black">
            <option disabled selected>
              Category
            </option>
            <option>cloth</option>
            <option>shoes</option>
          </select>
          <select className="select select-bordered select-lg w-full max-w-xs rounded-none border-4 border-black">
            <option disabled selected>
              Price
            </option>
            <option>under 15$</option>
            <option>15$-30$</option>
            <option>more than 30$</option>
          </select>
        </div>
        <div className="mt-20 mb-20 ">
          <div className="grid gap-20 grid-cols-4">
            <Suspense fallback={<div className="h-screen">Loading...</div>}>
              {productList.map((product: Product) => (
                <div>
                  <ProductCard
                    name={product.name}
                    imageUrl={product.imageUrl}
                    category={product.category}
                    price={product.price}
                  />
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
