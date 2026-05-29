import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponents";
import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";

interface UpComingLocationsProps {
  location: string;
  title: string;
  link: {
    label: string;
    href: string;
  };
  booking?: {
    label: string;
    href: string;
  };
  images: string[];
}
const UpComingLocations: React.FC<UpComingLocationsProps> = ({
  location,
  title,
  link,
  images,
  booking,
}) => {
  return (
    <SectionWithContainer sectionClassName="upcoming-class">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="relative max-w-[360px] aspect-[4/5] w-full">
          <Image
            src={images[0]}
            alt="image"
            className="object-contain"
            fill
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </div>
        <div className="max-w-lg mx-auto flex flex-col gap-2 items-center justify-center w-full">
          <p className="text-lg font-semibold flex items-center justify-center gap-1">
            <span className="text-secondary text-lg">
              <IoLocationSharp />
            </span>
            {location}
          </p>
          <h2 className="md:text-[4rem] text-[2rem] text-center text-primary font-anton">
            {title}
          </h2>

          {booking && (
            <LinkButton
              href={booking?.href}
              label={booking?.label}
              variant="primary"
            />
          )}
          <Link
            href={link.href}
            className="font-anton mt-10 md:text-2xl text-lg"
          >
            {link.label}
          </Link>
        </div>
        <div className="relative max-w-[360px] aspect-[4/5] w-full">
          <Image
            src={images[1]}
            alt="image"
            className="object-contain"
            fill
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default UpComingLocations;
