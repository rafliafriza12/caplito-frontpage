export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface CTASection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface Report {
  id: number;
  link: string;
  year: string;
  title: string;
  shortDescription: string;
  division: string;
  domain: string;
  updatedAt: string;
  longTitle: string;
}

export interface Vacancy {
  title: string;
  shortDescription: string;
  tags: string[];
  detailUrl: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}