import Banner from "@/components/banners/Banner";
import Image from "next/image";
import { contactUsPageData } from "./contactUsPageData";
import Link from "next/link";

export default function ContactUs() {
  return (
    <main>
      <Banner {...contactUsPageData.bannerData} />
      <div className="">
        <div className="md:grid grid-cols-2 divide-x divide-secondary items-center">
          {/* left side  */}
          <div className="space-y-2 p-10">
            <h1>{contactUsPageData.contactUsData.title}</h1>

            <h2 className="md:text-5xl text-3xl text-primary font-anton tracking-wider">
              {contactUsPageData.contactUsData.subTitle}
            </h2>

            <div className="relative w-full aspect-[4/2]">
              <Image
                src={"/Contact-Form-Image.png"}
                alt={contactUsPageData.contactUsData.title}
                className="object-contain"
                fill
              />
            </div>
          </div>

          <div className="p-10">
            <ul className=" divide-y divide-secondary">
              {contactUsPageData.contactUsData.links.map((item, index) => (
                <li key={index} className="flex flex-col gap-4 py-6">
                  <span className="flex items-center gap-2 text-2xl font-anton uppercase tracking-wider">
                    {item.icon}
                    {item.title}
                  </span>
                  <Link
                    href={item.href}
                    className="text-lg text-primary flex items-center gap-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
