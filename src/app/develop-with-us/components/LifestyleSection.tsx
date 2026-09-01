"use client";

import {
  Container,
  Section,
  SectionWithContainer,
} from "@/components/sectionComponents";
import LifestyleCard from "@/components/cards/LifestyleCard";

interface LifestyleSectionProps {
  heading: string;
  cards: {
    image: string;
    title: string;
    description: string;
  }[];
}

const LifestyleSection = ({ heading, cards }: LifestyleSectionProps) => {
  return (
    <Section>
      <div className="">
        <h2 className="text-center md:text-5xl text-3xl font-anton">
          {heading}
        </h2>
        <div className="border-y border-secondary mt-8">
          <Container className="grid lg:grid-cols-3 grid-cols-1   lg:divide-x max-lg:divide-y divide-secondary">
            {cards.map((card, index) => (
              <div key={index} className={`px-4   `}>
                <LifestyleCard {...card} />
              </div>
            ))}
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default LifestyleSection;
