import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InwardOrderInfoSection } from "./sections/InwardOrderInfoSection";
import { PartnerDetailsSection } from "./sections/PartnerDetailsSection";
import { OrderTypeSection } from "./sections/OrderTypeSection";
import { CSVUploadSection } from "./sections/CSVUploadSection";
import { CustomOrderAttributes } from "./CustomOrderAttributes";
import { AttributeDrawer } from "./AttributeDrawer";
import { UploadSummaryModal } from "./UploadSummaryModal";
import { useToast } from "@/hooks/use-toast";

interface InwardB2BOrderFormProps {
  purpose: string;
  setPurpose: (value: string) => void;
  progressState?: any;
  setProgressState?: (state: any) => void;
}

export const InwardB2BOrderForm = ({ purpose, setPurpose, progressState, setProgressState }: InwardB2BOrderFormProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = () => {
    setIsSummaryModalOpen(true);
    toast({
      title: "🎉 Inward Order uploaded successfully!",
      description: "Your B2B inward order has been processed.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={() => setIsDrawerOpen(true)}
          className="text-primary border-primary hover:bg-primary hover:text-white"
        >
          Need Help?
        </Button>
      </div>

      {/* Order Creation Section */}
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
              <InwardOrderInfoSection 
                purpose={purpose}
                setPurpose={setPurpose}
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
              <CardTitle>Partner Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <PartnerDetailsSection 
                isB2B
                variant="inward"
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
              focusedCard === "order-type" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Additional Configurations</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <OrderTypeSection 
                orderType="b2b-inward"
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

          <Card 
            className={`transition-all duration-300 border-blue-200 ${
              focusedCard === "order-items" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <CSVUploadSection 
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
        orderType="B2B Inward"
        itemCount={24}
        errorCount={2}
      />
    </div>
  );
};