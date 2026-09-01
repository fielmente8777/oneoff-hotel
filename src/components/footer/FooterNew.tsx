import Image from "next/image";
import Link from "next/link";
import { footerData } from "./footerdata";
import { Container } from "../sectionComponents";
import LinkButton from "../buttons/LinkButton";

const FooterNew = () => {
  return (
    <footer className="max_screen_width relative after:absolute after:inset-0 after:bg-secondary after:z-[-2]">
      <Container className="w-full grid xl:grid-cols-[auto_1fr_auto] lg:gap-35 gap-8 py-10">
        <Link href="/" className="w-45 relative block aspect-[4/1.5]">
          <Image
            src={footerData.logo}
            alt="logo"
            fill
            className="object-cover"
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </Link>
        {/* links */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.5fr_1.8fr_1fr] lg:gap-16 gap-4">
          {footerData.listOfLinks.map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h3 className="font-anton text-2xl tracking-widest uppercase text-white">
                {item.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="text-white capitalize"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <LinkButton
          href={footerData.link.href}
          label={footerData.link.label}
          target="_blank"
          rel="noopener noreferrer"
          variant={"secondary"}
          className="lg:mx-auto  max-lg:!w-50 max-lg:!h-12"
        />
      </Container>
      <div className="w-full bg-secondary">
        <Container className="flex  border-t border-white justify-center items-center  w-full gap-2 md:gap-0">
          <div className="flex flex-col md:flex-row items-center justify-between  text-white tracking-wider w-full py-4">
            <span className="px-2 max-md:text-center">
              © ONE OFF Hotels {new Date().getFullYear()}
            </span>
            <span className="max-md:py-4 max-md:text-center">
              {" "}
              Powered by{" "}
              <Link href="https://www.fielmente.com/" target="_blank">
                Fielmente
              </Link>
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default FooterNew;
