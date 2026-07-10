"use client";

import { SectionWithContainer } from "@/components/sectionComponents";
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
    <SectionWithContainer>
      <div className="">
        <h2 className="text-center md:text-5xl text-3xl font-anton">
          {heading}
        </h2>

        <div className="grid lg:grid-cols-3 mt-8 border-t border-secondary border-b border-secondary">
          {/* {cards.map((card, index) => (
            <div
              key={index}
              className={`${
                index !== cards.length - 1 ? "border-r border-secondary" : ""
              }`}
            >
              <LifestyleCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))} */}
          {cards.map((card, index) => (
            <div
              key={index}
              className={`
      px-4
      ${index !== cards.length - 1 ? "lg:border-r lg:border-secondary" : ""}
    `}
            >
              <LifestyleCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default LifestyleSection;
