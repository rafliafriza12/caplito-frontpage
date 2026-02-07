import { ReactNode } from "react";

export interface PrivacyPolicySection {
  id: string;
  title: string;
  content: ReactNode[];
}

export const privacyPolicyData: PrivacyPolicySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      <p key="intro-1">
        Caplito is a software service provided by HIG Inc. ("Caplito," "we,"
        "us," or "our"). We enable users to create smart wallets tied to their
        phone number, send and receive stablecoin-denominated payments, and
        interact with individuals or businesses through messages, payments, and
        tokens.
      </p>,
      <p key="intro-2">
        This Privacy Policy describes how we collect, use, store, share, and
        protect your personal information when you access or use Caplito via our
        mobile application, web interface, or messaging-based features
        (collectively, the "App" or "Services"). It also explains your rights
        regarding your personal information and how to exercise them.
      </p>,
      <p key="intro-3">
        Our App and related Services are designed for use by individuals for
        their personal, family, or household purposes. We may provide additional
        or supplemental privacy notices for specific products or services at the
        time we collect personal information.
      </p>,
      <p key="intro-4">
        By accessing or using our Services, you acknowledge that you have read
        and understood this Privacy Policy. If you do not agree with our
        practices, please do not use our Services.
      </p>,
    ],
  },
  {
    id: "personal-information-we-collect",
    title: "Personal Information We Collect",
    content: [
      <p key="piwc-1">
        We collect information to provide, maintain, and improve our Services.
        The types of information we collect depend on how you interact with us.
      </p>,
      <div key={"piwc-2"}>
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3 mb-3">
          Information You Provide Directly
        </h1>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Contact Data
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>First and last name</li>
          <li>Email address</li>
          <li>Mailing address</li>
          <li>
            Phone number (required for account creation, verification, and
            transaction routing)
          </li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Identity Data
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Date of birth</li>
          <li>Social Security Number or Taxpayer Identification Number</li>
          <li>Driver's license number</li>
          <li>Copy of government-issued identification</li>
          <li>
            Other information required for identity verification and regulatory
            compliance
          </li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Financial Data
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Bank account information</li>
          <li>Payment card details</li>
          <li>Other payment method information</li>
          <li>
            Funding source metadata (transaction amounts, funding method,
            confirmation status)
          </li>
        </ul>
        <p className="mb-3">
          Note: We do not store full card numbers or complete bank account
          credentials—these are handled by our payment processing partners.
        </p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Transaction Data
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Information about payments you send or receive</li>
          <li>Transaction amounts, timestamps, and recipient identifiers</li>
          <li>Token types and associated metadata</li>
          <li>Messages, photos, or content attached to transactions</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Profile Data
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Display name and avatar</li>
          <li>Biographical information you choose to share</li>
          <li>Preferences and settings</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Communications
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Messages exchanged with us through the App, email, social media, or
            other channels
          </li>
          <li>
            Support communications including chat logs and call recordings
            (where permitted)
          </li>
          <li>Feedback and survey responses</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          User-Generated Content
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Token creation metadata (name, symbol, supply parameters) if you
            create branded stablecoins
          </li>
          <li>Content you post or share through the Services</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Marketing Data
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Preferences for receiving marketing communications</li>
          <li>Details about your engagement with marketing content</li>
        </ul>
      </div>,
      <div key={"piwc-3"}>
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mb-3">
          Information from Third-Party Sources
        </h1>
        <p className="mb-3">
          We may combine personal information we receive from you with
          information obtained from other sources, including:
        </p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Public Sources
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Government agencies and public records</li>
          <li>Social media platforms (publicly available information)</li>
          <li>Public blockchain data</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Data Providers
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Information services and data licensors</li>
          <li>Identity verification services</li>
          <li>Credit reporting agencies (where applicable)</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Payment Partners
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Transaction confirmations and status updates from payment processors
          </li>
          <li>Banking partners and financial institutions</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Other Users
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Information about you provided by other users (e.g., when they send
            you a payment or message)
          </li>
        </ul>
      </div>,
      <div key={"piwc-4"}>
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mb-3">
          Information Collected Automatically
        </h1>
        <p className="mb-3">
          We, our service providers, and business partners may automatically
          collect information about you, your device, and your interactions with
          our Services.
        </p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Device Data
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Device type, operating system, and browser type</li>
          <li>Unique device identifiers</li>
          <li>IP address</li>
          <li>Language settings</li>
          <li>Mobile network information</li>
          <li>General location derived from IP address</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Online Activity Data
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Pages or screens viewed within the App</li>
          <li>Navigation paths and feature usage</li>
          <li>Access times and session duration</li>
          <li>Actions taken within the Services</li>
          <li>Crash reports and error logs</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Location Data
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Precise location when you authorize the App to access your device's
            location services
          </li>
          <li>General location derived from IP address</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Wallet and Blockchain Data
        </h4>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Smart wallet address generated upon registration</li>
          <li>Transaction history and metadata</li>
          <li>On-chain data recorded on public blockchain networks</li>
        </ul>
        <p className="">
          Important: Blockchain data is immutable and publicly accessible. We
          cannot delete or modify information once recorded on a blockchain.
        </p>
      </div>,
    ],
  },
  {
    id: "how-we-use-your-personal-information",
    title: "How We Use Your Personal Information",
    content: [
      <p key="hwuypi-1">
        We use collected information for the following purposes:
      </p>,
      <div key="hwuypi-2">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3 mb-3">
          Service Delivery
        </h1>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Create and maintain your account and wallet</li>
          <li>Process transactions and display balances</li>
          <li>Enable payments between users and businesses</li>
          <li>Deliver messages and content attached to transactions</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Enable security features and authenticate access</li>
        </ul>
      </div>,
      <div key="hwuypi-3">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mb-3">
          Communications
        </h1>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Send transactional notifications via SMS, push notifications, or
            email
          </li>
          <li>Deliver service announcements and updates</li>
          <li>Communicate about your account and activity</li>
          <li>Respond to your requests and feedback</li>
        </ul>
      </div>,
      <div key="hwuypi-4">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mb-3">
          Research and Development
        </h1>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Analyze usage patterns to improve our Services</li>
          <li>Develop new features and functionality</li>
          <li>Conduct research and analytics</li>
          <li>Test and troubleshoot products</li>
        </ul>
      </div>,
      <div key="hwuypi-5">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mb-3">
          Marketing
        </h1>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Send promotional communications (with your consent)</li>
          <li>Personalize your experience based on preferences</li>
          <li>Measure marketing effectiveness</li>
        </ul>
      </div>,
      <div key="hwuypi-6">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mb-3">
          Compliance and Protection
        </h1>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Comply with applicable laws, regulations, and legal processes</li>
          <li>
            Meet anti-money laundering (AML), know-your-customer (KYC), and
            FinCEN requirements
          </li>
          <li>Respond to lawful requests from government authorities</li>
          <li>Detect, investigate, and prevent fraud or illegal activity</li>
          <li>Enforce our Terms of Service and other agreements</li>
          <li>Protect our rights, privacy, safety, or property</li>
        </ul>
      </div>,
      <div key="hwuypi-7">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mb-3">
          With Your Consent
        </h1>
        <ul className="list-disc list-inside space-y-1 pl-2 ">
          <li>
            For any other purpose disclosed to you with your explicit consent
          </li>
        </ul>
      </div>,
    ],
  },
  {
    id: "how-we-share-your-personal-information",
    title: "How We Share Your Personal Information",
    content: [
      <p key="hwsypi-1">
        We do not sell or rent your personal information. We may share your
        information in the following circumstances:
      </p>,
      <div key="hwsypi-2">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3 mb-3">
          Service Providers
        </h1>
        <p className="mb-3">
          We engage trusted third-party companies to perform services on our
          behalf, including:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Cloud Hosting: Infrastructure, storage, and computing services
          </li>
          <li>
            Payment Processing: Partners facilitating funding, withdrawals, and
            transactions
          </li>
          <li>Identity Verification: KYC and fraud prevention services</li>
          <li>
            Messaging Infrastructure: SMS, push notification, and email delivery
          </li>
          <li>
            Customer Support: Tools and platforms for managing support requests
          </li>
          <li>Analytics: Services helping us understand usage patterns</li>
          <li>Security: Fraud detection and cybersecurity services</li>
        </ul>
        <p className="mb-3">
          These providers are contractually obligated to protect your
          information and use it only for services they provide to us.
        </p>
      </div>,
      <div key="hwsypi-3">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mb-3">
          Professional Advisors
        </h1>
        <p className="mb-3">
          We may share information with lawyers, auditors, bankers, and insurers
          where necessary for professional services.
        </p>
      </div>,
      <div key="hwsypi-4">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F]  mb-3">
          Blockchain Networks
        </h1>
        <p className="mb-3">
          When you conduct transactions, certain information is recorded on
          public blockchain networks:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Your wallet address</li>
          <li>Transaction amounts and timestamps</li>
          <li>Token information</li>
        </ul>
        <p className="mb-3">
          Important: Blockchain data is immutable and publicly accessible. We
          cannot delete, modify, or control information once recorded on a
          blockchain. While your wallet address is pseudonymous, third parties
          may associate it with your identity through blockchain analysis.
        </p>
      </div>,
      <div key="hwsypi-5">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F]  mb-3">
          Other Users
        </h1>
        <p className="mb-3">
          When you send or receive payments, other users may see:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Your phone number (if shared or mutually recognized)</li>
          <li>Your display name and avatar</li>
          <li>Transaction amounts and token types</li>
          <li>Messages, photos, or content attached to transactions</li>
        </ul>
        <p className="mb-3">
          Exercise discretion when adding content to transactions or sharing
          information with other users.
        </p>
      </div>,
      <div key="hwsypi-6">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F]  mb-3">
          Affiliates
        </h1>
        <p className="mb-3">
          We may share information with subsidiaries and affiliates under common
          ownership or control. Their use will be subject to this Privacy
          Policy.
        </p>
      </div>,
      <div key="hwsypi-7">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F]  mb-3">
          Authorities and Legal Requirements
        </h1>
        <p className="mb-3">We may disclose information when necessary to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Comply with applicable laws, regulations, or legal processes</li>
          <li>
            Respond to lawful requests from law enforcement or government
            authorities
          </li>
          <li>Meet regulatory reporting requirements (AML, KYC, tax)</li>
          <li>Enforce our Terms of Service or other agreements</li>
          <li>Protect rights, privacy, safety, or property</li>
          <li>Investigate potential violations or fraud</li>
        </ul>
      </div>,
      <div key="hwsypi-8">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F]  mb-3">
          Business Transfers
        </h1>
        <p className="mb-3">
          If we are involved in a merger, acquisition, bankruptcy,
          reorganization, or sale of assets, your information may be transferred
          as part of that transaction. We will notify you before your
          information becomes subject to a different privacy policy.
        </p>
      </div>,
      <div key="hwsypi-9">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F]  mb-3">
          With Your Consent
        </h1>
        <p className="">
          We may share information for other purposes with your explicit
          consent.
        </p>
      </div>,
    ],
  },
  {
    id: "sms-and-text-messaging-privacy",
    title: "SMS and Text Messaging Privacy",
    content: [
      <p key="satmp-1">
        Caplito (HIG Inc.) uses phone numbers to enable messaging and
        transaction notifications.
      </p>,
      <div key="satmp-2">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Message Frequency
        </h1>
        <p className="mb-3">
          Message frequency varies based on your account activity, including
          transaction confirmations, security alerts, and service updates.
        </p>
      </div>,
      <div key="satmp-3">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F]  mb-3">
          Third-Party SMS Partners
        </h1>
        <p className="mb-3">
          We share your phone number and related metadata with messaging
          infrastructure partners solely to support message delivery. These
          partners include carriers, platform providers, and SMS gateway
          services. We do not share your SMS opt-in or consent status with third
          parties for unrelated purposes.
        </p>
      </div>,
      <div key="satmp-4">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F]  mb-3">
          SMS Consent
        </h1>
        <p className="mb-3">
          Your opt-in to receive text messages is used solely for delivering
          Caplito-related communications. We do not share opt-in data or consent
          with third parties for marketing or unrelated campaigns.
        </p>
      </div>,
      <div key="satmp-5">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F]  mb-3">
          Opting Out
        </h1>
        <p className="mb-3">
          You may opt out of promotional SMS messages at any time by replying
          STOP to any message. Note that opting out may not apply to
          transactional or security notifications essential to your account.
        </p>
        <p>
          For SMS assistance, reply <strong>HELP</strong>
        </p>
      </div>,
    ],
  },
  {
    id: "cookies-and-tracking-technologies",
    title: "Cookies and Tracking Technologies",
    content: [
      <div key="catt-1">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          What We Use
        </h1>
        <p className="mb-3">
          We use cookies, local storage, and similar technologies to:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Maintain your session and authenticate your identity</li>
          <li>Remember your preferences and settings</li>
          <li>Enhance security features</li>
          <li>Measure and analyze usage patterns</li>
          <li>Improve performance and user experience</li>
        </ul>
      </div>,
      <div key="catt-2">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Types of Cookies
        </h1>
        <table>
          <tbody>
            <tr>
              <td>
                <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
                  Type
                </h4>
              </td>
              <td className="pl-10">
                <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
                  Purpose
                </h4>
              </td>
            </tr>
            <tr>
              <td>
                <p className="mb-3">Essential</p>
              </td>
              <td className="pl-10">
                <p className="mb-3">
                  Required for basic functionality and security
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="mb-3">Functional</p>
              </td>
              <td className="pl-10 ">
                <p className="mb-3">Remember preferences and settings</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="mb-3">Analytics</p>
              </td>
              <td className="pl-10">
                <p className="mb-3">Understand how you use our Services</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="mb-3">Performance</p>
              </td>
              <td className="pl-10">
                <p className="mb-3">Monitor and improve Service performance</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>,
      <div key="catt-3">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Managing Cookies
        </h1>
        <p className="">
          You can manage cookie preferences through your browser or device
          settings. Disabling certain cookies may affect Service functionality.
        </p>
      </div>,
      <div key="catt-4">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Do Not Track
        </h1>
        <p className="">
          Some browsers offer "Do Not Track" (DNT) signals. We do not currently
          respond to DNT signals, as there is no industry-standard
          interpretation. We will update this policy if a standard is
          established.
        </p>
      </div>,
    ],
  },
  {
    id: "your-choices-and-rights",
    title: "Your Choices and Rights",
    content: [
      <p key="ycar-1">
        Depending on your location, you may have certain rights regarding your
        personal information.
      </p>,
      <div key="ycar-2">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          General Rights
        </h1>
        <p className="mb-3">You may have the right to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Access: Request confirmation of whether we process your data and
            obtain a copy
          </li>
          <li>
            Correction: Request correction of inaccurate or incomplete
            information
          </li>
          <li>
            Deletion: Request deletion of your personal information (subject to
            legal retention requirements)
          </li>
          <li>
            Portability: Request a copy of your data in a portable,
            machine-readable format
          </li>
          <li>
            Restriction: Request that we limit how we use your information
          </li>
          <li>Objection: Object to certain processing of your information</li>
        </ul>
        <p className="">
          Withdraw Consent: Withdraw consent where processing is based on
          consent
        </p>
      </div>,
      <div key="ycar-3">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Marketing Opt-Out
        </h1>
        <p className="mb-3">You may opt out of marketing communications by:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Following unsubscribe instructions in emails</li>
          <li>Replying STOP to SMS messages</li>
          <li>Adjusting notification preferences in the App</li>
          <li>Contacting us at privacy@caplito.com</li>
        </ul>
        <p className="">
          Opting out of marketing does not affect transactional or
          service-related messages.
        </p>
      </div>,
      <div key="ycar-4">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Account Deletion
        </h1>
        <p className="">
          You may delete your account through the App settings or by contacting
          us. Account deletion will remove all associated personal data, subject
          to our legal retention obligations and blockchain immutability.
        </p>
      </div>,
      <div key="ycar-5">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Exercising Your Rights
        </h1>
        <p className="mb-3">
          To exercise your rights, contact us at privacy@caplito.com. We will
          verify your identity before processing requests and respond within the
          timeframe required by applicable law (typically 30-45 days).
        </p>
        <p>
          We will not discriminate against you for exercising your privacy
          rights.
        </p>
      </div>,
      <div key="ycar-6">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Limitations
        </h1>
        <p className="mb-3">Certain rights may be limited where:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 ">
          <li>We are required by law to retain information</li>
          <li>Information is necessary to complete a requested transaction</li>
          <li>
            Deletion would impair legitimate interests (e.g., fraud prevention)
          </li>
          <li>
            Information exists on public blockchains (which we cannot modify)
          </li>
        </ul>
      </div>,
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: [
      <div key="cp-1">
        <p className="mb-3">
          The App is not intended for use by children under 13 years of age. We
          do not knowingly collect personal information from children under 13.
        </p>
        <p className="mb-3">
          If we learn that we have collected personal information from a child
          under 13 without parental consent, we will promptly delete that
          information. If you believe a child under 13 has provided us with
          personal information, please contact us at privacy@caplito.com.
        </p>
        <p>
          For users between 13 and 18, we encourage parental involvement in
          online activities.
        </p>
      </div>,
    ],
  },
  {
    id: "automated-decision-making",
    title: "Automated Decision-Making",
    content: [
      <div key="adm-1">
        <p className="mb-3">
          We may use automated systems to help detect fraud, verify identity,
          enforce our Terms of Service, and improve our Services. These systems
          may analyze transaction patterns, device information, and usage data.
        </p>
        <p>
          You have the right to request human review of decisions made solely
          through automated processing that significantly affect you. Contact us
          at privacy@caplito.com to request review.
        </p>
      </div>,
    ],
  },
  {
    id: "third-party-links-and-services",
    title: "Third-Party Links and Services",
    content: [
      <div key="tplas-1">
        <p className="mb-3">
          Our Services may contain links to third-party websites, applications,
          or services. This Privacy Policy does not apply to third-party
          services.
        </p>
        <p>
          We are not responsible for the privacy practices of third parties. We
          encourage you to review the privacy policies of any third-party
          services you access.
        </p>
      </div>,
    ],
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "Changes to This Privacy Policy",
    content: [
      <p key="cttpp-1">
        We reserve the right to modify this Privacy Policy at any time to
        reflect changes in our practices, Services, or legal requirements.
      </p>,
      <div key="cttpp-2">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Notification
        </h1>
        <p className="mb-3">We will notify you of material changes by:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 ">
          <li>Updating the "Last Revised" date at the top of this policy</li>
          <li>Posting the updated policy in the App</li>
          <li>
            Sending notice via email or in-app notification for significant
            changes
          </li>
        </ul>
      </div>,
      <div key="cttpp-3">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Acceptance
        </h1>
        <p>
          Your continued use of the App after changes become effective
          constitutes acceptance of the modified Privacy Policy. If you do not
          agree with changes, you should discontinue use of the Services.
        </p>
      </div>,
      <div key="cttpp-4">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Prior Versions
        </h1>
        <p>Prior versions of this Privacy Policy are available upon request.</p>
      </div>,
    ],
  },
  {
    id: "Additional Disclosures",
    title: "Additional Disclosures",
    content: [
      <p key="adisc-1">
        We reserve the right to modify this Privacy Policy at any time to
        reflect changes in our practices, Services, or legal requirements.
      </p>,
      <div key="adics-2">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Financial Regulatory Compliance
        </h1>
        <p className="mb-3">
          As a financial services provider, we are required to collect, retain,
          and report certain information to comply with:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 ">
          <li>Anti-money laundering (AML) laws and regulations</li>
          <li>Know-your-customer (KYC) requirements</li>
          <li>FinCEN (Financial Crimes Enforcement Network) regulations</li>
          <li>Bank Secrecy Act obligations</li>
          <li>Tax reporting requirements</li>
          <li>Other applicable financial regulations</li>
        </ul>
      </div>,
      <div key="adics-3">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Blockchain Transparency
        </h1>
        <p className="mb-3">
          Transactions conducted through our Services are recorded on public
          blockchain networks. Blockchain data is:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            <strong>Public:</strong> Viewable by anyone with internet access
          </li>
          <li>
            <strong>Immutable:</strong> Cannot be deleted, modified, or reversed
          </li>
          <li>
            <strong>Permanent:</strong> Exists indefinitely on the blockchain
          </li>
        </ul>
        <p>
          Pseudonymous: Wallet addresses do not directly reveal identity, but
          may be linked through analysis
        </p>
      </div>,
      <div key="adics-4">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Aggregated and De-Identified Data
        </h1>
        <p className="mb-3">
          We may create aggregated or de-identified data that cannot reasonably
          be used to identify you. Such data is not subject to this Privacy
          Policy and may be used for any lawful purpose, including analytics,
          research, and service improvement.
        </p>
      </div>,
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: [
      <div key="contact-1">
        <p className="mb-3">
          If you have questions, concerns, or requests regarding this Privacy
          Policy or our privacy practices, contact us at:
        </p>
        <p className="mb-3">
          <strong>HIG, Inc.</strong>
        </p>
        <p className="mb-3">
          📧 <strong>Privacy Inquiries:</strong> privacy@caplito.com
        </p>
        <p className="mb-3">
          📧 <strong>General Support:</strong> help@caplito.com
        </p>
        <p>
          For SMS support, text <strong>HELP</strong>.
        </p>
      </div>,
      <div key="contact-2">
        <h1 className="text-[24px] font-medium leading-[120%] text-[#1F1F1F] mt-3  mb-3">
          Response Time
        </h1>
        <p className="">
          We aim to respond to all privacy inquiries within 30 days, or sooner
          if required by applicable law.
        </p>
      </div>,
    ],
  },
];

export const tableOfContents = privacyPolicyData.map((section) => ({
  id: section.id,
  title: section.title,
}));
