import { ReactNode } from "react";

export interface TermsSection {
  id: string;
  title: string;
  content: ReactNode[];
}

export const termsOfServiceData: TermsSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      <p key="intro-1">
        Please review these Terms carefully. By accessing or using Caplito,
        clicking “I Accept,” or creating an account, you confirm that: (1) you
        have read and understand these Terms; (2) you are of legal age to form a
        binding contract; and (3) you accept these Terms and agree to be bound
        by them. If you do not agree, do not access or use Caplito.
      </p>,
      <p key="intro-2">
        Important notice: Caplito is a non-custodial platform. We cannot
        initiate transfers of your digital assets or access your funds. We are
        not a bank, broker, financial institution, custodian, or fiduciary. We
        do not provide investment, tax, or legal advice. All transactions are
        executed through your wallet and are governed by the applicable
        blockchain network.
      </p>,
    ],
  },
  {
    id: "agreement-to-terms",
    title: "Agreement to Terms",
    content: [
      <p key="agreement-1">
        When you access or utilize Caplito ("Service"), you enter into a binding
        agreement governed by these Terms of Service ("Terms"). Should you be
        acting on behalf of a business or organization, you confirm that you
        possess proper authority to commit that entity to these Terms. The
        "Effective Date" of this agreement is the earlier of: (i) your
        acceptance of these Terms by clicking "I Accept," or (ii) your first use
        of the Service.
      </p>,
    ],
  },
  {
    id: "description-of-service",
    title: "Description of Service",
    content: [
      <p key="desc-1">
        Caplito provides a non-custodial digital wallet interface connected to
        your verified phone number. Through this interface, you can transfer and
        receive stablecoins—digital assets designed to maintain consistent
        value—with other users and participating merchants.
      </p>,
      <p key="desc-2">
        <strong>Non-Custodial Nature</strong>: Caplito does not hold, control,
        or have access to your digital assets. Your assets exist solely on the
        underlying blockchain, and transfers occur on that blockchain—not within
        our Service. We cannot reverse, cancel, or modify any blockchain
        transaction once submitted.
      </p>,
      <p key="desc-3">
        <strong>What We Are Not</strong>: We operate independently from banks
        and traditional financial institutions. We are not a broker, investment
        advisor, custodian, or fiduciary. We do not provide investment guidance,
        financial planning, tax advice, or legal counsel.
      </p>,
    ],
  },
  {
    id: "eligibility-requirements",
    title: "Eligibility Requirements",
    content: [
      <div key="elig-1">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Age and Capacity
        </h4>
        <p>
          You must be at least 13 years of age to access Caplito. You must
          possess legal capacity within your jurisdiction and maintain a
          functioning mobile phone number for identity verification.
        </p>
      </div>,
      <div key="elig-2">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Regulatory Compliance
        </h4>
        <p>
          You confirm that you are not: (a) listed on any U.S. government
          register of sanctioned, prohibited, or restricted individuals; or (b)
          physically located within a country under comprehensive U.S. economic
          sanctions. If registering on behalf of an organization, that
          organization must hold legal standing to engage with the Service under
          these Terms.
        </p>
      </div>,
      <div key="elig-3">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Account Security
        </h4>
        <p className="mb-3">
          You commit to supplying truthful and complete information during
          registration. Safeguarding your account credentials, private keys, and
          mobile device remains your sole responsibility. Should we detect
          potential unauthorized activity, we reserve the right to suspend or
          deactivate your account as a protective measure.
        </p>
        <p className="">
          You are responsible for all activities conducted through your account
          and wallet. You accept full responsibility for any authorized or
          unauthorized access to your wallet and agree to monitor usage to
          restrict access by minors.
        </p>
      </div>,
      <div key="elig-5">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          SMS and Messaging Consent
        </h4>
        <p className="mb-3">
          By submitting your phone number, you authorize Caplito (HIG Inc.) to
          deliver SMS communications regarding your account activity,
          transactions, and service announcements. Message volume varies based
          on activity. Standard carrier message and data charges may apply.
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 ">
          <li>To discontinue SMS messages, respond STOP at any point</li>
          <li>To request assistance via text, respond HELP at any point</li>
          <li>For additional support, contact help@Caplito.xyz</li>
        </ul>
      </div>,
    ],
  },
  {
    id: "license-and-permitted-uses",
    title: "License and Permitted Uses",
    content: [
      <div key="license-1">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          License Grant
        </h4>
        <p>
          Subject to your compliance with these Terms, Caplito grants you a
          limited, revocable, non-exclusive, non-transferable, non-sublicensable
          license to access and use the Service solely for your personal,
          non-commercial purposes (or internal business purposes if you are a
          business entity).
        </p>
      </div>,
      <div key="license-2">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Permitted Activities
        </h4>
        <p className="mb-3">You may use Caplito to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 ">
          <li>Establish and operate your personal digital wallet interface</li>
          <li>
            Transfer stablecoins to and from other Caplito users or enrolled
            merchants
          </li>
          <li>
            Submit payment requests and engage with available platform features
          </li>
        </ul>
      </div>,
      <p key="license-3">
        You commit to utilizing Caplito exclusively for legitimate purposes
        consistent with these Terms. We may implement transaction thresholds,
        identity verification protocols, or additional requirements to uphold
        legal compliance and platform security. When legally obligated, we may
        furnish information to regulatory bodies or law enforcement agencies.
      </p>,
    ],
  },
  {
    id: "service-provisions",
    title: "Service Provisions",
    content: [
      <div key="service-1">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Hosting and Availability
        </h4>
        <p>
          Caplito will provide hosting for the Service at our expense. However,
          we bear no responsibility for telecommunications, internet
          connectivity, or hardware required for you to access the Service.
        </p>
      </div>,
      <div key="service-2">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Updates and Modifications
        </h4>
        <p>
          You acknowledge that the Service is evolving. We may update, modify,
          or discontinue features at any time with or without notice. You may
          need to update third-party software periodically to maintain access.
        </p>
      </div>,
      <div key="service-3">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Maintenance and Support
        </h4>
        <p>
          We will use commercially reasonable efforts to maintain the Service
          and respond to technical issues within 72 hours during normal business
          operations.
        </p>
      </div>,
      <div key="service-4">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Equipment and Software
        </h4>
        <p>
          You must provide all equipment, software, and internet connectivity
          necessary to access the Service. You are solely responsible for any
          fees incurred, including mobile data charges. You are solely
          responsible for securing your devices; Caplito bears no liability if
          unauthorized parties access your device and initiate transactions.
        </p>
      </div>,
    ],
  },
  {
    id: "restrictions",
    title: "Restrictions",
    content: [
      <div key="restrict-1">
        <p className="mb-3">
          You agree not to, and will not permit any third party to:
        </p>
        <p className="mb-3">
          <strong>Technical Restrictions</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Reverse engineer, decompile, disassemble, or attempt to derive
            source code, algorithms, or underlying structure of the Service
          </li>
          <li>
            Modify, adapt, translate, or create derivative works based on the
            Service
          </li>
          <li>
            Interfere with operation of the Service or underlying hardware and
            networks
          </li>
          <li>
            Access the Service through any unauthorized interface or automated
            means
          </li>
          <li>
            Bypass or circumvent any security measures, content filters, or
            access restrictions
          </li>
        </ul>
        <p className="mb-3">
          <strong>Commercial Restrictions</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Sublicense, lease, sell, resell, rent, loan, or distribute access to
            the Service
          </li>
          <li>Use the Service to build a similar or competitive product</li>
          <li>
            Sell, rent, or transfer access to your account without authorization
          </li>
        </ul>
        <p className="mb-3">
          <strong>General Restrictions</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 ">
          <li>
            Allow unauthorized third parties to access the Service through your
            account
          </li>
          <li>
            Remove, alter, or obscure any proprietary notices, trademarks, or
            branding
          </li>
          <li>
            Use the Service for time-critical or mission-critical functions
            without acknowledging inherent risks
          </li>
        </ul>
      </div>,
    ],
  },
  {
    id: "prohibited-activities",
    title: "Prohibited Activities",
    content: [
      <div key="prohibit-1">
        <p className="mb-3">
          The following activities are expressly forbidden:
        </p>
        <p className="mb-3">
          <strong>Financial Crimes</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Engaging in fraud, money laundering, terrorism financing, or
            trafficking in prohibited goods
          </li>
          <li>
            Transmitting, accepting, or holding stolen, counterfeit, or
            unauthorized assets
          </li>
          <li>Using Caplito for any illegal activity under applicable law</li>
        </ul>
        <p className="mb-3">
          <strong>Obfuscation and Evasion</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Concealing or misrepresenting the source or destination of funds
            through mixing services, anonymization tools, or transaction
            structuring
          </li>
          <li>Circumventing any transaction limits established by Caplito</li>
        </ul>
        <p className="mb-3">
          <strong>Market Manipulation</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Front-running, wash trading, pump and dump schemes, ramping,
            cornering, or other fraudulent trading activities
          </li>
          <li>
            Creating false or misleading appearance of market activity in any
            digital asset
          </li>
          <li>
            Entering orders with knowledge that offsetting orders of similar
            size and price exist
          </li>
          <li>
            Participating in pools or syndicates organized to manipulate asset
            prices
          </li>
        </ul>
        <p className="mb-3">
          <strong>Prohibited Business Activities</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Operating gambling services, pyramid schemes, or unlawful investment
            arrangements
          </li>
          <li>
            Conducting securities offerings, ICOs, or fundraising without proper
            authorization
          </li>
          <li>
            Using the Service for activities requiring registration or licensing
            you do not possess
          </li>
          <li>
            Creating, listing, or purchasing assets redeemable for securities or
            that provide financial rewards (including DeFi yields, staking
            bonuses, or burn discounts)
          </li>
        </ul>
        <p className="mb-3">
          <strong>Platform Abuse</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Deploying bots, scripts, crawlers, or automated tools without
            explicit authorization
          </li>
          <li>
            Collecting or harvesting user data for direct marketing purposes
          </li>
          <li>
            Sending spam, phishing attempts, or unsolicited communications
          </li>
          <li>Interfering with other users' ability to use the Service</li>
        </ul>
        <p className="mb-3">
          <strong>Identity Violations</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Misrepresenting yourself as another individual or entity</li>
          <li>Using another user's wallet without authorization</li>
          <li>Providing false or misleading information to Caplito</li>
        </ul>
        <p className="mb-3">
          <strong>Intellectual Property Violations</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            Making available any content that infringes patents, trademarks,
            trade secrets, copyrights, or publicity rights
          </li>
        </ul>
        <p>
          Caplito maintains authority to monitor platform activity and flag
          suspicious behavior. We may restrict, freeze, or terminate accounts
          when we reasonably believe these Terms or applicable laws have been
          violated. Any unauthorized use immediately terminates all licenses
          granted herein.
        </p>
      </div>,
    ],
  },
  {
    id: "investigations-and-enforcement",
    title: "Investigations and Enforcement",
    content: [
      <div key="investigation-1">
        <p className="mb-3">
          Caplito may, but is not obligated to, monitor the Service and user
          content at any time. We reserve the right, in our sole discretion, to:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 ">
          <li>Remove any user content for any reason or no reason</li>
          <li>Investigate potential violations of these Terms</li>
          <li>
            Immediately terminate your license and access without prior notice
          </li>
          <li>Report suspected illegal activity to law enforcement</li>
        </ul>
      </div>,
      <p key="investigation-2">
        If we become aware of possible violations, we may take immediate action
        including changing, altering, or removing your content without prior
        notice.
      </p>,
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      <div key="ip-1">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Service Ownership
        </h4>
        <p>
          Except for open-source components and your user content, Caplito and
          its licensors own all rights, title, and interest in the Service,
          including all intellectual property rights. You will not remove,
          alter, or obscure any copyright, trademark, or proprietary notices.
        </p>
      </div>,
      <div key="ip-2">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Open-Source Software
        </h4>
        <p>
          The Service may incorporate open-source software subject to separate
          license terms. Nothing in these Terms limits your rights under, or
          grants rights superseding, applicable open-source licenses. We will
          make open-source components and modifications available upon written
          request where required.
        </p>
      </div>,
      <div key="ip-3">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Trademarks
        </h4>
        <p>
          Caplito and all related graphics, logos, service marks, and trade
          names are our trademarks and may not be used without permission. Other
          marks appearing in the Service are property of their respective
          owners.
        </p>
      </div>,
      <div key="ip-4">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Your Content
        </h4>
        <p>
          We do not claim ownership of content you create or upload. However, by
          posting content through the Service, you grant Caplito a royalty-free,
          perpetual, irrevocable, worldwide, non-exclusive license to use,
          reproduce, modify, adapt, publish, translate, distribute, and display
          such content for operating and improving the Service.
        </p>
      </div>,
      <div key="ip-4">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Feedback
        </h4>
        <p>
          Any ideas, suggestions, or proposals you submit to Caplito are
          provided at your own risk. You grant us a fully paid, royalty-free,
          perpetual, transferable, irrevocable, worldwide, sublicensable license
          to use, reproduce, modify, and commercially exploit any feedback for
          any purpose.
        </p>
      </div>,
    ],
  },
  {
    id: "blockchain-technology-risks",
    title: "Blockchain Technology Risks",
    content: [
      <div key="blockchain-1">
        <p className="mb-3">You acknowledge and accept the following risks:</p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Transaction Finality
        </h4>
        <p className=" mb-3">
          Blockchain transactions must be confirmed and recorded on the
          underlying network. Caplito cannot ensure transaction validation,
          facilitate cancellations, or modify submitted transactions.
          Transaction details may be delayed or fail due to network conditions
          beyond our control.
        </p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Technical Expertise
        </h4>
        <p className=" mb-3">
          You represent that you: (a) possess necessary technical ability to
          evaluate wallet security and operation; (b) have knowledge and
          professional advice to evaluate risks and compliance requirements; (c)
          understand and accept risks associated with blockchain technology; and
          (d) are responsible for independent analysis of specific digital asset
          risks.
        </p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Price Volatility
        </h4>
        <p className=" mb-3">
          Digital asset prices can be extremely volatile. We make no warranties
          regarding markets, pricing, or trading conditions.
        </p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Tax Responsibility
        </h4>
        <p className=" mb-3">
          You are solely responsible for determining applicable taxes on your
          transactions. We do not provide tax advice or calculate tax
          obligations.
        </p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Network Risks
        </h4>
        <p className=" mb-3">
          Digital assets exist solely on their supporting blockchains. We do not
          store, send, or receive digital assets directly. Risks include but are
          not limited to:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Hardware, software, and internet connection failures</li>
          <li>Malicious software introduction</li>
          <li>Unauthorized third-party access to wallet information</li>
          <li>Counterfeit assets, mislabeled assets, metadata decay</li>
          <li>Smart contract bugs rendering assets untransferable</li>
          <li>Communication failures, disruptions, errors, or delays</li>
        </ul>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Regulatory Uncertainty
        </h4>
        <p className=" mb-3">
          The regulatory environment for blockchain technology is evolving. New
          regulations may materially affect the Service and utility of digital
          assets.
        </p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Blockchain Governance
        </h4>
        <p className=" mb-3">
          We make no guarantees regarding blockchain governance, which may
          result in delays, conflicts of interest, or unfavorable operational
          decisions. Protocol rules may change suddenly, affecting asset value
          and functionality.
        </p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Security
        </h4>
        <p className=" mb-3">
          We make no guarantees regarding blockchain security. We are not liable
          for hacks, double-spending attacks, stolen assets, or other blockchain
          attacks.
        </p>
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Third-Party Dependencies
        </h4>
        <p className=" mb-3">
          The Service relies on third-party wallets and ecosystem partners. We
          make no guarantees regarding their functionality, availability, or
          security.
        </p>
      </div>,
    ],
  },
  {
    id: "disclaimers-and-assumption-of-risk",
    title: "Disclaimers and Assumption of Risk",
    content: [
      <div key="disclaim-1">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Service Provided As-Is
        </h4>
        <p>
          Your engagement with Caplito occurs at your sole discretion and risk.
          THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITH
          ALL FAULTS. EXCEPT AS EXPRESSLY PROVIDED HEREIN, Caplito DISCLAIMS ALL
          WARRANTIES, REPRESENTATIONS, AND CONDITIONS OF ANY KIND, WHETHER
          EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
      </div>,
      <div key="disclaim-2">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          No Guarantees
        </h4>
        <p>
          We make no warranty that: (1) the Service will meet your requirements;
          (2) the Service will be uninterrupted, timely, secure, or error-free;
          or (3) results obtained will be accurate or reliable. Any content
          downloaded or accessed through the Service is at your own risk.
        </p>
      </div>,
      <div key="disclaim-3">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Not a Financial Institution
        </h4>
        <p>
          Caplito does not function as a bank or licensed financial institution.
          Assets accessed through Caplito carry no FDIC insurance or government
          backing. We are not a payroll provider and make no warranties
          regarding compliance with wage payment obligations.
        </p>
      </div>,
      <div key="disclaim-4">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          No Financial Advice
        </h4>
        <p>
          We explicitly disclaim responsibility for losses from price movements
          or market instability. We provide no legal, tax, or investment
          counsel. Consult qualified professionals regarding your specific
          circumstances.
        </p>
      </div>,
      <div key="disclaim-5">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Third-Party Conduct
        </h4>
        <p>
          We are not liable for conduct of third parties, including external
          websites, ecosystem partners, or other users. The risk of injury from
          third parties rests entirely with you. We make no warranties regarding
          third-party goods, services, or content accuracy.
        </p>
      </div>,
      <div key="disclaim-6">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Digital Asset Disclaimers
        </h4>
        <p>
          We have no obligation to inquire into and shall not be liable for: (i)
          ownership, validity, or genuineness of any digital asset; (ii)
          collectability, insurability, or marketability of any digital asset;
          (iii) losses from activity signed by your private keys; or (iv) losses
          from circumstances beyond our control, including blockchain failures
          or third-party service disruptions.
        </p>
      </div>,
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: [
      <div key="liability-1">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Disclaimer of Certain Damages
        </h4>
        <p className="mb-3">
          TO THE FULLEST EXTENT PERMITTED BY LAW, Caplito AND ITS AFFILIATES,
          OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS ("Caplito PARTIES") SHALL
          NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
          PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Lost profits, revenue, or data</li>
          <li>Loss of digital assets or cryptocurrency</li>
          <li>Business interruption</li>
          <li>Cost of substitute goods or services</li>
          <li>Unauthorized access to or alteration of transmissions or data</li>
          <li>Statements or conduct of third parties</li>
          <li>Any other matter related to the Service</li>
        </ul>
        <p className="">
          This applies regardless of legal theory (contract, tort, negligence,
          strict liability, or otherwise) and whether or not we were advised of
          the possibility of such damages.
        </p>
      </div>,
      <div key="liability-2">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Liability Cap
        </h4>
        <p className="">
          OUR TOTAL LIABILITY FOR ANY CLAIM RELATED TO THE SERVICE SHALL NOT
          EXCEED THE GREATER OF: (A) ONE HUNDRED DOLLARS ($100); OR (B) THE
          AMOUNTS YOU PAID TO Caplito IN THE TWELVE (12) MONTHS PRECEDING THE
          CLAIM.
        </p>
      </div>,
      <div key="liability-3">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Exceptions
        </h4>
        <p className="">
          The foregoing limitations do not apply to liability for: (i) death or
          personal injury caused by our negligence; or (ii) fraud or fraudulent
          misrepresentation.
        </p>
      </div>,
      <div key="liability-4">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Jurisdictional Variations
        </h4>
        <p className="">
          Some jurisdictions prohibit exclusion of certain damages or liability
          limitations. In such cases, these limitations apply to the maximum
          extent permitted by law.
        </p>
      </div>,
      <div key="liability-5">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Basis of Bargain
        </h4>
        <p className="">
          These limitations are fundamental elements of the agreement between
          you and Caplito. The Service would not be provided without these
          limitations.
        </p>
      </div>,
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: [
      <div key="indem-1">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Your Obligations
        </h4>
        <p className="mb-3">
          You agree to defend, indemnify, and hold harmless Caplito Parties from
          any claims, losses, liabilities, damages, costs, or expenses
          (including reasonable attorneys' fees) arising from:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>Your user content</li>
          <li>Your use of, or inability to use, the Service</li>
          <li>Your breach of these Terms</li>
          <li>Your violation of any third-party rights</li>
          <li>Your violation of any applicable laws</li>
        </ul>
        <p className="">
          We reserve the right to assume exclusive defense and control of any
          indemnified matter, in which case you will cooperate fully. This
          provision survives termination.
        </p>
      </div>,
      <div key="indem-2">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Our Obligations
        </h4>
        <p className="mb-3">
          Caplito will defend any suit alleging that the Service infringes
          third-party patents, copyrights, or trade secrets under U.S. law, and
          will pay settlements we approve or damages finally awarded. If the
          Service becomes subject to an infringement claim, we may: (a) procure
          rights for continued use; (b) replace with non-infringing
          alternatives; (c) modify to become non-infringing; or (d) terminate
          and refund unused prepaid fees.
        </p>
        <p className="">
          We have no indemnification obligation for claims based on: (i) use not
          in accordance with these Terms; (ii) combination with products not
          supplied by us; or (iii) modifications by parties other than Caplito.
        </p>
      </div>,
      <div key="indem-3">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Procedure
        </h4>
        <p className="">
          Indemnification is conditioned on: (a) prompt written notice of
          claims; (b) sole control of defense by the indemnifying party; and (c)
          reasonable cooperation by the indemnified party.
        </p>
      </div>,
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: [
      <div key="conf-1">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Confidential Information
        </h4>
        <p className="">
          "Confidential Information" means nonpublic information identified as
          confidential or that the receiving party should reasonably understand
          is confidential. The Service, pricing, and these Terms constitute
          Caplito's Confidential Information.
        </p>
      </div>,
      <div key="conf-2">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Protection Obligations
        </h4>
        <p className="">
          You agree not to use or disclose our Confidential Information except
          as permitted under these Terms. You will protect Confidential
          Information using at least reasonable care and limit access to those
          with a need to know. Upon termination or our request, you will return
          or destroy all Confidential Information.
        </p>
      </div>,
      <div key="conf-3">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Exceptions
        </h4>
        <p className="">
          Confidentiality obligations do not apply to information that: (a)
          becomes publicly available through no fault of yours; (b) is lawfully
          provided by third parties without confidentiality restrictions; (c)
          was already known to you without restrictions; or (d) you
          independently developed without access to Confidential Information.
          You may disclose Confidential Information as required by law, provided
          you give us prompt notice and cooperate with protective measures.
        </p>
      </div>,
    ],
  },
  {
    id: "term-and-termination",
    title: "Term and Termination",
    content: [
      <div key="term-1">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">Term</h4>
        <p className="">
          These Terms commence on the Effective Date and continue until
          terminated.
        </p>
      </div>,
      <div key="term-2">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Our Termination Rights
        </h4>
        <p className="">
          We may suspend or terminate your access at any time, with or without
          notice, for any reason—including suspected violations or at our sole
          discretion. We will not be liable for any suspension or termination.
        </p>
      </div>,
      <div key="term-3">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Your Termination Rights
        </h4>
        <p className="">
          You may terminate by ceasing use of the Service. You may continue
          accessing your wallet directly or through other services not provided
          by Caplito.
        </p>
      </div>,
      <div key="term-4">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Termination for Breach
        </h4>
        <p className="">
          Either party may terminate immediately upon notice if the other
          materially breaches these Terms and fails to cure within thirty (30)
          days of written notice.
        </p>
      </div>,
      <div key="term-5">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Post-Termination
        </h4>
        <p className="mb-3">Upon termination:</p>
        <ul className="list-disc list-inside space-y-1 pl-2 ">
          <li>You must not attempt to access the Service again</li>
          <li>
            You should withdraw all assets from your wallet before closure
          </li>
          <li>
            We will attempt to facilitate return of remaining balances, minus
            applicable fees
          </li>
          <li>
            We may delay or withhold funds as required for legal compliance or
            fraud prevention
          </li>
          <li>
            Extended inactivity may result in account closure under applicable
            unclaimed property laws
          </li>
        </ul>
      </div>,
      <div key="term-6">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          No Refunds
        </h4>
        <p className="">
          Regardless of termination reason, Caplito shall not owe refunds for
          any payments.
        </p>
      </div>,
      <div key="term-7">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Survival
        </h4>
        <p className="">
          All provisions that by their nature should survive termination shall
          survive, including ownership, disclaimers, indemnification, limitation
          of liability, and confidentiality.
        </p>
      </div>,
      <div key="term-8">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          No Subsequent Use
        </h4>
        <p className="">
          If your access is terminated, you agree not to attempt access through
          different wallets, accounts, or other means. We reserve the right to
          take immediate action against violations without notice.
        </p>
      </div>,
    ],
  },
  {
    id: "modifications-to-terms",
    title: "Modifications to Terms",
    content: [
      <p key="mod-1">
        Caplito may revise these Terms at any time. We will notify you of
        material changes via SMS, email, or in-app notification and update the
        Effective Date.
      </p>,
      <p key="mod-2">
        Changes are effective immediately for new users. For existing users,
        changes are effective upon the earlier of: (a) thirty (30) days after
        the updated Effective Date; or (b) your acceptance through a
        click-through mechanism if provided.
      </p>,
      <p key="mod-3">
        If you disagree with revised Terms, discontinue use before the effective
        date. Continued use after the effective date constitutes acceptance. You
        agree that our continued provision of the Service constitutes adequate
        consideration for updated Terms.
      </p>,
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    content: [
      <div key="third-1">
        <p className="mb-3">
          The Service may integrate with or link to third-party services,
          websites, wallets, and ecosystem partners. When you access third-party
          services:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
          <li>
            You leave Caplito and become subject to their terms and policies
          </li>
          <li>
            We do not control, review, approve, monitor, or endorse third-party
            services
          </li>
          <li>
            We make no representations regarding their quality, accuracy, or
            availability
          </li>
          <li>You bear all risks associated with third-party interactions</li>
        </ul>
        <p className="">
          Review applicable third-party terms and conduct appropriate
          investigation before transacting.
        </p>
      </div>,
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    content: [
      <p key="privacy-1">
        Your privacy matters to us. Our collection, use, and disclosure of
        personal information is governed by our Privacy Policy at
        https://Caplito.xyz/privacy-policy. By using Caplito, you acknowledge
        and accept our Privacy Policy.
      </p>,
    ],
  },
  {
    id: "general-provisions",
    title: "General Provisions",
    content: [
      <div key="general-1">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Governing Law and Venue
        </h4>
        <p className="">
          These Terms are governed by Delaware state law, excluding conflict of
          law principles. You consent to exclusive jurisdiction in federal and
          state courts located in Delaware. The United Nations Convention on
          Contracts for the International Sale of Goods does not apply.
        </p>
      </div>,
      <div key="general-2">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Assignment
        </h4>
        <p className="">
          You may not assign or transfer your rights under these Terms without
          our prior written consent. Any attempted assignment in violation is
          void. We may assign our rights without restriction.
        </p>
      </div>,
      <div key="general-3">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Force Majeure
        </h4>
        <p className="">
          We shall not be liable for delays or failures resulting from
          circumstances beyond reasonable control, including acts of God, war,
          terrorism, riots, embargoes, government actions, epidemics, pandemics,
          fire, floods, accidents, strikes, or shortages of transportation,
          fuel, energy, labor, or materials.
        </p>
      </div>,
      <div key="general-4">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">Notice</h4>
        <p className="">
          You may provide notice to Caplito at: HIG Inc., help@Caplito.xyz.
          Notice is deemed given when received by nationally recognized delivery
          service, first-class mail, or email with confirmation within 24 hours.
        </p>
      </div>,
      <div key="general-5">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">Waiver</h4>
        <p className="">
          Failure to enforce any provision on one occasion does not waive that
          provision or any other provision on any other occasion.
        </p>
      </div>,
      <div key="general-6">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Severability
        </h4>
        <p className="">
          If any provision is held invalid or unenforceable, it shall be
          construed to reflect original intentions as nearly as possible, and
          remaining provisions remain in full effect.
        </p>
      </div>,
      <div key="general-7">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Export Control
        </h4>
        <p className="">
          You may not use, export, import, or transfer the Service except as
          authorized by U.S. law and applicable jurisdiction laws.
        </p>
      </div>,
      <div key="general-8">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Independent Contractors
        </h4>
        <p className="">
          Your relationship with Caplito is that of independent contractor.
          Neither party is an agent or partner of the other. You have no
          authority to act on our behalf.
        </p>
      </div>,
      <div key="general-9">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Electronic Communications
        </h4>
        <p className="">
          You consent to receive communications electronically. You agree that
          electronic communications satisfy any legal requirement for written
          communications, consistent with the Electronic Signatures in Global
          and National Commerce Act (15 U.S.C. §7001 et seq.).
        </p>
      </div>,
      <div key="general-10">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          International Users
        </h4>
        <p className="">
          The Service is controlled from the United States. We make no
          representations regarding appropriateness for other locations. Users
          accessing from other jurisdictions do so at their own risk and are
          responsible for local law compliance.
        </p>
      </div>,
      <div key="general-11">
        <h4 className="font-semibold text-[#1F1F1F] text-base  mb-3">
          Entire Agreement
        </h4>
        <p className="">
          These Terms, together with our Privacy Policy and any referenced
          policies, constitute the complete agreement regarding the Service and
          supersede all prior discussions.
        </p>
      </div>,
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    content: [
      <div key="contact-1">
        <p className="mb-3">
          Questions or support needs? Contact us at help@Caplito.xyz
        </p>
        <p className="">For SMS assistance, text HELP.</p>
      </div>,
    ],
  },
  {
    id: "definitions",
    title: "Definitions",
    content: [
      <div key="def-1">
        <p className="mb-3">
          <strong>"Confidential Information"</strong> means nonpublic
          information identified as confidential or that a reasonable party
          would understand to be confidential.
        </p>
        <p className="mb-3">
          <strong>"Connected Content"</strong> means any content or data you
          provide or store through your wallet interface.
        </p>
        <p className="mb-3">
          <strong>"Content"</strong> means any information, data, text,
          software, messages, or other materials.
        </p>
        <p className="mb-3">
          <strong>"Digital Asset"</strong> means any cryptocurrency,
          blockchain-based token, stablecoin, or other digital asset supported
          by the Service.
        </p>
        <p className="mb-3">
          <strong>"Ecosystem Partner"</strong> means supported third-party
          applications, DeFi protocols, and integrated services.
        </p>
        <p className="mb-3">
          <strong>"Effective Date"</strong> means the earlier of your acceptance
          of these Terms or first use of the Service.
        </p>
        <p className="mb-3">
          <strong>"Feedback"</strong> means ideas, suggestions, or proposals
          submitted to Caplito.
        </p>
        <p className="mb-3">
          <strong>"Service"</strong> means all products, features, and services
          provided by Caplito, including the website, mobile application, and
          wallet interface.
        </p>
        <p className="mb-3">
          <strong>"Caplito Parties"</strong> means Caplito and its affiliates,
          officers, directors, employees, agents, and representatives.
        </p>
        <p className="mb-3">
          <strong>"User Content"</strong> means content you create, upload, or
          make available through the Service.
        </p>
        <p className="">
          <strong>"Wallet"</strong> means a digital wallet compatible with the
          Service used to hold and transact digital assets.
        </p>
      </div>,
    ],
  },
];

export const tableOfContents = termsOfServiceData.map((section) => ({
  id: section.id,
  title: section.title,
}));
