import Image from "next/image";
import { Container } from "../atoms/Container";
import Link from "next/link";

export interface IFooterProps {
  variant?: "primary" | "secondary";
}
const Footer: React.FC<IFooterProps> = ({ variant = "primary" }) => {
  if (variant === "primary") {
    return (
      <footer className="w-full bg-[#232040] font-satoshi">
        <Container className="w-full flex flex-col gap-8 md:gap-12 px-4 md:px-6 py-10 md:py-14">
          {/* Logo - center top */}
          <div className="w-full flex justify-center">
            <Link href={"/"} className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-18 md:h-18 relative">
                <Image
                  src={"/img/logo/caplito.png"}
                  alt="Caplito"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-primary font-bold text-lg md:text-[40px]">
                Caplito
              </h1>
            </Link>
          </div>

          {/* Top Section - 4 paragraphs in 2 columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-25 md:gap-y-12.5">
            {/* Left Column */}
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-primary font-semibold text-base md:text-lg leading-[120%]">
                Company
              </h2>
              <p className="leading-[150%] text-sm md:text-base text-[#D1D1D1]">
                HIG Inc. is a technology company that provides the software
                infrastructure powering Caplito. We do not offer financial,
                legal, or tax advice. All wallet activity is directed by you,
                the user — Caplito is non-custodial by design, meaning we never
                hold or control your funds.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-primary font-semibold text-base md:text-lg leading-[120%]">
                For Merchants
              </h2>
              <p className="leading-[150%] text-sm md:text-base text-[#D1D1D1]">
                Merchants using the Caplito platform are fully responsible for
                any tokens, rewards, or services they offer to their users. This
                includes meeting all applicable requirements for consumer
                protection, financial regulation, and data privacy in their
                jurisdiction.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-primary font-semibold text-base md:text-lg leading-[120%]">
                About the Digital Dollars
              </h2>
              <p className="leading-[150%] text-sm md:text-base text-[#D1D1D1]">
                The digital dollars (USDC) available through Caplito are issued
                by [PARTNER], a licensed and regulated financial institution.
                Caplito does not issue, manage, or hold custody of USDC on your
                behalf. For details on Circle's regulatory status, visit their
                website. Caplito does not issue or custody USDC.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-primary font-semibold text-base md:text-lg leading-[120%]">
                Just So You Know
              </h2>
              <p className="leading-[150%] text-sm md:text-base text-[#D1D1D1]">
                This website and all related materials are provided for
                informational purposes only. Nothing here should be considered
                an offer to sell or a request to buy any financial product or
                service. Participation in any digital asset program is voluntary
                and governed by the terms set by each respective merchant.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#3F3D56]" />

          {/* Bottom Section - Site Map | Contact Us | Newsletter */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 ipad-horizontal:grid-cols-3 gap-8 md:gap-10">
            {/* Site Map */}
            <div className="flex flex-col items-start gap-5 md:gap-6">
              <h1 className="text-primary font-medium text-lg md:text-xl leading-[140%]">
                Trust and Legal
              </h1>
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <Link
                  href={"/terms-of-service"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Terms and Condition
                </Link>
                <Link
                  href={"/privacy-policy"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Privacy & Policy
                </Link>
                <Link
                  href={"/data-policy"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Data Policy
                </Link>
                <Link
                  href={"#"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Cookies Preferences
                </Link>
                <Link
                  href={"mailto:support@caplito.com"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col items-start gap-5 md:gap-6">
              <h1 className="text-primary font-medium text-lg md:text-xl leading-[140%]">
                Contact Us
              </h1>
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <Link
                  href={"mailto:support@caplito.com"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  support@caplito.com
                </Link>
                <Link
                  href={"tel:+13028028695"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  302-802-8695
                </Link>
                {/* <Link
                  href={"#"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  155 N. Wacker Suite 3650
                </Link>
                <Link
                  href={"#"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Chicago, IL 60606
                </Link> */}
              </div>
            </div>

            {/* Newsletter Sign Up */}
            <div className="flex flex-col items-start gap-4 md:gap-5 sm:col-span-2 ipad-horizontal:col-span-1">
              <h1 className="text-primary font-medium leading-[120%] text-2xl md:text-[28px]">
                Newsletter Sign Up
              </h1>
              <p className="text-[#D1D1D1] leading-[150%] text-sm md:text-base">
                Sign up for subscribing newsletter and join the growing Caplito
                community for updates.
              </p>
              <div className="flex flex-row gap-3 items-center w-full mt-1">
                <input
                  type="email"
                  placeholder="your email address"
                  className="flex-1 bg-white border border-[#E5E5E5] rounded-xl h-12 py-3 px-5 outline-0 placeholder:text-[#AAAAAA] placeholder:text-sm text-sm text-[#232040]"
                />
                <button className="w-12 h-12 rounded-xl bg-[#6C5CE7] flex items-center justify-center shrink-0">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9872 9.18258L2.23724 0.192888C1.97157 0.0433318 1.66664 -0.0217219 1.36307 0.00639324C1.0595 0.0345084 0.771706 0.154458 0.538026 0.35026C0.304345 0.546063 0.135876 0.808423 0.0550622 1.10239C-0.0257516 1.39635 -0.0150727 1.70796 0.0856762 1.9957L2.95724 10.4951L0.0856762 18.9954C0.00576136 19.2216 -0.0187364 19.4636 0.0142382 19.7013C0.0472129 19.9389 0.136698 20.1651 0.275185 20.361C0.413673 20.5569 0.597122 20.7167 0.81014 20.827C1.02316 20.9374 1.25953 20.995 1.49943 20.9951C1.76005 20.9945 2.01613 20.9267 2.24286 20.7982L17.9854 11.7935C18.2176 11.6634 18.411 11.4739 18.5457 11.2444C18.6805 11.0149 18.7518 10.7537 18.7523 10.4875C18.7528 10.2214 18.6824 9.9599 18.5485 9.72992C18.4145 9.49993 18.2218 9.30973 17.99 9.17882L17.9872 9.18258ZM1.49943 19.4951C1.49983 19.4913 1.49983 19.4876 1.49943 19.4838L4.28755 11.2451H9.74943C9.94834 11.2451 10.1391 11.1661 10.2798 11.0254C10.4204 10.8848 10.4994 10.694 10.4994 10.4951C10.4994 10.2962 10.4204 10.1054 10.2798 9.96474C10.1391 9.82409 9.94834 9.74508 9.74943 9.74508H4.28755L1.50505 1.51008C1.50413 1.50477 1.50222 1.49968 1.49943 1.49507L17.2494 10.4791L1.49943 19.4951Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#3F3D56]" />

          {/* Copyright bar */}
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-3 md:gap-0">
            <h1 className="text-xs md:text-sm text-primary text-center md:text-left">
              © 2022–2026 HIG Inc. All rights reserved.
            </h1>
            <h1 className="text-xs md:text-sm text-[#D9D9D9] text-center md:text-right">
              Denver, CO • Dover, DE • Chicago, IL • Vancouver, BC
            </h1>
          </div>
        </Container>
      </footer>
    );
  } else {
    return (
      <footer className="w-full bg-primary p-5 ipad-vertical:p-7.5 lg:p-15 font-satoshi">
        <Container className="w-full flex flex-col gap-8 md:gap-12 px-4 md:px-6 py-10 md:py-14 bg-[#3F3D4F] rounded-4xl">
          {/* Logo - center top */}
          <div className="w-full flex justify-center">
            <Link href={"/"} className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-18 md:h-18 relative">
                <Image
                  src={"/img/logo/caplito.png"}
                  alt="Caplito"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-primary font-bold text-lg md:text-[40px]">
                Caplito
              </h1>
            </Link>
          </div>

          {/* Top Section - 4 paragraphs in 2 columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-25 md:gap-y-12.5">
            {/* Left Column */}
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-primary font-semibold text-base md:text-lg leading-[120%]">
                Company
              </h2>
              <p className="leading-[150%] text-sm md:text-base text-[#D1D1D1]">
                HIG Inc. is a technology company that provides the software
                infrastructure powering Caplito. We do not offer financial,
                legal, or tax advice. All wallet activity is directed by you,
                the user — Caplito is non-custodial by design, meaning we never
                hold or control your funds.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-primary font-semibold text-base md:text-lg leading-[120%]">
                For Merchants
              </h2>
              <p className="leading-[150%] text-sm md:text-base text-[#D1D1D1]">
                Merchants using the Caplito platform are fully responsible for
                any tokens, rewards, or services they offer to their users. This
                includes meeting all applicable requirements for consumer
                protection, financial regulation, and data privacy in their
                jurisdiction.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-primary font-semibold text-base md:text-lg leading-[120%]">
                About the Digital Dollars
              </h2>
              <p className="leading-[150%] text-sm md:text-base text-[#D1D1D1]">
                The digital dollars (USDC) available through Caplito are issued
                by [PARTNER], a licensed and regulated financial institution.
                Caplito does not issue, manage, or hold custody of USDC on your
                behalf. For details on Circle's regulatory status, visit their
                website. Caplito does not issue or custody USDC.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-primary font-semibold text-base md:text-lg leading-[120%]">
                Just So You Know
              </h2>
              <p className="leading-[150%] text-sm md:text-base text-[#D1D1D1]">
                This website and all related materials are provided for
                informational purposes only. Nothing here should be considered
                an offer to sell or a request to buy any financial product or
                service. Participation in any digital asset program is voluntary
                and governed by the terms set by each respective merchant.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#555370]" />

          {/* Bottom Section - Site Map | Contact Us | Newsletter */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 ipad-horizontal:grid-cols-3 gap-8 md:gap-10">
            {/* Site Map */}
            <div className="flex flex-col items-start gap-5 md:gap-6">
              <h1 className="text-primary font-medium text-lg md:text-xl leading-[140%]">
                Trust and Legal
              </h1>
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <Link
                  href={"/terms-of-service"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Terms and Condition
                </Link>
                <Link
                  href={"/privacy-policy"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Privacy & Policy
                </Link>
                <Link
                  href={"/data-policy"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Data Policy
                </Link>
                <Link
                  href={"#"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Cookies Preferences
                </Link>
                <Link
                  href={"mailto:support@caplito.com"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col items-start gap-5 md:gap-6">
              <h1 className="text-primary font-medium text-lg md:text-xl leading-[140%]">
                Contact Us
              </h1>
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <Link
                  href={"mailto:support@caplito.com"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  support@caplito.com
                </Link>
                <Link
                  href={"tel:+13028028695"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  302-802-8695
                </Link>
                {/* <Link
                  href={"#"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  155 N. Wacker Suite 3650
                </Link>
                <Link
                  href={"#"}
                  className="text-[#D9D9D9] text-sm md:text-base hover:text-primary transition-colors"
                >
                  Chicago, IL 60606
                </Link> */}
              </div>
            </div>

            {/* Newsletter Sign Up */}
            <div className="flex flex-col items-start gap-4 md:gap-5 sm:col-span-2 ipad-horizontal:col-span-1">
              <h1 className="text-primary font-medium leading-[120%] text-2xl md:text-[28px]">
                Newsletter Sign Up
              </h1>
              <p className="text-[#D1D1D1] leading-[150%] text-sm md:text-base">
                Sign up for subscribing newsletter and join the growing Caplito
                community for updates.
              </p>
              <div className="flex flex-row gap-3 items-center w-full mt-1">
                <input
                  type="email"
                  placeholder="your email address"
                  className="flex-1 bg-white border border-[#E5E5E5] rounded-xl h-12 py-3 px-5 outline-0 placeholder:text-[#AAAAAA] placeholder:text-sm text-sm text-[#232040]"
                />
                <button className="w-12 h-12 rounded-xl bg-[#6C5CE7] flex items-center justify-center shrink-0">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9872 9.18258L2.23724 0.192888C1.97157 0.0433318 1.66664 -0.0217219 1.36307 0.00639324C1.0595 0.0345084 0.771706 0.154458 0.538026 0.35026C0.304345 0.546063 0.135876 0.808423 0.0550622 1.10239C-0.0257516 1.39635 -0.0150727 1.70796 0.0856762 1.9957L2.95724 10.4951L0.0856762 18.9954C0.00576136 19.2216 -0.0187364 19.4636 0.0142382 19.7013C0.0472129 19.9389 0.136698 20.1651 0.275185 20.361C0.413673 20.5569 0.597122 20.7167 0.81014 20.827C1.02316 20.9374 1.25953 20.995 1.49943 20.9951C1.76005 20.9945 2.01613 20.9267 2.24286 20.7982L17.9854 11.7935C18.2176 11.6634 18.411 11.4739 18.5457 11.2444C18.6805 11.0149 18.7518 10.7537 18.7523 10.4875C18.7528 10.2214 18.6824 9.9599 18.5485 9.72992C18.4145 9.49993 18.2218 9.30973 17.99 9.17882L17.9872 9.18258ZM1.49943 19.4951C1.49983 19.4913 1.49983 19.4876 1.49943 19.4838L4.28755 11.2451H9.74943C9.94834 11.2451 10.1391 11.1661 10.2798 11.0254C10.4204 10.8848 10.4994 10.694 10.4994 10.4951C10.4994 10.2962 10.4204 10.1054 10.2798 9.96474C10.1391 9.82409 9.94834 9.74508 9.74943 9.74508H4.28755L1.50505 1.51008C1.50413 1.50477 1.50222 1.49968 1.49943 1.49507L17.2494 10.4791L1.49943 19.4951Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#555370]" />

          {/* Copyright bar */}
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-3 md:gap-0">
            <h1 className="text-xs md:text-sm text-primary text-center md:text-left">
              © 2022–2026 HIG Inc. All rights reserved.
            </h1>
            <h1 className="text-xs md:text-sm text-[#D9D9D9] text-center md:text-right">
              Denver, CO • Dover, DE • Chicago, IL • Vancouver, BC
            </h1>
          </div>
        </Container>
      </footer>
    );
  }
};

export default Footer;
