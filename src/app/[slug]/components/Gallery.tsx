
"use client";
import { SectionWithContainer } from "@/components/sectionComponents";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface GalleryProps {
  title: string;
  subTitle: string;
  images: string[];
  button: string;
}

const Gallery: React.FC<GalleryProps> = ({ title, subTitle, images }) => {
  // Helper: chunk images into groups of 3 for the grid layout
  const chunkedImages: string[][] = [];
  for (let i = 0; i < images.length; i += 3) {
    chunkedImages.push(images.slice(i, i + 3));
  }

  // Dynamic aspect ratio calculation based on position
  const getAspectRatio = (globalIndex: number): string => {
    // Define a pattern that repeats every 6 images
    const pattern = [
      "aspect-[4/4.5]", // tall
      "aspect-[4/2.5]", // wide
      "aspect-[4/2.5]", // wide
      "aspect-[4/2.5]", // wide
      "aspect-[4/4.5]", // tall
      "aspect-[4/2.5]", // wide
    ];

    // Use modulo to cycle through the pattern
    return pattern[globalIndex % pattern.length] || "aspect-[4/3]";
  };

  // const { openGallery } = useWebContext();

  return (
    <SectionWithContainer>
      <div className="w-full flex flex-col md:gap-14 gap-8">
        <SectionHeading title={title} subTitle={subTitle} textCenter />

        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4 grid-flow-row">
          {chunkedImages.map((col, colIndex) => (
            <div className="flex flex-col gap-4" key={colIndex}>
              {col.map((image, index) => {
                const globalIndex = colIndex * 3 + index;
                return (
                  <div
                    key={globalIndex}
                    // onClick={() =>
                    //   openGallery({
                    //     images,
                    //     index,
                    //   })
                    // }
                    className={`relative w-full ${getAspectRatio(globalIndex)}`}
                  >
                    <Image
                      src={image}
                      alt={`gallery-image-${globalIndex}`}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* <button className="w-fit underline underline-offset-4 text-secondary mx-auto md:text-lg">
          {button}
        </button> */}
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;
