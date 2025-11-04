import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponents";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface StayAtProps {
  title: string;
  subTitle: string;
  description: string[];
  src: string;
  link: {
    label: string;
    href: string;
  };
}

const StayAt: React.FC<StayAtProps> = ({
  title,
  subTitle,
  description,
  src,
  link,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 items-center">
        <div className="relative w-full aspect-[4/4]">
          <Image src={src} alt="image" className="" fill />
        </div>
        <div className="flex flex-col md:gap-14 gap-8">
          <SectionHeading title={title} subTitle={subTitle} />
          <p className="md:text-lg">{description}</p>
          <LinkButton href={link.href} label={link.label} className="!w-[12rem]" variant="primary" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StayAt;
