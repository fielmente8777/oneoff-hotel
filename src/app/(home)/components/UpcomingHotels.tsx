"use client";
import { UpcomingHotelsProps } from "@/@types/type";
import { UpcomingHotelsCard } from "@/components/cards";
import { Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import { Autoplay } from "swiper/modules";

const UpcomingHotels: React.FC<UpcomingHotelsProps> = ({ cards }) => {
  return (
    <Section>
      <div className="max-w-[90rem] mx-auto max-xl:px-4 w-full">
        <SwiperCarousel
          data={cards}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          speed={1000}
          renderSlide={(card) => <UpcomingHotelsCard {...card} />}
        />
      </div>
    </Section>
  );
};

export default UpcomingHotels;
