import Image from "next/image";
import Link from "next/link";
import LinkButton from "../buttons/LinkButton";
import { Container } from "../sectionComponents";
import { footerData } from "./footerdata";

const Footer = () => {
  return (
    <footer className="max_screen_width relative after:absolute after:inset-0 after:bg-secondary after:z-[-2]">
      <div className="max_width flex max-md:flex-col gap-4 items-center justify-between py-6">
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
        <div className="max-w-[253px] w-full relative max-md:order-1 aspect-[4/1] ">
          <Image
            src={footerData.logo}
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        {/* call contact */}
        <div className="flex flex-col gap-2">
          <p className="text-white ">{footerData.description}</p>
          <LinkButton href={footerData.link.href} label={footerData.link.label} variant={"secondary"} className="ml-auto" />
        </div>
      </div>
      <div className="bg-bg2 h-[1px] w-full" />
      <Container className="border-t border-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:py-20 py-10">
          {/* footer links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {footerData.listOfLinks.map((item, itemIndex) => (
              <div key={itemIndex} className="flex flex-col gap-4">
                <h3 className="text-2xl text-white font-anton tracking-wider">
                  {item.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        // target="_blank"
                        // rel="noopener noreferrer"
                        className={` text-white text-wrap flex gap-2`}
                      >
                        {link.icon && (
                          <span className="mt-px">{link.icon}</span>
                        )}
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* footer image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {footerData.images.map((image, index) => (
              <div key={index} className="relative aspect-[4/5.5] w-full">
                <Image src={image} alt="image" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="w-full bg-secondary">
        <Container className="flex flex-col md:flex-row border-t border-white justify-center items-center  w-full gap-2 md:gap-0">
          <div className="flex items-center justify-between  text-white  uppercase tracking-wider w-full py-4">
            <span className="px-2 text-lg">© ONE OFF HOTELS {new Date().getFullYear()}</span>
            <span>POWERED BY EAZOTEL</span>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
