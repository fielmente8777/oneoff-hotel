"use client";
import { Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

interface GalleryProps {
  title: string;
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ title, images }) => {
    const hasImages = images.length < 4 ? [...images, ...images] : images;
  return (
    <Section>
      <div className="flex flex-col md:gap-14 gap-8">
        <h2 className="text-lg md:text-[4rem] font-anton text-center">{title}</h2>
        <div className="">
          <SwiperCarousel
            data={hasImages}
            className="w-full"
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            swiperSlideClassName="relative w-full aspect-[4/4] "
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            renderSlide={(image) => (
              <Image src={image} alt={title} fill className="object-cover" />
            )}
          />
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
