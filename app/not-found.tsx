import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full border text-center space-y-6">
        <div className="flex justify-center">
            <div className="bg-red-100 p-4 rounded-full">
                <HelpCircle className="h-12 w-12 text-red-500" />
            </div>
        </div>
        
        <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Page Not Found</h1>
            <p className="text-muted-foreground text-sm">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
        </div>

        <div className="pt-2">
            <Link href="/dashboard" passHref>
            <Button className="w-full">
                Go back home
            </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
