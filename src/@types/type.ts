export interface NavLinksProps {
  href: string;
  label: string;
  subLinks?: NavLinksProps[];
}