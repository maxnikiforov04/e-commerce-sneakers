import axios from "axios";
import { useCallback, useRef, useEffect, useState, Suspense } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import SportCategory from "../../../../shared/SportCategory/SportCategory";

type Category = {
  name: string;
  image: string;
  itemsQuant: string;
};

async function fetchCategories() {
  try {
    const url = "http://localhost:3000/categoriesSport";
    const response = await axios.get<Category[]>(url);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

function Loading() {
  return <div></div>;
}

export const Sport = () => {
  const [categories, setCategories] = useState<Category[] | []>([]);
  const sliderRef = useRef<SwiperRef>(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  useEffect(() => {
    (async () => {
      const categories = await fetchCategories();
      setCategories(categories);
    })();
  }, []);

  return (
    <section className="ml-20 mr-20 mt-28">
      <div className="flex">
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
      </div>
      <div className="items mt-20">
        <Suspense fallback={<Loading />}>
          <Swiper
            ref={sliderRef}
            className="w-full"
            modules={[Pagination, A11y, Navigation]}
            spaceBetween={50}
            navigation={true}
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {categories.map((category: Category) => (
              <SwiperSlide>
                <SportCategory
                  name={category.name}
                  image={category.image}
                  itemsQuant={category.itemsQuant}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Suspense>
      </div>
    </section>
  );
};
