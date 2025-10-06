import ContactForm from "@/components/forms/ContactForm";
import { Container } from "@/components/sectionComponents";
import Image from "next/image";
import React from "react";

interface DevelopBannerProps {
  title: string;
  subTitle: string;
  description: string[];
  images?: string[];
}

const DevelopWithUsComponent = ({
  title,
  subTitle,
  description,
}: DevelopBannerProps) => {
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-2 gap-4 md:divide-x divide-secondary items-start h-full">
          <div className="space-y-4 md:p-16 h-full">
            <div>
              <h2>{title}</h2>
              <h3 className="font-anton text-primary text-4xl tracking-wider">
                {subTitle}
              </h3>
            </div>

            {description &&
              description?.slice(0, 1).map((item, index) => <p key={index}>{item}</p>)}

            <div className="relative w-full aspect-[4/1.5]">
              <Image
                src={"/DevelopImage.png"}
                alt=""
                className="object-contain"
                fill
              />
            </div>
          </div>

          <div className="md:p-16 py-6">
            <form action="" className="space-y-6">
              <p>
                Join us for a one-on-one chat with the One Off Hotels team to
                explore your ideas and opportunities.
              </p>

              <ContactForm />
             
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DevelopWithUsComponent;
