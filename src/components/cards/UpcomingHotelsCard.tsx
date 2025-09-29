import Image from "next/image";
import { UpcomingHotelsProps } from "../../@types/type";
import { IoLocationSharp } from "react-icons/io5";
const UpcomingHotelsCard: React.FC<UpcomingHotelsProps["cards"][0]> = ({
  title,
  subTitle,
  description,
  images,
}) => {
  return (
    <div className="grid w-full md:grid-cols-2 grid-cols-1 gap-4 md:gap-14">
      <div className="flex flex-col gap-8 md:gap-14">
        <div>
          <div className="flex items-center gap-1">
            <span className="text-secondary text-lg">
              <IoLocationSharp />
            </span>
            <h2 className="text-lg text-primary">{title}</h2>
          </div>
          <h3 className="md:text-[4rem] text-primary font-anton">{subTitle}</h3>
          <p className="md:text-lg">{description}</p>
        </div>
        <div className="relative w-full aspect-[4/2.62]">
          <Image
            src={(images ?? [])[0] || ""}
            alt="image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full relative md:aspect-[4/4] aspect-[4/4]">
        <Image
          src={(images ?? [])[1] || ""}
          alt="image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default UpcomingHotelsCard;
