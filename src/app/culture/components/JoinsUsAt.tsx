import LinkButton from "@/components/buttons/LinkButton";
import { Container } from "@/components/sectionComponents";
import Image from "next/image";

interface JoinsUsAtProps {
    title: string;
    description: string;
    link: {
        label: string;
        href: string;
    };
    src: string;
}

const JoinsUsAt: React.FC<JoinsUsAtProps> = ({title, description, link, src}) => {
    return (
        <div className="relative w-full aspect-[4/1.8]">
            <Image
                src={src}
                alt="image"
                className="object-cover"
                fill
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <Container>
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-4xl font-bold text-white">{title}</h2>
                        <p className="text-lg text-white">{description}</p>
                        <LinkButton href={link.href} label={link.label} variant="secondary" className="mt-16" />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default JoinsUsAt;