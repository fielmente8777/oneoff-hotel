import { FillCallIcon } from "@/utils/icons";
import Image from "next/image";
import { footerData } from "./footerdata";
import Link from "next/link";
import { Container } from "../sectionComponants";
import LazyLoadedMap from "../map/LazyLoadedMap";
import { contacts } from "@/utils/constent";

const Footer = () => {
  return (
    <footer className="bg-secondary max_screen_width">
      <nav className="max_width flex max-md:flex-col gap-4 items-center justify-between py-6">
        {/* social media links */}
        <ul className="flex items-center gap-4 max-md:order-2">
          {footerData.socialMediaUrls.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-10 h-10 rounded-sm flex items-center justify-center bg-white text-primary transition-all"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
        {/* logo */}
        <div className="max-w-[88px] w-full relative max-md:order-1 aspect-[4/4]  lg:ml-[15rem]">
          <Image src="/logo.webp" alt="logo" fill className="object-contain" />
        </div>
        {/* call contact */}
        <div className="flex items-center gap-2 max-md:order-3">
          <span className="">
            <FillCallIcon />
          </span>
          {footerData.call.map((item, index) => (
            <div key={index} className="md:text-lg">
              <Link
                key={index}
                href={`tel:${item.href.replace("tel:", "")}`}
                className="text-white font-semibold"
              >
                {item.label}
              </Link>
              {index < footerData.call.length - 1 && (
                <span className="text-white">,</span>
              )}
            </div>
          ))}
        </div>
      </nav>
      <div className="bg-bg2 h-[1px] w-full" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[10rem] md:py-20 py-10">
          {footerData.listOfDataLinks.map((item, itemIndex) => (
            <div key={itemIndex} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl text-primary moul">{item.title}</h3>
                {itemIndex === 1 && (
                  <div className="w-14 max-md:block hidden relative aspect-square">
                    <Image
                      src={"/qr.jpg"}
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
              {item.description && (
                <p className="text-lg text-white">{item.description}</p>
              )}
              <ul className="flex flex-col gap-3">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`md:text-lg text-white text-wrap flex gap-2 ${itemIndex === 0 ? "border px-6 py-3 flex items-center justify-center" : ""}`}
                    >
                      {link.icon && <span className="mt-px">{link.icon}</span>}
                      {link.label}
                    </Link>
                  </li>
                ))}
                {itemIndex === 1 && (
                  <li className="w-16 md:block hidden relative aspect-square">
                    <Image
                      src={"/qr.jpg"}
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </li>
                )}
              </ul>
            </div>
          ))}
          <div className="w-full max-lg:aspect-square">
            <LazyLoadedMap src={contacts.mapUrl} />
          </div>
        </div>
      </Container>
      <div className="w-full bg-primary py-6">
        <Container className="flex flex-col md:flex-row justify-center items-center  w-full gap-2 md:gap-0">
          <div className="flex items-center justify-center  text-white  uppercase tracking-wider w-full">
            <span className="px-2 moul text-lg">© NATURE ON THE ROCKS</span>
            {/* <span className="px-2">All rights reserved</span> */}
          </div>
          {/* <div className="text-white text-lg md:ml-auto w-fit text-nowrap">
            Powered by{" "}
            <Link
              href="https://eazotel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eazotel
            </Link>
          </div> */}
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
