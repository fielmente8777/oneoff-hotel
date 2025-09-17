import { whyChooseUsProps } from "@/@types/@type";
import { FC } from "react";

const WhyChooseUsCard:FC<whyChooseUsProps["cards"][0]> = ({title, description, icon}) => {
    return (
        <div className="flex flex-col gap-4 items-center px-6 py-10 bg-white">
            <div className="">
                {icon}
            </div>
            <h3 className="text-2xl text-primary moul text-center">{title}</h3>
            <p className="text-center text-light">{description}</p>
        </div>
    );
}

export default WhyChooseUsCard;