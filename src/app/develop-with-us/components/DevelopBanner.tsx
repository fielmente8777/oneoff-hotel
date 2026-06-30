"use client";
import { SectionWithContainer } from "@/components/sectionComponents";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";

interface DevelopBannerProps {
  title: string;
  subTitle: string;
  images: string[];
  description: string;
  svgImg: string;
}
export const DevelopBanner = ({
  title,
  subTitle,
  description,
  svgImg,
}: DevelopBannerProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <SectionWithContainer sectionClassName="relative">
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 items-center">
        <div className="space-y-4 lg:col-span-3 col-span-1">
          <p className=" ">{title}</p>
          <h1 className="md:text-6xl text-3xl text-primary font-anton tracking-wider">
            {subTitle}
          </h1>
          <p className="lg:mt-14 lg:text-lg">{description}</p>
        </div>
        <div className="lg:col-span-2 col-span-1 w-full relative aspect-[4/3.5]">
          <Image
            src={svgImg}
            alt="image"
            className="object-cover"
            fill
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </div>
      </div>

      {/* <DevelopGrid images={images} /> */}
      <div ref={ref} className="absolute bottom-2 md:left-2 right-4">
        <div
          className={`relative xl:w-30 w-15 aspect-[4/2.7] ${
            isInView ? "ball-drop" : ""
          }`}
        >
          <Image src="/Ten.png" alt="image" className="object-cover" fill />
        </div>
      </div>
    </SectionWithContainer>
  );
};
