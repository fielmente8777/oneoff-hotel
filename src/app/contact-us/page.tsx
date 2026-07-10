import Image from "next/image";
import { contactUsPageData } from "./contactUsPageData";
import Link from "next/link";
import type { Metadata } from "next";
import Banner from "./components/Banner";

export const metadata: Metadata = {
  title: "Contact ONE-OFF Hotels | Reservations, Enquiries & Support",
  description:
    "Get in touch with ONE-OFF Hotels for reservations, enquiries, partnerships, or support. We’re here to help.",

  keywords: [
    "contact one off hotels",
    "one off hotels reservations",
    "boutique hotel contact india",
  ],

  alternates: {
    canonical: "https://oneoffhotels.com/contact-us/",
  },

  openGraph: {
    type: "website",
    title: "Contact ONE-OFF Hotels | Reservations, Enquiries & Support",
    description:
      "Contact ONE-OFF Hotels for bookings, enquiries, or partnership opportunities.",
    url: "https://oneoffhotels.com/contact-us/",
    siteName: "ONE-OFF Hotels",
    images: [
      {
        url: "https://oneoffhotels.com/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ONE-OFF Hotels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact ONE-OFF Hotels | Reservations, Enquiries & Support",
    description: "Reach out to ONE-OFF Hotels for reservations and support.",
    images: ["https://oneoffhotels.com/og-contact.jpg"],
  },
};

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
                  <span className="flex flex-wrap items-center gap-0.5">
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary flex items-center gap-2"
                    >
                      {item.label}
                    </Link>
                    {item.href2 && item.label2 && <span>,</span>}
                    {item.href2 && item.label2 && (
                      <Link
                        href={item.href2}
                        className="text-lg text-primary flex items-center gap-2"
                      >
                        {item.label2}
                      </Link>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
