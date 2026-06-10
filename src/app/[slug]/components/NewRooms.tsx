import { NewRoomsProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import {
    Container,
    Section
} from "@/components/sectionComponents";
import { SectionHeading } from "@/components/typography";
import Link from "next/link";
import FilteredRooms from "./room-setion-compnents/FilteredRooms";

const NewRooms: React.FC<NewRoomsProps> = ({
  title,
  subTitle,
  description,
  links,
  rooms,
}) => {
  return (
    <Section className="relative after:absolute after:inset-0 after:bg-secondary after:-z-10 md:space-y-10 space-y-8">
      <Container>
        <SectionHeading
          title={title}
          subTitle={subTitle}
          textCenter
          titleColor="white"
          subTitleColor="white"
        />
      </Container>
      <FilteredRooms rooms={rooms} />
      <Container className="flex flex-col items-center gap-4 text-center text-white">
        <p className="md:text-lg tracking-wider text-center">{description}</p>
        <Link href={links[0].href} className="w-fit tracking-wider">
          {links[0].label}
        </Link>
        <Link href={links[1].href} className="w-fit tracking-wider ">
          {links[1].label}
        </Link>
        <LinkButton
          href={links[2].href}
          label={links[2].label}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:!w-[10rem] !w-full max-lg:!h-12 md:mt-8"
        />
      </Container>
    </Section>
  );
};

export default NewRooms;
