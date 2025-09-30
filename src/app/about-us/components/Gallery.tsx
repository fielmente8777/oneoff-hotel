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
        <h2 className="text-lg md:text-[4rem] font-anton text-center">
          {title}
        </h2>
        <div className="">
          <SwiperCarousel
            data={hasImages}
            className="w-full"
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".gallery-pagination",
              type: "fraction",
            }}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
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
          <div className="flex justify-evenly items-center mt-4 gap-4 w-fit mx-auto ">
            {/* button prev */}
            <button className="button-prev w-14 h-14 flex items-center justify-center">
              <BtnPrivIcon />
            </button>
            {/* pagination */}
            <div className="gallery-pagination !w-fit text-[1.375rem] font-medium">
              <span className="gallery-current"></span>
              <span className="gallery-total"></span>
            </div>
            {/* button next */}
            <button className="button-next w-14 h-14 flex items-center justify-center">
              <BtnNextIcon />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Gallery;

export const BtnPrivIcon = () => (
  <svg
    width={41}
    height={40}
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2083 30.2083L17.0417 29.4166L8.16667 20.5416H35V19.3749H8.125L17 10.4999L16.2083 9.70825L5.95833 19.9583L16.2083 30.2083Z"
      fill="#9C533E"
    />
  </svg>
);

export const BtnNextIcon = () => (
  <svg
    width={41}
    height={40}
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.7917 30.2083L23.9583 29.4166L32.8333 20.5416H6V19.3749H32.875L24 10.4999L24.7917 9.70825L35.0417 19.9583L24.7917 30.2083Z"
      fill="#9C533E"
    />
  </svg>
);
