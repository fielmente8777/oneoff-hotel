import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponents";
import { SectionHeading } from "@/components/typography";

interface AboutHomeProps {
  title: string;
  subTitle: string;
  description: string;
  link?: { label: string; href: string };
  wrapperClassName?: string;
}
const HomeAbout: React.FC<AboutHomeProps> = ({
  title,
  subTitle,
  description,
  link,
  wrapperClassName,
}) => {
  return (
    <SectionWithContainer>
      <div className={`${wrapperClassName} mx-auto w-full space-y-6 md:space-y-8`}>
        <SectionHeading title={title} subTitle={subTitle} textCenter />
        <p className="md:text-lg text-center ">{description}</p>
        {link && (
          <LinkButton target="_blank" rel="noopener noreferrer" href={link?.href} label={link?.label} className="mx-auto" variant="primary" />
        )}
      </div>
    </SectionWithContainer>
  );
};

export default HomeAbout;
