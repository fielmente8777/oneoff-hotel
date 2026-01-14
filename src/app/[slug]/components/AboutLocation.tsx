import { SectionWithContainer } from "@/components/sectionComponents";
import Link from "next/link";
import { JSX } from "react";

interface AboutLocationProps {
  title: string;
  description: string[];
  link: {
    label: string;
    href: string;
    icon: JSX.Element;
  };
}
const AboutLocation: React.FC<AboutLocationProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <SectionWithContainer>
      <div className="max-w-4xl mx-auto w-full space-y-6 md:space-y-8">
        <div className="">
          <Link
            href={link.href}
            className="text-lg text-primary text-center w-fit mx-auto flex items-center"
          >
            <span className="text-secondary">{link.icon}</span>
            {link.label}
          </Link>
          <h2 className="md:text-[4rem] text-[2rem] text-center text-primary font-anton">
            {title}
          </h2>
        </div>
        <p className="md:text-lg text-center ">{description}</p>
      </div>
    </SectionWithContainer>
  );
};

export default AboutLocation;
