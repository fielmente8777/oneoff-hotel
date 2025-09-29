import { SectionWithContainer } from "@/components/sectionComponents";

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
        <div className="">
          <h2 className="text-lg text-primary text-center">{title}</h2>
          <h3 className="md:text-[4rem] text-center text-primary font-anton">{subTitle}</h3>
        </div>
        <p className="md:text-lg text-center ">{description}</p>
      </div>
    </SectionWithContainer>
  );
};

export default HomeAbout;
