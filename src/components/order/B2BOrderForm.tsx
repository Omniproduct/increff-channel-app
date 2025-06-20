
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
import { useToast } from "@/hooks/use-toast";

interface B2BOrderFormProps {
  variant: "inward" | "outward";
}

export const B2BOrderForm = ({ variant }: B2BOrderFormProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = () => {
    setIsSummaryModalOpen(true);
    toast({
      title: "🎉 Order uploaded successfully!",
      description: `Your B2B ${variant} order has been processed.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">
          B2B {variant.charAt(0).toUpperCase() + variant.slice(1)} Order
        </h2>
        <Button
          variant="outline"
          onClick={() => setIsDrawerOpen(true)}
          className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white"
        >
          Need Help?
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card 
            className={`transition-all duration-300 border-gray-200 bg-white ${
              focusedCard === "order-info" ? "ring-2 ring-brand-blue ring-opacity-50 border-brand-blue shadow-lg" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
              <CardTitle className="text-gray-900">Order Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <OrderInfoSection 
                isB2B
                variant={variant}
                onFocus={() => setFocusedCard("order-info")}
                onBlur={() => setFocusedCard(null)}
              />
            </CardContent>
          </Card>

          <Card 
            className={`transition-all duration-300 border-gray-200 bg-white ${
              focusedCard === "partner" ? "ring-2 ring-brand-blue ring-opacity-50 border-brand-blue shadow-lg" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
              <CardTitle className="text-gray-900">Partner Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <PartnerDetailsSection 
                isB2B
                variant={variant}
                onFocus={() => setFocusedCard("partner")}
                onBlur={() => setFocusedCard(null)}
              />
            </CardContent>
          </Card>

          <Card 
            className={`transition-all duration-300 border-gray-200 bg-white ${
              focusedCard === "order-type" ? "ring-2 ring-brand-blue ring-opacity-50 border-brand-blue shadow-lg" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
              <CardTitle className="text-gray-900">Order Type & SLA</CardTitle>
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
            className={`transition-all duration-300 border-gray-200 bg-white ${
              focusedCard === "order-items" ? "ring-2 ring-brand-blue ring-opacity-50 border-brand-blue shadow-lg" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
              <CardTitle className="text-gray-900">Order Items</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <CSVUploadSection 
                onFocus={() => setFocusedCard("order-items")}
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
          className="min-w-40 bg-brand-blue hover:bg-brand-blue/90 text-white"
        >
          Submit
        </Button>
      </div>

      <AttributeDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />

      <UploadSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        orderType={`B2B ${variant.charAt(0).toUpperCase() + variant.slice(1)}`}
        itemCount={24}
        errorCount={2}
      />
    </div>
  );
};
