import { ExploreExperienceDataProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponents";
import { ExperiencesSlider } from "@/components/sliders";
import { SectionHeading } from "@/components/typography";
import { FC } from "react";

const Experiences: FC<ExploreExperienceDataProps> = ({
  title,
  subTitle,
  link,
  cards,
}) => {
  return (
    <Section>
      <div className="flex flex-col md:gap-14 gap-8">
        <SectionHeading title={title} subTitle={subTitle} textCenter line />
        <ExperiencesSlider cards={cards} />
        <LinkButton
          href={link.href}
          label={link.label}
          variant="primary"
          className="mx-auto"
        />
      </div>
    </Section>
  );
};

export default Experiences;
