"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
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
    <SectionWithContainer sectionClassName="room-bg">
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-3">
          <SwiperCarousel
            data={images}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            swiperSlideClassName="relative w-full aspect-[4/2.62]"
            renderSlide={(image) => (
              <Image src={image} alt={title} fill className="object-cover" />
            )}
          />
        </div>
        <div className="md:col-span-2 text-white">
          <div className="flex flex-col gap-6">
            <h2 className="text-lg md:text-5xl font-anton">{title}</h2>
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
              className="w-fit mt-8"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Rooms;
