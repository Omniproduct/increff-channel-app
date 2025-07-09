import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InwardB2BOrderForm } from "@/components/order/InwardB2BOrderForm";
import { BulkUploadToggle } from "@/components/order/BulkUploadToggle";
import { BulkUploadForm } from "@/components/order/BulkUploadForm";
import { ASNManagement } from "@/components/order/ASNManagement";
import { InwardOrderActions } from "@/components/order/InwardOrderActions";
import { OrderProgressBar } from "@/components/order/OrderProgressBar";
import { InwardHelpDrawer } from "@/components/help/InwardHelpDrawer";
import { MapIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ScreenHeader } from "@/components/ui/screen-header";

const Inwards = () => {
  const [isBulkUpload, setIsBulkUpload] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [isHelpOpen, setIsHelpOpen] = useState(false);
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
      return <BulkUploadForm orderType="b2b-inward" />;
    }
    return <InwardB2BOrderForm 
      purpose={purpose} 
      setPurpose={setPurpose} 
      progressState={progressState}
      setProgressState={setProgressState}
    />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center">
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
                <p className="text-xs text-muted-foreground">Inward Order Management</p>
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
      
      <main className="container py-6">
        <ScreenHeader 
          title="Inward Order Management"
          subtitle="Create and manage B2B inward orders for purchase, returns, and open PO operations"
        >
          <Button
            variant="outline"
            size="sm"
            className="gap-2 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => setIsHelpOpen(true)}
          >
            Need Help?
          </Button>
        </ScreenHeader>
        
        <div className="w-full max-w-none mx-auto px-[8%] space-y-6">
          {/* Header Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-t-xl shadow-lg border border-white/20 border-b-0">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Inward Operations Dashboard</h2>
                  <p className="text-sm text-muted-foreground">Manage inward orders, ASN operations, and order actions</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    B2B Inward
                  </span>
                  {purpose && (
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded">
                      {purpose === "cross-dock" ? "Cross Dock" : "Storage"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="order-creation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-white/20 border-b-0 rounded-t-xl">
              <TabsTrigger value="order-creation">Order Creation</TabsTrigger>
              <TabsTrigger value="asn-management">ASN Management</TabsTrigger>
              <TabsTrigger value="order-actions">Order Actions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="order-creation" className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-b-xl border border-white/20 border-t-0">
                {/* Progress Bar */}
                <div className="border-b border-blue-200">
                  <OrderProgressBar currentStep={getCurrentStep()} />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-end mb-4">
                    <BulkUploadToggle value={isBulkUpload} onChange={setIsBulkUpload} />
                  </div>
                  {renderOrderForm()}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="asn-management" className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-b-xl border border-white/20 border-t-0 p-6">
                <ASNManagement />
              </div>
            </TabsContent>
            
            <TabsContent value="order-actions" className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-b-xl border border-white/20 border-t-0 p-6">
                <InwardOrderActions />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <InwardHelpDrawer 
        isOpen={isHelpOpen} 
        onClose={() => setIsHelpOpen(false)} 
      />
    </div>
  );
};

export default Inwards;