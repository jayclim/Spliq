"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Plus, ScanLine, X } from "lucide-react";
import { processReceiptAction } from "@/lib/actions/expenses";
import { useToast } from "@/hooks/useToast";

import Image from "next/image";

interface ReceiptItem {
  name: string;
  price: number;
}

export interface ReceiptData {
  merchant?: string;
  date?: string;
  total: number;
  items: ReceiptItem[];
}

interface AIExpenseModalProps {
  children?: React.ReactNode;
  groupId: number;
  onScanComplete?: (data: ReceiptData) => void;
}

export function AIExpenseModal({ children, groupId, onScanComplete }: AIExpenseModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<ReceiptData | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleScan = async () => {
    if (!file) return;

    setIsScanning(true);
    const formData = new FormData();
    formData.append('receipt', file);

    try {
      const result = await processReceiptAction(formData);
      
      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to scan');
      }

      setScannedData(result.data);
      if (onScanComplete) {
        onScanComplete(result.data);
        // Optionally close modal automatically or wait for user confirmation
        // For now, let user see result then close manualy or auto-close
        setIsOpen(false);
      }
      toast({
        title: "Receipt Scanned",
        description: `Found ${result.data.items.length} items. Total: $${result.data.total}`,
      });
    } catch (error: any) {
      toast({
        title: "Scan Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsScanning(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPreviewUrl(null);
    setScannedData(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if(!open) reset(); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ScanLine className="h-5 w-5 text-blue-500" />
            AI Receipt Scanner
          </DialogTitle>
          <DialogDescription>
            Upload a receipt photo. Gemini AI will extract items and prices automatically.
          </DialogDescription>
        </DialogHeader>

        {!scannedData ? (
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 hover:bg-muted/50 transition-colors relative">
              {previewUrl ? (
                <>
                  <div className="relative h-48 w-full max-w-[200px]">
                    <Image 
                      src={previewUrl} 
                      alt="Receipt preview" 
                      fill
                      className="object-contain rounded shadow-sm"
                    />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                    onClick={(e) => { e.stopPropagation(); reset(); }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <>
                  <Label htmlFor="receipt-upload" className="cursor-pointer flex flex-col items-center gap-2 w-full h-full justify-center">
                    <Plus className="h-8 w-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Tap to select image</span>
                  </Label>
                  <Input 
                    id="receipt-upload" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleFileChange} 
                  />
                </>
              )}
            </div>

            <Button onClick={handleScan} disabled={!file || isScanning} className="w-full">
              {isScanning ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Scanning...
                </>
              ) : (
                'Scan Receipt'
              )}
            </Button>
          </div>
        ) : (
          <div className="py-4 space-y-4">
            <div className="bg-muted p-3 rounded text-sm">
                <div className="flex justify-between font-bold mb-2">
                    <span>Store: {scannedData.merchant || 'Unknown'}</span>
                    <span>{scannedData.date}</span>
                </div>
                <ul className="space-y-1">
                    {scannedData.items.map((item, idx) => (
                        <li key={idx} className="flex justify-between">
                            <span>{item.name}</span>
                            <span>${item.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="border-t border-gray-400 mt-2 pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${scannedData.total.toFixed(2)}</span>
                </div>
            </div>
            <p className="text-xs text-center text-muted-foreground">
                Verify details before saving. (Saving not implemented in this demo modal yet)
            </p>
            <Button onClick={reset} variant="outline" className="w-full">Scan Another</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}