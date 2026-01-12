import { getProfile, updateProfile } from "@/lib/actions/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const user = await getProfile();

  if (!user) {
    redirect("/sign-in");
  }

  // Cast paymentMethods to known type safely
  const paymentMethods = (user.paymentMethods as Record<string, string>) || {};

  async function savePaymentMethods(formData: FormData) {
    "use server";
    const methods = {
      venmo: formData.get("venmo") as string,
      cashapp: formData.get("cashapp") as string,
      paypal: formData.get("paypal") as string,
    };
    await updateProfile({ paymentMethods: methods });
  }

  return (
    <div className="container mx-auto max-w-2xl py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

      <div className="space-y-6">
        {/* Subscription Card */}
        <Card>
          <CardHeader>
            <CardTitle>Subscription</CardTitle>
            <CardDescription>Manage your plan and billing details.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <div className="font-medium">Current Plan</div>
              <div className="text-sm text-muted-foreground capitalize">{user.subscriptionTier}</div>
            </div>
            {user.subscriptionTier === 'free' ? (
              <Button variant="default">Upgrade to Pro</Button>
            ) : (
              <Button variant="outline" asChild>
                <a href="https://billing.lemonsqueezy.com/portal" target="_blank" rel="noopener noreferrer">
                  Manage Subscription
                </a>
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Payment Methods Card */}
        <Card>
          <CardHeader>
            <CardTitle>Smart Settlement Methods</CardTitle>
            <CardDescription>
              Add your handles to allow friends to pay you instantly with one click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={savePaymentMethods} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="venmo">Venmo Handle</Label>
                <Input 
                  id="venmo" 
                  name="venmo" 
                  placeholder="@username" 
                  defaultValue={paymentMethods.venmo || ''} 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cashapp">Cash App Cashtag</Label>
                <Input 
                  id="cashapp" 
                  name="cashapp" 
                  placeholder="$cashtag" 
                  defaultValue={paymentMethods.cashapp || ''} 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="paypal">PayPal Username</Label>
                <Input 
                  id="paypal" 
                  name="paypal" 
                  placeholder="username" 
                  defaultValue={paymentMethods.paypal || ''} 
                />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
