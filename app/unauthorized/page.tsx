import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldAlert } from 'lucide-react';

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full border text-center space-y-6">
        <div className="flex justify-center">
            <div className="bg-amber-100 p-4 rounded-full">
                <ShieldAlert className="h-12 w-12 text-amber-600" />
            </div>
        </div>
        
        <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Access Denied</h1>
            <p className="text-muted-foreground text-sm">
            You don't have permission to access this page. If you believe this is a mistake, please contact the group admin.
            </p>
        </div>

        <div className="pt-2">
            <Link href="/dashboard" passHref>
            <Button className="w-full">
                Back to Dashboard
            </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
