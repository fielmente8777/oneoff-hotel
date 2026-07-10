import { SectionWithContainer } from "@/components/sectionComponents";
import Image from "next/image";

interface KnowMoreProps {
  cards: {
    title: string;
    description: string;
    image: string;
  }[];
}

const KnowMore: React.FC<KnowMoreProps> = ({ cards }) => {
  return (
    <SectionWithContainer sectionClassName="relative border-y border-secondary">
      <div className="absolute max-lg:hidden left-1/2 -translate-x-1/2 h-full w-px bg-secondary top-0" />
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16  gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default KnowMore;

export const Card: React.FC<KnowMoreProps["cards"][0]> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          alt="image"
          className="object-cover"
          fill
          sizes="(max-width: 400px) 100vw, 400px"
        />
      </div>
      <h2 className="text-2xl font-anton tracking-widest">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
