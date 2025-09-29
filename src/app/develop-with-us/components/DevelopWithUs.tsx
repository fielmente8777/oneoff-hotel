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
        <div className="grid grid-cols-2 gap-4 divide-x divide-secondary items-start h-full">
          <div className="space-y-4 p-16 h-full">
            <div>
              <h2>{title}</h2>
              <h3 className="text-primary text-4xl font-bold">{subTitle}</h3>
            </div>

            {description &&
              description?.map((item, index) => <p key={index}>{item}</p>)}

            <div className="relative w-full aspect-[4/1.5]">
              <Image
                src={"/DevelopImage.png"}
                alt=""
                className="object-contain"
                fill
              />
            </div>
          </div>
          <div className="p-16">
            <form action="" className="space-y-6">
              <p>
                Join us for a one-on-one chat with the One Off Hotels team to
                explore your ideas and opportunities.
              </p>

              <ContactForm />
              {/* <div className="mt-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <label htmlFor="">First Name*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="bg-transparent outline-none border-b border-b-secondary"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="">Last Name*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="bg-transparent outline-none border-b border-b-secondary"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="">First Name*</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-transparent outline-none border-b border-b-secondary"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="">First Name*</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-transparent outline-none border-b border-b-secondary"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="">First Name*</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-transparent outline-none border-b border-b-secondary"
                  />
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DevelopWithUsComponent;
