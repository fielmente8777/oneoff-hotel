"use client";
import { SectionWithContainer } from "@/components/sectionComponents";
import { useWebContext } from "@/contextApi/WebContext";
import Image from "next/image";

interface BannerProps {
  cards: {
    title: string;
    subtitle: string;
    description: string;
    images: string[];
    location: string;
  }[];
}

const Banner: React.FC<BannerProps> = ({ cards }) => {
  const { selectedLocation, setSelectedLocation } = useWebContext();

  const buttons = [...new Set(cards.map((item) => item.location))];
  const activeButton = selectedLocation || buttons[0];

  const selectedCard = cards.find((item) => item.location === activeButton);

  return (
    <SectionWithContainer>
      <div className="grid xl:grid-cols-6 grid-cols-1 gap-12">
        <div className="flex flex-col gap-4 xl:col-span-2">
          {/* buttons */}
          <div className="grid grid-cols-2 max-w-[18rem] w-full gap-4 mb-8">
            {buttons.map((item) => (
              <button
                key={item}
                className={`border text-nowrap px-5 py-3 active:scale-95 flex items-center justify-center gap-6 transition-all duration-300 ease-in-out ${
                  item === activeButton
                    ? "bg-secondary text-white"
                    : "text-secondary hover:bg-secondary hover:text-white"
                }`}
                onClick={() => setSelectedLocation(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-lg ">{selectedCard?.title}</p>
            <h1 className="text-3xl lg:text-5xl font-anton tracking-widest">
              {selectedCard?.subtitle}
            </h1>
            <div className="w-full relative xl:aspect-[4/2] aspect-[4/2.5] xl:hidden block ">
              <Image
                src={selectedCard?.images[1] ?? ""}
                alt="image"
                className="object-cover"
                fill
              />
            </div>
            <p className="text-lg">{selectedCard?.description}</p>
            <div className="md:w-[392px] w-full relative aspect-[4/1.5]">
              <Image
                src={selectedCard?.images[0] ?? ""}
                alt="image"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
        <div className="w-full relative aspect-[4/2.6] xl:block hidden xl:col-span-4">
          <Image
            src={selectedCard?.images[1] ?? ""}
            alt="image"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
