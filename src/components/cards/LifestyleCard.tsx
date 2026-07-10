import Image from "next/image";
import { Section, SectionWithContainer } from "../sectionComponents";

interface LifestyleCardProps {
  image: string;
  title: string;
  description: string;
}

const LifestyleCard = ({
  image,
  title,
  description,
}: LifestyleCardProps) => {
  return (
    <div className="pt-10">
      <div className="relative aspect-[3/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="py-5">
        <p className="uppercase font-bold tracking-wide text-[20px] text-anton">
          {title}
        </p>

        <p className="mt-3 text-sm ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LifestyleCard;