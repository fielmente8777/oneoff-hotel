"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponents";
import { SectionHeading } from "@/components/typography";
import { useInView } from "@/hooks/useInView";
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
  const { ref,isInView } = useInView<HTMLDivElement>();
  return (
    <SectionWithContainer sectionClassName="relative border-t border-secondary">
      <div className="grid max-w-6xl mx-auto lg:grid-cols-2 grid-cols-1 md:gap-20 items-center">
        <div className="flex flex-col xl:gap-14 gap-8">
          <SectionHeading title={title} subTitle={subTitle} />
          <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:hidden block">
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
        <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:block hidden">
          <Image src={src} alt="image" className="object-cover" fill />
        </div>
      </div>
      <div ref={ref} className="absolute bottom-2 md:left-2 right-4">
        <div
          className={`relative xl:w-35 w-15 aspect-[4/2.7] ${
            isInView ? "ball-drop" : ""
          }`}
        >
          <Image src="/Ten.png" alt="image" className="object-cover" fill />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StayAt;
