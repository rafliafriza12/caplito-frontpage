import {
  BodyMediumMedium,
  BodySmallRegular,
  Heading4,
} from "@/components/atoms/Typography";

interface StockCardProps {
  companyName: string;
  price: string;
  change: string;
  changePercentage: string;
  className?: string;
}

export function StockCard({
  companyName,
  price,
  change,
  changePercentage,
  className = "",
}: StockCardProps) {
  return (
    <div
      className={`relative ipad-vertical:absolute z-0 flex py-3 px-6 bg-primary flex-col items-start gap-3 ${className}`}
    >
      <BodyMediumMedium className="text-[#6F6F6F]">
        {companyName}
      </BodyMediumMedium>
      <div className="flex items-center gap-3">
        <Heading4 className="text-secondary font-medium">{price}</Heading4>
        <BodySmallRegular className="text-secondary">{change}</BodySmallRegular>
        <div className="flex items-center gap-1 px-2 py-1 rounded-[4px] bg-[#40C4AA]/10">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0565 5.83333C13.0565 5.48815 13.3363 5.20833 13.6815 5.20833H18.3333C18.6785 5.20833 18.9583 5.48815 18.9583 5.83333V10.4549C18.9583 10.8 18.6785 11.0799 18.3333 11.0799C17.9881 11.0799 17.7083 10.8 17.7083 10.4549V7.33571L12.5951 12.4177C12.2043 12.8062 11.8675 13.141 11.5616 13.3731C11.2336 13.6219 10.8693 13.81 10.4208 13.81C9.9723 13.8099 9.60801 13.6217 9.28016 13.3728C8.97431 13.1407 8.63756 12.8058 8.24686 12.4173L8.01831 12.19C7.58985 11.764 7.31206 11.4896 7.08075 11.3141C6.86389 11.1495 6.76251 11.1311 6.69537 11.1311C6.62823 11.1312 6.52686 11.1496 6.31012 11.3143C6.07894 11.49 5.80135 11.7646 5.3732 12.191L2.10764 15.4429C1.86305 15.6864 1.46732 15.6856 1.22376 15.441C0.980193 15.1964 0.981023 14.8007 1.22561 14.5571L4.52024 11.2763C4.91101 10.8871 5.24781 10.5517 5.55373 10.3192C5.88164 10.0699 6.24609 9.8813 6.69491 9.88114C7.14374 9.88097 7.50832 10.0693 7.83642 10.3183C8.1425 10.5506 8.47954 10.8858 8.8706 11.2747L9.09915 11.502C9.52724 11.9276 9.80478 12.2017 10.0359 12.3771C10.2525 12.5416 10.3538 12.56 10.4209 12.56C10.4881 12.56 10.5894 12.5416 10.8061 12.3772C11.0372 12.2019 11.3148 11.9278 11.743 11.5023L16.8179 6.45833H13.6815C13.3363 6.45833 13.0565 6.17851 13.0565 5.83333Z"
              fill="#40C4AA"
            />
          </svg>
          <BodySmallRegular className="text-[#40C4AA]">
            {changePercentage}
          </BodySmallRegular>
        </div>
      </div>
    </div>
  );
}
