"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import { BtnNextIcon, BtnPrevIcon } from "@/utils/Icons";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";

interface RoomsProps {
  name: string;
  title: string;
  description: string[];
  links: {
    label: string;
    href: string;
  }[];
  amenities: string[];
  images: string[];
}
const Rooms: React.FC<RoomsProps> = ({
  name,
  title,
  description,
  links,
  amenities,
  images,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="room-bg md:py-20 py-14"
      defaultPadding={false}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-3 room-img">
          <div className="lg:hidden flex flex-col gap-2 mb-4 text-white">
            <p className="text-lg md:text-xl uppercase">{name}</p>
            <h2 className="text-3xl md:text-5xl font-anton">{title}</h2>
          </div>
          <SwiperCarousel
            data={images}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            swiperSlideClassName="relative w-full aspect-[4/2.62]"
            renderSlide={(image) => (
              <Image src={image} alt={title} fill className="object-cover" />
            )}
          />
        </div>
        <div className="absolute z-10 lg:bottom-6 top-[44%] right-8 lg:left-[50%] flex items-center gap-4">
          <button className="button-prev w-10 box-shadow aspect-square bg-white rounded-full flex items-center justify-center">
            <BtnPrevIcon />
          </button>
          <button className="button-next w-10 box-shadow aspect-square bg-white rounded-full flex items-center justify-center">
            <BtnNextIcon />
          </button>
        </div>
        <div className="md:col-span-2 text-white">
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl uppercase lg:block hidden">{name}</p>
            <h2 className="text-3xl md:text-5xl font-anton lg:block hidden">{title}</h2>
            {amenities && (
              <button className="w-fit underline underline-offset-4">
                VIEW AMENITIES
              </button>
            )}
            <p className="md:text-lg tracking-wider">{description}</p>
            <Link href={links[0].href} className="w-fit tracking-wider">
              {links[0].label}
            </Link>
            <Link href={links[1].href} className="w-fit tracking-wider">
              {links[1].label}
            </Link>
            <LinkButton
              href={links[2].href}
              label={links[2].label}
              variant="secondary"
              className="lg:!w-[10rem] !w-full max-lg:!h-12 md:mt-8"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Rooms;
