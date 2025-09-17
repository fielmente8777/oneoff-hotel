"use client";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import Image from "next/image";

const CommonSlider = ({
  images,
  warperClass = "",
  paginationClassName = "",
}: {
  images: string[];
  warperClass?: string;
  paginationClassName?: string;
}) => {
  return (
    <div className={`w-full ${warperClass}`}>
      <SwiperCarousel
        data={images || []}
        slidesPerView={1}
        spaceBetween={8}
        loop
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          el: paginationClassName && `.${paginationClassName}`,
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
        renderSlide={(image) => (
          <div className="w-full relative aspect-[4/3]">
            <Image src={image} alt="image" fill className="object-cover" />
          </div>
        )}
      />
      {paginationClassName && (
        <div
          className={`${paginationClassName} flex items-center justify-center mt-6`}
        ></div>
      )}
    </div>
  );
};

export default CommonSlider;
