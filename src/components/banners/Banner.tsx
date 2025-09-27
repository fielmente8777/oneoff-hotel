"use client";
import { FC } from "react";
import { Section } from "../sectionComponents";
import { BannerProps } from "@/@types/@type";
import SwiperCarousel from "../sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const Banner: FC<BannerProps> = ({ images }) => {
  return (
    <Section defaultPadding={false} className="banner">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        loop
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        className="w-full"
        renderSlide={(image) => (
          <div className="w-full relative aspect-[4/3]">
            <Image src={image} alt="image" fill className="object-cover" />
          </div>
        )}
      />
    </Section>
  );
};

export default Banner;
