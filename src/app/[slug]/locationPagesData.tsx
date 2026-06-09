import { contacts } from "@/utils/constant";
import {
  ArtisanalToiletriesIcon,
  CoffeIcon,
  FamilyRoomIcon,
  LaundaryIcon,
  PetFriendly,
  PrivateIcon,
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
    slug: "the-south-delhi-edition",
    metaData: {
      title:
        "ONE OFF – The South Delhi Edition | Boutique Hotel in Greater Kailash II, New Delhi",
      description:
        "Experience thoughtfully designed stays at ONE OFF – The South Delhi Edition in Greater Kailash II, New Delhi. Boutique rooms, private theatre, pet-friendly hospitality, and modern comforts in the heart of South Delhi.",
    },
    bannerData: {
      images: [
        "/the-south-delhi-edition/banner/Rectangle-4076.png",
        "/the-south-delhi-edition/banner/Rectangle-4079.png",
        "/the-south-delhi-edition/banner/Rectangle-4080.png",
        "/the-south-delhi-edition/banner/Rectangle-4081.png",
        "/the-south-delhi-edition/banner/Rectangle-4082.png",
        "/the-south-delhi-edition/banner/Rectangle-4083.png",
      ],
    },

    aboutLocation: {
      title: "ONE OFF - THE SOUTH DELHI EDITION",
      description: [
        "Boutique Hotel in the heart of South Delhi's most coveted address.",
        "Rooted in the soul of Greater Kailash II, ONE OFF - The South Delhi Edition is designed for those who know that how you stay shapes how you see a city. Set in a thoughtfully curated space where every room is a considered gesture and every corner carries character, this is not just a hotel - it is an extension of the neighbourhood itself. With individually designed rooms, the property embodies the ONE-OFF ethos of singular spaces and intentional design. From handpicked textiles to locally sourced art, every element reflects the layered, confident personality of South Delhi - cosmopolitan yet rooted, refined yet real.",
      ],
      link: {
        label: "DELHI",
        href: "",
        icon: <IoLocationSharp />,
      },
    },

    newRooms: {
      title: "DESIGN AS AN EXPERIENCE",
      subTitle: "EXPLORE DESIGNER ROOMS",
      description: [
        "The modern traveller deserves more than a place to sleep. ONE OFF - The South Delhi Edition is a space to think, unwind, host, and feel genuinely at home in one of India's most dynamic cities.",
      ],
      links: [
        {
          label: "ADDRESS: E-574, Greater Kailash II, New Delhi - 110048",
          href: "",
        },
        {
          label: "CONTACT: " + contacts.phoneNumbers[0],
          href: "tel:" + contacts.phoneNumbers[0],
        },
        {
          label: "BOOK NOW",
          href: contacts.bookingCta.oneOffDelhi,
        },
      ],
      rooms: [
        // DESIGNER ROOM 1
        {
          src: "/the-south-delhi-edition/designer-room-1/DSC03590-HDR.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-1.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-2.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-3.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-35.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-4.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-5.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-58.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-6.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-7.webp",
          alt: "DESIGNER ROOM 1",
        },

        // DESIGNER ROOM 2
        {
          src: "/the-south-delhi-edition/designer-room-2/DSC03612-HDR.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/DSC03624-HDR.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-11.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-12.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-13.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-14.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-15.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-16.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-41.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-42.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-44.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-46.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-48.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-9.webp",
          alt: "DESIGNER ROOM 2",
        },
        // DESIGNER ROOM 3
        {
          src: "/the-south-delhi-edition/designer-room-3/DSC03648-HDR.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/DSC03671-HDR.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-17.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-19.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-20.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-21.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-22.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-23.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-24.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-25.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-45.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-47.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-49.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-50.webp",
          alt: "DESIGNER ROOM 3",
        },

        // STUDIO ROOM X 2
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02057-HDR.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02063-HDR.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02094-HDR.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02095-HDR.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02465-HDR.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02477-HDR.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02507-HDR.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02568.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02570.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02589.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02590.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02600.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02606.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02620.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02623.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02627.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02640.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02645.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02655.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02733.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02738.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02743.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02767.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02776.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02842.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02846.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02854.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02874.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC03212.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC03217.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC03227.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC03259.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC03267.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC03271.webp",
          alt: "STUDIO ROOM X 2",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC03274.webp",
          alt: "STUDIO ROOM X 2",
        },

        // SUITE WITH BALCONY X 3
        {
          src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02168-HDR.webp",
          alt: "SUITE WITH BALCONY X 3",
        },
        {
          src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02184-HDR.webp",
          alt: "SUITE WITH BALCONY X 3",
        },
        {
          src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02202-HDR.webp",
          alt: "SUITE WITH BALCONY X 3",
        },
        {
          src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02214-HDR.webp",
          alt: "SUITE WITH BALCONY X 3",
        },
        {
          src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02394.webp",
          alt: "SUITE WITH BALCONY X 3",
        },
        {
          src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02401.webp",
          alt: "SUITE WITH BALCONY X 3",
        },

        // SUITE WITH NON BALCONY  X 4
        {
          src: "/the-south-delhi-edition/suite-with-non-balcony-x-4/DSC02116-HDR.webp",
          alt: "SUITE WITH NON BALCONY  X 4",
        },
        {
          src: "/the-south-delhi-edition/suite-with-non-balcony-x-4/DSC02146-HDR.webp",
          alt: "SUITE WITH NON BALCONY  X 4",
        },
        {
          src: "/the-south-delhi-edition/suite-with-non-balcony-x-4/DSC02155-HDR.webp",
          alt: "SUITE WITH NON BALCONY  X 4",
        },
        {
          src: "/the-south-delhi-edition/suite-with-non-balcony-x-4/DSC02425-HDR.webp",
          alt: "SUITE WITH NON BALCONY  X 4",
        },
        {
          src: "/the-south-delhi-edition/suite-with-non-balcony-x-4/DSC02436-HDR.webp",
          alt: "SUITE WITH NON BALCONY  X 4",
        },
        {
          src: "/the-south-delhi-edition/suite-with-non-balcony-x-4/DSC02456-HDR.webp",
          alt: "SUITE WITH NON BALCONY  X 4",
        },

        // QUAD X 1

        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02250-HDR.webp",
          alt: "QUAD X 1",
        },
        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02274-HDR.webp",
          alt: "QUAD X 1",
        },
        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02283-HDR.webp",
          alt: "QUAD X 1",
        },
        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02317.webp",
          alt: "QUAD X 1",
        },
        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02331.webp",
          alt: "QUAD X 1",
        },
        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02348.webp",
          alt: "QUAD X 1",
        },
        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02355.webp",
          alt: "QUAD X 1",
        },
        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02375.webp",
          alt: "QUAD X 1",
        },
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
        label: "PRIVATE THEATER",
        icon: <PrivateIcon />,
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
        label: "ROOM SERVICE",
        icon: <RoomServiceIcon />,
      },
      {
        label: "ARTISANAL TOILETRIES",
        icon: <ArtisanalToiletriesIcon />,
      },
      {
        label: "LAUNDRY (ADD-ON)",
        icon: <LaundaryIcon />,
      },
    ],

    slidingGallery: [
      "/the-south-delhi-edition/living-room/DSC02980.webp",
      "/the-south-delhi-edition/living-room/DSC02992.webp",
      "/the-south-delhi-edition/living-room/DSC02997.webp",
      "/the-south-delhi-edition/living-room/DSC03012.webp",
      "/the-south-delhi-edition/living-room/DSC03672-HDR.webp",
      "/the-south-delhi-edition/living-room/DSC03738-HDR.webp",
      "/the-south-delhi-edition/living-room/Image-10.webp",
      "/the-south-delhi-edition/living-room/Image-26.webp",
      "/the-south-delhi-edition/living-room/Image-27.webp",
      "/the-south-delhi-edition/living-room/Image-28.webp",
      "/the-south-delhi-edition/living-room/Image-29.webp",
      "/the-south-delhi-edition/living-room/Image-34jpg.webp",
      "/the-south-delhi-edition/living-room/Image-36jpg.webp",
      "/the-south-delhi-edition/living-room/Image-37.webp",
      "/the-south-delhi-edition/living-room/Image-38.webp",
      "/the-south-delhi-edition/living-room/Image-39.webp",
      "/the-south-delhi-edition/living-room/Image-40.webp",
      "/the-south-delhi-edition/living-room/Image-57jpg.webp",
    ],
    experience: {
      title: "A RARE EXPERIENCE",
      subTitle: "THE PRIVATE THEATER",
      description: [
        "A curated private theatre for guests who want to watch differently films, sport, or a late-night screening for two. An intimate, high-quality cinematic experience that most hotels would never think to offer.",
      ],
      images: [
        "/the-south-delhi-edition/theatre-room/Image-52.webp",
        "/the-south-delhi-edition/theatre-room/Image-56.webp",
        "/the-south-delhi-edition/theatre-room/Image-53.webp",
        "/the-south-delhi-edition/theatre-room/Image-51.webp",
        "/the-south-delhi-edition/theatre-room/Image-54.webp",
        "/the-south-delhi-edition/theatre-room/Image-55.webp",
        "/the-south-delhi-edition/theatre-room/Image-59.webp",
        "/the-south-delhi-edition/theatre-room/Image-60.webp",
      ],
    },

    gallery: {
      title: "EXPLORE",
      subTitle: "OUR GALLERY",
      images: [
        "/the-south-delhi-edition/gallery/im-13.png",
        "/the-south-delhi-edition/gallery/im-15.png",
        "/the-south-delhi-edition/gallery/im-14.png",
        "/the-south-delhi-edition/gallery/im-7.png",
        "/the-south-delhi-edition/gallery/im-2.png",
        "/the-south-delhi-edition/gallery/im-3.png",
        "/the-south-delhi-edition/gallery/im-8.png",
        "/the-south-delhi-edition/gallery/im-9.png",
        "/the-south-delhi-edition/gallery/im-1.png",
        "/the-south-delhi-edition/gallery/im-10.png",
        "/the-south-delhi-edition/gallery/im-11.png",
        "/the-south-delhi-edition/gallery/im-12.png",
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
];
