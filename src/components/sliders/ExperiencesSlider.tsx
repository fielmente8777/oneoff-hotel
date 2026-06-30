"use client";
import { useMemo, useState } from "react";
import { ExploreExperienceDataProps } from "@/@types/type";
import SwiperCarousel from "./SwiperCarousel";
import { Autoplay } from "swiper/modules";
import ExperiencesCard from "../cards/ExperiencesCard";

interface ExperiencesSliderProps {
  cards: ExploreExperienceDataProps["cards"];
}

const ExperiencesSlider: React.FC<ExperiencesSliderProps> = ({ cards }) => {
  const buttons = [...new Set(cards.map((card) => card.location))];
  const [activeButton, setActiveButton] = useState(buttons[0]);
  const filteredCards = cards.filter((card) => card.location === activeButton);

  return (
    <div className="demo ">
      <div className="mb-10 grid grid-cols-2 gap-4 max-w-xs w-full mx-auto">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => setActiveButton(button)}
            className={`${
              activeButton === button
                ? "bg-secondary text-white"
                : "bg-transparent text-secondary"
            } px-4 py-2  font-semibold border`}
          >
            {button}
          </button>
        ))}
      </div>
      <SwiperCarousel
        data={filteredCards}
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
