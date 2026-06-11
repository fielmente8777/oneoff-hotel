"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

interface LocationsCardsProps {
  locations: {
    title: string;
    location: string;
    subTitle: string;
    description: string;
    src: string;
    images: string[];
    link: {
      label: string;
      href: string;
    };
  }[];
}

const LocationsCards: React.FC<LocationsCardsProps> = ({ locations }) => {
  return (
    <Section className="bg-secondary" defaultPadding={false}>
      <div className="relative w-full">
        <div className="w-full block">
          <SwiperCarousel
            data={locations}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            modules={[Autoplay, Pagination, EffectFade]}
            pagination={{
              clickable: true,
              el: ".locations",
              renderBullet: (index, className) => {
                return `
                <div class="${className}" >
                  <svg class="progress-ring" width="48" height="48">
                    <circle class="progress-ring__circle" cx="24" cy="24" r="22"></circle>
                  </svg>
                  <span class="bullet-label">${index + 1}</span>
                </div>
              `;
              },
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={8000}
            className="w-full "
            swiperSlideClassName="w-full"
            autoplay={{ delay: 3000 }}
            renderSlide={(location) => (
              <div className="w-full">
                <div className="grid xl:grid-cols-6 items-center">
                  <div className="md:col-span-4 room-img1 flex flex-col h-full justify-between border-white">
                    <h2 className="md:text-5xl px-4 py-10 block xl:hidden text-white text-2xl font-anton tracking-wider">
                      {location.title}
                    </h2>
                    <div className="relative w-full aspect-[4/2.5]">
                      <Image
                        src={location.images[0]}
                        alt={location.title}
                        fill
                        className="object-cover box-shadow"
                      />
                    </div>
                  </div>
                  <div className="xl:flex hidden flex-col justify-between w-full text-white md:col-span-2 h-full p-8">
                    <h2 className="md:text-5xl  text-2xl font-anton tracking-wider">
                      {location.title}
                    </h2>

                    <div className=" space-y-4 mt-16">
                      {location.location && (
                        <p className="md:text-lg flex items-center gap-2 text-white">
                          <span className="text-lg">
                            <IoLocationSharp />
                          </span>
                          {location.location}
                        </p>
                      )}
                      <h3 className="md:text-4xl text-2xl font-anton tracking-wider">
                        {location.subTitle}
                      </h3>
                      <p className="md:text-lg">{location.description}</p>
                    </div>

                    <div className="w-full ">
                      <LinkButton
                        href={location.link.href}
                        label={location.link.label}
                        variant="secondary"
                        className="!w-48 pointer-events-auto "
                      />
                    </div>
                  </div>
                </div>

                <div className="xl:hidden px-4 mt-4 flex flex-col gap-4 ">
                  {location.location && (
                    <p className="md:text-lg flex items-center gap-2 text-white">
                      <span className="text-lg">
                        <IoLocationSharp />
                      </span>
                      {location.location}
                    </p>
                  )}
                  <h3 className="md:text-4xl font-anton tracking-wider text-2xl text-white">
                    {location.subTitle}
                  </h3>
                  {/* <p className="md:text-lg">{location.description}</p> */}
                </div>

                <div className="xl:hidden p-4 mt-4 flex flex-col">
                  <p className=" text-white">{location.description}</p>
                  <LinkButton
                    href={location.link.href}
                    label={location.link.label}
                    variant="secondary"
                    className="!w-full !h-12 pointer-events-auto mt-4"
                  />
                </div>
              </div>
            )}
          />
        </div>
        <div className="absolute xl:right-[23%] xl:top-[20%] top-[4%] xxl:right-[25%] lg:right-[20%] md:right-[15%] right-[10%] z-30 w-fit">
          <div className="locations " />
        </div>
      </div>
    </Section>
  );
};

export default LocationsCards;
