import Banner from "@/components/banners/Banner";
import { Container } from "@/components/sectionComponents";
import Image from "next/image";
import { contactUsPageData } from "./contactUsPageData";

export default function ContactUs() {
  return (
    <main>
      <Banner {...contactUsPageData.bannerData} />
      <Container className="">
        <div className="grid grid-cols-2 divide-x divide-secondary">
          {/* left side  */}
          <div className="space-y-2 p-10">
            <h2>Contact us</h2>

            <p className="text-5xl text-primary font-bold">
              WE’D LOVE TO HEAR FROM YOU
            </p>

            <div className="relative w-full aspect-[4/2]">
              <Image
                src={"/Contact-Form-Image.png"}
                alt=""
                className="object-contain"
                fill
              />
            </div>
          </div>
          right side
          <div className="p-10">
            <form action="" className="space-y-14">
              <div className="flex flex-col gap-1.5">
                <p className="text-xl font-bold flex items-center gap-2">
                  <EmailIcon /> Email Address:
                </p>
                <label htmlFor="">LOREMIPSUMXYX.com</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-b bg-transparent outline-none border-b-secondary"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-xl font-bold flex items-center gap-2">
                  <PhoneIcon /> Phone:
                </p>
                <label htmlFor="">+91-XXXXXXXXXX</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-b bg-transparent outline-none border-b-secondary"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-xl font-bold flex items-center gap-2">
                  <EmailIcon />
                  Address:
                </p>
                <label htmlFor="">
                  LOREM IPSUM DOLOR SIT A AMET, CONSECTETUR LOREM IPSUM DOLOR
                  SIT A AMET, CONSECTETUR..
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-b bg-transparent outline-none border-b-secondary"
                />
              </div>{" "}
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}

const EmailIcon = () => {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.46089 23.2499C2.70314 23.2499 2.06177 22.9874 1.53677 22.4624C1.01177 21.9374 0.749268 21.296 0.749268 20.5383V3.4615C0.749268 2.70375 1.01177 2.06238 1.53677 1.53738C2.06177 1.01238 2.70314 0.749878 3.46089 0.749878H26.5376C27.2954 0.749878 27.9368 1.01238 28.4618 1.53738C28.9868 2.06238 29.2493 2.70375 29.2493 3.4615V20.5383C29.2493 21.296 28.9868 21.9374 28.4618 22.4624C27.9368 22.9874 27.2954 23.2499 26.5376 23.2499H3.46089ZM14.9993 12.8365L26.9993 5.16325L26.7686 2.99988L14.9993 10.4999L3.22989 2.99988L2.99927 5.16325L14.9993 12.8365Z"
        fill="#9C533E"
      />
    </svg>
  );
};

const PhoneIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1609 25.7501C21.3341 25.7501 18.4942 25.0929 15.6412 23.7784C12.7885 22.4639 10.165 20.6096 7.77074 18.2156C5.38624 15.8214 3.53674 13.2001 2.22224 10.3519C0.907738 7.50387 0.250488 4.6665 0.250488 1.83975C0.250488 1.38975 0.400488 1.01225 0.700488 0.707247C1.00049 0.402497 1.37549 0.250122 1.82549 0.250122H6.71774C7.09649 0.250122 7.43061 0.373748 7.72011 0.620998C8.00961 0.867998 8.19374 1.17325 8.27249 1.53675L9.13236 5.95012C9.19186 6.35962 9.17936 6.7115 9.09486 7.00575C9.01011 7.3 8.85811 7.54712 8.63886 7.74712L5.17461 11.1195C5.73211 12.1405 6.36911 13.1064 7.08561 14.0171C7.80186 14.9276 8.57736 15.7972 9.41211 16.626C10.2351 17.4492 11.1101 18.2137 12.0371 18.9195C12.9641 19.6252 13.9651 20.282 15.0401 20.8897L18.4061 17.4945C18.6409 17.2502 18.9251 17.079 19.2589 16.9807C19.5924 16.8827 19.939 16.8587 20.2987 16.9087L24.4639 17.757C24.8426 17.857 25.1517 18.0502 25.3912 18.3367C25.6307 18.6232 25.7505 18.9482 25.7505 19.3117V24.1751C25.7505 24.6251 25.5981 25.0001 25.2934 25.3001C24.9884 25.6001 24.6109 25.7501 24.1609 25.7501Z"
        fill="#9C533E"
      />
    </svg>
  );
};
