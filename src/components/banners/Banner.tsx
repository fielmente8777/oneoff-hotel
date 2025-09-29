"use client";
import { FC } from "react";
import { Section } from "../sectionComponents";
import SwiperCarousel from "../sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { BannerProps } from "@/@types/type";
import YoutubePlayer from "../Video/YoutubePlayer";

const Banner: FC<BannerProps> = ({ images, videoSrc, thumbNail }) => {
  return (
    <Section defaultPadding={false} className="banner">
      {videoSrc ? (
        <div className="w-full h-full relative">
          <YoutubePlayer
            poster={thumbNail || ""}
            url={videoSrc}
            youtubeUrl={videoSrc}
            title=""
          />
        </div>
      ) : images?.length && images?.length === 1 ? (
        <div className="w-full relative aspect-[4/1.5]">
          <Image
            src={(images ?? [])[0] || ""}
            alt="image"
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <SwiperCarousel
          data={images || []}
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
      )}
    </Section>
  );
};

export default Banner;
