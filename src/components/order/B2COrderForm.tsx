
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderInfoSection } from "./sections/OrderInfoSection";
import { PartnerDetailsSection } from "./sections/PartnerDetailsSection";
import { OrderTypeSection } from "./sections/OrderTypeSection";
import { CSVUploadSection } from "./sections/CSVUploadSection";
import { CustomOrderAttributes } from "./CustomOrderAttributes";
import { AttributeDrawer } from "./AttributeDrawer";
import { UploadSummaryModal } from "./UploadSummaryModal";
import { UploadErrorCard } from "./UploadErrorCard";
import { MultiFileUploadTracker } from "./MultiFileUploadTracker";
import { useToast } from "@/hooks/use-toast";

export const B2COrderForm = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [hasUploadError, setHasUploadError] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<any[]>([]);
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = () => {
    // Simulate upload process
    setUploadProgress([
      { name: "Order Items", progress: 0, status: "uploading" },
      { name: "Shipping Address", progress: 0, status: "pending" },
      { name: "Billing Address", progress: 0, status: "pending" },
    ]);

    // Simulate progress
    setTimeout(() => {
      setUploadProgress(prev => prev.map((item, i) => 
        i === 0 ? { ...item, progress: 100, status: "success" } : item
      ));
    }, 1000);

    setTimeout(() => {
      setUploadProgress(prev => prev.map((item, i) => 
        i === 1 ? { ...item, progress: 100, status: "success" } : item
      ));
    }, 2000);

    setTimeout(() => {
      setUploadProgress(prev => prev.map((item, i) => 
        i === 2 ? { ...item, progress: 100, status: "success" } : item
      ));
      setIsSummaryModalOpen(true);
      toast({
        title: "🎉 Order uploaded successfully!",
        description: "Your B2C order has been processed.",
      });
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-primary">B2C Order</h2>
        <Button
          variant="outline"
          onClick={() => setIsDrawerOpen(true)}
          className="text-primary border-primary hover:bg-primary hover:text-white"
        >
          Need Help?
        </Button>
      </div>

      {hasUploadError && (
        <UploadErrorCard onDismiss={() => setHasUploadError(false)} />
      )}

      {uploadProgress.length > 0 && (
        <MultiFileUploadTracker 
          files={uploadProgress} 
          onRetry={(index) => {
            setUploadProgress(prev => prev.map((item, i) => 
              i === index ? { ...item, progress: 0, status: "uploading" } : item
            ));
          }}
        />
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card 
            className={`transition-all duration-300 border-blue-200 ${
              focusedCard === "order-info" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Order Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <OrderInfoSection 
                onFocus={() => setFocusedCard("order-info")}
                onBlur={() => setFocusedCard(null)}
              />
            </CardContent>
          </Card>

          <Card 
            className={`transition-all duration-300 border-blue-200 ${
              focusedCard === "partner" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Partner Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <PartnerDetailsSection 
                onFocus={() => setFocusedCard("partner")}
                onBlur={() => setFocusedCard(null)}
              />
            </CardContent>
          </Card>

          <Card 
            className={`transition-all duration-300 border-blue-200 ${
              focusedCard === "order-type" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Order Type & SLA</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <OrderTypeSection 
                onFocus={() => setFocusedCard("order-type")}
                onBlur={() => setFocusedCard(null)}
              />
            </CardContent>
          </Card>

          <CustomOrderAttributes 
            onFocus={() => setFocusedCard("attributes")}
            onBlur={() => setFocusedCard(null)}
          />
        </div>

        <div className="space-y-6">
          <Card 
            className={`transition-all duration-300 border-blue-200 ${
              focusedCard === "upload" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>CSV Upload</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <CSVUploadSection 
                onError={() => setHasUploadError(true)}
                onFocus={() => setFocusedCard("upload")}
                onBlur={() => setFocusedCard(null)}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="sticky bottom-4 flex justify-center">
        <Button 
          onClick={handleSubmit} 
          size="lg" 
          className="min-w-40 bg-primary hover:bg-primary/90"
        >
          Submit Order
        </Button>
      </div>

      <AttributeDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />

      <UploadSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        orderType="B2C"
        itemCount={12}
        errorCount={0}
      />
    </div>
  );
};
