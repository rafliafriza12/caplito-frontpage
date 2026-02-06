"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/atoms/Container";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const HowToUse: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          },
        );
      }

      // Steps stagger animation
      const steps = stepsRef.current?.querySelectorAll(".step-item");
      if (steps && steps.length > 0) {
        steps.forEach((step) => {
          gsap.fromTo(
            step,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: "top 85%",
              },
            },
          );
        });
      }
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative z-0">
      <Container className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 font-mona-sans bg-primary px-4 md:px-6">
        <div
          ref={headerRef}
          className="max-w-full md:max-w-117.5 flex flex-col items-start gap-6 md:gap-12.5"
        >
          <div className="flex flex-col items-start gap-4 md:gap-6">
            <h1 className="font-medium text-3xl md:text-4xl ipad-horizontal:text-5xl leading-[120%] text-[#0B072C]">
              Add it. Send it. Spend it.
            </h1>
            <p className="text-base md:text-lg text-[#4F4F4F] leading-[150%]">
              Everything you need for everyday payments — in one simple wallet.
            </p>
          </div>
          <button className="bg-[#6C5CE7] rounded-full py-3 md:py-4 px-6 md:px-8 font-semibold text-base md:text-lg leading-[120%] text-primary w-full sm:w-auto">
            Tap to Take Control
          </button>
        </div>
        <div
          ref={stepsRef}
          className="flex flex-col items-start gap-6 md:gap-12.5 w-full"
        >
          <div className="step-item flex items-start gap-4 md:gap-10 pb-4 md:pb-6 border-b border-[#D1D1D1] w-full">
            <div className="rounded-full w-12 h-12 md:w-15 md:h-15 bg-[#6C5CE7] flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 md:w-7.5 md:h-7.5"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.625 0C11.7325 0 8.90486 0.857741 6.49979 2.46476C4.09472 4.07177 2.2202 6.35589 1.11327 9.02825C0.00633679 11.7006 -0.283287 14.6412 0.281022 17.4782C0.845331 20.3152 2.23823 22.9211 4.28357 24.9664C6.32891 27.0118 8.93484 28.4047 11.7718 28.969C14.6088 29.5333 17.5494 29.2437 20.2218 28.1367C22.8941 27.0298 25.1782 25.1553 26.7852 22.7502C28.3923 20.3451 29.25 17.5176 29.25 14.625C29.2459 10.7475 27.7038 7.02992 24.9619 4.28809C22.2201 1.54625 18.5025 0.00409475 14.625 0ZM14.625 27C12.1775 27 9.78488 26.2742 7.74982 24.9144C5.71477 23.5547 4.12863 21.6219 3.192 19.3607C2.25536 17.0995 2.0103 14.6113 2.48779 12.2108C2.96528 9.81024 4.14389 7.60523 5.87456 5.87455C7.60524 4.14388 9.81025 2.96527 12.2108 2.48778C14.6113 2.01029 17.0995 2.25536 19.3607 3.19199C21.622 4.12863 23.5547 5.71476 24.9144 7.74982C26.2742 9.78488 27 12.1775 27 14.625C26.9963 17.9059 25.6913 21.0514 23.3713 23.3713C21.0514 25.6913 17.9059 26.9963 14.625 27ZM21.375 14.625C21.375 14.9234 21.2565 15.2095 21.0455 15.4205C20.8345 15.6315 20.5484 15.75 20.25 15.75H15.75V20.25C15.75 20.5484 15.6315 20.8345 15.4205 21.0455C15.2095 21.2565 14.9234 21.375 14.625 21.375C14.3266 21.375 14.0405 21.2565 13.8295 21.0455C13.6185 20.8345 13.5 20.5484 13.5 20.25V15.75H9.00001C8.70164 15.75 8.41549 15.6315 8.20451 15.4205C7.99353 15.2095 7.87501 14.9234 7.87501 14.625C7.87501 14.3266 7.99353 14.0405 8.20451 13.8295C8.41549 13.6185 8.70164 13.5 9.00001 13.5H13.5V9C13.5 8.70163 13.6185 8.41548 13.8295 8.2045C14.0405 7.99353 14.3266 7.875 14.625 7.875C14.9234 7.875 15.2095 7.99353 15.4205 8.2045C15.6315 8.41548 15.75 8.70163 15.75 9V13.5H20.25C20.5484 13.5 20.8345 13.6185 21.0455 13.8295C21.2565 14.0405 21.375 14.3266 21.375 14.625Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 max-w-full md:max-w-134">
              <h1 className="text-xl md:text-2xl ipad-horizontal:text-[32px] text-[#17201F] font-medium leading-[120%]">
                Add money your way
              </h1>
              <p className="text-sm md:text-base text-[#454545] leading-[150%]">
                Top up with your card, bank, or crypto — whenever you need.
              </p>
            </div>
          </div>
          <div className="step-item flex items-start gap-4 md:gap-10 pb-4 md:pb-6 border-b border-[#D1D1D1] w-full">
            <div className="rounded-full w-12 h-12 md:w-15 md:h-15 bg-[#6C5CE7] flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 md:w-7.5 md:h-7.5"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9667 4.28362C22.224 1.54086 18.504 -2.88996e-08 14.6252 0C10.7463 2.88996e-08 7.02637 1.54086 4.28362 4.28362C1.54086 7.02637 2.88996e-08 10.7463 0 14.6252C-2.88996e-08 18.504 1.54086 22.224 4.28362 24.9667C7.02637 27.7095 10.7463 29.2504 14.6252 29.2504C18.504 29.2504 22.224 27.7095 24.9667 24.9667C27.7095 22.224 29.2504 18.504 29.2504 14.6252C29.2504 10.7463 27.7095 7.02637 24.9667 4.28362ZM23.3763 23.3763C21.6455 25.1068 19.4405 26.2852 17.04 26.7625C14.6396 27.2399 12.1515 26.9947 9.89034 26.058C7.62921 25.1213 5.69661 23.5352 4.33691 21.5002C2.97721 19.4652 2.25147 17.0726 2.25147 14.6252C2.25147 12.1777 2.97721 9.78521 4.33691 7.75019C5.69661 5.71517 7.62921 4.12903 9.89034 3.19234C12.1515 2.25566 14.6396 2.01048 17.04 2.48783C19.4405 2.96517 21.6455 4.14359 23.3763 5.87408C25.6936 8.19691 26.9951 11.3441 26.9951 14.6252C26.9951 17.9063 25.6936 21.0534 23.3763 23.3763ZM19.9211 19.4542C20.1322 19.6653 20.2508 19.9516 20.2508 20.2502C20.2508 20.5487 20.1322 20.835 19.9211 21.0461C19.71 21.2572 19.4237 21.3758 19.1252 21.3758C18.8266 21.3758 18.5403 21.2572 18.3292 21.0461L14.6252 17.3406L10.9211 21.0461C10.8166 21.1506 10.6925 21.2336 10.5559 21.2901C10.4194 21.3467 10.273 21.3758 10.1252 21.3758C9.97736 21.3758 9.83099 21.3467 9.69442 21.2901C9.55785 21.2336 9.43376 21.1506 9.32924 21.0461C9.22472 20.9416 9.1418 20.8175 9.08524 20.6809C9.02867 20.5444 8.99955 20.398 8.99955 20.2502C8.99955 20.1024 9.02867 19.956 9.08524 19.8194C9.1418 19.6829 9.22472 19.5588 9.32924 19.4542L13.8292 14.9542C13.9337 14.8496 14.0578 14.7667 14.1944 14.71C14.3309 14.6534 14.4773 14.6243 14.6252 14.6243C14.773 14.6243 14.9194 14.6534 15.056 14.71C15.1926 14.7667 15.3166 14.8496 15.4211 14.9542L19.9211 19.4542ZM19.9211 11.5792C20.0256 11.6838 20.1086 11.8079 20.1651 11.9444C20.2217 12.081 20.2508 12.2274 20.2508 12.3752C20.2508 12.523 20.2217 12.6694 20.1651 12.8059C20.1086 12.9425 20.0256 13.0666 19.9211 13.1711C19.8166 13.2756 19.6925 13.3586 19.5559 13.4151C19.4194 13.4717 19.273 13.5008 19.1252 13.5008C18.9774 13.5008 18.831 13.4717 18.6944 13.4151C18.5579 13.3586 18.4338 13.2756 18.3292 13.1711L14.6252 9.46565L10.9211 13.1711C10.71 13.3822 10.4237 13.5008 10.1252 13.5008C9.82664 13.5008 9.54034 13.3822 9.32924 13.1711C9.11814 12.96 8.99955 12.6737 8.99955 12.3752C8.99955 12.0766 9.11814 11.7903 9.32924 11.5792L13.8292 7.07924C13.9337 6.97464 14.0578 6.89166 14.1944 6.83505C14.3309 6.77843 14.4773 6.74929 14.6252 6.74929C14.773 6.74929 14.9194 6.77843 15.056 6.83505C15.1926 6.89166 15.3166 6.97464 15.4211 7.07924L19.9211 11.5792Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 max-w-full md:max-w-134">
              <h1 className="text-xl md:text-2xl ipad-horizontal:text-[32px] text-[#17201F] font-medium leading-[120%]">
                Pay or get paid instantly
              </h1>
              <p className="text-sm md:text-base text-[#454545] leading-[150%]">
                Use your balance to pay people or receive money in seconds.
              </p>
            </div>
          </div>
          <div className="step-item flex items-start gap-4 md:gap-10 pb-4 md:pb-6 border-b border-[#D1D1D1] w-full">
            <div className="rounded-full w-12 h-12 md:w-15 md:h-15 bg-[#6C5CE7] flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 md:w-7.5 md:h-7.5"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6877 12.998C10.8588 12.8992 11.0008 12.7572 11.0995 12.5861C11.1983 12.415 11.2503 12.221 11.2502 12.0234V1.89844C11.2492 1.71908 11.2053 1.54256 11.1222 1.3836C11.0392 1.22464 10.9193 1.08785 10.7726 0.984642C10.6259 0.881434 10.4566 0.814796 10.2789 0.790287C10.1013 0.765778 9.9203 0.784109 9.75114 0.84375C6.46752 2.0059 3.70612 4.30122 1.96336 7.3171C0.220588 10.333 -0.389243 13.8716 0.243487 17.2969C0.276284 17.474 0.351135 17.6407 0.461745 17.7828C0.572356 17.925 0.715491 18.0386 0.879112 18.1139C1.02657 18.1829 1.18743 18.2184 1.35021 18.218C1.54766 18.218 1.74166 18.1662 1.91271 18.0675L10.6877 12.998ZM9.00021 3.60281V11.3737L2.26708 15.2592C2.25021 15.0469 2.25021 14.8331 2.25021 14.625C2.2522 12.3446 2.88343 10.1089 4.07438 8.16418C5.26534 6.21945 6.96984 4.64106 9.00021 3.60281ZM14.6252 0C14.3268 0 14.0407 0.118526 13.8297 0.329505C13.6187 0.540483 13.5002 0.826631 13.5002 1.125V14.0372L2.41755 20.4933C2.28894 20.5678 2.17639 20.6671 2.08639 20.7854C1.99638 20.9038 1.93072 21.0387 1.89319 21.1826C1.85566 21.3264 1.84701 21.4762 1.86774 21.6234C1.88847 21.7706 1.93817 21.9123 2.01396 22.0402C3.31292 24.2484 5.16917 26.0767 7.39688 27.3419C9.62459 28.6072 12.1456 29.2651 14.7075 29.2497C17.2694 29.2344 19.7823 28.5463 21.9947 27.2544C24.2071 25.9624 26.0413 24.112 27.3136 21.8884C28.586 19.6647 29.2519 17.1458 29.2447 14.5839C29.2375 12.0219 28.5574 9.5068 27.2725 7.29033C25.9877 5.07386 24.1431 3.23379 21.9235 1.95434C19.7039 0.674892 17.1872 0.000955587 14.6252 0ZM14.6252 27C12.6613 26.9947 10.7265 26.5246 8.9792 25.6281C7.23186 24.7316 5.72158 23.4341 4.57192 21.8419L15.1919 15.6544C15.3628 15.5557 15.5047 15.4139 15.6034 15.2431C15.7021 15.0723 15.7542 14.8785 15.7544 14.6812V2.30063C18.9275 2.58851 21.8673 4.08916 23.9617 6.49013C26.0562 8.89111 27.1439 12.0074 26.9984 15.1902C26.8528 18.373 25.4853 21.377 23.1806 23.5769C20.8758 25.7767 17.8113 27.0028 14.6252 27Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 max-w-full md:max-w-134">
              <h1 className="text-xl md:text-2xl ipad-horizontal:text-[32px] text-[#17201F] font-medium leading-[120%]">
                Request & track easily
              </h1>
              <p className="text-sm md:text-base text-[#454545] leading-[150%]">
                Ask for money, see your activity, and stay in control.
              </p>
            </div>
          </div>
          <div className="step-item flex items-start gap-4 md:gap-10 pb-4 md:pb-6 border-b border-[#D1D1D1] w-full">
            <div className="rounded-full w-12 h-12 md:w-15 md:h-15 bg-[#6C5CE7] flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 md:w-8 md:h-6"
                viewBox="0 0 32 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.25 0H2.25C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25V20.25C0 20.8467 0.237053 21.419 0.65901 21.841C1.08097 22.2629 1.65326 22.5 2.25 22.5H29.25C29.8467 22.5 30.419 22.2629 30.841 21.841C31.2629 21.419 31.5 20.8467 31.5 20.25V2.25C31.5 1.65326 31.2629 1.08097 30.841 0.65901C30.419 0.237053 29.8467 0 29.25 0ZM29.25 2.25V5.625H2.25V2.25H29.25ZM29.25 20.25H2.25V7.875H29.25V20.25ZM27 16.875C27 17.1734 26.8815 17.4595 26.6705 17.6705C26.4595 17.8815 26.1734 18 25.875 18H21.375C21.0766 18 20.7905 17.8815 20.5795 17.6705C20.3685 17.4595 20.25 17.1734 20.25 16.875C20.25 16.5766 20.3685 16.2905 20.5795 16.0795C20.7905 15.8685 21.0766 15.75 21.375 15.75H25.875C26.1734 15.75 26.4595 15.8685 26.6705 16.0795C26.8815 16.2905 27 16.5766 27 16.875ZM18 16.875C18 17.1734 17.8815 17.4595 17.6705 17.6705C17.4595 17.8815 17.1734 18 16.875 18H14.625C14.3266 18 14.0405 17.8815 13.8295 17.6705C13.6185 17.4595 13.5 17.1734 13.5 16.875C13.5 16.5766 13.6185 16.2905 13.8295 16.0795C14.0405 15.8685 14.3266 15.75 14.625 15.75H16.875C17.1734 15.75 17.4595 15.8685 17.6705 16.0795C17.8815 16.2905 18 16.5766 18 16.875Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 max-w-full md:max-w-134">
              <h1 className="text-xl md:text-2xl ipad-horizontal:text-[32px] text-[#17201F] font-medium leading-[120%]">
                Cash out anytime
              </h1>
              <p className="text-sm md:text-base text-[#454545] leading-[150%]">
                Move your money to your bank or crypto balance whenever you
                want.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowToUse;
