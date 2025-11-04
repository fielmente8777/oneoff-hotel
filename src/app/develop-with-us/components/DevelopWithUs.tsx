import ContactForm from "@/components/forms/ContactForm";
import { Container } from "@/components/sectionComponents";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DevelopBannerProps {
  title: string;
  subTitle: string;
  description: string[];
  src: string;
  link: {
    label: string;
    href: string;
  };
}

const DevelopWithUsComponent = ({
  title,
  subTitle,
  description,
  src,
  link,
}: DevelopBannerProps) => {
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-2 gap-4 md:divide-x divide-secondary items-start h-full">
          <div className="space-y-4 md:p-16 h-full">
            <div className="space-y-2">
              <h2 className="text-lg text-center">{title}</h2>
              <h3 className="font-anton text-primary md:text-5xl text-center text-4xl tracking-wider">
                {subTitle}
              </h3>
            </div>

            <div className="relative w-full aspect-[4/3.5]">
              <Image src={src} alt="" className="object-contain" fill />
            </div>
            {description && (
              <p className="md:text-lg text-center">{description[0]}</p>
            )}
            {link && (
              <Link
                href={link.href}
                className="text-lg text-primary text-center w-fit mx-auto flex items-center"
              >
                {link.label}
              </Link>
            )}
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
