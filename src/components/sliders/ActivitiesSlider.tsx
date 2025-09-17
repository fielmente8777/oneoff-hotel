"use client";
import { ActivitiesProps } from "@/@types/@type";
import { FC } from "react";
import SwiperCarousel from "./SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";
import { ActivitiesCard } from "../cards";
import { BtnNextIcon, BtnPrevIcon } from "@/utils/icons";

interface ActivitiesSliderProps {
  cards: ActivitiesProps["cards"];
}
const ActivitiesSlider: FC<ActivitiesSliderProps> = ({ cards }) => {
  return (
    <div className="w-full relative">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".activity-next",
          prevEl: ".activity-prev",
        }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
        renderSlide={(card) => <ActivitiesCard {...card} />}
      />
      <button
        className="w-10 max-lg:hidden aspect-square activity-prev flex items-center justify-center rounded-full bg-white box-shadow absolute top-1/2 transform -translate-y-1/2 -left-5 z-10"
        aria-label="prev"
      >
        <BtnPrevIcon />
      </button>
      <button
        className="w-10 max-lg:hidden aspect-square activity-next flex items-center justify-center rounded-full bg-white box-shadow absolute top-1/2 transform -translate-y-1/2 -right-5 z-10"
        aria-label="next"
      >
        <BtnNextIcon />
      </button>
    </div>
  );
};

export default ActivitiesSlider;
