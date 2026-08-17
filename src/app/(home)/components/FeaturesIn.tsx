import { SectionWithContainer } from "@/components/sectionComponents";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

const FeaturesIn = () => {
  const featuresIn = [
    {
      logo: "/hospemag.png",
      link: "https://www.hospemag.me/features/aditya-samadhiya-oneoff-hotels",
      title: "Hospemag",
    },
    {
      logo: "/The-Best-List.png",
      link: "https://www.instagram.com/p/DYUo7R6mM6y/?igsh=MW9xYzFxMGxqbHh0aw%3D%3D",
      title: "Instagram",
    },
    {
      logo: "/nod.png",
      link: "https://thenodmag.com/content/room-rot-india-villas-hotels-airbnb-gen-z-travel-trends",
      title: "Nod Magazine",
    },
  ];
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-8 max-w-6xl mx-auto w-full">
        <div className="">
          <SectionHeading
            subTitle="Featured In"
            subTitleClassName="lg:text-4xl! uppercase"
            smTextCenter
          />
        </div>
        {featuresIn.map((feature, index) => (
          <Link
            href={feature.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-full aspect-[2/1] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Image
              src={feature.logo}
              alt={feature.title}
              fill
              className="object-contain px-1"
            />
          </Link>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default FeaturesIn;
