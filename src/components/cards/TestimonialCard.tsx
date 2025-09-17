import { TestimonialsProps } from "@/@types/@type";
import { RatingIcon } from "@/utils/icons";
import Image from "next/image";
import { FC } from "react";

const TestimonialCard: FC<TestimonialsProps["cards"][0]> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="max-w-[60px] w-full relative aspect-square mx-auto">
        <Image src={image} alt="alt" fill className="object-cover" />
      </div>
      {/* reating icon 5 stars */}
      <ul className="flex items-center justify-center gap-1">
        {[...Array(5)].map((_, index) => (
          <li key={index}>
            <RatingIcon />
          </li>
        ))}
      </ul>
      <div className="space-y-2">
        <p className="text-light lg:text-lg text-center">{description}</p>
        <h3 className="text-lg font-semibold text-light text-center">{name}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
