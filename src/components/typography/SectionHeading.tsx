import Headings from "./Headings";

interface SectionHeadingDescProps {
  title?: string;
  subTitle?: string;
  textCenter?: boolean;
  mdTextCenter?: boolean;
  smTextCenter?: boolean;
  titleColor?: string;
  subTitleColor?: string;
  wrapperClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  line?: boolean;
}

const SectionHeading: React.FC<SectionHeadingDescProps> = ({
  title,
  subTitle,
  textCenter = false,
  titleColor,
  subTitleColor,
  smTextCenter = false,
  mdTextCenter = false,
  wrapperClassName = "",
  titleClassName = "",
  subTitleClassName = "",
  line = false,
}) => {
  return (
    <div className={`flex flex-col w-full ${wrapperClassName}`}>
      {title && (
        <Headings
          level={2}
          className={`${titleClassName} ${mdTextCenter ? "md:text-center" : ""} ${textCenter ? "text-center mx-auto" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${titleColor ? `text-${titleColor}` : "text-tertiary"}  text-lg `}
          heading={title}
        />
      )}
      {subTitle && (
        <div className={line ? "flex items-center justify-center gap-5 w-full" : ""}>
          {line && (
            <span className="rotate-180 block">
              <Line />
            </span>
          )}
          <Headings
            level={3}
            className={`${subTitleClassName} ${mdTextCenter ? "md:text-center" : ""} ${textCenter ? "text-center" : ""} ${smTextCenter ? "max-md:text-center" : ""} ${subTitleColor ? `text-${subTitleColor}` : "text-primary"} font-anton md:text-[4rem] text-primary`}
            heading={subTitle}
          />
          {line && (
            <span>
              <Line />
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;

export const Line = () => (
  <svg
    width={590}
    height={26}
    viewBox="0 0 524 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1={3}
      y1="13.23"
      x2={524}
      y2="13.23"
      stroke="#9C533E"
      strokeWidth="0.5"
    />
    <path
      d="M11.9282 0.47998C11.5072 10.291 0 13 0 13C0 13 11.5072 15.709 11.9282 25.52C12.3553 15.709 23.8624 13 23.8624 13C23.8624 13 12.3553 10.291 11.9282 0.47998Z"
      fill="#9C533E"
    />
  </svg>
);
