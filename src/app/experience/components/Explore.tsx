import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponents";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

interface ExploreProps {
  title: string;
  subTitle: string;
  description: string;
  links: {
    label: string;
    href: string;
  }[];
  images: string[];
}
const Explore: React.FC<ExploreProps> = ({
  title,
  subTitle,
  description,
  links,
  images,
}) => {
  // Helper: chunk images into groups of 2 for the grid layout
  const columnSizes = [2, 3, 2];
  const chunkedImages: string[][] = [];

  let start = 0;
  let i = 0;

  while (start < images.length) {
    const size = columnSizes[i % columnSizes.length]; // cycle
    chunkedImages.push(images.slice(start, start + size));
    start += size;
    i++;
  }

  // Dynamic aspect ratio calculation based on position
  const getAspectRatio = (globalIndex: number): string => {
    // Define a pattern that repeats every 6 images
    const pattern = [
      "aspect-[4/5.5]", // tall
      "aspect-[4/3]", // wide
      "aspect-[4/2]", // wide
      "aspect-[4/2]", // wide
      "aspect-[4/3.7]", // tall
      "aspect-[4/2.5]", // wide
      "aspect-[4/2.9]", // wide
    ];

    // Use modulo to cycle through the pattern
    return pattern[globalIndex % pattern.length] || "aspect-[4/3]";
  };

  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
        <div className="md:col-span-3">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 grid-flow-row">
            {chunkedImages.map((col, colIndex) => (
              <div className="flex flex-col gap-4" key={colIndex}>
                {col.map((image, index) => {
                  const globalIndex = colIndex * 3 + index;
                  return (
                    <div
                      key={globalIndex}
                      className={`relative w-full ${getAspectRatio(globalIndex)}`}
                    >
                      <Image
                        src={image}
                        alt={`gallery-image-${globalIndex}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col gap-8">
            <SectionHeading title={title} subTitle={subTitle} />
            <p className="md:text-lg">{description}</p>
            <Link href={links[0].href} className="w-fit md:text-lg">
              {links[0].label}
            </Link>
            <LinkButton
              href={links[1].href}
              label={links[1].label}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Explore;
