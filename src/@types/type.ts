export interface NavLinksProps {
  href: string;
  label: string;
  sub?: string;
  location?: string;
  subLinks?: NavLinksProps[];
}

export interface BannerProps {
  videoSrc?: string;
  thumbNail?: string;
  images?: string[];
  title?: string;
  subTitle?: string;
  description?: string;
}

export interface ExploreExperienceDataProps {
  title: string;
  subTitle: string;
  link: {
    label: string;
    href: string;
  };
  cards: {
    title?: string;
    description?: string;
    src?: string;
    videoSrc?: string;
    thumbNail?: string;
  }[];
}

export interface UpcomingHotelsProps {
  cards: {
    title: string;
    subTitle: string;
    description: string;
    images: string[];
  }[];
}

export interface BoatToursProps {
  cards: {
    title: string;
    subTitle?: string;
    description?: string;
    images?: string[];
    src?: string;
    popUpData: {
      title: string;
      desc: string;
    }[];
  }[];
}
