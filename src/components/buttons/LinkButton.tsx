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
      className={`${variant === "primary" ? "book_now" : "book_now_2"} ${hide ? "xl:grid hidden" : "grid"} grid-cols-[2.5fr_.85fr] items-center justify-center  ${className}`}
      aria-label={label}
      data-label={label}
      {...props}
    >
      <span className="text-primary  span1"></span>
      <span className=" span2">
        <ArrowUpRight />
      </span>
    </Link>
  );
};

export default LinkButton;
