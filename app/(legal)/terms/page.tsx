import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Spliq',
  description: 'Terms of Service for Spliq.',
};

export default function TermsPage() {
  return (
    <div className="space-y-8 text-slate-700">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
      <p className="text-muted-foreground">Last Updated: January 12, 2026</p>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">1. ACCEPTANCE OF TERMS</h2>
        <p>
          Welcome to Spliq ("Company," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of the Spliq web application, website, and all related services (collectively, the "Services").
        </p>
        <p className="font-semibold">
          PLEASE READ CAREFULLY: BY CREATING AN ACCOUNT, UPLOADING A RECEIPT, OR OTHERWISE ACCESSING THE SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE, YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
        <p className="font-semibold text-red-600">
          NOTICE OF ARBITRATION: SECTION 12 OF THESE TERMS CONTAINS A BINDING ARBITRATION CLAUSE AND CLASS ACTION WAIVER THAT AFFECTS YOUR RIGHTS.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">2. NATURE OF SERVICES: WE ARE NOT A BANK</h2>
        <h3 className="text-xl font-semibold text-slate-900">2.1 Information Service Only.</h3>
        <p>
          You acknowledge and agree that Spliq is an information management tool designed to assist users in tracking shared expenses and calculating informal debts ("IOUs"). Spliq is not a bank, money transmitter, payment processor, or financial institution. We do not hold, store, transmit, or custody funds on behalf of any user. Any "balance" displayed within the Services is a data point representing a user-entered record and does not constitute a store of value or a legal tender obligation of Spliq.
        </p>
        <h3 className="text-xl font-semibold text-slate-900">2.2 No Money Transmission.</h3>
        <p>
          We do not facilitate the actual transfer of money. All settlements of debts recorded in Spliq must be executed externally through third-party payment providers or cash. Spliq expressly disclaims any liability for the successful settlement of any debt tracked within the Service.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">3. THIRD-PARTY PAYMENT INTEGRATIONS</h2>
        <h3 className="text-xl font-semibold text-slate-900">3.1 Deep Linking.</h3>
        <p>
          For your convenience, the Services may generate "deep links" or redirection URIs to third-party payment applications, including but not limited to Venmo, Cash App, PayPal, and Zelle (collectively, "Payment Apps").
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>User Responsibility:</strong> You are solely responsible for verifying the accuracy of all transaction details—including the recipient’s unique handle (e.g., username, phone number), the payment amount, and the note—within the Payment App before confirming the transaction. Spliq cannot verify, and does not warrant, that the deep link will populate the correct recipient or amount.
          </li>
          <li>
            <strong>Lack of Control:</strong> We do not operate, control, or endorse these Payment Apps. Your use of any Payment App is governed solely by the terms of service and privacy policies of that third party.
          </li>
          <li>
            <strong>Liability Release:</strong> You explicitly release Spliq from any liability for funds sent to the wrong recipient, funds lost in transmission, or transaction errors occurring within a Payment App, regardless of whether the transaction was initiated via a link from Spliq.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">4. AI-POWERED FEATURES AND DISCLAIMERS</h2>
        <h3 className="text-xl font-semibold text-slate-900">4.1 Receipt Scanning.</h3>
        <p>
          The Services may utilize artificial intelligence and machine learning technologies, specifically Google Gemini via Vertex AI, to extract text and data from receipt images you upload ("AI Features").
        </p>
        <h3 className="text-xl font-semibold text-slate-900">4.2 Accuracy Disclaimer (Human-in-the-Loop).</h3>
        <p>
          You acknowledge that AI technologies are probabilistic and may produce inaccurate, incomplete, or hallucinated results. The AI Features are provided "AS IS" without warranty of any kind.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Verification Obligation:</strong> You agree to review and verify all data extracted by the AI Features (including dates, merchant names, line items, and totals) against the original physical receipt.
          </li>
          <li>
            <strong>No Liability for AI Errors:</strong> Spliq shall not be liable for any financial loss, dispute, or accounting error resulting from your reliance on unverified data generated by the AI Features.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">5. ACCOUNTS AND SECURITY</h2>
        <h3 className="text-xl font-semibold text-slate-900">5.1 Authentication.</h3>
        <p>
          We utilize Clerk for secure user authentication. You agree to provide accurate and complete information during registration.
        </p>
        <h3 className="text-xl font-semibold text-slate-900">5.2 Security Duties.</h3>
        <p>
          You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized access to your account. Spliq is not responsible for any losses arising from stolen credentials or unauthorized account access.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">6. SUBSCRIPTIONS AND MERCHANT OF RECORD</h2>
        <h3 className="text-xl font-semibold text-slate-900">6.1 Merchant of Record.</h3>
        <p>
          We utilize Lemon Squeezy as our authorized reseller and Merchant of Record for all "Pro" plan subscriptions. When you purchase a subscription, your payment relationship is directly with Lemon Squeezy, not Spliq.
        </p>
        <h3 className="text-xl font-semibold text-slate-900">6.2 Taxes and Billing.</h3>
        <p>
          Lemon Squeezy is responsible for collecting, reporting, and remitting all applicable sales taxes, VAT, GST, and other duties associated with your purchase. You agree to comply with Lemon Squeezy’s Terms of Sale and Privacy Policy in addition to these Terms.
        </p>
        <h3 className="text-xl font-semibold text-slate-900">6.3 Refunds.</h3>
        <p>
          Refund requests for subscriptions are subject to the Lemon Squeezy Refund Policy. Spliq does not process refunds directly. Any disputes regarding billing, duplicate charges, or tax amounts must be directed to Lemon Squeezy’s customer support.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">7. ACCEPTABLE USE</h2>
        <p>You agree not to use the Services to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Track debts related to illegal activities, including money laundering, drug trafficking, or illegal gambling.</li>
          <li>Harass, intimidate, or extort other users through the creation of fraudulent IOUs.</li>
          <li>Upload receipt images that contain malware, viruses, or illegal content (e.g., CSAM).</li>
          <li>Attempt to reverse engineer the AI Features or scrape data from the Services.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">8. INTELLECTUAL PROPERTY</h2>
        <h3 className="text-xl font-semibold text-slate-900">8.1 Ownership.</h3>
        <p>
          Spliq retains all rights, title, and interest in the Services, including its code, design, and aggregate usage data.
        </p>
        <h3 className="text-xl font-semibold text-slate-900">8.2 User Content.</h3>
        <p>
          By uploading receipts, you grant Spliq and its sub-processors (including Google) a worldwide, non-exclusive license to process, parse, and display the content solely for the purpose of providing the Services to you.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">9. DISCLAIMER OF WARRANTIES</h2>
        <p className="uppercase">
          THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, SPLIQ DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE AI FEATURES WILL BE ERROR-FREE OR THAT THE SERVICE WILL BE UNINTERRUPTED.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">10. LIMITATION OF LIABILITY</h2>
        <p className="uppercase">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SPLIQ, ITS AFFILIATES, OR ITS VENDORS (INCLUDING CLERK AND LEMON SQUEEZY) BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
        </p>
        <p className="uppercase">
          IN NO EVENT SHALL SPLIQ’S AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS ($100.00) OR THE AMOUNT PAID BY YOU TO SPLIQ IN THE TWELVE MONTHS PRECEDING THE CLAIM.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">11. INDEMNIFICATION</h2>
        <p>
          You agree to indemnify and hold harmless Spliq and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including legal fees, arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your use of any Third-Party Payment App.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">12. DISPUTE RESOLUTION</h2>
        <h3 className="text-xl font-semibold text-slate-900">12.1 Binding Arbitration.</h3>
        <p>
          Any dispute arising out of or relating to these Terms or the Services shall be settled by binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Consumer Arbitration Rules.
        </p>
        <h3 className="text-xl font-semibold text-slate-900">12.2 Class Action Waiver.</h3>
        <p className="uppercase">
          YOU AND SPLIQ AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">13. CHANGES TO TERMS</h2>
        <p>
          We reserve the right to modify these Terms at any time. If we make material changes, we will notify you via email or through the Services. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
        </p>
      </section>
    </div>
  );
}