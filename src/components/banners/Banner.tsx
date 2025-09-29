"use client";
import { FC } from "react";
import { Section } from "../sectionComponents";
import SwiperCarousel from "../sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { BannerProps } from "@/@types/type";
import YoutubePlayer from "../Video/YoutubePlayer";

const Banner: FC<BannerProps> = ({
  images,
  videoSrc,
  thumbNail,
  title,
  subTitle,
  description,
}) => {
  const hasImages = images && images.length > 0;
  const hasSingleImage = images && images.length === 1;

  return (
    <Section defaultPadding={false} className="banner">
      {/* ✅ Case 1: Both Video + Images */}
      {videoSrc && hasImages ? (
        <div className="w-full max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 lg:py-12">
          <div className="w-full h-full relative md:col-span-3">
            <YoutubePlayer
              poster={thumbNail || ""}
              url={videoSrc}
              youtubeUrl={videoSrc}
              title={title || ""}
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="">
              {title && <h1 className="text-lg">{title}</h1>}
              {subTitle && (
                <h2 className="text-lg md:text-[4rem] font-anton">
                  {subTitle}
                </h2>
              )}
              {description && <p className="md:text-lg mt-10">{description}</p>}
            </div>
            {hasSingleImage ? (
              <div className="w-full relative aspect-[4/3]">
                <Image
                  src={images[0]}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
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
                    <Image
                      src={image}
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              />
            )}
          </div>
        </div>
      ) : /* ✅ Case 2: Only Video */
      videoSrc ? (
        <div className="w-full h-full relative">
          <YoutubePlayer
            poster={thumbNail || ""}
            url={videoSrc}
            youtubeUrl={videoSrc}
            title=""
          />
        </div>
      ) : /* ✅ Case 3: Only Single Image */
      hasSingleImage ? (
        <div className="w-full relative aspect-[4/1.5]">
          <Image src={images[0]} alt="image" fill className="object-cover" />
        </div>
      ) : /* ✅ Case 4: Multiple Images (Carousel) */
      hasImages ? (
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
      ) : null}
    </Section>
  );
};

export default Banner;
