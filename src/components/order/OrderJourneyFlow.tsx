
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowRight, CheckCircle, Upload, FileText, Users, Package, ShoppingCart, Box, Building, ArrowLeftRight } from "lucide-react";

export const OrderJourneyFlow = () => {
  const FlowStep = ({ 
    icon: Icon, 
    title, 
    description, 
    isOptional = false,
    variant = "default",
    stepNumber
  }: {
    icon: any;
    title: string;
    description: string;
    isOptional?: boolean;
    variant?: "default" | "success" | "warning";
    stepNumber: number;
  }) => (
    <div className={`
      p-4 rounded-lg border-2 transition-all duration-500 hover:shadow-lg hover:scale-105 relative group
      ${variant === "success" ? "border-green-200 bg-green-50 hover:bg-green-100" : 
        variant === "warning" ? "border-orange-200 bg-orange-50 hover:bg-orange-100" : 
        "border-blue-200 bg-blue-50 hover:bg-blue-100"}
    `}>
      <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
        {stepNumber}
      </div>
      <div className="flex items-start gap-3">
        <div className={`
          p-3 rounded-full transition-all duration-300 group-hover:scale-110
          ${variant === "success" ? "bg-green-100 text-green-600 group-hover:bg-green-200" : 
            variant === "warning" ? "bg-orange-100 text-orange-600 group-hover:bg-orange-200" : 
            "bg-blue-100 text-blue-600 group-hover:bg-blue-200"}
        `}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{title}</h4>
            {isOptional && (
              <Badge variant="outline" className="text-xs">Optional</Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground transition-colors">{description}</p>
        </div>
      </div>
    </div>
  );

  const FlowArrow = ({ direction = "down" }: { direction?: "down" | "right" }) => (
    <div className="flex justify-center my-3">
      {direction === "down" ? (
        <ArrowDown className="h-6 w-6 text-primary" />
      ) : (
        <ArrowRight className="h-6 w-6 text-primary" />
      )}
    </div>
  );

  const StaticIcon = ({ icon: Icon, className }: { icon: any; className?: string }) => (
    <div className={`inline-flex p-2 rounded-full ${className}`}>
      <Icon className="h-6 w-6" />
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-8">
        <div className="flex justify-center items-center gap-4 mb-4">
          <StaticIcon icon={ShoppingCart} className="bg-blue-100 text-blue-600" />
          <StaticIcon icon={Users} className="bg-purple-100 text-purple-600" />
          <StaticIcon icon={ArrowLeftRight} className="bg-orange-100 text-orange-600" />
        </div>
        <h2 className="text-4xl font-bold text-primary animate-fade-in">
          Application User Guide
        </h2>
        <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Complete workflow visualization for all application modules
        </p>
      </div>

      {/* Orders Section */}
      <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
          <CardTitle className="flex items-center gap-3">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-primary" />
            </div>
            Order Creation Journey Flow
            <div className="ml-auto flex gap-2">
              <StaticIcon icon={ShoppingCart} className="bg-primary/10 text-primary" />
              <StaticIcon icon={Box} className="bg-primary/10 text-primary" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid gap-12 lg:grid-cols-3">
            
            {/* B2C Order Flow */}
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <Badge className="bg-blue-600 text-white px-6 py-3 text-base font-bold shadow-lg hover:scale-105 transition-transform">
                  🛍️ B2C Order Flow
                </Badge>
              </div>
              
              <FlowStep
                icon={ShoppingCart}
                title="Open Orders Screen"
                description="Navigate to the orders screen from main dashboard"
                stepNumber={1}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Select Order Type & Purpose"
                description="Choose B2C from dropdown and select purpose (storage or crossdock)"
                variant="warning"
                stepNumber={2}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Package}
                title="Enter Order Information"
                description="Fill Parent Order ID and Channel Order ID (required)"
                variant="warning"
                stepNumber={3}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Building}
                title="Select Channel & Location"
                description="Choose channel name and warehouse/store location from dropdown"
                stepNumber={4}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Additional Configurations"
                description="Set QC type, SLA/Customer Promised time, Pool name for inventory allocation"
                stepNumber={5}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Custom Attributes"
                description="Add required custom attribute values for the order"
                stepNumber={6}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Upload}
                title="Upload Order Items CSV"
                description="Upload CSV file containing order/product details"
                variant="success"
                stepNumber={7}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Add Customer Addresses"
                description="Fill shipping and billing address details of customer"
                variant="warning"
                stepNumber={8}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Review & Submit"
                description="Review all details and submit the complete B2C order"
                variant="success"
                stepNumber={9}
              />
            </div>

            {/* B2B Inward Flow */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <Badge className="bg-orange-600 text-white px-6 py-3 text-base font-bold shadow-lg hover:scale-105 transition-transform">
                  📦 B2B Inward Flow
                </Badge>
              </div>
              
              <FlowStep
                icon={ShoppingCart}
                title="Open Orders Screen"
                description="Navigate to the orders screen from main dashboard"
                stepNumber={1}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Select Order Type & Purpose"
                description="Choose B2B Inward from dropdown and select purpose (storage or crossdock)"
                variant="warning"
                stepNumber={2}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Package}
                title="Enter Order Information"
                description="Fill Parent Order ID and Channel Order ID"
                stepNumber={3}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Building}
                title="Select Channel & Location"
                description="Choose channel name and warehouse/store location from dropdown"
                stepNumber={4}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Users}
                title="Supplier Details & Use Case"
                description="Add supplier information and select use case (Purchase, Return, Open PO, Open Return)"
                variant="warning"
                stepNumber={5}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Additional Configurations"
                description="Set QC type, SLA, Pool strategy for inventory allocation"
                stepNumber={6}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Custom Attributes"
                description="Add required custom attribute values for the order"
                stepNumber={7}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Upload}
                title="Upload Order Items CSV"
                description="Upload CSV file containing inward order/product details"
                variant="success"
                stepNumber={8}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Review & Submit"
                description="Review all details and submit the complete B2B inward order"
                variant="success"
                stepNumber={9}
              />
            </div>

            {/* B2B Outward Flow */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <Badge className="bg-green-600 text-white px-6 py-3 text-base font-bold shadow-lg hover:scale-105 transition-transform">
                  🚚 B2B Outward Flow
                </Badge>
              </div>
              
              <FlowStep
                icon={ShoppingCart}
                title="Open Orders Screen"
                description="Navigate to the orders screen from main dashboard"
                stepNumber={1}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Select Order Type & Purpose"
                description="Choose B2B Outward from dropdown and select purpose (storage or crossdock)"
                variant="warning"
                stepNumber={2}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Package}
                title="Enter Order Information"
                description="Fill Parent Order ID and Channel Order ID"
                stepNumber={3}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Building}
                title="Select Channel & Location"
                description="Choose channel name and warehouse/store location from dropdown"
                stepNumber={4}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Users}
                title="Customer Details & Use Case"
                description="Add customer information and select use case (Sales, Stock Transfer, Return to Vendor)"
                variant="warning"
                stepNumber={5}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Additional Configurations"
                description="Set QC type, SLA/Customer Promised time, Pool strategy for inventory allocation"
                stepNumber={6}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Custom Attributes"
                description="Add required custom attribute values for the order"
                stepNumber={7}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Upload}
                title="Upload Order Items CSV"
                description="Upload CSV file containing outward order/product details"
                variant="success"
                stepNumber={8}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Review & Submit"
                description="Review all details and submit the complete B2B outward order"
                variant="success"
                stepNumber={9}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Partners Section */}
      <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
          <CardTitle className="flex items-center gap-3">
            <div className="relative">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            Partner Management Journey Flow
            <div className="ml-auto flex gap-2">
              <StaticIcon icon={Users} className="bg-purple-100 text-purple-600" />
              <StaticIcon icon={Building} className="bg-purple-100 text-purple-600" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Enhanced Partner with Multiple Locations Flow */}
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <Badge className="bg-purple-600 text-white px-6 py-3 text-base font-bold shadow-lg hover:scale-105 transition-transform">
                  👥 Create Partner with Multiple Locations
                </Badge>
              </div>
              
              <FlowStep
                icon={Users}
                title="Open Masters Screen"
                description="Navigate to Masters page and select 'Create New Partner' or 'Add Location' from existing partner"
                stepNumber={1}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Step 1: Partner Selection/Creation"
                description="If from 'Add Location', partner auto-selected. If new, create partner with basic details & address"
                variant="warning"
                stepNumber={2}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Building}
                title="Step 2: Add Locations"
                description="Create multiple locations with toggle for bulk upload via CSV. Add locations to live list"
                variant="warning"
                stepNumber={3}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Step 3: Review & Confirm"
                description="Review partner details and all location codes. Confirm creation of partner with locations"
                variant="success"
                stepNumber={4}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Upload}
                title="Bulk Creation (Optional)"
                description="Use toggle to enable bulk partner & location creation via CSV file upload"
                variant="warning"
                isOptional={true}
                stepNumber={5}
              />
            </div>

            {/* Single Location Partner Flow */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <Badge className="bg-indigo-600 text-white px-6 py-3 text-base font-bold shadow-lg hover:scale-105 transition-transform">
                  📍 Single Location Partner Flow
                </Badge>
              </div>
              
              <FlowStep
                icon={Users}
                title="Open Masters Screen"
                description="Navigate to Masters page and click 'Create New Partner'"
                stepNumber={1}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Select Creation Type"
                description="Choose 'Single Location Partner' from the selection screen"
                variant="warning"
                stepNumber={2}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Building}
                title="Partner & Location Details"
                description="Fill partner information and location details in unified form"
                variant="warning"
                stepNumber={3}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Review & Create"
                description="Review all details and create partner with single location"
                variant="success"
                stepNumber={4}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crossdocking Section */}
      <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
          <CardTitle className="flex items-center gap-3">
            <div className="relative">
              <ArrowLeftRight className="h-6 w-6 text-orange-600" />
            </div>
            Crossdocking Operations Journey Flow
            <div className="ml-auto flex gap-2">
              <StaticIcon icon={ArrowLeftRight} className="bg-orange-100 text-orange-600" />
              <StaticIcon icon={Box} className="bg-orange-100 text-orange-600" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Item Crossdocking Flow */}
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <Badge className="bg-orange-600 text-white px-6 py-3 text-base font-bold shadow-lg hover:scale-105 transition-transform">
                  📦 Item Crossdocking Flow
                </Badge>
              </div>
              
              <FlowStep
                icon={ArrowLeftRight}
                title="Open Crossdocking Screen"
                description="Navigate to crossdocking screen and select Item Crossdocking tab"
                stepNumber={1}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Plan Configuration"
                description="Set crossdocking plan details and operational parameters"
                variant="warning"
                stepNumber={2}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Building}
                title="Source & Destination"
                description="Select source location and destination warehouse details"
                stepNumber={3}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Upload}
                title="Upload Item Details"
                description="Upload CSV with item specifications for crossdocking"
                variant="success"
                stepNumber={4}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Create Crossdocking Plan"
                description="Review and create the item crossdocking plan"
                variant="success"
                stepNumber={5}
              />
            </div>

            {/* Box Crossdocking Flow */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <Badge className="bg-red-600 text-white px-6 py-3 text-base font-bold shadow-lg hover:scale-105 transition-transform">
                  📫 Box Crossdocking Flow
                </Badge>
              </div>
              
              <FlowStep
                icon={ArrowLeftRight}
                title="Open Crossdocking Screen"
                description="Navigate to crossdocking screen and select Box Crossdocking tab"
                stepNumber={1}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Plan Configuration"
                description="Set bulk crossdocking plan details and operational parameters"
                variant="warning"
                stepNumber={2}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Building}
                title="Source & Destination"
                description="Select source location and destination warehouse for bulk transfer"
                stepNumber={3}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Upload}
                title="Upload Box Details"
                description="Upload CSV with box/container specifications for bulk crossdocking"
                variant="success"
                stepNumber={4}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Create Bulk Crossdocking Plan"
                description="Review and create the box crossdocking plan"
                variant="success"
                stepNumber={5}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center mb-6">
          <h4 className="font-bold text-xl mb-2 text-primary">Legend & Quick Reference</h4>
          <div className="flex justify-center gap-4 mb-4">
            <StaticIcon icon={ShoppingCart} className="bg-blue-100 text-blue-600" />
            <StaticIcon icon={Users} className="bg-purple-100 text-purple-600" />
            <StaticIcon icon={ArrowLeftRight} className="bg-orange-100 text-orange-600" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors">
            <div className="w-6 h-6 rounded border-2 border-blue-200 bg-blue-50"></div>
            <span className="font-medium">Standard Step</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors">
            <div className="w-6 h-6 rounded border-2 border-orange-200 bg-orange-50"></div>
            <span className="font-medium">Required Field</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors">
            <div className="w-6 h-6 rounded border-2 border-green-200 bg-green-50"></div>
            <span className="font-medium">File Upload</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors">
            <Badge variant="outline" className="text-xs">Optional</Badge>
            <span className="font-medium">Optional Step</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <div className="text-2xl font-bold text-blue-600">3</div>
          <div className="text-sm text-blue-700">Order Types</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
          <div className="text-2xl font-bold text-purple-600">2</div>
          <div className="text-sm text-purple-700">Partner Workflows</div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
          <div className="text-2xl font-bold text-orange-600">2</div>
          <div className="text-sm text-orange-700">Crossdocking Types</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
          <div className="text-2xl font-bold text-green-600">7</div>
          <div className="text-sm text-green-700">Total Modules</div>
        </div>
      </div>
    </div>
  );
};
