import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
          <p className="text-sm text-muted-foreground">Last Updated: December 12, 2025</p>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Welcome to Spliq! These Terms of Service ("Terms") govern your use of the website spliq.app (the "Site") and the Spliq expense splitting service (the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
          </p>

          <h3>1. Acceptance of Terms</h3>
          <p>By creating an account or using the Service, you agree to these Terms. If you do not agree, you may not use the Service.</p>

          <h3>2. Description of Service</h3>
          <p>Spliq is a web application that helps groups track and split shared expenses. We offer a free tier and a paid "Pro" subscription that includes advanced features like AI receipt scanning.</p>

          <h3>3. Merchant of Record</h3>
          <p>Our order process is conducted by our online reseller Paddle.com Market Ltd. (doing business as Lemon Squeezy). Lemon Squeezy is the Merchant of Record for all our orders. Lemon Squeezy provides all customer service inquiries and handles returns.</p>

          <h3>4. Subscriptions and Payments</h3>
          <ul>
            <li><strong>Pro Subscription:</strong> Features such as AI scanning and smart settlements are available via a paid subscription.</li>
            <li><strong>Billing:</strong> You will be billed in advance on a recurring and periodic basis (monthly or annually).</li>
            <li><strong>Cancellation:</strong> You may cancel your subscription at any time through the Lemon Squeezy customer portal. Your access will continue until the end of your current billing period.</li>
            <li><strong>Refunds:</strong> Refunds are handled at the discretion of Lemon Squeezy in accordance with their refund policy.</li>
          </ul>

          <h3>5. User Conduct</h3>
          <p>You agree not to use the Service for any unlawful purpose or to solicit others to perform or participate in any unlawful acts. You are responsible for all activity that occurs under your account.</p>

          <h3>6. Intellectual Property</h3>
          <p>The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Spliq.</p>

          <h3>7. Limitation of Liability</h3>
          <p>In no event shall Spliq, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

          <h3>8. Changes</h3>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>

          <h3>9. Contact Us</h3>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@spliq.app">support@spliq.app</a>.</p>
        </CardContent>
      </Card>
    </div>
  );
}
