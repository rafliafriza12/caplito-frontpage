"use client";
import Links from "@/components/atoms/Links";
import { BodySmallRegular, Heading4 } from "@/components/atoms/Typography";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export interface IJourneyCard {
  title: string;
  subtitle: string;
  linkText: string;
  link: string;
}

interface IJourneyCardProps {
  input: IJourneyCard;
  icon: number;
  animation?: "fade-left" | "fade-up";
}

const JourneyCard: React.FC<IJourneyCardProps> = ({
  input,
  icon,
  animation = "fade-left",
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (animation === "fade-left") {
      gsap.fromTo(
        ".fade-left-journey-card",
        { x: 35, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".fade-left-journey-card",
            start: "top 80%",
          },
        },
      );
    } else {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 35, opacity: 0 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
            },
          },
        );
      }
    }
  });

  if (animation === "fade-left") {
    return (
      <div className="w-full min-h-[200px] ipad-vertical:min-h-[250px] ipad-horizontal:min-h-[287px] flex flex-col justify-between items-center fade-left-journey-card">
        <div className="relative z-0 flex justify-center items-center">
          <div className=" absolute z-[-1]">
            {icon === 0 && (
              <svg
                width="95"
                height="81"
                viewBox="0 0 95 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M91.2077 56.5421C78.7232 74.1251 37.7108 84.5653 17.94 76.5747C6.82675 72.006 -1.84945 59.0727 1.87783 46.9248C9.48196 25.2654 28.3739 6.66024 51.0242 1.85468C58.2045 0.520839 68.0525 -0.0962184 72.6462 6.59168C75.0147 10.1507 75.0209 15.3614 76.4981 19.6745C77.4767 22.7162 79.2842 25.4088 81.5966 27.7898C89.8365 35.2319 97.6837 45.2544 91.3137 56.3551L91.2015 56.5359L91.2077 56.5421Z"
                  stroke="#CAD4BA"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
            )}
            {icon === 1 && (
              <svg
                width="172"
                height="65"
                viewBox="0 0 172 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M170.736 33.3801C170.343 37.07 168.729 40.5043 166.442 43.4275C139.428 77.964 28.5948 62.5999 5.02823 32.1335C-3.97207 19.3935 2.87166 10.4492 18.0488 8.48588C33.1885 6.29813 48.777 10.5988 63.6798 12.9611C99.9678 19.2439 102.461 0.21482 127.199 1.0251C143.629 2.34024 172.812 13.9646 170.736 33.3801Z"
                  stroke="#CAD4BA"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
            )}

            {icon === 2 && (
              <svg
                width="160"
                height="57"
                viewBox="0 0 160 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M158.311 27.4826C158.678 29.906 157.463 32.2944 155.331 33.4762C144.343 39.5846 124.098 30.2899 111.444 33.7505C107.146 34.1993 107.066 36.9069 107.076 39.8987C107.091 43.3892 105.475 46.7151 102.648 48.7446C96.3263 53.2922 87.3913 54.115 79.9091 52.7238C72.3575 51.4024 64.8901 47.1988 57.4823 45.6431C51.562 44.4014 45.4086 45.9223 40.6436 49.6671C29.8491 58.149 12.7973 57.6852 4.61095 46.0071C-7.10574 29.881 12.0733 12.6929 28.1236 11.7953C38.442 10.6534 48.8497 15.4055 58.7864 11.4862C64.5877 9.12759 69.9874 4.58498 75.873 2.7051C92.8059 -3.46308 155.301 7.63167 158.306 27.4826H158.311Z"
                  stroke="#CAD4BA"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
            )}
            {icon === 3 && (
              <svg
                width="46"
                height="51"
                viewBox="0 0 46 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.2818 48.6024C21.7377 53.0585 2.89794 30.4533 1.05091 14.2209C-0.31429 -3.88496 26.1866 -1.9466 31.5885 11.2971C33.4195 15.2442 33.3552 19.9764 34.9827 23.9506C38.0879 31.6932 52.2431 42.6899 39.2818 48.6024Z"
                  stroke="#CAD4BA"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
            )}
          </div>
          <Heading4>{input.title}</Heading4>
        </div>
        <div className="w-full flex flex-col items-center gap-5">
          <BodySmallRegular className="text-charcoal-green-light text-center max-w-[216px]">
            {input.subtitle}
          </BodySmallRegular>
          <Links text={input.linkText} link={input.link} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        ref={cardRef}
        className="w-full min-h-[200px] ipad-vertical:min-h-[250px] ipad-horizontal:min-h-[287px] flex flex-col justify-between items-center "
      >
        <div className="relative z-0 flex justify-center items-center">
          <div className=" absolute z-[-1]">
            {icon === 0 && (
              <svg
                width="95"
                height="81"
                viewBox="0 0 95 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M91.2077 56.5421C78.7232 74.1251 37.7108 84.5653 17.94 76.5747C6.82675 72.006 -1.84945 59.0727 1.87783 46.9248C9.48196 25.2654 28.3739 6.66024 51.0242 1.85468C58.2045 0.520839 68.0525 -0.0962184 72.6462 6.59168C75.0147 10.1507 75.0209 15.3614 76.4981 19.6745C77.4767 22.7162 79.2842 25.4088 81.5966 27.7898C89.8365 35.2319 97.6837 45.2544 91.3137 56.3551L91.2015 56.5359L91.2077 56.5421Z"
                  stroke="#CAD4BA"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
            )}
            {icon === 1 && (
              <svg
                width="172"
                height="65"
                viewBox="0 0 172 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M170.736 33.3801C170.343 37.07 168.729 40.5043 166.442 43.4275C139.428 77.964 28.5948 62.5999 5.02823 32.1335C-3.97207 19.3935 2.87166 10.4492 18.0488 8.48588C33.1885 6.29813 48.777 10.5988 63.6798 12.9611C99.9678 19.2439 102.461 0.21482 127.199 1.0251C143.629 2.34024 172.812 13.9646 170.736 33.3801Z"
                  stroke="#CAD4BA"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
            )}

            {icon === 2 && (
              <svg
                width="160"
                height="57"
                viewBox="0 0 160 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M158.311 27.4826C158.678 29.906 157.463 32.2944 155.331 33.4762C144.343 39.5846 124.098 30.2899 111.444 33.7505C107.146 34.1993 107.066 36.9069 107.076 39.8987C107.091 43.3892 105.475 46.7151 102.648 48.7446C96.3263 53.2922 87.3913 54.115 79.9091 52.7238C72.3575 51.4024 64.8901 47.1988 57.4823 45.6431C51.562 44.4014 45.4086 45.9223 40.6436 49.6671C29.8491 58.149 12.7973 57.6852 4.61095 46.0071C-7.10574 29.881 12.0733 12.6929 28.1236 11.7953C38.442 10.6534 48.8497 15.4055 58.7864 11.4862C64.5877 9.12759 69.9874 4.58498 75.873 2.7051C92.8059 -3.46308 155.301 7.63167 158.306 27.4826H158.311Z"
                  stroke="#CAD4BA"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
            )}
            {icon === 3 && (
              <svg
                width="46"
                height="51"
                viewBox="0 0 46 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.2818 48.6024C21.7377 53.0585 2.89794 30.4533 1.05091 14.2209C-0.31429 -3.88496 26.1866 -1.9466 31.5885 11.2971C33.4195 15.2442 33.3552 19.9764 34.9827 23.9506C38.0879 31.6932 52.2431 42.6899 39.2818 48.6024Z"
                  stroke="#CAD4BA"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
            )}
          </div>
          <Heading4>{input.title}</Heading4>
        </div>
        <div className="w-full flex flex-col items-center gap-5">
          <BodySmallRegular className="text-charcoal-green-light text-center max-w-[216px]">
            {input.subtitle}
          </BodySmallRegular>
          <Links text={input.linkText} link={input.link} />
        </div>
      </div>
    );
  }
};

export default JourneyCard;
