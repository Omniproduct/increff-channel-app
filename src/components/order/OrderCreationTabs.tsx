
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderTypeSelector } from "./OrderTypeSelector";
import { B2COrderForm } from "./B2COrderForm";
import { B2BOrderForm } from "./B2BOrderForm";
import { BulkUploadToggle } from "./BulkUploadToggle";
import { BulkUploadForm } from "./BulkUploadForm";

export const OrderCreationTabs = () => {
  const [orderType, setOrderType] = useState("b2c");
  const [isBulkUpload, setIsBulkUpload] = useState(false);

  const renderOrderForm = () => {
    if (isBulkUpload) {
      return <BulkUploadForm orderType={orderType} />;
    }

    switch (orderType) {
      case "b2c":
        return <B2COrderForm />;
      case "b2b-inward":
        return <B2BOrderForm variant="inward" />;
      case "b2b-outward":
        return <B2BOrderForm variant="outward" />;
      default:
        return <B2COrderForm />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Card className="border-blue-200 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
          <CardTitle>Order Configuration</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <OrderTypeSelector value={orderType} onChange={setOrderType} />
          <BulkUploadToggle value={isBulkUpload} onChange={setIsBulkUpload} />
        </CardContent>
      </Card>
      
      {renderOrderForm()}
    </div>
  );
};
