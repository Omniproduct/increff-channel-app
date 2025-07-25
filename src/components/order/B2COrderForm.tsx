
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
import { AddressForm } from "./AddressForm";
import { useToast } from "@/hooks/use-toast";

export const B2COrderForm = ({ 
  orderType, 
  onOrderTypeChange, 
  purpose, 
  onPurposeChange, 
  progressState, 
  setProgressState 
}: { 
  orderType?: string; 
  onOrderTypeChange?: (value: string) => void; 
  purpose?: string; 
  onPurposeChange?: (value: string) => void; 
  progressState?: any;
  setProgressState?: (state: any) => void;
}) => {
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
                variant="outward"
                orderType={orderType}
                onOrderTypeChange={onOrderTypeChange}
                purpose={purpose}
                onPurposeChange={onPurposeChange}
                onFocus={() => setFocusedCard("order-info")}
                onBlur={() => {
                  setFocusedCard(null);
                  if (progressState && setProgressState) {
                    setProgressState(prev => ({ ...prev, orderInfo: true }));
                  }
                }}
              />
            </CardContent>
          </Card>

          <Card 
            className={`transition-all duration-300 border-blue-200 ${
              focusedCard === "partner" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Channel and Location Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <PartnerDetailsSection 
                onFocus={() => setFocusedCard("partner")}
                onBlur={() => {
                  setFocusedCard(null);
                  if (progressState && setProgressState) {
                    setProgressState(prev => ({ ...prev, channelLocation: true }));
                  }
                }}
              />
            </CardContent>
          </Card>

          <Card 
            className={`transition-all duration-300 border-blue-200 ${
              focusedCard === "order-type" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Additional Configurations</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <OrderTypeSection 
                orderType="b2c"
                onFocus={() => setFocusedCard("order-type")}
                onBlur={() => {
                  setFocusedCard(null);
                  if (progressState && setProgressState) {
                    setProgressState(prev => ({ ...prev, additionalConfig: true }));
                  }
                }}
              />
            </CardContent>
          </Card>

          <CustomOrderAttributes 
            onFocus={() => setFocusedCard("attributes")}
            onBlur={() => {
              setFocusedCard(null);
              if (progressState && setProgressState) {
                setProgressState(prev => ({ ...prev, customAttributes: true }));
              }
            }}
          />
        </div>

        <div className="space-y-6">
          <Card 
            className={`transition-all duration-300 border-blue-200 ${
              focusedCard === "order-items" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Order Items CSV Upload</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <CSVUploadSection 
                onError={() => setHasUploadError(true)}
                onFocus={() => setFocusedCard("order-items")}
                onBlur={() => {
                  setFocusedCard(null);
                  if (progressState && setProgressState) {
                    setProgressState(prev => ({ ...prev, uploadItems: true }));
                  }
                }}
              />
            </CardContent>
          </Card>

          <div 
            className={`transition-all duration-300 ${
              focusedCard === "shipping" ? "card-focused" : ""
            }`}
          >
            <AddressForm 
              type="shipping" 
              onFocus={() => setFocusedCard("shipping")}
              onBlur={() => setFocusedCard(null)}
            />
          </div>

          <div 
            className={`transition-all duration-300 ${
              focusedCard === "billing" ? "card-focused" : ""
            }`}
          >
            <AddressForm 
              type="billing" 
              onFocus={() => setFocusedCard("billing")}
              onBlur={() => setFocusedCard(null)}
            />
          </div>
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
