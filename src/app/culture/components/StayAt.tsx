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
      <div className="grid max-w-5xl mx-auto md:grid-cols-2 grid-cols-1 md:gap-20 items-center">
        <div className="relative w-full aspect-[3/4] md:aspect-[4/5.9] md:block hidden">
          <Image src={src} alt="image" className="" fill />
        </div>
        <div className="flex flex-col md:gap-14 gap-8">
          <SectionHeading title={title} subTitle={subTitle} />
          <div className="relative w-full aspect-[3/4] md:aspect-[4/5.9] md:hidden block">
            <Image src={src} alt="image" className="" fill />
          </div>
          <div className="space-y-4">
            {description.map((item, index) => (
              <p key={index} className="md:text-lg">
                {item}
              </p>
            ))}
          </div>

          <LinkButton
            href={link.href}
            label={link.label}
            className="!w-[12rem]"
            variant="primary"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StayAt;
