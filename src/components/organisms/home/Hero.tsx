"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/atoms/Container";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const floatingCard1 = useRef<HTMLDivElement>(null);
  const floatingCard2 = useRef<HTMLDivElement>(null);
  const floatingCard3 = useRef<HTMLDivElement>(null);
  const floatingCard4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations on load
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3",
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          videoRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8 },
          "-=0.3",
        );

      // Floating cards animation
      const floatingCards = [
        floatingCard1.current,
        floatingCard2.current,
        floatingCard3.current,
        floatingCard4.current,
      ].filter(Boolean);

      floatingCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0 },
          {
            opacity: 1,

            duration: 0.6,
            delay: 0.8 + index * 0.15,
            ease: "back.out(1.7)",
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-linear-to-b from-[#E6E2FC] to-primary  font-mona-sans relative z-0"
    >
      <Container className="w-full flex flex-col justify-center items-center min-h-svh gap-5 md:gap-7  relative z-0 px-4 md:px-6">
        <div
          ref={floatingCard1}
          className="absolute  z-1 py-3 px-4 rounded-2xl border border-[#D1D1D1] bg-primary/80 hidden ipad-vertical:flex items-center gap-1 ipad-vertical:top-[24%] ipad-vertical:scale-[0.7] ipad-horizontal:scale-[1] ipad-vertical:left-[8%] ipad-horizontal:top-[19%] ipad-horizontal:left-[18%] lg:top-67 lg:left-80"
        >
          <div className="w-6 h-6 rounded-full flex justify-center items-center bg-[#6C5CE7]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 0C4.95979 0 3.2429 0.711159 1.97703 1.97703C0.711159 3.2429 0 4.95979 0 6.75C0 8.54021 0.711159 10.2571 1.97703 11.523C3.2429 12.7888 4.95979 13.5 6.75 13.5C8.14608 13.5 9.61226 13.0794 10.6721 12.3752C10.7289 12.3375 10.7778 12.2889 10.8158 12.2323C10.8538 12.1756 10.8803 12.1121 10.8938 12.0452C10.9073 11.9783 10.9074 11.9095 10.8943 11.8425C10.8812 11.7756 10.855 11.7119 10.8172 11.6551C10.7794 11.5983 10.7309 11.5495 10.6742 11.5115C10.6176 11.4734 10.5541 11.4469 10.4872 11.4334C10.4203 11.42 10.3515 11.4198 10.2845 11.4329C10.2176 11.4461 10.1539 11.4723 10.0971 11.51C9.21635 12.0968 7.9319 12.4615 6.75 12.4615C5.62036 12.4615 4.5161 12.1266 3.57684 11.499C2.63758 10.8714 1.90552 9.97936 1.47323 8.93571C1.04093 7.89206 0.927826 6.74366 1.14821 5.63573C1.36859 4.5278 1.91256 3.51011 2.71133 2.71133C3.51011 1.91256 4.5278 1.36859 5.63573 1.14821C6.74366 0.927826 7.89206 1.04093 8.93571 1.47323C9.97936 1.90552 10.8714 2.63758 11.499 3.57684C12.1266 4.5161 12.4615 5.62036 12.4615 6.75C12.4615 8.46671 11.7554 8.82692 11.1635 8.82692C10.5715 8.82692 9.86539 8.46671 9.86539 6.75V4.15385C9.86539 4.01614 9.81068 3.88407 9.71331 3.78669C9.61593 3.68932 9.48386 3.63462 9.34615 3.63462C9.20845 3.63462 9.07638 3.68932 8.979 3.78669C8.88163 3.88407 8.82692 4.01614 8.82692 4.15385V4.43034C8.36097 4.01257 7.77999 3.74482 7.15968 3.66197C6.53937 3.57911 5.90849 3.685 5.34923 3.96583C4.78996 4.24666 4.32823 4.68941 4.0242 5.23642C3.72016 5.78342 3.58792 6.4093 3.64469 7.03254C3.70146 7.65578 3.94462 8.24747 4.34248 8.73053C4.74034 9.2136 5.27447 9.56564 5.87527 9.7408C6.47607 9.91596 7.1157 9.90611 7.71083 9.71254C8.30596 9.51897 8.829 9.15066 9.2118 8.65558C9.60123 9.43442 10.273 9.86539 11.1635 9.86539C12.6264 9.86539 13.5 8.70101 13.5 6.75C13.4981 4.96037 12.7863 3.24458 11.5209 1.97912C10.2554 0.713655 8.53963 0.00188988 6.75 0ZM6.75 8.82692C6.33922 8.82692 5.93767 8.70511 5.59612 8.4769C5.25458 8.24868 4.98837 7.92431 4.83117 7.5448C4.67398 7.1653 4.63285 6.7477 4.71298 6.34481C4.79312 5.94193 4.99093 5.57186 5.28139 5.28139C5.57186 4.99093 5.94193 4.79312 6.34481 4.71298C6.7477 4.63285 7.1653 4.67398 7.5448 4.83117C7.92431 4.98837 8.24868 5.25458 8.4769 5.59612C8.70511 5.93767 8.82692 6.33922 8.82692 6.75C8.82692 7.30083 8.6081 7.82911 8.21861 8.21861C7.82911 8.6081 7.30083 8.82692 6.75 8.82692Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="font-medium text-[24px] text-[#1F1F1F]">you</h1>
        </div>

        <div
          ref={floatingCard2}
          className="absolute z-1 py-3 px-4 rounded-2xl border border-[#D1D1D1] bg-primary/80 hidden ipad-vertical:flex items-start gap-1 ipad-vertical:scale-[0.7] ipad-horizontal:scale-[1] ipad-vertical:top-[20%]  ipad-vertical:right-[4%] ipad-horizontal:top-[16%] ipad-horizontal:right-[15%] lg:top-53 lg:right-62"
        >
          <div className="w-13 h-13 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-[#1CB2A0]">
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.531 1.28104L6.53104 13.281C6.46139 13.3508 6.37867 13.4061 6.28762 13.4438C6.19657 13.4816 6.09898 13.501 6.00042 13.501C5.90186 13.501 5.80426 13.4816 5.71321 13.4438C5.62216 13.4061 5.53945 13.3508 5.46979 13.281L0.219792 8.03104C0.0790615 7.89031 0 7.69944 0 7.50042C0 7.30139 0.0790615 7.11052 0.219792 6.96979C0.360523 6.82906 0.551394 6.75 0.750417 6.75C0.94944 6.75 1.14031 6.82906 1.28104 6.96979L6.00042 11.6901L17.4698 0.219792C17.6105 0.0790612 17.8014 -1.48284e-09 18.0004 0C18.1994 1.48284e-09 18.3903 0.0790612 18.531 0.219792C18.6718 0.360522 18.7508 0.551394 18.7508 0.750417C18.7508 0.94944 18.6718 1.14031 18.531 1.28104Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-[#1F1F1F]">
            <h1 className="font-semibold text-[28px] leading-[120%]">
              $125.00
            </h1>
            <h1 className="font-medium text-xl leading-[130%]">Recieved</h1>
            <h1 className="text-base leading-[150%] text-[#454545]">
              from @barista
            </h1>
          </div>
        </div>

        <div
          ref={floatingCard3}
          className="absolute z-1 py-3 px-4 rounded-2xl border border-[#D1D1D1] bg-primary/80 hidden ipad-vertical:flex items-start gap-3 ipad-vertical:scale-[0.7] ipad-vertical:top-[32%] ipad-vertical:-right-3 ipad-horizontal:scale-[1] ipad-horizontal:top-[35%] ipad-horizontal:right-[5%] lg:top-110 lg:right-40"
        >
          <div className="w-13 h-13 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-[#4584F9]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5004 0.75V10.5C13.5004 10.6989 13.4214 10.8897 13.2807 11.0303C13.1401 11.171 12.9493 11.25 12.7504 11.25C12.5515 11.25 12.3607 11.171 12.2201 11.0303C12.0794 10.8897 12.0004 10.6989 12.0004 10.5V2.56031L1.28104 13.2806C1.14031 13.4214 0.94944 13.5004 0.750417 13.5004C0.551394 13.5004 0.360523 13.4214 0.219792 13.2806C0.0790615 13.1399 0 12.949 0 12.75C0 12.551 0.0790615 12.3601 0.219792 12.2194L10.9401 1.5H3.00042C2.8015 1.5 2.61074 1.42098 2.47009 1.28033C2.32943 1.13968 2.25042 0.948912 2.25042 0.75C2.25042 0.551088 2.32943 0.360322 2.47009 0.21967C2.61074 0.0790178 2.8015 0 3.00042 0H12.7504C12.9493 0 13.1401 0.0790178 13.2807 0.21967C13.4214 0.360322 13.5004 0.551088 13.5004 0.75Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-[#1F1F1F]">
            <h1 className="font-medium text-xl leading-[130%]">Sent to</h1>
            <h1 className="text-base leading-[150%] text-[#454545]">@driver</h1>
            <h1 className="font-semibold text-[28px] leading-[120%]">
              -$40.00
            </h1>
          </div>
        </div>
        <div
          ref={floatingCard4}
          className="absolute z-1 py-3 px-4 rounded-2xl border border-[#D1D1D1] bg-primary/80 hidden ipad-vertical:flex items-start gap-3 ipad-vertical:scale-[0.7] ipad-horizontal:scale-[1] ipad-vertical:top-[32%] ipad-vertical:-left-4 ipad-horizontal:top-[35%] ipad-horizontal:left-[4%] lg:top-110 lg:left-30"
        >
          <div className="w-13 h-13 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-[#4584F9]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5004 0.75V10.5C13.5004 10.6989 13.4214 10.8897 13.2807 11.0303C13.1401 11.171 12.9493 11.25 12.7504 11.25C12.5515 11.25 12.3607 11.171 12.2201 11.0303C12.0794 10.8897 12.0004 10.6989 12.0004 10.5V2.56031L1.28104 13.2806C1.14031 13.4214 0.94944 13.5004 0.750417 13.5004C0.551394 13.5004 0.360523 13.4214 0.219792 13.2806C0.0790615 13.1399 0 12.949 0 12.75C0 12.551 0.0790615 12.3601 0.219792 12.2194L10.9401 1.5H3.00042C2.8015 1.5 2.61074 1.42098 2.47009 1.28033C2.32943 1.13968 2.25042 0.948912 2.25042 0.75C2.25042 0.551088 2.32943 0.360322 2.47009 0.21967C2.61074 0.0790178 2.8015 0 3.00042 0H12.7504C12.9493 0 13.1401 0.0790178 13.2807 0.21967C13.4214 0.360322 13.5004 0.551088 13.5004 0.75Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="font-medium text-xl text-[#454545] leading-[130%]">
              Balance Update
            </h1>
            <h1 className="font-semibold text-[28px] leading-[120%] text-[#1F1F1F]">
              $1,272.82
            </h1>
          </div>
        </div>
        <div
          ref={badgeRef}
          className="flex items-center gap-2 md:gap-3 bg-primary/40 rounded-full border border-[#F7F7F7] py-2 md:py-3 px-3 md:px-4 mt-18 ipad-vertical:mt-25 ipad-horizontal:mt-30 "
        >
          <svg
            width="40"
            height="26"
            viewBox="0 0 40 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="24"
              height="24"
              rx="12"
              stroke="white"
              strokeWidth="2"
            />
            <mask
              id="mask0_23144_418"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="2"
              y="1"
              width="23"
              height="23"
            >
              <path
                d="M13.25 24C19.4632 24 24.5 18.9632 24.5 12.75C24.5 6.5368 19.4632 1.5 13.25 1.5C7.0368 1.5 2 6.5368 2 12.75C2 18.9632 7.0368 24 13.25 24Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_23144_418)">
              <path
                d="M13.25 1.5H24.5V4.3125L23.0938 5.71875L24.5 7.125V9.9375L23.0938 11.3438L24.5 12.75V15.5625L23.0938 16.9688L24.5 18.375V21.1875L13.25 22.5938L2 21.1875V18.375L3.40625 16.9688L2 15.5625V12.75L13.25 1.5Z"
                fill="#EEEEEE"
              />
              <path
                d="M11.8438 4.3125H24.5V7.125H11.8438V4.3125ZM11.8438 9.9375H24.5V12.75H13.25L11.8438 9.9375ZM2 15.5625H24.5V18.375H2V15.5625ZM2 21.1875H24.5V24H2V21.1875Z"
                fill="#D80027"
              />
              <path d="M2 1.5H13.25V12.75H2V1.5Z" fill="#0052B4" />
              <path
                d="M10.2178 12.1787L12.7227 10.377H9.64648L12.1514 12.1787L11.1846 9.23438L10.2178 12.1787ZM6.6582 12.1787L9.16309 10.377H6.08691L8.5918 12.1787L7.625 9.23438L6.6582 12.1787ZM3.09863 12.1787L5.60352 10.377H2.52734L5.03223 12.1787L4.06543 9.23438L3.09863 12.1787ZM10.2178 8.61914L12.7227 6.81738H9.64648L12.1514 8.61914L11.1846 5.6748L10.2178 8.61914ZM6.6582 8.61914L9.16309 6.81738H6.08691L8.5918 8.61914L7.625 5.6748L6.6582 8.61914ZM3.09863 8.61914L5.60352 6.81738H2.52734L5.03223 8.61914L4.06543 5.6748L3.09863 8.61914ZM10.2178 5.01562L12.7227 3.21387H9.64648L12.1514 5.01562L11.1846 2.07129L10.2178 5.01562ZM6.6582 5.01562L9.16309 3.21387H6.08691L8.5918 5.01562L7.625 2.07129L6.6582 5.01562ZM3.09863 5.01562L5.60352 3.21387H2.52734L5.03223 5.01562L4.06543 2.07129L3.09863 5.01562Z"
                fill="#EEEEEE"
              />
            </g>
            <g clipPath="url(#clip0_23144_418)">
              <path
                d="M33 3.475C31.275 2.3875 29.2125 1.75 27 1.75C24.7875 1.75 22.725 2.3875 21 3.475V22.4875C22.725 23.575 24.7875 24.2125 27 24.2125C29.2125 24.2125 31.275 23.575 33 22.4875V3.475Z"
                fill="white"
              />
              <path
                d="M33 3.475V22.4875C36.15 20.5375 38.25 16.9375 38.25 12.9625C38.25 8.9875 36.15 5.4625 33 3.475ZM21 3.475C17.85 5.4625 15.75 9.0625 15.75 13C15.75 16.9375 17.85 20.5375 21 22.525V3.475ZM31.0875 12.85C30.9375 12.775 30.9 12.625 30.9375 12.55L31.3125 11.2L30 11.4625C29.9625 11.4625 29.8125 11.4625 29.775 11.2L29.6625 10.75L28.7625 11.8C28.7625 11.8 28.1625 12.4375 28.35 11.4625L28.725 9.4L28.0125 9.775C27.975 9.775 27.825 9.8125 27.6375 9.4375L27 8.125L26.325 9.3625C26.1375 9.7375 25.9875 9.7 25.95 9.7L25.2375 9.325L25.6125 11.3875C25.8 12.3625 25.2 11.725 25.2 11.725L24.3 10.675L24.1875 11.125C24.1125 11.3875 24 11.3875 23.9625 11.3875L22.65 11.125L23.025 12.475C23.025 12.5875 23.025 12.7 22.875 12.775L22.5 13C22.5 13 24 14.2 24.4875 14.6125C24.6 14.6875 24.825 14.9125 24.75 15.175L24.5625 15.7L26.625 15.4C26.7375 15.4 26.9625 15.4 26.925 15.7375L26.8125 17.875H27.1875L27.075 15.7375C27.075 15.4 27.3 15.4 27.375 15.4L29.4375 15.7L29.25 15.175C29.175 14.9125 29.4 14.6875 29.5125 14.6125C30 14.2 31.5 13 31.5 13L31.0875 12.85Z"
                fill="#DF283A"
              />
            </g>
            <rect
              x="15"
              y="1"
              width="24"
              height="24"
              rx="12"
              stroke="white"
              strokeWidth="2"
            />
            <defs>
              <clipPath id="clip0_23144_418">
                <rect
                  x="15"
                  y="1"
                  width="24"
                  height="24"
                  rx="12"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-[#1F1F1F] text-xs md:text-sm">
            Works in US & Canada
          </h1>
        </div>
        <h1
          ref={titleRef}
          className="font-medium text-[#0B072C] text-3xl sm:text-4xl md:text-5xl ipad-horizontal:text-6xl leading-[130%] tracking-[-1px] md:tracking-[-2px] text-center"
        >
          Works like cash.
          <br />
          Moves like a text.
        </h1>
        <p
          ref={descRef}
          className="text-base md:text-lg ipad-horizontal:text-xl leading-[150%] text-center max-w-[90%] md:max-w-[80%] ipad-horizontal:max-w-196.75 text-[#4F4F4F] px-2"
        >
          Create, send, or receive money in under 10 seconds.
          <br className="hidden md:block" />
          It works the way you already do — simple, fast, and straight from your
          phone.
        </p>
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-6 w-full px-4"
        >
          <button className="bg-[#6C5CE7] rounded-full w-full sm:w-auto sm:min-w-52 ipad-horizontal:w-63.75 h-12 md:h-14">
            <h1 className="leading-[120%] text-base md:text-lg font-bold tracking-[-0.7px] text-primary">
              Click to Send or Receive $1
            </h1>
          </button>
          {/* <button className="bg-primary border border-[#6C5CE7] rounded-full w-full sm:w-auto sm:min-w-52 ipad-horizontal:w-63.75 h-12 md:h-14 flex items-center justify-center gap-1">
            <h1 className="leading-[120%] text-base md:text-lg font-medium tracking-[-0.6px] text-[#2A2932]">
              Find out more
            </h1>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0306 12.5306L9.53055 20.0306C9.46087 20.1003 9.37815 20.1556 9.2871 20.1933C9.19606 20.231 9.09847 20.2504 8.99993 20.2504C8.90138 20.2504 8.8038 20.231 8.71276 20.1933C8.62171 20.1556 8.53899 20.1003 8.4693 20.0306C8.39962 19.9609 8.34435 19.8782 8.30663 19.7872C8.26892 19.6961 8.24951 19.5985 8.24951 19.5C8.24951 19.4014 8.26892 19.3039 8.30663 19.2128C8.34435 19.1218 8.39962 19.039 8.4693 18.9694L15.4396 12L8.4693 5.03061C8.32857 4.88988 8.24951 4.69901 8.24951 4.49999C8.24951 4.30097 8.32857 4.1101 8.4693 3.96936C8.61003 3.82863 8.80091 3.74957 8.99993 3.74957C9.19895 3.74957 9.38982 3.82863 9.53055 3.96936L17.0306 11.4694C17.1003 11.539 17.1556 11.6217 17.1933 11.7128C17.2311 11.8038 17.2505 11.9014 17.2505 12C17.2505 12.0986 17.2311 12.1961 17.1933 12.2872C17.1556 12.3782 17.1003 12.461 17.0306 12.5306Z"
                fill="#2A2932"
              />
            </svg>
          </button> */}
        </div>
        <div
          ref={videoRef}
          className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] ipad-horizontal:w-296.75 bg-[#6C5CE7]/50 rounded-xl md:rounded-[20px] overflow-hidden border border-[#D1D1D1]"
        >
          <div className="w-full aspect-video">
            <video
              src="/vidio/typed-@video-02062025.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
