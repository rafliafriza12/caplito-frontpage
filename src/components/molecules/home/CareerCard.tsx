import Image from "next/image";
import Links from "@/components/atoms/Links";
import { BodyLargeMedium, Heading5 } from "@/components/atoms/Typography";
import { MinerBackgroundPattern } from "./MinerBackgroundPattern";
interface CareerCardProps {
  className?: string;
}

export function CareerCard({ className = "" }: CareerCardProps) {
  return (
    <div
      className={`relative ipad-vertical:absolute z-0 rounded-[4px] bg-charcoal-green-lighter ${className}`}
    >
      {/* Miner Image */}
      <div className="absolute z-[-1] bottom-0 -right-7 pop-up-miner-hero">
        <Image
          src="/img/miner-hero.webp"
          alt="Bumi Resource Career"
          width={250}
          height={0}
          className="object-contain"
        />
      </div>

      {/* Background Pattern */}
      <MinerBackgroundPattern className="absolute w-full h-full inset-0 z-[-2]" />

      {/* Content */}
      <div className="w-full h-full flex flex-col items-start gap-5 p-6">
        <BodyLargeMedium className="text-xs ipad-vertical:text-lg text-green-primary">
          CAREER
        </BodyLargeMedium>
        <Heading5 className="text-white-mineral">
          Build Tomorrow
          <br />
          with Us
        </Heading5>
        <Links
          text="Join Bumi"
          link="/career"
          className="hover:bg-green-primary duration-200 text-white-mineral"
        />
      </div>
    </div>
  );
}
