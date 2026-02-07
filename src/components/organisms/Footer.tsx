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
        <Container className="w-full flex flex-col gap-10 md:gap-15 px-4 md:px-6">
          <div className="w-full flex flex-col items-start gap-4 md:gap-6">
            <Link href={"/"} className="flex items-center gap-3 md:gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 relative">
                <Image
                  src={"/img/logo/caplito.png"}
                  alt="Caplito"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-primary font-bold text-lg md:text-[23px]">
                Caplito
              </h1>
            </Link>
            <p className="leading-[140%] md:leading-[120%] text-sm md:text-base text-[#D1D1D1]">
              HIG builds the technology behind Caplito. We create the software
              that makes your digital wallet work — but we're not a bank, and
              we're not financial advisors. We don't give advice on money,
              taxes, or legal matters. You're always in control of your own
              funds. Caplito wallets are designed so that only you can access
              your money. We don't hold it for you, and we can't move it without
              your say-so. User-directed and non-custodial by design.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 ipad-horizontal:grid-cols-4 gap-8 md:gap-10">
            <div className="w-full md:col-span-2 flex flex-col items-start gap-6 md:gap-12.5 max-w-107">
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <h1 className="text-primary font-medium leading-[120%] text-2xl md:text-[32px]">
                  Newsletter Sign Up
                </h1>
                <p className="text-[#D1D1D1] leading-[140%] md:leading-[120%] text-base md:text-lg">
                  Sign up for subscribing newsletter and join the growing
                  Caplito community for updates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between h-auto sm:h-14.25 w-full">
                <input
                  type="email"
                  placeholder="your email address"
                  className="w-full sm:w-90 bg-[#F7F7F7] rounded-xl h-14 sm:h-full py-3 md:py-4 px-6 md:px-8 outline-0 placeholder:text-[#D1D1D1] placeholder:text-base md:placeholder:text-lg text-base md:text-lg"
                />
                <button className="w-full sm:w-14.25 h-14 sm:h-full rounded-xl bg-[#6C5CE7] flex items-center justify-center">
                  <svg
                    width="19"
                    height="21"
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
            <div className="flex flex-col items-start gap-5 md:gap-8">
              <h1 className="text-primary font-medium text-lg md:text-xl leading-[140%]">
                Site Map
              </h1>

              <div className="flex flex-col items-start gap-3 md:gap-5">
                <Link
                  href={"/privacy-policy"}
                  className="text-[#D9D9D9] text-sm md:text-base"
                >
                  Privacy & Policy
                </Link>
                <Link
                  href={"/terms-of-service"}
                  className="text-[#D9D9D9] text-sm md:text-base"
                >
                  Terms and Condition
                </Link>
                <Link
                  href={"/data-policy"}
                  className="text-[#D9D9D9] text-sm md:text-base"
                >
                  Data Policy
                </Link>
                <Link
                  href={"#"}
                  className="text-[#D9D9D9] text-sm md:text-base"
                >
                  Cookies Preferences
                </Link>
                <Link
                  href={"#"}
                  className="text-[#D9D9D9] text-sm md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start ipad-horizontal:items-end">
              <div className="flex flex-col items-start gap-5 md:gap-8">
                <h1 className="text-primary font-medium text-lg md:text-xl leading-[140%]">
                  Contact Us
                </h1>

                <div className="flex flex-col items-start gap-3 md:gap-5">
                  <Link
                    href={"#"}
                    className="text-[#D9D9D9] text-sm md:text-base"
                  >
                    help@caplito.com
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[#D9D9D9] text-sm md:text-base"
                  >
                    312-214-1234
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[#D9D9D9] text-sm md:text-base"
                  >
                    155 N. Wacker Suite 3650
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[#D9D9D9] text-sm md:text-base"
                  >
                    Chicago, IL 60606
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-0">
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <h1 className="text-xs md:text-sm text-primary text-center md:text-left">
                © 2022–2026 HIG Inc. All rights reserved.
              </h1>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <h1 className="text-xs md:text-base text-[#D9D9D9] text-center md:text-right">
                Denver, CO • Dover, DE • Chicago, IL • Vancouver, BC
              </h1>
            </div>
          </div>
        </Container>
      </footer>
    );
  } else {
    return (
      <footer className="w-full bg-primary pb-5 ipad-vertical:pb-7.5 lg:pb-15 font-satoshi">
        <Container className="w-full flex flex-col gap-10 md:gap-15 px-4 md:px-6 bg-[#3F3D4F] rounded-4xl">
          <div className="w-full flex flex-col items-start gap-4 md:gap-6">
            <Link href={"/"} className="flex items-center gap-3 md:gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 relative">
                <Image
                  src={"/img/logo/caplito.png"}
                  alt="Caplito"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-primary font-bold text-lg md:text-[23px]">
                Caplito
              </h1>
            </Link>
            <p className="leading-[140%] md:leading-[120%] text-sm md:text-base text-[#D1D1D1]">
              HIG builds the technology behind Caplito. We create the software
              that makes your digital wallet work — but we're not a bank, and
              we're not financial advisors. We don't give advice on money,
              taxes, or legal matters. You're always in control of your own
              funds. Caplito wallets are designed so that only you can access
              your money. We don't hold it for you, and we can't move it without
              your say-so. User-directed and non-custodial by design.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 ipad-horizontal:grid-cols-4 gap-8 md:gap-10">
            <div className="w-full md:col-span-2 flex flex-col items-start gap-6 md:gap-12.5 max-w-107">
              <div className="flex flex-col items-start gap-3 md:gap-4">
                <h1 className="text-primary font-medium leading-[120%] text-2xl md:text-[32px]">
                  Newsletter Sign Up
                </h1>
                <p className="text-[#D1D1D1] leading-[140%] md:leading-[120%] text-base md:text-lg">
                  Sign up for subscribing newsletter and join the growing
                  Caplito community for updates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between h-auto sm:h-14.25 w-full">
                <input
                  type="email"
                  placeholder="your email address"
                  className="w-full sm:w-90 bg-[#F7F7F7] rounded-xl h-14 sm:h-full py-3 md:py-4 px-6 md:px-8 outline-0 placeholder:text-[#D1D1D1] placeholder:text-base md:placeholder:text-lg text-base md:text-lg"
                />
                <button className="w-full sm:w-14.25 h-14 sm:h-full rounded-xl bg-[#6C5CE7] flex items-center justify-center">
                  <svg
                    width="19"
                    height="21"
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
            <div className="flex flex-col items-start gap-5 md:gap-8">
              <h1 className="text-primary font-medium text-lg md:text-xl leading-[140%]">
                Site Map
              </h1>

              <div className="flex flex-col items-start gap-3 md:gap-5">
                <Link
                  href={"/privacy-policy"}
                  className="text-[#D9D9D9] text-sm md:text-base"
                >
                  Privacy & Policy
                </Link>
                <Link
                  href={"/terms-of-service"}
                  className="text-[#D9D9D9] text-sm md:text-base"
                >
                  Terms and Condition
                </Link>
                <Link
                  href={"/data-policy"}
                  className="text-[#D9D9D9] text-sm md:text-base"
                >
                  Data Policy
                </Link>
                <Link
                  href={"#"}
                  className="text-[#D9D9D9] text-sm md:text-base"
                >
                  Cookies Preferences
                </Link>
                <Link
                  href={"#"}
                  className="text-[#D9D9D9] text-sm md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start ipad-horizontal:items-end">
              <div className="flex flex-col items-start gap-5 md:gap-8">
                <h1 className="text-primary font-medium text-lg md:text-xl leading-[140%]">
                  Contact Us
                </h1>

                <div className="flex flex-col items-start gap-3 md:gap-5">
                  <Link
                    href={"#"}
                    className="text-[#D9D9D9] text-sm md:text-base"
                  >
                    help@caplito.com
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[#D9D9D9] text-sm md:text-base"
                  >
                    312-214-1234
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[#D9D9D9] text-sm md:text-base"
                  >
                    155 N. Wacker Suite 3650
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[#D9D9D9] text-sm md:text-base"
                  >
                    Chicago, IL 60606
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-0">
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <h1 className="text-xs md:text-sm text-primary text-center md:text-left">
                © 2022–2026 HIG Inc. All rights reserved.
              </h1>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <h1 className="text-xs md:text-base text-[#D9D9D9] text-center md:text-right">
                Denver, CO • Dover, DE • Chicago, IL • Vancouver, BC
              </h1>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
};

export default Footer;
