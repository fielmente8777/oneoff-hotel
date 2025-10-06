import { SectionWithContainer } from "@/components/sectionComponents";
import { SectionHeading } from "@/components/typography";

interface AboutHomeProps {
  title: string;
  subTitle: string;
  description: string;
}
const HomeAbout: React.FC<AboutHomeProps> = ({
  title,
  subTitle,
  description,
}) => {
  return (
    <SectionWithContainer>
      <div className="max-w-[37rem] mx-auto w-full space-y-6 md:space-y-8">
        <SectionHeading title={title} subTitle={subTitle} textCenter />
        <p className="md:text-lg text-center ">{description}</p>
      </div>
    </SectionWithContainer>
  );
};

export default HomeAbout;
