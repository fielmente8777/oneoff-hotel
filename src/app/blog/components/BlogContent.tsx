import { Section } from "@/components/sectionComponents";
import Image from "next/image";
import { title } from "process";
import React from "react";

type BlogContentProps = {
  blogContent: (
    | {
        description: string;
        title?: undefined;
        image?: undefined;
      }
    | {
        title: string;
        description: string;
        image: {
          src: string;
          alt: string;
          landscape: boolean;
          order: string;
        };
      }
    | {
        title: string;
        description: string;
        image?: undefined;
      }
    | {
        title: string;
        description: string;
        image: {
          src: string;
          alt: string;
          landscape?: undefined;
          order?: undefined;
        };
      }
    | {
        title: string;
        description: string;
        image: {
          src: string;
          alt: string;
          order: string;
          landscape?: undefined;
        };
      }
  )[];
};

const BlogContent = ({ blogContent }: BlogContentProps) => {
  return (
    <Section>
      <div className="px-12 py-8 space-y-16">
        {blogContent?.map((content, index) => (
          <div key={index} className="">
            {content?.image && (
              <div className="grid md:grid-cols-2 gap-12">
                <div
                  className={`space-y-6 ${content.image?.order === "right" ? "order-1" : "order-2"}`}
                >
                  {title && (
                    <h1 className="text-secondary md:text-3xl font-anton">
                      {content.title}
                    </h1>
                  )}
                  <p
                    className={`text-secondary text-lg ${!title && "text-center"}`}
                  >
                    {content.description}
                  </p>
                </div>

                <div
                  className={`${content.image?.order === "right" ? "order-2" : "order-1"} relative max-w-[656px] w-full ${content.image?.landscape ? "aspect-[4/2.2]" : "aspect-square"} `}
                >
                  <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {!content?.image && (
              <div className="flex flex-col gap-6">
                {content?.title && (
                  <h1 className="text-secondary md:text-3xl font-anton">
                    {content.title}
                  </h1>
                )}
                <p
                  className={`text-secondary text-lg ${content?.title ? "text-start" : "text-center"}`}
                >
                  {content.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BlogContent;
