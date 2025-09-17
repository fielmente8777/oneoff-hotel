"use client";
import { whyChooseUsProps } from "@/@types/@type";
import { FC } from "react";
import SwiperCarousel from "./SwiperCarousel";
import { WhyChooseUsCard } from "../cards";
import { Autoplay } from "swiper/modules";

interface WhyChooseUsSliderProps {
    cards: whyChooseUsProps["cards"];
}
const WhyChooseUsSlider: FC<WhyChooseUsSliderProps> = ({ cards }) => {
  return (
    <>
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            autoplay: false,
          },
        }}
        className="w-full"
        renderSlide={(card) => <WhyChooseUsCard {...card} />}
      />
    </>
  );
};

export default WhyChooseUsSlider;
