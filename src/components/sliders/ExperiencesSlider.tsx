"use client";
import { useMemo } from "react";
import { ExploreExperienceDataProps } from "@/@types/type";
import SwiperCarousel from "./SwiperCarousel";
import { Autoplay } from "swiper/modules";
import ExperiencesCard from "../cards/ExperiencesCard";

interface ExperiencesSliderProps {
  cards: ExploreExperienceDataProps["cards"];
}

const ExperiencesSlider: React.FC<ExperiencesSliderProps> = ({ cards }) => {
  const shuffledCards = useMemo(
    () => [...cards].sort(() => Math.random() - 0.5),
    [cards]
  );

  return (
    <div className="demo">
      <SwiperCarousel
        data={shuffledCards}
        slidesPerView={1}
        spaceBetween={24}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={5000}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.25,
          },
        }}
        renderSlide={(card) => <ExperiencesCard {...card} />}
      />
    </div>
  );
};

export default ExperiencesSlider;
