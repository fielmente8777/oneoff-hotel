"use client";
import { ExploreExperienceDataProps } from "@/@types/type";
import SwiperCarousel from "./SwiperCarousel";
import { Autoplay } from "swiper/modules";
import ExperiencesCard from "../cards/ExperiencesCard";

interface ExperiencesSliderProps {
  cards: ExploreExperienceDataProps["cards"];
}

const ExperiencesSlider: React.FC<ExperiencesSliderProps> = ({ cards }) => {
  return (
    <div>
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop={false}
        modules={[Autoplay]}
        pagination={{ clickable: true }}
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
