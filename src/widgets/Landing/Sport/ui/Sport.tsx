import { useCallback, useRef } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Sport = () => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
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
        <Swiper
          ref={sliderRef}
          modules={[Pagination, A11y, Navigation]}
          spaceBetween={0}
          navigation={true}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
