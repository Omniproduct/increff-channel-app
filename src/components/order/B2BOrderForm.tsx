
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderInfoSection } from "./sections/OrderInfoSection";
import { PartnerDetailsSection } from "./sections/PartnerDetailsSection";
import { OrderTypeSection } from "./sections/OrderTypeSection";
import { CSVUploadSection } from "./sections/CSVUploadSection";
import { AttributeDrawer } from "./AttributeDrawer";
import { UploadSummaryModal } from "./UploadSummaryModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const B2BOrderForm = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    setIsSummaryModalOpen(true);
    toast({
      title: "🎉 Order uploaded successfully!",
      description: "Your B2B order has been processed.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">B2B Outward Order</h2>
        <Button
          variant="outline"
          onClick={() => setIsDrawerOpen(true)}
          className="text-primary"
        >
          Need Help?
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Information</CardTitle>
            </CardHeader>
            <CardContent>
              <OrderInfoSection isB2B />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Partner Details</CardTitle>
            </CardHeader>
            <CardContent>
              <PartnerDetailsSection />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Type & SLA</CardTitle>
            </CardHeader>
            <CardContent>
              <OrderTypeSection />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Attributes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`attr-${i + 1}`} className="text-right">
                    Attribute {i + 1}
                  </Label>
                  <Input
                    id={`attr-${i + 1}`}
                    placeholder={`Enter Attribute ${i + 1}`}
                    className="col-span-3"
                  />
                </div>
              ))}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="currency" className="text-right">
                  Currency
                </Label>
                <Input
                  id="currency"
                  placeholder="Enter Currency"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="metadata" className="text-right">
                  Order Metadata
                </Label>
                <Input
                  id="metadata"
                  placeholder="Enter Order Metadata"
                  className="col-span-3"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <CSVUploadSection />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="sticky bottom-4 flex justify-center">
        <Button onClick={handleSubmit} size="lg" className="min-w-40">
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
        orderType="B2B"
        itemCount={24}
        errorCount={2}
      />
    </div>
  );
};
