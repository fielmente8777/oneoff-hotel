import { SectionWithContainer } from "@/components/sectionComponents";
import Image from "next/image";

interface HowtoReachProps {
  image: string;
  wayToReach: {
    question: string;
    answer: string;
  }[];
}

const HowtoReach: React.FC<HowtoReachProps> = ({ image, wayToReach }) => {
  return (
    <SectionWithContainer sectionClassName="bg-secondary">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="w-full relative aspect-[4/3]">
          <Image
            src={image}
            alt="image"
            className="object-cover"
            fill
            sizes="(max-width: 400px) 100vw, 400px"
          />
          <div className="absolute max-xl:hidden -top-16 -right-5 w-px h-[163%] bg-white"></div>
        </div>
        {wayToReach.map((item, index) => (
          <div className="relative" key={index}>
            {index !== wayToReach.length - 1 && (
              <div className="absolute -top-16 max-xl:hidden -right-5 w-px h-[163%] bg-white" />
            )}
            <WhyToReachCard {...item} />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default HowtoReach;

const WhyToReachCard: React.FC<HowtoReachProps["wayToReach"][0]> = ({
  question,
  answer,
}) => {
  return (
    <div className="flex flex-col gap-4 text-white md:p-6">
      <h2 className="md:text-[1.375rem] text-lg">{question}</h2>
      <p className="">{answer}</p>
    </div>
  );
};
