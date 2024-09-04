import axios from "axios";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { A11y, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import type { Product } from "../../../../entities/Product/model/Product.tsx";
import { ProductCard } from "../../../../shared/ProductCard/ui/ProductCard";

async function getProductList() {
  try {
    const url = "http://localhost:3000/products";
    const response = await axios.get<Product[]>(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const NewProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState<[] | Product[]>([]);
  const sliderRef = useRef<SwiperRef>(null);
  useEffect(() => {
    (async () => {
      const products = await getProductList();
      setProductList(products);
    })();
    setIsLoading(false);
  }, []);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="ml-20 mr-20 mt-28 ">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="font-anton text-6xl ">NEW ARRIVALS</div>
          <div
            className="prev-arrow w-[60px] h-full ml-6 rounded-full cursor-pointer
            border-2 border-gray-400 text-4xl text-center flex items-center justify-center"
            onClick={handlePrev}
          >
            <img src="/buttons/leftArrow.svg" alt="previos product" />
          </div>

          <div
            className="next-arrow w-[60px] h-full ml-6 rounded-full
            cursor-pointer border-2 border-gray-400 text-4xl flex items-center justify-center"
            onClick={handleNext}
          >
            <img src="/buttons/rightArrow.svg" alt="next product" />
          </div>
        </div>

        <div className="font-inter text-xl underline underline-offset-2 font-bold flex items-center cursor-pointer">
          See all items
        </div>
      </div>
      <div className="items mt-20">
        <Swiper
          ref={sliderRef}
          modules={[Pagination, A11y, Navigation]}
          spaceBetween={50}
          navigation={true}
          slidesPerView={4}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <Suspense fallback={<div>loading</div>}>
            {!isLoading &&
              productList.map((product: Product) => (
                <SwiperSlide>
                  <ProductCard
                    name={product.name}
                    imageUrl={product.imageUrl}
                    category={product.category}
                    price={product.price}
                  />
                </SwiperSlide>
              ))}
          </Suspense>
        </Swiper>
      </div>
    </section>
  );
};
