import { ActivitiesProps } from "@/@types/@type";
import Image from "next/image";
import { FC } from "react";

const ActivitiesCard: FC<ActivitiesProps["cards"][0]> = ({
  title,
  description,
  src,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-bg1 ">
      <div className="w-full relative aspect-[4/3]">
        <Image src={src} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-2 px-4 pb-4 min-h-[18rem]">
        <h3 className="text-2xl text-primary moul text-center uppercase">{title}</h3>
        <p className="text-light lg:text-lg text-center">{description}</p>
      </div>
    </div>
  );
};

export default ActivitiesCard;
