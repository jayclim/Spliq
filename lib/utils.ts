import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateSettlementLink(
  platform: string,
  handle: string,
  amount: number,
  note: string = 'Expense Settlement'
): string | null {
  // Clean handle (remove @ or $ if present)
  const cleanHandle = handle.replace(/^[@$]/, '');

  switch (platform.toLowerCase()) {
    case 'venmo':
      return `venmo://paycharge?txn=pay&recipients=${cleanHandle}&amount=${amount}&note=${encodeURIComponent(note)}`;
    case 'cashapp':
      return `https://cash.app/$${cleanHandle}/${amount}`;
    case 'paypal':
      return `https://paypal.me/${cleanHandle}/${amount}`;
    default:
      return null;
  }
}
