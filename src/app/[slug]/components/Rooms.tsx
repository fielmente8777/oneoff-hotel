"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import { BtnNextIcon, BtnPrevIcon } from "@/utils/Icons";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";

interface RoomsProps {
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
            <h2 className="text-3xl md:text-3xl uppercase font-anton">
              {title}
            </h2>
          </div>
          <div className="w-full relative">
            <SwiperCarousel
              data={images}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
              swiperSlideClassName="relative w-full aspect-[4/2.62]"
              renderSlide={(image) => (
                <Image src={image} alt={title} fill className="object-cover border-2 border-white rounded-3xl" />
              )}
            />
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-center justify-between w-[95%] gap-4">
              <button className="button-prev w-10 box-shadow aspect-square bg-white rounded-full flex items-center justify-center">
                <BtnPrevIcon />
              </button>
              <button className="button-next w-10 box-shadow aspect-square bg-white rounded-full flex items-center justify-center">
                <BtnNextIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 text-white">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-3xl uppercase font-anton lg:block hidden">
              {title}
            </h2>
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
