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
    id: "what-does-the-word-caplito-mean",
    title: "What does the word “Caplito” mean?",
    content: `Cap- = Capital (your money, your leverage, your power)
     -lito = A small, approachable suffix from Spanish/Italian 
     
    Caplito = Literally “Little Capital.” But in your hands? It’s power with teeth.  You don’t need a fortune to feel in control of your finances. You need Caplito—your own personal pot of money that’s easy to access, simple to manage, and smart by design.  Built for those who want big control over even the smallest stash.`,
  },
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
      "Your money in Caplito is held as digital dollars. These digital dollars are backed one-for-one by real US dollars — meaning for every dollar in your Caplito account, there's a real dollar sitting in reserve. It works just like cash, but lives on your phone and moves at internet speed.",
  },
  {
    id: "what-happens-when-a-store-or-person-accepts-payment-through-caplito?",
    title:
      "What happens when a store or person accepts payment through Caplito?",
    content:
      'When someone accepts a Caplito payment, they get the full value instantly — no waiting days for the money to "clear." Business owners can keep the money in their Caplito account or move it straight to their regular bank account whenever they want. It\'s their choice.',
  },
  {
    id: "is-my-money-safe-with-caplito",
    title: "Is my money safe with Caplito?",
    content:
      "Yes — and here's the important part: your money belongs to you, not us. Caplito doesn't mix your funds with other people's money or hold it in some company account. Your balance sits in a wallet that only you control. We just give you the tools to move it around safely. You decide when to add money, take it out, or send it to someone else.",
  },
  {
    id: "does-caplito-charge-any-fees",
    title: "Does Caplito charge any fees?",
    content:
      "Sending money to friends, family, or anyone else is completely free. If you want to add money to your Caplito account, our partner services may charge a small fee. And if you want to move money from Caplito back to your bank account, there's a 5% fee — which is standard in the industry.",
  },
  {
    id: "where-can-i-use-caplito",
    title: "Where can I use Caplito?",
    content: "Right now, Caplito works in the United States and Canada.",
  },
  {
    id: "are-there-limits-on-how-much-i-can-send-or-receive",
    title: "Are there limits on how much I can send or receive?",
    content:
      "Caplito doesn't put limits on your money. You can send or receive as much as you want. However, your bank or card company might have their own daily limits. So if a payment doesn't go through, check with your bank first — it's usually on their end, not ours.",
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
