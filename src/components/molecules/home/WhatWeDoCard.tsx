import Links from "@/components/atoms/Links";
import { BodyMediumRegular, Heading2 } from "@/components/atoms/Typography";
import { IWhatWeDoData } from "@/constant/home";
import Image from "next/image";

interface IWhatWeDoCardProps {
  input: IWhatWeDoData;
}

const WhatWeDoCard: React.FC<IWhatWeDoCardProps> = ({ input }) => {
  return (
    <div className="w-full flex flex-col items-start gap-5 pb-5 ipad-vertical:gap-10 ipad-vertical:pb-10 border-b border-charcoal-green-dark">
      <Heading2>{input.title}</Heading2>
      <div className="w-full aspect-video relative">
        <Image
          src={input.imageUrl}
          fill
          alt="Bumi Resource"
          className="object-cover"
        />
      </div>
      <BodyMediumRegular>{input.description}</BodyMediumRegular>
      <Links text="Explore Coal & Energy" link="/" />
    </div>
  );
};

export default WhatWeDoCard;
