"use client";
import { BannerProps } from "@/@types/type";
import Image from "next/image";
import { FC } from "react";
import { Autoplay } from "swiper/modules";
import NavBar2 from "../navbars/NavBar2";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { LazyLoadedVideo } from "../Video2";

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
    <section className="banner max_screen_width_2">
      {/* ✅ Case 1: Both Video + Images */}
      {videoSrc && hasImages ? (
        <div className="w-full max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 lg:py-12">
          <div className="w-full h-full relative aspect-[4/3] md:col-span-3">
            <LazyLoadedVideo
              poster={thumbNail || ""}
              src={videoSrc}
              loop
              autoPlay
              muted
              controls={false}
            />
          </div>
          {/* <div className="lg:hidden block">
            <Swiper
              className="w-full h-full"
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2000 }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <YoutubePlayer
                  poster={thumbNail || ""}
                  url={videoSrc}
                  youtubeUrl={videoSrc}
                  title={title || ""}
                />
              </SwiperSlide>
              <SwiperSlide className="w-full relative aspect-[4/3]">
                <Image
                  src={images[0]}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div> */}
          <div className="md:col-span-2 flex flex-col gap-6 max-lg:px-4">
            <div className="">
              {title && <h1 className="text-lg">{title}</h1>}
              {subTitle && (
                <h2 className="text-lg md:text-[4rem] font-anton">
                  {subTitle}
                </h2>
              )}
              {description && <p className="md:text-lg mt-10">{description}</p>}
            </div>
            {/* {hasSingleImage ? ( */}
            <div className="w-full  relative aspect-[4/3]">
              <Image
                src={images[0]}
                alt="image"
                fill
                className="object-cover"
              />
            </div>
            {/* ) : (
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
            )} */}
          </div>
        </div>
      ) : /* ✅ Case 2: Only Video */
      videoSrc ? (
        <div className="w-full h-full relative">
          <LazyLoadedVideo
            src={videoSrc}
            autoPlay
            loop
            controls={false}
            muted
          />
          <div className="absolute top-0 left-0 w-full z-10">
            <NavBar2 />
          </div>
        </div>
      ) : /* ✅ Case 3: Only Single Image */
      hasSingleImage ? (
        <div className="w-full relative aspect-[4/2]">
          <Image src={images[0]} alt="image" fill className="object-cover" />

          <div className="absolute top-0 left-0 w-full z-10">
            <NavBar2 />
          </div>
        </div>
      ) : /* ✅ Case 4: Multiple Images (Carousel) */
      hasImages ? (
        <div className="relative w-full">
          <SwiperCarousel
            data={images}
            slidesPerView={1}
            spaceBetween={0}
            loop
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            speed={2500}
            className="w-full"
            renderSlide={(image) => (
              <div className="w-full relative md:aspect-[4/2.8] aspect-square">
                <Image src={image} alt="image" fill className="object-cover" />
                <div className="absolute inset-0 z-10 bg-black/20" />
              </div>
            )}
          />

          <div className="absolute top-0 left-0 w-full z-10">
            <NavBar2 />
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Banner;
