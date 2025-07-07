import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { OrderTypeSelector } from "@/components/order/OrderTypeSelector";
import { B2COrderForm } from "@/components/order/B2COrderForm";
import { B2BOrderForm } from "@/components/order/B2BOrderForm";
import { BulkUploadToggle } from "@/components/order/BulkUploadToggle";
import { BulkUploadForm } from "@/components/order/BulkUploadForm";
import { MapIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ScreenHeader } from "@/components/ui/screen-header";

const Outwards = () => {
  const [orderType, setOrderType] = useState("b2c");
  const [isBulkUpload, setIsBulkUpload] = useState(false);
  const [purpose, setPurpose] = useState("");

  const renderOrderForm = () => {
    if (isBulkUpload) {
      return <BulkUploadForm orderType={orderType} />;
    }

    switch (orderType) {
      case "b2c":
        return <B2COrderForm />;
      case "b2b-outward":
        return <B2BOrderForm variant="outward" />;
      default:
        return <B2COrderForm />;
    }
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
      
      <main className="container py-6">
        <ScreenHeader 
          title="Outward Order Management"
          subtitle="Create and manage B2C and B2B outward orders for sales and distribution"
        />
        
        <div className="max-w-7xl mx-auto space-y-6">
          <Card className="border-blue-200 shadow-sm">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
              <CardTitle>Outward Order Configuration</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label>Order Type</Label>
                <Select value={orderType} onValueChange={setOrderType}>
                  <SelectTrigger className="rounded-lg bg-white border-blue-200 focus:border-primary">
                    <SelectValue placeholder="Select Order Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="b2c">B2C</SelectItem>
                    <SelectItem value="b2b-outward">B2B Outward</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="purpose">Purpose</Label>
                <Select value={purpose} onValueChange={setPurpose}>
                  <SelectTrigger className="rounded-lg bg-white border-blue-200 focus:border-primary">
                    <SelectValue placeholder="Select Purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cross-dock">Cross dock</SelectItem>
                    <SelectItem value="storage">Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <BulkUploadToggle value={isBulkUpload} onChange={setIsBulkUpload} />
            </CardContent>
          </Card>
          
          {renderOrderForm()}
        </div>
      </main>
    </div>
  );
};

export default Outwards;