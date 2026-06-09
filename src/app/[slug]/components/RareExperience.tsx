"use client";

import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { SectionWithContainer } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { ZoomIcon } from "@/utils/Icons";
import { useWebContext } from "@/contextApi/WebContext";

interface Props {
  title: string;
  subTitle: string;
  description: string[];
  images: string[];
}

const RareExperience: React.FC<Props> = ({
  title,
  subTitle,
  description,
  images,
}) => {
  const secondSwiperRef = useRef<SwiperType | null>(null);
  const { openGallery } = useWebContext();

  return (
    <SectionWithContainer sectionClassName="bg-secondary">
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
        {/* First Slider */}
        <div className="lg:col-span-3 col-span-1 max-lg:hidden">
          <SwiperCarousel
            data={images}
            slidesPerView={1}
            spaceBetween={20}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            onSlideChange={(swiper) => {
              if (!secondSwiperRef.current) return;

              const nextIndex = (swiper.realIndex + 1) % images.length;

              secondSwiperRef.current.slideToLoop(nextIndex, 1000);
            }}
            renderSlide={(src) => (
              <div className="w-full aspect-[4/3.6] relative">
                <Image
                  src={src}
                  alt={src}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}
          />
        </div>

        {/* Content + Second Slider */}
        <div className="lg:col-span-2 col-span-1 flex flex-col w-full overflow-hidden">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            titleClassName="text-white"
            subTitleClassName="text-white"
          />

          <div className="space-y-4">
            {description.map((item, index) => (
              <p key={index} className="md:text-lg text-white">
                {item}
              </p>
            ))}

            <SwiperCarousel
              data={images}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={1000}
              allowTouchMove={false}
              initialSlide={1}
              onSwiper={(swiper) => {
                secondSwiperRef.current = swiper;
              }}
              renderSlide={(src) => (
                <div className="w-full aspect-[4/2.76] relative">
                  <Image
                    src={src}
                    alt={src}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <button
                    onClick={() =>
                      openGallery({
                        images,
                        index: 0,
                      })
                    }
                    className="absolute z-10 bottom-4 right-4 p-2  rounded-lg gap-2 flex items-center justify-center"
                  >
                    <ZoomIcon />
                    <span className="sr-only">Gallery</span>
                  </button>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default RareExperience;
