import { ReactNode } from "react";

export interface DataPolicySection {
  id: string;
  title: string;
  content: ReactNode[];
}

export const dataPolicydata: DataPolicySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      <p key="intro-1">
        <strong>
          How Caplito handles your data — simply, clearly, and responsibly.
        </strong>
      </p>,
      <p key="intro-2">
        At Caplito, we believe your data should be treated the same way as your
        money: with respect, transparency, and under your control.
      </p>,
      <p key="intro-3">
        This page explains what data we collect, why we collect it, and how we
        keep it safe — in plain language.
      </p>,
      <div key="intro-4">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3 mb-3">
          The Short Version
        </h1>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>We collect only what’s needed to run Caplito.</li>
          <li>We don’t sell your personal data.</li>
          <li>We can’t see or access your money.</li>
          <li>You stay in control of your wallet and your information.</li>
          <li>No passwords. No unnecessary tracking. No surprises.</li>
        </ul>
      </div>,
    ],
  },
  {
    id: "what-data-we-collect",
    title: "What Data We Collect",
    content: [
      <p key="wdwc-1">
        We collect a small amount of information to make Caplito work smoothly
        and securely.
      </p>,
      <div key="wdwc-2">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3 mb-3">
          Information You Provide
        </h1>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Phone number or email address (for sign-in)</li>
          <li>Username</li>
          <li>Support messages you send us</li>
          <li>Preferences you choose inside the app</li>
        </ul>
      </div>,
      <div key="wdwc-3">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3 mb-3">
          Information Collected Automatically
        </h1>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Device type and operating system</li>
          <li>App usage data (for performance and reliability)</li>
          <li>IP address (for security and fraud prevention)</li>
        </ul>
        <p>
          We do not collect bank login credentials, private keys, or wallet
          secrets.
        </p>
      </div>,
    ],
  },
  {
    id: "what-we-dont-collect",
    title: "What We Don’t Collect",
    content: [
      <p key="wwdc-1">Security is built into Caplito from the start:</p>,
      <ul key="wwdc-2" className="list-disc list-inside space-y-1 pl-2 ">
        <li>Encrypted data in transit and at rest</li>
        <li>Limited internal access on a need-to-know basis</li>
        <li>Regular security reviews and monitoring</li>
        <li>Fraud detection systems to keep accounts safe</li>
      </ul>,
      <p key="wwdc-3">
        Even with all this, <strong>only you can control your wallet.</strong>
      </p>,
    ],
  },
  {
    id: "sharing-your-data",
    title: "Sharing Your Data",
    content: [
      <p key="syd-1">We share data only when necessary:</p>,
      <ul key="syd-2" className="list-disc list-inside space-y-1 pl-2 \">
        <li>With trusted service providers (hosting, analytics, messaging)</li>
        <li>To comply with legal obligations</li>
        <li>To protect Caplito and our users from fraud or harm</li>
      </ul>,
      <p key="syd-3">
        We <strong>never sell your personal data.</strong>
      </p>,
    ],
  },
  {
    id: "cookies-&-tracking",
    title: "Cookies & Tracking",
    content: [
      <p key="ct-1">We use minimal cookies and similar technologies to:</p>,
      <ul key="ct-2" className="list-disc list-inside space-y-1 pl-2 ">
        <li>Keep the site working properly</li>
        <li>Understand general usage patterns</li>
        <li>Improve performance</li>
      </ul>,
      <p key="ct-3">No creepy tracking. No hidden surveillance.</p>,
    ],
  },
  {
    id: "your-choices-&-rights",
    title: "Your Choices & Rights",
    content: [
      <p key="ycr-1">You have the right to:</p>,
      <ul key="ycr-2" className="list-disc list-inside space-y-1 pl-2 ">
        <li>Access your personal data</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion (where legally allowed)</li>
        <li>Opt out of certain communications</li>
      </ul>,
      <p key="ycr-3">You’re always in control.</p>,
    ],
  },
  {
    id: "non-custodial-by-design",
    title: "Non-Custodial by Design",
    content: [
      <p key="ncbd-1">
        Caplito is a <strong>non-custodial platform.</strong>
      </p>,
      <p key="ncbd-2">That means:</p>,
      <ul key="ncbd-3" className="list-disc list-inside space-y-1 pl-2 ">
        <li>We don’t hold your funds</li>
        <li>We can’t move or freeze your money</li>
        <li>We can’t access your wallet</li>
      </ul>,
      <p key="ncbd-4">
        Your money stays on the blockchain — controlled by you.
      </p>,
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children’s Privacy",
    content: [
      <p key="cpriv-1">
        Caplito is not intended for children under the age required by law.  We
        don’t knowingly collect data from minors.
      </p>,
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to This Policy",
    content: [
      <p key="ycr-1">If we ever update this Data Policy:</p>,
      <ul key="ycr-2" className="list-disc list-inside space-y-1 pl-2 ">
        <li>We’ll update the date</li>
        <li>We’ll explain what changed</li>
        <li>We won’t reduce your rights without notice</li>
      </ul>,
    ],
  },
  {
    id: "questions",
    title: "Questions?",
    content: [
      <p key="question-1">We’re here to help.</p>,
      <p key="question-2">
        If you have questions about your data or privacy,{" "}
        <strong>contact us at: privacy@caplito.com</strong>
      </p>,
    ],
  },
];

export const tableOfContents = dataPolicydata.map((section) => ({
  id: section.id,
  title: section.title,
}));
