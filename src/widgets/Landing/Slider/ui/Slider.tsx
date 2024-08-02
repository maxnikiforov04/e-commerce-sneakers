import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export const Slider = () => {
  return (
    <section>
      <div></div>
      <Swiper
        className="h-[760px] "
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="bg-sliderGreen">
          <div className="flex">
            <div className="font-anton ml-20 mt-20">
              <div>
                <div className="text-[11rem] leading-none text-white max-h-min">
                  RETRO LOW
                </div>
                <div className="text-[11rem] mt-[25px] leading-none bg-sliderYellow max-w-min pl-10 pr-10">
                  VOODOO
                </div>
              </div>
              <div className="font-inter leading-loose font-medium text-white text-2xl mt-8">
                The Nike Dunk Low SE Jackpot GS is a low-cut
                <br />
                sneaker with hints of grey, white, blue, and red.
              </div>
              <div
                className="text-6xl bg-white max-w-[280px] 
          h-[90px] flex justify-center items-center cursor-pointer mt-10"
              >
                SHOP NOW!
              </div>
            </div>
            <div className="w-1/2">
              <div
                className="rounded-full bg-sliderYellow
             w-[700px] h-[700px] absolute right-[-50px] top-[40px] "
              ></div>
              <img
                src="/Slider/slider1.svg"
                alt=""
                className="w-2/4 absolute top-36"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </section>
  );
};
