"use client";

import { Zap } from 'lucide-react';
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { PricingModal } from "@/components/PricingModal";

export function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Spliq
          </span>
        </div>
        <div className="flex items-center gap-4">
          <PricingModal>
            <button className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-1.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-orange-500/25">
              Upgrade to Pro
            </button>
          </PricingModal>
          <div 
             className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
             onClick={() => router.push('/settings')}
          >
            Settings
          </div>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </header>
  );
}