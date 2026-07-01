import { contacts } from "@/utils/constant";
import {
  ArtisanalToiletriesIcon,
  CoffeIcon,
  CommunalSpaceIcon,
  CoworkingAreaIcon,
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
        "/vns/Rectangle-4077.png",
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
        href: contacts.locationsAddress.dashashwamedh.link,
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
          label: "ADDRESS: " + contacts.locationsAddress.dashashwamedh.address,
          href: contacts.locationsAddress.dashashwamedh.link,
        },
        {
          label: "CONTACT: " + contacts.contactCta.varanasi,
          href: "tel:" + contacts.contactCta.varanasi,
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
        // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/vns/img-6.jpg",
      ],
    },
    petFriendly: {
      image: "/pets/Rectangle-41.png",
      title: "DOG FRIENDLY HOTEL ROOMS",
      description:
        "Every guest deserves an exceptional stay, including the four-legged ones. Enjoy stylish spaces, thoughtful comforts, and a boutique experience you'll both love.",
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
        label: "SMART TV",
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
    petFriendly: {
      image: "/pets/Rectangle-4122.png",
      title: "DOG FRIENDLY HOTEL ROOMS",
      description:
        "Every guest deserves an exceptional stay, including the four-legged ones. Enjoy stylish spaces, thoughtful comforts, and a boutique experience you'll both love.",
    },
    aboutLocation: {
      title: "ONE OFF X ASSI",
      description: [
        "ONEOFF X ASSI is a thoughtfully restored 80-year-old ancestral bungalow offering spacious, design-led boutique apartments in Ravindrapuri—Varanasi’s most prestigious and serene residential neighborhood. Rooted in Wabi-Sabi philosophy, the property blends heritage character, handcrafted interiors, and modern comforts, just minutes from Assi Ghat. Ravindrapuri’s wide, tree-lined streets, cultural spaces, yoga centres, bookstores, and celebrated cafés create a calm yet connected setting, allowing guests to experience the spiritual rhythm of Kashi while returning to a quiet, refined sanctuary.",
      ],
      link: {
        label: "VARANASI",
        href: contacts.locationsAddress.assiGhat.link,
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
          label: "ADDRESS: " + contacts.locationsAddress.assiGhat.address,
          href: contacts.locationsAddress.assiGhat.link,
        },
        {
          label: "CONTACT: " + contacts.contactCta.varanasi,
          href: "tel:" + contacts.contactCta.varanasi,
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
        label: "SMART TV",
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
        // "/the-south-delhi-edition/banner/Rectangle-4076.png",
        "/the-south-delhi-edition/banner/Rectangle-4079.png",
        "/the-south-delhi-edition/banner/Rectangle-4082.png",
        "/the-south-delhi-edition/quada-x-1/DSC02375.webp",
        "/the-south-delhi-edition/studio-room-x-2/DSC02738.webp",
        "/the-south-delhi-edition/studio-room-x-2/DSC02846.webp",
        // "/the-south-delhi-edition/banner/Rectangle-4080.png",
        // "/develop-with-us/develop/Rectangle-4031.png",
        // "/the-south-delhi-edition/banner/Rectangle-4081.png",
      ],
    },

    aboutLocation: {
      title: "THE SOUTH DELHI EDITION",
      tagLine:
        "Boutique Hotel in the heart of South Delhi's most coveted address.",
      description: [
        "Rooted in the soul of Greater Kailash II, The South Delhi Edition is designed for those who know that how your stay shapes how you see a city. Set in a thoughtfully curated space where every room is a considered gesture and every corner carries character, this is not just a hotel - it is an extension of the neighbourhood itself. With individually designed rooms, the property embodies the ONE-OFF ethos of singular spaces and intentional design. From handpicked textiles to locally sourced art, every element reflects the layered, confident personality of South Delhi - cosmopolitan yet rooted, refined yet real.",
      ],
      link: {
        label: "DELHI",
        href: contacts.locationsAddress.delhi.link,
        icon: <IoLocationSharp />,
      },
    },

    newRooms: {
      title: "DESIGN AS AN EXPERIENCE",
      subTitle: "SLEEP WITH US",
      description: [
        "The modern traveller deserves more than a place to sleep. ONE OFF - The South Delhi Edition is a space to think, unwind, host, and feel genuinely at home in one of India's most dynamic cities.",
      ],
      links: [
        {
          label: "ADDRESS: E-574, Greater Kailash II, New Delhi - 110048",
          href: contacts.locationsAddress.delhi.link,
        },
        {
          label: "CONTACT: " + contacts.contactCta.delhi,
          href: "tel:" + contacts.contactCta.delhi,
        },
        {
          label: "BOOK NOW",
          href: contacts.bookingCta.oneOffDelhi,
        },
      ],
      rooms: [
        // DESIGNER STUDIO
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02477-HDR.webp",
          alt: "DESIGNER STUDIO",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC03212.webp",
          alt: "DESIGNER STUDIO",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02874.webp",
          alt: "DESIGNER STUDIO",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02738.webp",
          alt: "DESIGNER STUDIO",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02568.webp",
          alt: "DESIGNER STUDIO",
        },

        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02589.webp",
          alt: "DESIGNER STUDIO",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02627.webp",
          alt: "DESIGNER STUDIO",
        },

        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC03271.webp",
          alt: "DESIGNER STUDIO",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC03267.webp",
          alt: "DESIGNER STUDIO",
        },
        {
          src: "/the-south-delhi-edition/studio-room-x-2/DSC02776.webp",
          alt: "DESIGNER STUDIO",
        },

        // SUPERIOR SUITE WITH BALCONY

        {
          src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02202-HDR.webp",
          alt: "SUPERIOR SUITE WITH BALCONY ",
        },
        {
          src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02401.webp",
          alt: "SUPERIOR SUITE WITH BALCONY ",
        },
        {
          src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02184-HDR.webp",
          alt: "SUPERIOR SUITE WITH BALCONY ",
        },

        {
          src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02214-HDR.webp",
          alt: "SUPERIOR SUITE WITH BALCONY ",
        },
        // {
        //   src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02168-HDR.webp",
        //   alt: "SUPERIOR SUITE WITH BALCONY ",
        // },
        // {
        //   src: "/the-south-delhi-edition/suite-with-balcony-x-3/DSC02394.webp",
        //   alt: "SUPERIOR SUITE WITH BALCONY ",
        // },

        // DESIGNER ROOM 1
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-7.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-58.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/DSC03590-HDR.webp",
          alt: "DESIGNER ROOM 1",
        },
        {
          src: "/the-south-delhi-edition/designer-room-1/Image-6.webp",
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

        // DESIGNER ROOM 2

        {
          src: "/the-south-delhi-edition/designer-room-2/Image-13.webp",
          alt: "DESIGNER ROOM 2",
        },
        {
          src: "/the-south-delhi-edition/designer-room-2/Image-41.webp",
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

        // DESIGNER ROOM 3

        {
          src: "/the-south-delhi-edition/designer-room-3/Image-23.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-50.webp",
          alt: "DESIGNER ROOM 3",
        },
        {
          src: "/the-south-delhi-edition/designer-room-3/Image-17.webp",
          alt: "DESIGNER ROOM 3",
        },

        {
          src: "/the-south-delhi-edition/designer-room-3/Image-20.webp",
          alt: "DESIGNER ROOM 3",
        },

        {
          src: "/the-south-delhi-edition/designer-room-3/Image-22.webp",
          alt: "DESIGNER ROOM 3",
        },

        // FRIENDLY QUADRUPLE

        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02250-HDR.webp",
          alt: "FRIENDLY QUADRUPLE ",
        },
        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02317.webp",
          alt: "FRIENDLY QUADRUPLE ",
        },
        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02274-HDR.webp",
          alt: "FRIENDLY QUADRUPLE ",
        },
        {
          src: "/the-south-delhi-edition/quada-x-1/DSC02348.webp",
          alt: "FRIENDLY QUADRUPLE ",
        },

        // SUITE
        {
          src: "/the-south-delhi-edition/suite-with-non-balcony-x-4/DSC02116-HDR.webp",
          alt: "SUITE",
        },

        {
          src: "/the-south-delhi-edition/suite-with-non-balcony-x-4/DSC02155-HDR.webp",
          alt: "SUITE",
        },
        {
          src: "/the-south-delhi-edition/suite-with-non-balcony-x-4/DSC02456-HDR.webp",
          alt: "SUITE",
        },
        {
          src: "/the-south-delhi-edition/suite-with-non-balcony-x-4/DSC02425-HDR.webp",
          alt: "SUITE",
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
        label: "COMMUNAL SPACE",
        icon: <CommunalSpaceIcon />,
      },
      {
        label: "TEA/COFFEE MAKER",
        icon: <CoffeIcon />,
      },
      {
        label: "SMART TV",
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
        label: "COWORKING AREA",
        icon: <CoworkingAreaIcon />,
      },
      {
        label: "LAUNDRY (ADD-ON)",
        icon: <LaundaryIcon />,
      },
    ],
    petFriendly: {
      image: "/pets/Rectangle-4121.png",
      title: "DOG FRIENDLY HOTEL ROOMS",
      description:
        "Every guest deserves an exceptional stay, including the four-legged ones. Enjoy stylish spaces, thoughtful comforts, and a boutique experience you'll both love.",
    },
    slidingGallery: [
      "/the-south-delhi-edition/studio-room-x-2/DSC02767.webp",
      "/the-south-delhi-edition/living-room/DSC03012.webp",
      "/the-south-delhi-edition/living-room/Rectangle-4118.png",
      "/the-south-delhi-edition/living-room/DSC02992.webp",
      "/the-south-delhi-edition/studio-room-x-2/DSC02733.webp",
      "/the-south-delhi-edition/living-room/Image-41.jpg",
      "/the-south-delhi-edition/living-room/Image-42.jpg",
      "/the-south-delhi-edition/studio-room-x-2/DSC02743.webp",
      "/the-south-delhi-edition/living-room/Image-34jpg.webp",
      "/the-south-delhi-edition/living-room/Rectangle-4127.png",
      "/the-south-delhi-edition/quada-x-1/DSC02317.webp",
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
    howtoReach: {
      image: "/the-south-delhi-edition/Asset-11.png",
      wayToReach: [
        {
          question: "1. How far is the hotel from the airport?",
          answer:
            "Ideally situated just a 30-minute drive from Indira Gandhi International Airport, ensuring a smooth arrival and departure.",
        },
        {
          question: "2. How Well Connected Are We?",
          answer:
            "A short 2-minute stroll brings you to Greater Kailash Metro Station, connecting you to the best of Delhi.",
        },
        {
          question: "3. What Makes Our Location So Special?",
          answer:
            "Just a 5-minute walk to M Block Market, South Delhi's iconic destination for designer boutiques, celebrated cafés, vibrant bars, and upscale dining.",
        },
      ],
    },
    knowMore: {
      cards: [
        {
          title: "CELEBRATE IN STYLE!",
          description: "Planning an intimate gathering or a special celebration? From birthdays and anniversaries to private dinners, our thoughtfully designed spaces provide the perfect setting, complemented by personalized hospitality and curated experiences.",
          image: "/the-south-delhi-edition/Rectangle-4123.png",
        },
        {
          title: "NEED A MEETING SPACE?",
          description: "Whether you're hosting a client meeting, team workshop, or creative session, our versatile spaces offer a comfortable, design-led environment with modern amenities and attentive service to ensure every gathering is a success.",
          image: "/the-south-delhi-edition/Rectangle-43.png",
        },
      ],
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
