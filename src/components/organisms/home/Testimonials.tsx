"use client";

import { Container } from "@/components/atoms/Container";
import { ITestimonial, testimonialData } from "@/constant/home";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);
// Gunakan useLayoutEffect di client, useEffect di server

const Testimonials: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fade-up-testimonial",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fade-up-testimonial",
          start: "top 85%",
        },
      },
    );
  }, []);
  return (
    <section className="w-full bg-[#F2F0F5] font-mona-sans relative z-0">
      <Container className="flex w-full flex-col items-center justify-center gap-8 md:gap-15 px-4 md:px-6">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
          <h1 className="text-3xl md:text-4xl ipad-horizontal:text-5xl leading-[130%] font-medium text-[#0B072C] fade-up-testimonial">
            Built with real users
            <br />
            <span className="text-[#6C5CE7]">Tested by them too</span>
          </h1>
          <p className="text-[#4F4F4F] text-sm md:text-base ipad-horizontal:text-lg leading-[150%] text-left md:text-right max-w-full md:max-w-[50%] fade-up-testimonial">
            People who rely on payments every day shared what stood out —
            <br className="hidden ipad-horizontal:block" />
            from speed and simplicity to how the product actually feels to use.
          </p>
        </div>
      </Container>
      <div className="w-full max-width flex flex-col gap-4 ipad-vertical:gap-10 pb-5 md:pb-8">
        <div className="w-full ">
          <Marquee direction="right" className="w-full">
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
        </div>
        <div className="w-full">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
