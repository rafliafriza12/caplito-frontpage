import Links from "@/components/atoms/Links";
import { BodySmallRegular, Heading3 } from "@/components/atoms/Typography";
import { IESGData } from "@/constant/home";

interface IESGCardProps {
  input: IESGData;
  bordered?: boolean;
}
const ESGCard: React.FC<IESGCardProps> = ({ input, bordered }) => {
  return (
    <div
      className={`"w-full ipad-horizontal:min-h-[600px] flex flex-col justify-between items-start gap-10 bg-white-mineral p-5 ${bordered ? "ipad-horizontal:border-r ipad-horizontal:border-charcoal-green-dark" : ""} "`}
    >
      <Heading3>{input.title}</Heading3>

      <div className="w-full flex flex-col gap-4 items-start">
        <BodySmallRegular>{input.description}</BodySmallRegular>
        <Links text={input.linkText} link={input.link} />
      </div>
    </div>
  );
};

export default ESGCard;
