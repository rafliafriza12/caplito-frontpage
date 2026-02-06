"use client";
import Image from "next/image";
import Links from "../atoms/Links";
import { INews } from "@/constant/News";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BodyLargeMedium,
  BodyMediumRegular,
  BodySmallMedium,
  BodyXSmallMedium,
  BodyXSmallRegular,
  Heading4,
  Heading6,
} from "../atoms/Typography";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface INewsCardProps {
  className?: string;
  newsData: INews;
  variant?: "primary" | "second";
}

const NewsCard: React.FC<INewsCardProps> = ({
  newsData,
  className,
  variant = "primary",
}) => {
  useEffect(() => {
    // Fade up scroll animation
    gsap.fromTo(
      ".fade-left-scroll-news",
      { x: 200, opacity: 0 }, // posisi awal: agak ke kanan dan transparan
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-left-scroll-news", // elemen pemicu animasi
          start: "top 100%", // mulai ketika 85% dari viewport terlihat
        },
      },
    );
  }, []);
  if (variant === "primary") {
    return (
      <div
        className={`${className} ipad-vertical:mih-h-[610px] w-full lg:h-full flex flex-col items-start justify-between gap-4 font-parkinsans fade-left-scroll-news`}
      >
        <div className="flex flex-col gap-3 items-start w-full">
          <div className=" w-full h-[350px] relative z-0 rounded-[4px] overflow-hidden">
            <Image
              src="/img/img-test.jpg"
              alt="ESG Background"
              fill
              className="object-cover"
              priority
            />
            <div className=" py-1 px-3 rounded-2xl bg-charcoal-green-dark absolute z-[1] flex items-center gap-1.5 top-3 left-3">
              <div className=" w-1.5 h-1.5 rounded-full bg-primary"></div>
              <h1 className="text-sm text-primary">News</h1>
            </div>
          </div>
          <BodySmallMedium className="uppercase text-alert-warning/50">
            {newsData.date}
          </BodySmallMedium>
          <Heading4 className="uppercase text-secondary line-clamp-2">
            {newsData.title}
          </Heading4>
          <BodyMediumRegular className=" line-clamp-2 text-[#6F6F6F] ">
            {newsData.description}
          </BodyMediumRegular>
        </div>
        <Links text="Read more" link={newsData.url} />
      </div>
    );
  } else {
    return (
      <Link
        href={newsData.url}
        className={`${className}  w-full font-parkinsans fade-left-scroll-news`}
      >
        <div className="flex flex-col gap-3 items-start w-full">
          <div className=" w-full aspect-square relative z-0 rounded-[4px] overflow-hidden">
            <Image
              src="/img/img-test.jpg"
              alt="ESG Background"
              fill
              className="object-cover"
              priority
            />
            <div className=" py-1 px-3 rounded-2xl bg-charcoal-green-dark absolute z-[3] flex items-center gap-1.5 top-3 left-3">
              <div className=" w-1.5 h-1.5 rounded-full bg-primary"></div>
              <h1 className="text-sm text-primary">News</h1>
            </div>
            <div className="w-full h-[50%] bg-linear-to-t from-black/70 to-transparent absolute z-[1] bottom-0 left-0"></div>
            <div className="h-full w-full absolute z-[2] flex flex-col justify-end p-5 gap-1">
              <BodyXSmallMedium className="text-moss-stone uppercase">
                {newsData.date}
              </BodyXSmallMedium>
              <Heading6 className="line-clamp-2 text-primary min-h-[50.38px]">
                {newsData.title}
              </Heading6>
            </div>
          </div>
        </div>
      </Link>
    );
  }
};

export default NewsCard;
