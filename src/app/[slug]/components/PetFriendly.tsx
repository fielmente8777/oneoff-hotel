import { SectionWithContainer } from "@/components/sectionComponents";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface PetFriendlyProps {
  image: string;
  title: string;
  description: string;
}
const PetFriendly: React.FC<PetFriendlyProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative border-y border-secondary">
      <div className="absolute max-lg:hidden left-1/2 -translate-x-1/2 h-full w-px bg-secondary top-0" />
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 items-center">
        <div className="relative w-full aspect-[4/3.5] lg:block hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <SectionHeading subTitle={title} subTitleClassName="md:text-5xl" />
          <div className="relative w-full aspect-[4/3.5] lg:hidden block">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <p className="lg:text-lg">{description}</p>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default PetFriendly;
