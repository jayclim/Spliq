import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Spliq',
  description: 'Privacy Policy for Spliq.',
};

export default function PrivacyPage() {
  return (
    <div className="space-y-8 text-slate-700">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
      <p className="text-muted-foreground">Last Updated: January 12, 2026</p>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">1. INTRODUCTION</h2>
        <p>
          Spliq ("we," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our web application. By using Spliq, you consent to the data practices described in this policy.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">2. DATA WE COLLECT</h2>
        <p>We collect information to facilitate expense tracking and account management.</p>
        
        <h3 className="text-xl font-semibold text-slate-900">2.1 Information You Provide.</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Identity Data:</strong> Name, email address, and profile avatar (collected via Clerk).</li>
          <li><strong>Expense Data:</strong> Merchant names, dates, amounts, descriptions, and the users with whom you split bills.</li>
          <li><strong>Receipt Images:</strong> Photos of physical receipts you upload for AI processing.</li>
          <li><strong>Financial Data (Pro Users):</strong> If you subscribe to Spliq Pro, our Merchant of Record (Lemon Squeezy) collects your billing address, tax ID, and payment method. Spliq does not store full credit card numbers. We only receive a subscription token and transaction status.</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-900">2.2 Information Automatically Collected.</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Device Data:</strong> IP address, browser type, operating system, and device identifiers.</li>
          <li><strong>Usage Data:</strong> Pages visited, buttons clicked, and interaction with the AI scanner.</li>
          <li><strong>Cookies:</strong> Data collected via strictly necessary and functional cookies (see our Cookie Policy).</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">3. HOW WE USE YOUR DATA</h2>
        <p>We use your data for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To create and manage your account (via Clerk).</li>
          <li>To process subscriptions and tax compliance (via Lemon Squeezy).</li>
          <li>To extract transaction details from receipt images (via Google Vertex AI).</li>
          <li>To facilitate debt tracking and generate settlement links.</li>
          <li>To improve the accuracy of our services and ensure security.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">4. SUB-PROCESSORS AND DATA SHARING</h2>
        <p>
          We utilize trusted third-party service providers to operate our infrastructure. We have entered into Data Processing Agreements (DPAs) with these vendors to ensure they protect your data.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b">
                <th className="p-2 font-semibold text-slate-900">Sub-processor</th>
                <th className="p-2 font-semibold text-slate-900">Role</th>
                <th className="p-2 font-semibold text-slate-900">Purpose</th>
                <th className="p-2 font-semibold text-slate-900">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-2 font-medium">Clerk</td>
                <td className="p-2">Processor</td>
                <td className="p-2">Identity management, authentication, and session security</td>
                <td className="p-2">USA</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Lemon Squeezy</td>
                <td className="p-2">Controller/Processor</td>
                <td className="p-2">Payment processing, tax remittance, and subscription management</td>
                <td className="p-2">Global</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Google Cloud (Vertex AI)</td>
                <td className="p-2">Processor</td>
                <td className="p-2">Optical Character Recognition (OCR) for receipts</td>
                <td className="p-2">USA</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Neon</td>
                <td className="p-2">Processor</td>
                <td className="p-2">Managed Postgres database hosting</td>
                <td className="p-2">USA/EU</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Vercel</td>
                <td className="p-2">Processor</td>
                <td className="p-2">Application hosting and edge computing</td>
                <td className="p-2">Global</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-slate-900">4.1 AI Data Processing (Google Vertex AI).</h3>
        <p>
          When you upload a receipt, the image is transmitted to Google Cloud's Vertex AI for text extraction. We utilize the enterprise API which ensures that your data is not used to train Google’s foundation AI models. The data is processed ephemerally to return the extracted text and is not retained by Google for their own product improvements.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">5. INTERNATIONAL DATA TRANSFERS</h2>
        <p>
          Spliq operates with infrastructure primarily in the United States. If you are accessing the Services from the European Economic Area (EEA), United Kingdom, or Switzerland, note that your data will be transferred to the US. We rely on the EU-U.S. Data Privacy Framework and Standard Contractual Clauses (SCCs) with our sub-processors (Clerk, Google, Neon) to legalize these transfers and ensure an adequate level of protection.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">6. YOUR DATA RIGHTS (GDPR & CCPA)</h2>
        <p>Depending on your jurisdiction, you have specific rights regarding your personal data.</p>

        <h3 className="text-xl font-semibold text-slate-900">6.1 General Rights (GDPR/Global).</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Right to Access:</strong> You may request a copy of the data we hold about you.</li>
          <li><strong>Right to Rectification:</strong> You may correct inaccurate profile or expense data directly within the app.</li>
          <li><strong>Right to Erasure (Right to be Forgotten):</strong> You may request the deletion of your account. Note that this will permanently remove your expense history and cannot be undone. To request deletion, email us at <a href="mailto:support@spliq.app" className="text-blue-600 hover:underline">support@spliq.app</a>.</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-900">6.2 California Residents (CCPA/CPRA).</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Right to Know:</strong> You may request disclosure of the specific pieces of personal information we have collected.</li>
          <li><strong>Right to Opt-Out of Sale/Sharing:</strong> Spliq does not sell your personal information to data brokers. We do not "share" your personal information for cross-context behavioral advertising. Therefore, we are not required to provide a "Do Not Sell My Personal Information" link, but we affirm this commitment to you here.</li>
          <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">7. DATA RETENTION</h2>
        <p>
          We retain your personal data only for as long as necessary to provide the Services and comply with legal obligations (e.g., tax records held by Lemon Squeezy). If you delete your account, your profile data is removed from Clerk and our database immediately, though expense records involved in other users' ledgers may be anonymized rather than deleted to preserve the integrity of their balances.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">8. CHILDREN’S PRIVACY</h2>
        <p>
          Spliq is not intended for individuals under the age of 13 (or 16 in the EEA). We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">9. CONTACT US</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, please contact us at: <br/>
          <strong>Email:</strong> <a href="mailto:support@spliq.app" className="text-blue-600 hover:underline">support@spliq.app</a>
        </p>
      </section>
    </div>
  );
}