import { IJourneyCard } from "@/components/molecules/home/JourneyCard";

export interface IIdentityData {
  headline: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export interface IESGData {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export interface IContactUsData {
  title: string;
  contact: string;
  link: string;
}

export interface IWhatWeDoData {
  title: string;
  imageUrl: string;
  description: string;
}

export const journeyData: IJourneyCard[] = [
  {
    title: "Investor",
    subtitle: "Information to guide investment decisions",
    linkText: "Investment Relations",
    link: "/investor-relations",
  },
  {
    title: "Business Partner",
    subtitle: "Learn about business and partnerships opportunities",
    linkText: "Business & Operations",
    link: "/business-and-operations",
  },
  {
    title: "Journalist",
    subtitle: "Find press releases, announcements, or media kits",
    linkText: "Media",
    link: "/media",
  },
  {
    title: "Job Seeker",
    subtitle:
      "Shape a sustainable future together with us through a career at BUMI",
    linkText: "Career",
    link: "/career",
  },
];

export const identityData: IIdentityData[] = [
  {
    headline: "who we are",
    title: "At A Glance",
    subtitle: "A Global Leader in Natural Resources",
    description:
      "Bumi Resources is the world’s largest thermal coal exporter and one of Indonesia’s leading natural resources companies, operating a diversified portfolio across thermal coal, minerals, metals, downstream processing, and mining-related industries.",
    imageUrl: "/img/who-are-we-bg.webp",
  },
  {
    headline: "our presence",
    title: "Global Footprint",
    subtitle: "Operations Across Strategic Regions",
    description:
      "With operations and partnerships spanning Indonesia and key international markets, Bumi Resources plays a vital role in supporting regional development and meeting global energy demand.",
    imageUrl: "/img/esg-background.png",
  },
  {
    headline: "our commitment",
    title: "Sustainability & Responsibility",
    subtitle: "Driving Long-Term Value",
    description:
      "Bumi Resources is committed to responsible mining practices, environmental stewardship, and community development, ensuring long-term value creation for stakeholders and future generations.",
    imageUrl: "/img/who-are-we-bg.webp",
  },
  {
    headline: "our vision",
    title: "Future Outlook",
    subtitle: "Shaping Sustainable Growth",
    description:
      "Bumi Resources focuses on innovation, operational excellence, and strategic diversification to strengthen its resilience and support sustainable growth in an evolving global energy landscape.",
    imageUrl: "/img/esg-background.png",
  },
];

export const esgData: IESGData[] = [
  {
    title: "Climate & Environment",
    description:
      "Environmental management at KPC and Arutmin is run through ISO 14001–based systems and environmental risk assessments, including more than 1,500 hectares of reclaimed and conservation land that has earned national awards for emission-reduction transparency.",
    link: "/",
    linkText: "Our Environmental Approach",
  },
  {
    title: "People & Safety",
    description:
      "Occupational health and safety is managed under systems aligned with ISO 45001 and Indonesian mining regulations, and independent research has highlighted PT Bumi Resources Tbk as one of the stronger performers in OHS disclosure among Indonesian mining companies.",
    link: "/",
    linkText: "Learn About People & Safety",
  },
  {
    title: "Communities & Livehoods",
    description:
      "Through seven flagship community programs in education, health, SME development, infrastructure, and culture, BUMI Group earned 9 awards at the 2024 CSR & Sustainable Village Development Awards plus further national CSR and SDG recognitions.",
    link: "/",
    linkText: "Explore Community Programs",
  },
  {
    title: "Governance & Ethics",
    description:
      "Our sustainability policy and “Speak Up” channel underpin strong governance and ethics, and in 2022 BUMI ranked #1 out of 56 coal companies globally in Refinitiv’s ESG assessment, with our 2023 Sustainability Report receiving an A+ “Best Sustainability Report” and a 2025 ESG Gold Star Award.",
    link: "/",
    linkText: "See Governance & Policies",
  },
];

export const contactUsData: IContactUsData[] = [
  {
    title: "Media Inquiry",
    contact: "communications@bumiresources.com",
    link: "#",
  },
  {
    title: "Investor Relations",
    contact: "investorrelations@bumiresources.com",
    link: "#",
  },
  {
    title: "Career & Internship",
    contact: "email@bumiresources.com",
    link: "#",
  },
];

export const whatWeDoData: IWhatWeDoData[] = [
  {
    title: "Coal & Energy",
    imageUrl: "/img/who-are-we-bg.webp",
    description:
      "Coal remains the foundation of our business. Through world-class operations and infrastructure, we supply reliable thermal coal to domestic and international markets, supporting energy security while continuously improving efficiency, safety, and environmental performance.",
  },
  {
    title: "Minerals",
    imageUrl: "/img/who-are-we-bg.webp",
    description:
      "We are strengthening our presence in critical and strategic minerals such as copper, bauxite, and gold to meet long-term demand and support the global energy transition. These assets form a key pillar of our diversification strategy, positioning Bumi Resources to participate in the growth of electrification, renewable energy, and sustainable technologies.",
  },
];

// ============================================================
export interface ITestimonial {
  date: string;
  comment: string;
  person: {
    imgUrl: string;
    name: string;
    role: string;
  };
}

export const testimonialData: ITestimonial[] = [
  {
    date: "15 December 2025",
    comment:
      "I’ve tested dozens of wallets and payout systems. Most feel rushed or overengineered. This one felt intentional. The flow makes sense, fees are competitive, and  support actually responds like humans.",
    person: {
      imgUrl: "/img/testimonial/sarah-l.png",
      name: "Sarah L",
      role: "Product Professional",
    },
  },
  {
    date: "06 January 2026",
    comment:
      "Works at truck stops. Works at 2am. Works on my old phone. That's all I needed to know.",
    person: {
      imgUrl: "/img/testimonial/miguel-o.png",
      name: "Miguel O",
      role: "General Invite-Only User",
    },
  },
  {
    date: "26 January 2026",
    comment: "No holds. No delays. No 'pending' for 3 days.",
    person: {
      imgUrl: "/img/testimonial/david-h.png",
      name: "David K",
      role: "General Invite-Only User",
    },
  },
  {
    date: "21 December 2025",
    comment:
      "I’ve tested dozens of wallets and payout systems. Most feel rushed or overengineered. This one felt intentional. The flow makes sense, fees are competitive, and  support actually responds like humans.",
    person: {
      imgUrl: "/img/testimonial/olivia-n.png",
      name: "Olivia N",
      role: "General Invite-Only User",
    },
  },
  {
    date: "15 December 2025",
    comment: "My sister lives three states away. Felt like handing her cash",
    person: {
      imgUrl: "/img/testimonial/sarah-l.png",
      name: "Kendra B",
      role: "Product Professional",
    },
  },
  {
    date: "06 January 2026",
    comment: "I'm not losing another weekend waiting for a transfer to clear.",
    person: {
      imgUrl: "/img/testimonial/miguel-o.png",
      name: "John C",
      role: "General Invite-Only User",
    },
  },
  {
    date: "26 January 2026",
    comment:
      "Works at truck stops. Works at 2am. Works on my old phone. That's all I needed to know",
    person: {
      imgUrl: "/img/testimonial/david-h.png",
      name: "Dominiq V",
      role: "General Invite-Only User",
    },
  },
  {
    date: "21 December 2025",
    comment:
      "I drive 11 hours a day. I don't have time to figure out an app. This one I didn't have to.",
    person: {
      imgUrl: "/img/testimonial/olivia-n.png",
      name: "Ejike B",
      role: "General Invite-Only User",
    },
  },
  {
    date: "21 December 2025",
    comment:
      "Quick math: faster money, fewer fees, less stress. That's it. Every day my money sits 'pending' is a day I'm not earning on it. Fixed that.",
    person: {
      imgUrl: "/img/testimonial/olivia-n.png",
      name: "Allen C",
      role: "General Invite-Only User",
    },
  },
];
