import { SectionWithContainer } from "@/components/sectionComponents";
import ImageSlider from "@/components/sliders/ImageSlider";
import Image from "next/image";

interface ContactBannerProps {
  title: string;
  subTitle: string;
  description: string;
  svgImg: string;
  images: string[];
}

const Banner: React.FC<ContactBannerProps> = ({
  title,
  subTitle,
  description,
  svgImg,
  images,
}) => {
  return (
    <SectionWithContainer sectionClassName="border-b border-secondary">
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="lg:col-span-2">
          <ImageSlider images={images} />
        </div>
        <div className="lg:col-span-1 col-span-1 flex flex-col gap-4">
          <p className=" ">{title}</p>
          <h1 className="md:text-6xl text-3xl text-primary font-anton tracking-wider">
            {subTitle}
          </h1>
          <div className=" w-full relative aspect-[4/2.2] lg:block hidden">
            <Image
              src={svgImg}
              alt="image"
              className="object-cover"
              fill
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
          <p className="lg:text-lg">{description}</p>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
