"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        speed={1000}
        className="w-full"
        renderSlide={(src) => (
          <div className="w-full aspect-[4/4.5] relative">
            <Image src={src} alt="Image" className="object-cover" fill />
          </div>
        )}
      />
    </div>
  );
};

export default ImageSlider;
