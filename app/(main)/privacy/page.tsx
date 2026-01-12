import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          <p className="text-sm text-muted-foreground">Last Updated: December 12, 2025</p>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>

          <h3>1. Information We Collect</h3>
          <ul>
            <li><strong>Personal Data:</strong> While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You, such as your email address and name.</li>
            <li><strong>Usage Data:</strong> Usage Data is collected automatically when using the Service (e.g., IP address, browser type, pages visited).</li>
            <li><strong>Payment Information:</strong> We do NOT store your sensitive payment card information. All payments are processed by our Merchant of Record, Lemon Squeezy.</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>We use your Personal Data to:</p>
          <ul>
            <li>Provide and maintain our Service.</li>
            <li>Manage your Account.</li>
            <li>Contact you with newsletters or promotional materials (which you can opt-out of).</li>
            <li>Process payments and prevent fraud.</li>
          </ul>

          <h3>3. Sharing Your Information</h3>
          <p>We may share Your personal information in the following situations:</p>
          <ul>
            <li><strong>With Service Providers:</strong> To monitor and analyze the use of our Service (e.g., Vercel, Lemon Squeezy).</li>
            <li><strong>For Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition.</li>
          </ul>

          <h3>4. Data Retention</h3>
          <p>We will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.</p>

          <h3>5. Security of Your Data</h3>
          <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.</p>

          <h3>6. Children's Privacy</h3>
          <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.</p>

          <h3>7. Links to Other Websites</h3>
          <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site.</p>

          <h3>8. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, you can contact us:</p>
          <ul>
            <li>By email: <a href="mailto:support@spliq.app">support@spliq.app</a></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
