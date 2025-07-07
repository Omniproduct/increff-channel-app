import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InwardB2BOrderForm } from "@/components/order/InwardB2BOrderForm";
import { BulkUploadToggle } from "@/components/order/BulkUploadToggle";
import { BulkUploadForm } from "@/components/order/BulkUploadForm";
import { ASNManagement } from "@/components/order/ASNManagement";
import { InwardOrderActions } from "@/components/order/InwardOrderActions";
import { MapIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ScreenHeader } from "@/components/ui/screen-header";

const Inwards = () => {
  const [isBulkUpload, setIsBulkUpload] = useState(false);
  const [purpose, setPurpose] = useState("");

  const renderOrderForm = () => {
    if (isBulkUpload) {
      return <BulkUploadForm orderType="b2b-inward" />;
    }
    return <InwardB2BOrderForm purpose={purpose} setPurpose={setPurpose} />;
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
        />
        
        <div className="max-w-7xl mx-auto space-y-6">
          <Tabs defaultValue="order-creation" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="order-creation">Order Creation</TabsTrigger>
              <TabsTrigger value="asn-management">ASN Management</TabsTrigger>
              <TabsTrigger value="order-actions">Order Actions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="order-creation" className="space-y-6">
              <Card className="border-blue-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
                  <CardTitle>Inward Order Configuration</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <BulkUploadToggle value={isBulkUpload} onChange={setIsBulkUpload} />
                </CardContent>
              </Card>
              
              {renderOrderForm()}
            </TabsContent>
            
            <TabsContent value="asn-management" className="space-y-6">
              <ASNManagement />
            </TabsContent>
            
            <TabsContent value="order-actions" className="space-y-6">
              <InwardOrderActions />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Inwards;