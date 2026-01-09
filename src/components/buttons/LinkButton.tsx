import Link from "next/link";
import { ArrowUpRight } from "../navbars/NavBar";

interface LinkButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
  hide?: boolean;
  [key: string]: unknown;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  variant = "primary",
  className = "",
  hide = false,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={`${variant === "primary" ? "book_now" : "book_now_2"} ${hide ? "xl:grid hidden" : "grid"} grid-cols-3 items-center justify-center  ${className}`}
      aria-label={label}
      data-label={label}
      {...props}
    >
      <span className="text-primary col-span-2 span1"></span>
      <span className="col-span-1 span2">
        <ArrowUpRight />
      </span>
    </Link>
  );
};

export default LinkButton;
