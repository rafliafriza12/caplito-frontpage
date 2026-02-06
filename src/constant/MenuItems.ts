export interface IMenuItem {
  name: string;
  link: string;
  child?: {
    name: string;
    link: string;
  }[];
}

export const menuItems: IMenuItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Terms of Service",
    link: "/terms-of-services",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Data Policy",
    link: "/data-policy",
  },
];
