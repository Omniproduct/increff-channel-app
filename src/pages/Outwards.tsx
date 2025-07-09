import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrderTypeSelector } from "@/components/order/OrderTypeSelector";
import { B2COrderForm } from "@/components/order/B2COrderForm";
import { B2BOrderForm } from "@/components/order/B2BOrderForm";
import { OrderProgressBar } from "@/components/order/OrderProgressBar";
import { BulkUploadToggle } from "@/components/order/BulkUploadToggle";
import { BulkUploadForm } from "@/components/order/BulkUploadForm";
import { ItemCrossdockingForm } from "@/components/crossdocking/ItemCrossdockingForm";
import { BoxCrossdockingForm } from "@/components/crossdocking/BoxCrossdockingForm";
import { MapIcon, ArrowLeft, Package, Box, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { ScreenHeader } from "@/components/ui/screen-header";

const Outwards = () => {
  const [orderType, setOrderType] = useState("b2c");
  const [isBulkUpload, setIsBulkUpload] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [progressState, setProgressState] = useState({
    orderInfo: false,
    channelLocation: false,
    additionalConfig: false,
    uploadItems: false,
    customAttributes: false
  });

  const getCurrentStep = () => {
    if (!progressState.orderInfo) return 1;
    if (!progressState.channelLocation) return 2;
    if (!progressState.additionalConfig) return 3;
    if (!progressState.uploadItems) return 4;
    if (!progressState.customAttributes) return 5;
    return 5;
  };

  const renderOrderForm = () => {
    if (isBulkUpload) {
      return <BulkUploadForm orderType={orderType} />;
    }

    switch (orderType) {
      case "b2c":
        return <B2COrderForm 
          orderType={orderType} 
          onOrderTypeChange={setOrderType} 
          purpose={purpose} 
          onPurposeChange={setPurpose}
          progressState={progressState}
          setProgressState={setProgressState}
        />;
      case "b2b-outward":
        return <B2BOrderForm 
          variant="outward" 
          orderType={orderType} 
          onOrderTypeChange={setOrderType} 
          purpose={purpose} 
          onPurposeChange={setPurpose}
          progressState={progressState}
          setProgressState={setProgressState}
        />;
      default:
        return <B2COrderForm 
          orderType={orderType} 
          onOrderTypeChange={setOrderType} 
          purpose={purpose} 
          onPurposeChange={setPurpose}
          progressState={progressState}
          setProgressState={setProgressState}
        />;
    }
  };

  const renderCrossdockingForm = () => {
    switch (orderType) {
      case "b2c":
        return <ItemCrossdockingForm />;
      case "b2b-outward":
        return <BoxCrossdockingForm />;
      default:
        return <ItemCrossdockingForm />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="w-full px-[8%] flex h-16 items-center">
          <div className="flex items-center gap-4">
            <Link to="/main">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Back to Main
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="/lovable-uploads/baed4694-6705-4b8a-9c7c-5a711fcda920.png" 
                  alt="Increff Logo" 
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary">Increff Channel App</h1>
                <p className="text-xs text-muted-foreground">Outward Order Management</p>
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Link to="/journey">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-white">
                <MapIcon className="h-4 w-4" />
                View Journey
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              dhl-ae-omni | raghav.mehta
            </div>
          </div>
        </div>
      </header>
      
      <main className="w-full px-[8%] py-6">
        <ScreenHeader 
          title="Outward Order Management"
          subtitle="Create and manage B2C and B2B outward orders for sales and distribution"
        >
          <Button
            variant="outline"
            size="sm"
            className="gap-2 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-white"
          >
            Need Help?
          </Button>
        </ScreenHeader>
        
        <div className="w-full max-w-none mx-auto">
          <Tabs defaultValue="order-creation" className="w-full">
            <div className="border-b bg-gradient-to-r from-blue-50 to-orange-50 px-6 py-4 rounded-t-lg">
              <TabsList className="grid w-full max-w-lg grid-cols-2 h-12">
                <TabsTrigger 
                  value="order-creation" 
                  className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md flex items-center gap-2 text-sm font-medium"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Order Creation
                </TabsTrigger>
                <TabsTrigger 
                  value="crossdocking" 
                  className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md flex items-center gap-2 text-sm font-medium"
                >
                  {orderType === "b2c" ? <Package className="h-4 w-4" /> : <Box className="h-4 w-4" />}
                  {orderType === "b2c" ? "Item Crossdocking" : "Box Crossdocking"}
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="order-creation" className="mt-0">
              <div className="bg-white rounded-b-lg border border-t-0 border-blue-200 space-y-6">
                {/* Progress Bar */}
                <div className="border-b border-blue-200">
                  <OrderProgressBar currentStep={getCurrentStep()} />
                </div>
                
                <div className="p-6">
                  {/* Bulk Upload Toggle */}
                  <div className="flex justify-end mb-4">
                    <BulkUploadToggle value={isBulkUpload} onChange={setIsBulkUpload} />
                  </div>
                  
                  {/* Order Form */}
                  {renderOrderForm()}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="crossdocking" className="mt-0">
              <div className="bg-white rounded-b-lg border border-t-0 border-blue-200 p-6">
                {renderCrossdockingForm()}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Outwards;