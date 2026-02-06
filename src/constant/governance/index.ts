export const governanceCategory: string[] = [
  "Board of Commissioners",
  "Board of Directors",
];

export const committeesCategory: string[] = [
  "BOC Committees",
  "BOD Committees",
];

export interface ISupportingProfession {
  name: string;
  address: string;
  contact: {
    phone: string;
    ext?: string;
    fax: string;
  };
}

export const supportingProfessionalData: ISupportingProfession[] = [
  {
    name: "Public Accountant Amir Abadi Jusuf, Aryanto, Mawar & Rekan",
    address: "Plaza Asia Level 10 Jl. Jend. Sudirman Kav. 59 Jakarta 12910",
    contact: {
      phone: "+62 21 514013430",
      fax: "+6221 51401350",
    },
  },
  {
    name: "Securities Administration Bureau: PT Ficomindo Buana Registrar",
    address: "Jl. Kyai Caringin No. 2-A Jakarta 10150",
    contact: {
      phone: "+6221 2263 8327",
      fax: "+6221 2263 9048",
    },
  },
  {
    name: "Trustee PT Bank KB Bukopin Tbk Treasury Division – Trustee Work Unit",
    address:
      "Bank Bukopin Tower 8th Floor Jl. MT Haryono Kav 50-51, Jakarta 12770",
    contact: {
      phone: "+6221 7988266",
      ext: "1859/1861/1862",
      fax: "+6221 7980705",
    },
  },
];

export interface IFaqItems {
  id: string;
  title: string;
  content: string;
}

export const faqItems: IFaqItems[] = [
  {
    id: "what-is-caplito-and-how-does-it-work",
    title: "What is Caplito and how does it work?",
    content:
      "Caplito is a wallet for your phone. Think of it like a digital wallet that lets you send, receive, and hold money — fast. When you sign up, your account is connected to your phone number. Every time you log in, we text you a quick code to keep your account safe. That's it. No passwords to remember, and you can access your digital money from any device.",
  },
  {
    id: "what-kind-of-money-does-caplito-use",
    title: "What kind of money does Caplito use?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo unde rem architecto odit culpa ut tempora vitae ad molestias. Soluta quia quas sunt eaque voluptatibus fugit aperiam debitis accusamus unde!",
  },
  {
    id: "what-happens-when-a-store-or-person-accepts-payment-through-caplito?",
    title:
      "What happens when a store or person accepts payment through Caplito?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo unde rem architecto odit culpa ut tempora vitae ad molestias. Soluta quia quas sunt eaque voluptatibus fugit aperiam debitis accusamus unde!",
  },
  {
    id: "is-my-money-safe-with-caplito",
    title: "Is my money safe with Caplito?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo unde rem architecto odit culpa ut tempora vitae ad molestias. Soluta quia quas sunt eaque voluptatibus fugit aperiam debitis accusamus unde!",
  },
  {
    id: "does-caplito-charge-any-fees",
    title: "Does Caplito charge any fees?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo unde rem architecto odit culpa ut tempora vitae ad molestias. Soluta quia quas sunt eaque voluptatibus fugit aperiam debitis accusamus unde!",
  },
  {
    id: "where-can-i-use-caplito",
    title: "Where can I use Caplito?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo unde rem architecto odit culpa ut tempora vitae ad molestias. Soluta quia quas sunt eaque voluptatibus fugit aperiam debitis accusamus unde!",
  },
  {
    id: "are-there-limits-on-how-much-i-can-send-or-receive",
    title: "Are there limits on how much I can send or receive?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo unde rem architecto odit culpa ut tempora vitae ad molestias. Soluta quia quas sunt eaque voluptatibus fugit aperiam debitis accusamus unde!",
  },
];

export const policyCategory: string[] = [
  "Policies",
  "Board Manuals",
  "Code of Conduct",
  "Articles of Association",
  "Supporting Documents",
];

export interface IPolicyCardContent {
  title: string;
  subTitle: string;
}

export const policyCardData: IPolicyCardContent[] = [
  {
    title: "Investment Policy",
    subTitle: "02 June 2025",
  },
  {
    title: "Dividend Policy",
    subTitle: "02 May 2018",
  },
  {
    title: "Risk Management",
    subTitle: "Enterprise Risk Management System",
  },
  {
    title: "Dividend Policy",
    subTitle: "Decision Letter of BOD No. 1082 Procurement System 1.0",
  },
];
