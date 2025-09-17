"use client";
import { FC } from "react";
import SwiperCarousel from "./SwiperCarousel";
import { TestimonialsProps } from "@/@types/@type";
import { Autoplay, Navigation } from "swiper/modules";
import { TestimonialCard } from "../cards";
import { BtnNextIcon, BtnPrevIcon } from "@/utils/icons";

interface TestimonialsSliderProps {
  cards: TestimonialsProps["cards"];
}
const TestimonialsSlider: FC<TestimonialsSliderProps> = ({ cards }) => {
  return (
    <div className="bg-bg1 lg:relative max-lg:space-y-8 lg:py-12 py-8 lg:px-8 px-3">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        autoplay={{ delay: 2500 }}
        className="w-full max-w-[57rem] mx-auto"
        renderSlide={(card) => <TestimonialCard {...card} />}
      />
      <div className="max-lg:flex justify-center items-center gap-4">
        <button className="testimonials-prev w-10 aspect-square rounded-full bg-white box-shadow flex items-center justify-center lg:absolute top-1/2 transform -translate-y-1/2 left-12 z-10" aria-label="prev">
          <BtnPrevIcon />
        </button>
        <button className="testimonials-next w-10 aspect-square rounded-full bg-white box-shadow flex items-center justify-center lg:absolute top-1/2 transform -translate-y-1/2 right-12 z-10" aria-label="next">
          <BtnNextIcon />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
