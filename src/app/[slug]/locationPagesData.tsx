import { contacts } from "@/utils/constant";
import {
  CoffeIcon,
  FamilyRoomIcon,
  LaundaryIcon,
  PetFriendly,
  RoomServiceIcon,
  SecurityIcon,
  TvIcon,
  WifiIcon,
} from "@/utils/Icons";
import { IoLocationSharp } from "react-icons/io5";
export const locationPageData = [
  {
    slug: "one-off-dashashwamedh",
    metaData: {
      title:
        "One Off Dashashwamedh, Varanasi | Boutique Hotel Near Kashi Vishwanath Temple",
      description:
        "Stay at One Off Dashashwamedh, a boutique hotel in Varanasi just steps from Kashi Vishwanath Temple and the Ganga ghats. Minimalist rooms, modern comforts, and an unbeatable old-city location.",
    },

    bannerData: {
      images: [
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/home/img-1.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-4.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-9.png",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-8.png",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-5.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-10.png",
      ],
    },
    aboutLocation: {
      title: "ONE OFF DASHASHWAMEDH",
      description: [
        "Stay in the heart of Varanasi at our beautifully designed 5-room boutique hotel, just steps from the Kashi Vishwanath Temple and Ganga ghats. Each room is a cozy, 300 sqft retreat with minimalist interiors, modern comforts, and hotel-style luxury. Enjoy the charm of the old city with everything within walking distance—temples, aartis, boat rides, and more. The perfect blend of aesthetic design, comfort, and location.",
      ],
      link: {
        label: "VARANASI",
        href: "",
        icon: <IoLocationSharp />,
      },
    },
    rooms: {
      title: "One Off DASHASHWAMEDH",
      description: [
        "Welcome to our hotel in the spiritual heart of Varanasi—just 2 minutes from Kashi Vishwanath Temple and 5 minutes from the Ganga ghats. Each 300 sqft room offers minimalist design, warm lighting, and handcrafted details for a serene stay amidst the city’s vibrant energy.",
      ],
      links: [
        {
          label:
            "ADDRESS: D-38/26-1NM, Hauz Katora, Varanasi, Next to Baba Thandai, Gadoliya, Varanasi - 221001",
          href: "",
        },
        {
          label: "CONTACT: " + contacts.phoneNumbers[0],
          href: "tel:" + contacts.phoneNumbers[0],
        },
        {
          label: "BOOK NOW",
          href: contacts.bookingCta.oneOffDashashwamedh,
        },
      ],
      amenities: [""],
      images: [
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-7.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-1.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-2.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/home/img-4.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-3.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-6.jpg",
      ],
    },

    amenties: [
      {
        label: "FREE WIFI",
        icon: <WifiIcon />,
      },
      {
        label: "FAMILY ROOMS",
        icon: <FamilyRoomIcon />,
      },
      {
        label: "ROOM SERVICE",
        icon: <RoomServiceIcon />,
      },
      {
        label: "PET FRIENDLY",
        icon: <PetFriendly />,
      },
      {
        label: "SECURITY",
        icon: <SecurityIcon />,
      },
      {
        label: "TEA/COFFEE MAKER",
        icon: <CoffeIcon />,
      },
      {
        label: "Tv",
        icon: <TvIcon />,
      },
      {
        label: "LAUNDRY (ADD-ON)",
        icon: <LaundaryIcon />,
      },
    ],

    gallery: {
      title: "EXPLORE",
      subTitle: "OUR GALLERY",
      images: [
        "/gallery1.png",
        "/about2.png",
        "/gallery4.jpg",
        "/gallery5.jpg",
        "/gallery6.jpg",
        "/gallery7.jpg",
        "/gallery8.jpg",
        "/gallery9.jpg",
        "/gallery10.jpg",
        "/gallery11.jpg",
        "/gallery2.png",
        "/gallery12.jpg",
      ],
      button: "VIEW MORE",
    },
  },
  {
    slug: "one-off-x",
    metaData: {
      title: "One Off X Assi, Varanasi | Boutique Apartments Near Assi Ghat",
      description:
        "One Off X Assi offers spacious boutique apartments in Ravindrapuri, Varanasi. Heritage design, Wabi-Sabi aesthetics, modern comforts, and close proximity to Assi Ghat.",
    },

    bannerData: {
      // images: [
      //   "/Rectangle1.png",
      //   "/bnr-slide3.webp",
      //   "/Img/Rectangle 4079.png",
      //   "/Img/Rectangle 4080.png",
      // ],
      // videoSrc:
      //   "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/ONE+OFF+MAIN+FILM/master.m3u8",
      videoSrc:
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/ONE%2BOFF%2BMAIN%2BFILM.mp4",
    },
    aboutLocation: {
      title: "ONE OFF X ASSI",
      description: [
        "ONEOFF X ASSI is a thoughtfully restored 80-year-old ancestral bungalow offering spacious, design-led boutique apartments in Ravindrapuri—Varanasi’s most prestigious and serene residential neighborhood. Rooted in Wabi-Sabi philosophy, the property blends heritage character, handcrafted interiors, and modern comforts, just minutes from Assi Ghat. Ravindrapuri’s wide, tree-lined streets, cultural spaces, yoga centres, bookstores, and celebrated cafés create a calm yet connected setting, allowing guests to experience the spiritual rhythm of Kashi while returning to a quiet, refined sanctuary.",
      ],
      link: {
        label: "VARANASI",
        href: "",
        icon: <IoLocationSharp />,
      },
    },
    rooms: {
      title: "ONE OFF X ASSI ",
      description: [
        "Each apartment is a spacious private residence featuring two large bedrooms with premium linens, a sunlit living area with deep seating and handcrafted jute, rattan, and linen details, and en-suite bathrooms fitted with high-quality fixtures and organic, artisanal toiletries. A fully equipped kitchen and dedicated dining space complete the experience, offering the comfort of home elevated by thoughtful, boutique-style luxury.",
      ],
      links: [
        {
          label:
            "ADDRESS: Ravindrapuri Colony B-1/84-P Ravindrapuri Extention, Opposite Bankati Hanuman Ji Temple, Varanasi",
          href: "",
        },
        {
          label: "CONTACT: " + contacts.phoneNumbers[0],
          href: "tel:" + contacts.phoneNumbers[0],
        },
        {
          label: "BOOK NOW",
          href: contacts.bookingCta?.oneOffXAssi,
        },
      ],
      amenities: [""],
      images: [
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/x/img-1.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/x/img-6.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/x/img-4.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/x/img-3.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/x/img-5.jpg",
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/x/img-2.jpg",
      ],
    },

    amenties: [
      {
        label: "FREE WIFI",
        icon: <WifiIcon />,
      },
      {
        label: "FAMILY ROOMS",
        icon: <FamilyRoomIcon />,
      },
      {
        label: "ROOM SERVICE",
        icon: <RoomServiceIcon />,
      },
      {
        label: "PET FRIENDLY",
        icon: <PetFriendly />,
      },
      {
        label: "SECURITY",
        icon: <SecurityIcon />,
      },
      {
        label: "TEA/COFFEE MAKER",
        icon: <CoffeIcon />,
      },
      {
        label: "Tv",
        icon: <TvIcon />,
      },
      {
        label: "LAUNDRY (ADD-ON)",
        icon: <LaundaryIcon />,
      },
    ],

    gallery: {
      title: "EXPLORE",
      subTitle: "OUR GALLERY",
      images: [
        "/one-x-gallery1.jpg",
        "/one-x-gallery2.jpg",
        "/one-x-gallery3.jpg",
        "/one-x-gallery4.jpg",
        "/one-x-gallery5.jpg",
        "/one-x-gallery6.jpg",
        "/one-x-gallery7.jpg",
        "/one-x-gallery8.jpg",
        "/one-x-gallery9.jpg",
        "/one-x-gallery10.jpg",
        "/one-x-gallery11.jpg",
        "/one-x-gallery12.jpg",
      ],
      button: "VIEW MORE",
    },
  },
  {
    slug: "jaipur",
    metaData: {
      title: "One Off",
      description: "One Off",
    },
    upComingData: {
      location: "JAIPUR",
      title: "SOMETHING EXCITING IS COMING SOON, STAY TUNED!",
      link: {
        label: "FOR RESERVATIONS: " + contacts.phoneNumbers[0],
        href: "tel:" + contacts.phoneNumbers[0],
      },
      images: ["/upcoming1.png", "/upcoming2.png"],
    },
  },
  {
    slug: "delhi",
    metaData: {
      title: "One Off",
      description: "One Off",
    },
    upComingData: {
      location: "DELHI",
      title: "SOMETHING EXCITING IS COMING SOON, STAY TUNED!",
      link: {
        label: "FOR RESERVATIONS: " + contacts.phoneNumbers[0],
        href: "tel:" + contacts.phoneNumbers[0],
      },
      booking: {
        label: "BOOK NOW",
        href: contacts.bookingCta?.oneOffDelhi,
      },
      images: ["/upcoming1.png", "/upcoming2.png"],
    },
  },
];
