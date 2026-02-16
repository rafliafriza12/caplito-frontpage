"use client";

import { Container } from "@/components/atoms/Container";
import { ITestimonial, testimonialData } from "@/constant/home";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate feature cards with stagger
      const featureCards =
        featuresRef.current?.querySelectorAll(".feature-card");
      if (featureCards) {
        gsap.fromTo(
          featureCards,
          {
            y: 50,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
            },
          },
        );

        // Animate icons with bounce effect
        const icons = featuresRef.current?.querySelectorAll(".feature-icon");
        if (icons) {
          gsap.fromTo(
            icons,
            {
              scale: 0,
              rotation: -10,
            },
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: featuresRef.current,
                start: "top 80%",
              },
            },
          );
        }
      }

      // Animate marquee section
      if (marqueeRef.current) {
        gsap.fromTo(
          marqueeRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: marqueeRef.current,
              start: "top 85%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-primary font-mona-sans relative z-0 py-8 sm:py-10 md:py-12 lg:py-16"
    >
      <Container className="w-full px-4 sm:px-6 md:px-8 mb-8 sm:mb-10 md:mb-12">
        <div
          ref={featuresRef}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-15"
        >
          <div className="feature-card flex flex-col items-center justify-start gap-3 sm:gap-4">
            <div className="feature-icon w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-xl sm:rounded-2xl bg-[#F5F5FF] border border-[#F7F7F7] flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_23364_8043)">
                  <path
                    d="M16 15C14.9122 15 13.8488 14.6774 12.9444 14.0731C12.0399 13.4687 11.3349 12.6098 10.9187 11.6048C10.5024 10.5998 10.3935 9.4939 10.6057 8.42701C10.8179 7.36011 11.3417 6.3801 12.1109 5.61092C12.8801 4.84173 13.8601 4.3179 14.927 4.10568C15.9939 3.89346 17.0998 4.00238 18.1048 4.41867C19.1098 4.83495 19.9687 5.5399 20.5731 6.44437C21.1774 7.34884 21.5 8.41221 21.5 9.5C21.4983 10.9582 20.9184 12.3562 19.8873 13.3873C18.8562 14.4184 17.4582 14.9983 16 15ZM23.5 16C22.4122 16 21.3488 16.3226 20.4444 16.9269C19.5399 17.5313 18.8349 18.3903 18.4187 19.3952C18.0024 20.4002 17.8935 21.5061 18.1057 22.573C18.3179 23.6399 18.8417 24.6199 19.6109 25.3891C20.3801 26.1583 21.3601 26.6821 22.427 26.8943C23.4939 27.1065 24.5998 26.9976 25.6048 26.5813C26.6098 26.1651 27.4687 25.4601 28.0731 24.5556C28.6774 23.6512 29 22.5878 29 21.5C28.9983 20.0418 28.4184 18.6438 27.3873 17.6127C26.3562 16.5817 24.9582 16.0017 23.5 16ZM8.5 16C7.41221 16 6.34884 16.3226 5.44437 16.9269C4.5399 17.5313 3.83495 18.3903 3.41867 19.3952C3.00238 20.4002 2.89346 21.5061 3.10568 22.573C3.3179 23.6399 3.84173 24.6199 4.61092 25.3891C5.3801 26.1583 6.36011 26.6821 7.42701 26.8943C8.4939 27.1065 9.59977 26.9976 10.6048 26.5813C11.6098 26.1651 12.4687 25.4601 13.0731 24.5556C13.6774 23.6512 14 22.5878 14 21.5C13.9983 20.0418 13.4184 18.6438 12.3873 17.6127C11.3562 16.5817 9.95819 16.0017 8.5 16Z"
                    fill="#8659FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_23364_8043">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1.5 sm:gap-2 max-w-52 sm:max-w-60 md:max-w-68">
              <h1 className="font-medium leading-[120%] text-base sm:text-lg md:text-xl text-[#17201F]">
                SIMPLIFIED
              </h1>
              <p className="leading-[150%] text-sm sm:text-base text-center text-[#454545]">
                Easy does it. Feels like cash, not a computer.
              </p>
            </div>
          </div>
          <div className="feature-card flex flex-col items-center justify-start gap-3 sm:gap-4">
            <div className="feature-icon w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-xl sm:rounded-2xl bg-[#FEF2F2] border border-[#F7F7F7] flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_23364_8046)">
                  <path
                    d="M15.8014 3.00004C8.84011 3.10629 3.15136 8.75879 3.00011 15.7188C2.94736 18.0597 3.53103 20.3711 4.68886 22.4063C4.73427 22.486 4.80072 22.5516 4.88093 22.596C4.96114 22.6405 5.05202 22.662 5.14364 22.6583C5.23526 22.6545 5.32409 22.6256 5.40041 22.5748C5.47673 22.524 5.5376 22.4531 5.57636 22.37C6.51555 20.3779 7.00178 18.2025 7.00011 16C6.99923 13.8246 7.78707 11.7227 9.21761 10.0838C9.37932 9.8912 9.60605 9.76459 9.85485 9.72796C10.1037 9.69133 10.3573 9.74722 10.5676 9.88504C10.6848 9.96523 10.7836 10.0695 10.8574 10.1908C10.9312 10.3122 10.9783 10.4478 10.9956 10.5888C11.0128 10.7298 10.9999 10.8728 10.9575 11.0084C10.9152 11.1439 10.8445 11.2689 10.7501 11.375C9.62273 12.652 9.00042 14.2966 9.00011 16C9.00386 19.0005 8.20825 21.9478 6.69511 24.5388C6.63901 24.6341 6.61606 24.7452 6.62985 24.8549C6.64365 24.9646 6.69341 25.0666 6.77136 25.145C7.26764 25.6482 7.80399 26.1101 8.37511 26.5263C8.43161 26.5677 8.49618 26.5968 8.56465 26.6117C8.63311 26.6265 8.70393 26.6269 8.77252 26.6126C8.84112 26.5983 8.90594 26.5698 8.96281 26.5289C9.01967 26.488 9.0673 26.4356 9.10261 26.375C9.63873 25.4958 10.106 24.5764 10.5001 23.625C10.5502 23.5036 10.6237 23.3931 10.7164 23.3001C10.8092 23.207 10.9193 23.1331 11.0406 23.0826C11.1619 23.0321 11.292 23.006 11.4234 23.0058C11.5547 23.0056 11.6849 23.0312 11.8064 23.0813C11.9278 23.1314 12.0383 23.2049 12.1313 23.2976C12.2244 23.3903 12.2983 23.5005 12.3488 23.6218C12.3993 23.7431 12.4254 23.8732 12.4256 24.0045C12.4258 24.1359 12.4002 24.2661 12.3501 24.3875C11.9302 25.4038 11.4351 26.3874 10.8689 27.33C10.8321 27.3915 10.8091 27.4602 10.8012 27.5314C10.7933 27.6026 10.8009 27.6747 10.8233 27.7427C10.8457 27.8107 10.8824 27.8732 10.9311 27.9258C10.9797 27.9783 11.039 28.0199 11.1051 28.0475C12.1076 28.4564 13.1575 28.7378 14.2301 28.885C14.3302 28.8998 14.4325 28.8837 14.5233 28.8391C14.6142 28.7945 14.6893 28.7233 14.7389 28.635C16.5711 25.3434 17.662 21.6911 17.9351 17.9338C17.9406 17.7999 17.973 17.6686 18.0303 17.5475C18.0875 17.4264 18.1686 17.318 18.2685 17.2288C18.3685 17.1396 18.4853 17.0714 18.6122 17.0283C18.739 16.9852 18.8732 16.9679 19.0068 16.9776C19.1404 16.9874 19.2707 17.0238 19.3899 17.0849C19.5092 17.1459 19.615 17.2303 19.701 17.333C19.787 17.4357 19.8515 17.5547 19.8906 17.6828C19.9298 17.8109 19.9428 17.9456 19.9289 18.0788C19.6744 21.5834 18.7592 25.0082 17.2314 28.1725C17.1914 28.2535 17.1741 28.3437 17.1813 28.4337C17.1885 28.5236 17.2199 28.61 17.2722 28.6835C17.3245 28.7571 17.3957 28.8151 17.4783 28.8515C17.5609 28.8878 17.6518 28.9012 17.7414 28.89C18.6186 28.7722 19.4814 28.5649 20.3164 28.2713C20.3821 28.2479 20.4421 28.211 20.4927 28.163C20.5433 28.115 20.5833 28.0569 20.6101 27.9925C22.1689 24.2624 22.9809 20.2627 23.0001 16.22C23.0276 12.39 20.0751 9.13629 16.2501 9.00379C15.5766 8.98045 14.9031 9.05327 14.2501 9.22004C14.1182 9.25391 13.9808 9.26047 13.8462 9.23934C13.7117 9.2182 13.5829 9.16981 13.4677 9.09713C13.3526 9.02445 13.2535 8.92901 13.1765 8.81666C13.0995 8.70432 13.0463 8.57743 13.0201 8.44379C12.9765 8.18475 13.0337 7.91886 13.1799 7.70062C13.3261 7.48238 13.5502 7.32832 13.8064 7.27004C15.1338 6.93768 16.5194 6.91216 17.8582 7.19542C19.1969 7.47868 20.4535 8.06327 21.5325 8.9048C22.6116 9.74633 23.4847 10.8227 24.0855 12.0521C24.6863 13.2815 24.9991 14.6317 25.0001 16C25.0031 19.1573 24.5544 22.2987 23.6676 25.3288C23.6367 25.4327 23.6403 25.5439 23.6781 25.6455C23.7158 25.7472 23.7856 25.8338 23.8769 25.8924C23.9681 25.9509 24.076 25.9782 24.1841 25.9701C24.2922 25.962 24.3948 25.919 24.4764 25.8475C26.4989 24.1051 27.9359 21.7822 28.5922 19.1945C29.2484 16.6068 29.0922 13.8799 28.1445 11.3841C27.1969 8.88835 25.5039 6.74485 23.2956 5.24485C21.0873 3.74484 18.4707 2.96108 15.8014 3.00004ZM16.0001 12C16.5628 12.0005 17.1192 12.1195 17.6328 12.3493C18.1465 12.5791 18.606 12.9146 18.9814 13.3338C19.0744 13.4378 19.1447 13.5602 19.1876 13.693C19.2305 13.8259 19.2451 13.9662 19.2305 14.105C19.2159 14.2438 19.1724 14.3781 19.1028 14.4991C19.0332 14.6201 18.939 14.7251 18.8264 14.8075C18.6184 14.9507 18.3652 15.0128 18.1146 14.9819C17.864 14.9511 17.6334 14.8294 17.4664 14.64C17.2052 14.3586 16.8686 14.1582 16.4966 14.0629C16.1247 13.9676 15.7332 13.9813 15.3689 14.1025C14.9633 14.2437 14.6124 14.5088 14.3656 14.8603C14.1189 15.2118 13.9888 15.6319 13.9939 16.0613C13.9904 17.4457 13.8569 18.8268 13.5951 20.1863C13.5521 20.413 13.4321 20.6179 13.2553 20.7662C13.0785 20.9145 12.8559 20.9972 12.6251 21C12.5622 21.0004 12.4994 20.9945 12.4376 20.9825C12.1752 20.9229 11.9463 20.7636 11.7991 20.5383C11.6519 20.313 11.5981 20.0393 11.6489 19.775C11.8844 18.5306 12.002 17.2666 12.0001 16C12.0001 14.9392 12.4215 13.9218 13.1717 13.1716C13.9218 12.4215 14.9392 12 16.0001 12Z"
                    fill="#F5433E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_23364_8046">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1.5 sm:gap-2 max-w-52 sm:max-w-60 md:max-w-68">
              <h1 className="font-medium leading-[120%] text-base sm:text-lg md:text-xl text-[#17201F]">
                PRIVACY
              </h1>
              <p className="leading-[150%] text-sm sm:text-base text-center text-[#454545]">
                Privacy first. Use your wallet. Skip the interrogation. We only
                ask when we have to.
              </p>
            </div>
          </div>
          <div className="feature-card flex flex-col items-center justify-start gap-3 sm:gap-4">
            <div className="feature-icon w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-xl sm:rounded-2xl bg-[#FEFAE8] border border-[#F7F7F7] flex items-center justify-center">
              <svg
                width="18"
                height="27"
                viewBox="0 0 18 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9881 18.2267L10.6014 13.3334H6.9881L1.6014 18.2267C0.0947363 19.5867 -0.398597 21.68 0.334736 23.5734C1.06807 25.4534 2.85474 26.6667 4.86807 26.6667H12.7214C14.7481 26.6667 16.5214 25.4534 17.2548 23.5734C17.9881 21.68 17.4948 19.5867 15.9881 18.2267ZM11.2281 21.52H6.37476C5.86807 21.52 5.46807 21.1067 5.46807 20.6134C5.46807 20.12 5.8814 19.7067 6.37476 19.7067H11.2281C11.7348 19.7067 12.1348 20.12 12.1348 20.6134C12.1348 21.1067 11.7214 21.52 11.2281 21.52Z"
                  fill="#F5B40B"
                />
                <path
                  d="M17.268 3.09333C16.5346 1.21333 14.748 0 12.7346 0H4.86799C2.85465 0 1.06799 1.21333 0.334654 3.09333C-0.385346 4.98667 0.107988 7.08 1.61465 8.44L7.00129 13.3333H10.6146L16.0013 8.44C17.4946 7.08 17.988 4.98667 17.268 3.09333ZM11.228 6.97333H6.37463C5.86799 6.97333 5.46799 6.56 5.46799 6.06667C5.46799 5.57333 5.88132 5.16 6.37463 5.16H11.228C11.7346 5.16 12.1346 5.57333 12.1346 6.06667C12.1346 6.56 11.7213 6.97333 11.228 6.97333Z"
                  fill="#F5B40B"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1.5 sm:gap-2 max-w-52 sm:max-w-60 md:max-w-68">
              <h1 className="font-medium leading-[120%] text-base sm:text-lg md:text-xl text-[#17201F]">
                24/7 and 365
              </h1>
              <p className="leading-[150%] text-sm sm:text-base text-center text-[#454545]">
                Always on. No "pending." No waiting. Weekends and holidays
                included.
              </p>
            </div>
          </div>
          <div className="feature-card flex flex-col items-center justify-start gap-3 sm:gap-4">
            <div className="feature-icon w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-xl sm:rounded-2xl bg-[#E3ECFB] border border-[#F7F7F7] flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_23364_8071"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                >
                  <path d="M32 0H0V32H32V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_23364_8071)">
                  <path
                    d="M27.8801 14.8271V8.97379C27.8801 7.88046 27.0535 6.64046 26.0268 6.22712L18.6001 3.18712C16.9335 2.50712 15.0535 2.50712 13.3868 3.18712L5.96012 6.22712C4.94678 6.64046 4.12012 7.88046 4.12012 8.97379V14.8271C4.12012 21.3471 8.85345 27.4538 15.3201 29.2404C15.7601 29.3604 16.2401 29.3604 16.6801 29.2404C23.1468 27.4538 27.8801 21.3471 27.8801 14.8271ZM17.0001 17.1604V20.6671C17.0001 21.2138 16.5468 21.6671 16.0001 21.6671C15.4535 21.6671 15.0001 21.2138 15.0001 20.6671V17.1604C13.6535 16.7338 12.6668 15.4804 12.6668 14.0004C12.6668 12.1605 14.1601 10.6671 16.0001 10.6671C17.8401 10.6671 19.3335 12.1605 19.3335 14.0004C19.3335 15.4938 18.3468 16.7338 17.0001 17.1604Z"
                    fill="#1565C0"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1.5 sm:gap-2 max-w-52 sm:max-w-60 md:max-w-68">
              <h1 className="font-medium leading-[120%] text-base sm:text-lg md:text-xl text-[#17201F]">
                SECURITY
              </h1>
              <p className="leading-[150%] text-sm sm:text-base text-center text-[#454545]">
                Your keys. Your money. You're the only one with access.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div
        ref={marqueeRef}
        className="w-full max-width flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-10 pb-4 sm:pb-5 md:pb-8"
      >
        <div className="w-full ">
          <Marquee direction="right" className="w-full">
            {testimonialData.map((item: ITestimonial, i: number) => {
              return (
                <div
                  key={i}
                  className="w-72 sm:w-80 md:w-96 h-auto min-h-44 sm:min-h-48 md:min-h-70 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col justify-between items-start bg-[#FAFAFA] border border-[#F7F7F7] mr-4 md:mr-6"
                >
                  <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
                    <h1 className="text-xs md:text-sm text-[#888888] leading-[150%]">
                      {item.date}
                    </h1>
                    <p className="text-[#454545] font-medium text-sm md:text-base leading-[150%] ">
                      {item.comment}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <div className="w-9 sm:w-10 md:w-11.5 h-9 sm:h-10 md:h-11.5 rounded-full overflow-hidden relative shrink-0">
                      <Image
                        src={item.person.imgUrl}
                        alt={item.person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-0.5">
                      <h1 className="text-sm md:text-base font-medium text-[#0B072C] leading-[150%]">
                        {item.person.name}
                      </h1>
                      <h1 className="text-xs sm:text-sm md:text-base text-[#4F4F4F] leading-[150%]">
                        {item.person.role}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
        {/* <div className="w-full">
          <Marquee direction="left" className="w-full">
            {testimonialData.map((item: ITestimonial, i: number) => {
              return (
                <div
                  key={i}
                  className="w-72 sm:w-80 md:w-md h-auto min-h-52 md:h-73 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col justify-between items-start bg-[#FAFAFA] border border-[#F7F7F7] mr-4 md:mr-6"
                >
                  <div className="flex flex-col items-start gap-3 md:gap-6">
                    <h1 className="text-xs md:text-sm text-[#888888] leading-[150%]">
                      {item.date}
                    </h1>
                    <p className="text-[#454545] font-medium text-sm md:text-lg leading-[150%]">
                      {item.comment}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <div className="w-9 md:w-11.5 h-9 md:h-11.5 rounded-full overflow-hidden relative">
                      <Image
                        src={item.person.imgUrl}
                        alt={item.person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-0.5 md:gap-1">
                      <h1 className="text-sm md:text-base font-medium text-[#0B072C] leading-[150%]">
                        {item.person.name}
                      </h1>
                      <h1 className="text-sm md:text-base text-[#4F4F4F] leading-[150%]">
                        {item.person.role}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
