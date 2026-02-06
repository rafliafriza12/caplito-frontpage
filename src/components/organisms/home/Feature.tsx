"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/atoms/Container";
import Image from "next/image";

// Gunakan useLayoutEffect di client, useEffect di server
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Feature: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".fade-up-feature");

      elements.forEach((el) => {
        gsap.fromTo(
          el as Element,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el as Element,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative z-0">
      <Container className="w-full flex flex-col items-center gap-8 md:gap-15 bg-primary font-mona-sans px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <h1 className="text-3xl md:text-4xl ipad-horizontal:text-5xl leading-[120%] font-medium text-[#0B072C] fade-up-feature">
            A wallet that{" "}
            <span className="text-[#6C5CE7]">works like you do</span>
          </h1>
          <p className="text-[#4F4F4F] text-sm md:text-base ipad-horizontal:text-lg leading-[150%] max-w-[90%] md:max-w-[80%] fade-up-feature">
            Money should fit into your day — not the other way around. Caplito
            keeps things simple, available, and easy to use whenever you need
            it.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 md:gap-6">
          <div className="feature-card w-full rounded-xl md:rounded-[20px] border border-[#F7F7F7] flex flex-col ipad-horizontal:flex-row items-start  justify-between p-4 md:p-8 bg-[#F5F2FC] gap-4 md:gap-8 fade-up-feature">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="w-14 h-14 md:w-22.5 md:h-22.5 overflow-hidden relative shrink-0">
                <Image
                  src={"/img/icon/clock.png"}
                  alt="Caplito"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-[#17201F] text-xl md:text-2xl ipad-horizontal:text-[32px] font-medium leading-[120%]">
                No Days Off Wallet
              </h1>
            </div>
            <p className="w-full ipad-vertical:w-full ipad-horizontal:w-141 text-left text-sm md:text-base text-[#454545] leading-[150%]">
              It's still pixels on the screen—but nobody can freeze it, stop it,
              or access it but you. Works weekends. Works holidays never
              sleeps—not even on Sundays fully in your control
            </p>
          </div>
          <div className="feature-card w-full rounded-xl md:rounded-[20px] border border-[#F7F7F7] flex flex-col ipad-horizontal:flex-row items-start  justify-between p-4 md:p-8 bg-[#F5F2FC] gap-4 md:gap-8 fade-up-feature">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="w-14 h-14 md:w-22.5 md:h-22.5 overflow-hidden relative shrink-0">
                <Image
                  src={"/img/icon/magic-pen.png"}
                  alt="Caplito"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-[#17201F] text-xl md:text-2xl ipad-horizontal:text-[32px] font-medium leading-[120%]">
                Nobody Likes Homework
              </h1>
            </div>
            <p className="w-full ipad-vertical:w-full ipad-horizontal:w-141 text-left text-sm md:text-base text-[#454545] leading-[150%]">
              Control your wallet the way you already know how. No manuals. No
              learning curve.
            </p>
          </div>
          <div className="feature-card w-full rounded-xl md:rounded-[20px] border border-[#F7F7F7] flex flex-col ipad-horizontal:flex-row items-start  justify-between p-4 md:p-8 bg-[#F5F2FC] gap-4 md:gap-8 fade-up-feature">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="w-14 h-14 md:w-22.5 md:h-22.5 overflow-hidden relative shrink-0">
                <Image
                  src={"/img/icon/pizza.png"}
                  alt="Caplito"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-[#17201F] text-xl md:text-2xl ipad-horizontal:text-[32px] font-medium leading-[120%]">
                Split That Slice Of Pizza
              </h1>
            </div>
            <p className="w-full ipad-vertical:w-full ipad-horizontal:w-141 text-left text-sm md:text-base text-[#454545] leading-[150%]">
              Adding, subtracting, dividing dinner on the first date—we got you
              covered
            </p>
          </div>
          <div className="feature-card w-full rounded-xl md:rounded-[20px] border border-[#F7F7F7] flex flex-col ipad-horizontal:flex-row items-start  justify-between p-4 md:p-8 bg-[#F5F2FC] gap-4 md:gap-8 fade-up-feature">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="w-14 h-14 md:w-22.5 md:h-22.5 overflow-hidden relative shrink-0">
                <Image
                  src={"/img/icon/shield.png"}
                  alt="Caplito"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-[#17201F] text-xl md:text-2xl ipad-horizontal:text-[32px] font-medium leading-[120%]">
                Somebody Call Security?
              </h1>
            </div>
            <p className="w-full ipad-vertical:w-full ipad-horizontal:w-141 text-left text-sm md:text-base text-[#454545] leading-[150%]">
              Your wallet. Your phone. Your rules. We can't move your money. We
              can't freeze it. We can't even look at it. Only your phone or
              device can unlock your wallet. That's it. No one else—not even us.
            </p>
          </div>

          <div className="bg-[#6C5CE7] w-full rounded-xl md:rounded-[20px] py-4 md:py-6 px-6 md:px-12.5 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 fade-up-feature">
            <h1 className="text-primary font-medium text-xl md:text-2xl ipad-horizontal:text-[32px] leading-[120%] text-center sm:text-left">
              Interested to Try?
            </h1>

            <button className="bg-transparent rounded-full py-3 md:py-4 px-6 md:px-8 border border-primary flex justify-center items-center gap-2 md:gap-3 w-full sm:w-auto sm:min-w-52 ipad-horizontal:min-w-73">
              <h1 className="font-semibold text-base md:text-lg text-primary leading-[120%]">
                Open Your Wallet
              </h1>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7505 0.875V12.25C15.7505 12.4821 15.6583 12.7046 15.4942 12.8687C15.3301 13.0328 15.1076 13.125 14.8755 13.125C14.6434 13.125 14.4209 13.0328 14.2568 12.8687C14.0927 12.7046 14.0005 12.4821 14.0005 12.25V2.98703L1.49455 15.4941C1.33036 15.6582 1.10768 15.7505 0.875486 15.7505C0.643293 15.7505 0.42061 15.6582 0.256424 15.4941C0.0922384 15.3299 0 15.1072 0 14.875C0 14.6428 0.0922384 14.4201 0.256424 14.2559L12.7635 1.75H3.50049C3.26842 1.75 3.04586 1.65781 2.88177 1.49372C2.71767 1.32962 2.62549 1.10706 2.62549 0.875C2.62549 0.642936 2.71767 0.420376 2.88177 0.256282C3.04586 0.0921874 3.26842 0 3.50049 0H14.8755C15.1076 0 15.3301 0.0921874 15.4942 0.256282C15.6583 0.420376 15.7505 0.642936 15.7505 0.875Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
