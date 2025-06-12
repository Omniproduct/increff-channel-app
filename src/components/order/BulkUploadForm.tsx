
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CSVUploadSection } from "./sections/CSVUploadSection";
import { CustomOrderAttributes } from "./CustomOrderAttributes";
import { AttributeDrawer } from "./AttributeDrawer";
import { UploadSummaryModal } from "./UploadSummaryModal";
import { useToast } from "@/hooks/use-toast";

interface BulkUploadFormProps {
  orderType: string;
}

export const BulkUploadForm = ({ orderType }: BulkUploadFormProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = () => {
    setIsSummaryModalOpen(true);
    toast({
      title: "🎉 Bulk orders uploaded successfully!",
      description: `Your ${orderType} bulk orders have been processed.`,
    });
  };

  const getOrderTypeDisplay = () => {
    switch (orderType) {
      case "b2c": return "B2C";
      case "b2b-inward": return "B2B Inward";
      case "b2b-outward": return "B2B Outward";
      default: return "B2C";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-primary">
          {getOrderTypeDisplay()} Bulk Upload
        </h2>
        <Button
          variant="outline"
          onClick={() => setIsDrawerOpen(true)}
          className="text-primary border-primary hover:bg-primary hover:text-white"
        >
          Need Help?
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card 
            className={`transition-all duration-300 border-blue-200 ${
              focusedCard === "attributes" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Order Configuration</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <CustomOrderAttributes 
                onFocus={() => setFocusedCard("attributes")}
                onBlur={() => setFocusedCard(null)}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card 
            className={`transition-all duration-300 border-blue-200 ${
              focusedCard === "upload" ? "card-focused" : ""
            }`}
          >
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Bulk CSV Upload</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <CSVUploadSection 
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
          Submit Bulk Orders
        </Button>
      </div>

      <AttributeDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />

      <UploadSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        orderType={getOrderTypeDisplay()}
        itemCount={150}
        errorCount={3}
      />
    </div>
  );
};
