import { SectionWithContainer } from "@/components/sectionComponents";
import Image from "next/image";

interface CardSectionProps {
  cards: {
    image: string;
    title: string;
    description: string[];
  }[];
}

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default CardSection;

export const Card: React.FC<CardSectionProps["cards"][0]> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          alt="image"
          className="object-cover"
          fill
          sizes="(max-width: 400px) 100vw, 400px"
        />
      </div>
      <h2 className="text-2xl font-anton tracking-widest">{title}</h2>
      <div className="space-y-3 max-w-xl w-full">
        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};
