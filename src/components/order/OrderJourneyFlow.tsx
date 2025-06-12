import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowRight, CheckCircle, Upload, FileText, Users, Package, ShoppingCart, Box } from "lucide-react";

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
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-8">
        <div className="flex justify-center items-center gap-4 mb-4">
          <StaticIcon icon={ShoppingCart} className="bg-blue-100 text-blue-600" />
          <StaticIcon icon={Package} className="bg-green-100 text-green-600" />
          <StaticIcon icon={Box} className="bg-orange-100 text-orange-600" />
        </div>
        <h2 className="text-4xl font-bold text-primary animate-fade-in">
          Order Creation Journey
        </h2>
        <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Complete workflow visualization for all order types
        </p>
      </div>

      <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
          <CardTitle className="flex items-center gap-3">
            <div className="relative">
              <Package className="h-6 w-6 text-primary" />
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
                icon={FileText}
                title="Order Configuration"
                description="Select B2C order type and set bulk upload preference"
                stepNumber={1}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Package}
                title="Order Information"
                description="Enter Parent Order ID and Order ID (required)"
                variant="warning"
                stepNumber={2}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Users}
                title="Partner Details"
                description="Select Channel, Location Code, and Partner Location Code"
                stepNumber={3}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Order Type & SLA"
                description="Set QC Status, Payment Type, and SLA Date/Time"
                stepNumber={4}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Upload}
                title="Upload Order Items"
                description="Upload CSV file with order line items"
                variant="success"
                stepNumber={5}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Shipping Address"
                description="Fill form manually or upload CSV"
                variant="warning"
                stepNumber={6}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Billing Address"
                description="Fill form or use same as shipping address"
                stepNumber={7}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Submit Order"
                description="Review and submit the complete B2C order"
                variant="success"
                stepNumber={8}
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
                icon={FileText}
                title="Order Configuration"
                description="Select B2B Inward order type and bulk upload preference"
                stepNumber={1}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Package}
                title="Order Information"
                description="Enter Parent Order ID and Order Code"
                stepNumber={2}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Users}
                title="Partner Details"
                description="Select Channel, Location Code, and Supplier Name"
                variant="warning"
                stepNumber={3}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Use Case Selection"
                description="Choose from Purchase, Return, Open PO, Open Return"
                variant="warning"
                stepNumber={4}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Order Type & SLA"
                description="Set QC Status, Payment Type, and SLA Date/Time"
                stepNumber={5}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Upload}
                title="Upload Order Items"
                description="Upload CSV file with inward order items"
                variant="success"
                stepNumber={6}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Custom Attributes"
                description="Configure combo order, gift order, priority settings"
                isOptional
                stepNumber={7}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Submit Order"
                description="Review and submit the complete B2B inward order"
                variant="success"
                stepNumber={8}
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
                icon={FileText}
                title="Order Configuration"
                description="Select B2B Outward order type and bulk upload preference"
                stepNumber={1}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Package}
                title="Order Information"
                description="Enter Parent Order ID and Order Code"
                stepNumber={2}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Users}
                title="Partner Details"
                description="Select Channel, Location Code, and Customer Name"
                variant="warning"
                stepNumber={3}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Use Case Selection"
                description="Choose from Sales, Stock Transfer, Return to Vendor"
                variant="warning"
                stepNumber={4}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Order Type & SLA"
                description="Set QC Status, Payment Type, and SLA Date/Time"
                stepNumber={5}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={Upload}
                title="Upload Order Items"
                description="Upload CSV file with outward order items"
                variant="success"
                stepNumber={6}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={FileText}
                title="Custom Attributes"
                description="Configure combo order, gift order, priority settings"
                isOptional
                stepNumber={7}
              />
              
              <FlowArrow />
              
              <FlowStep
                icon={CheckCircle}
                title="Submit Order"
                description="Review and submit the complete B2B outward order"
                variant="success"
                stepNumber={8}
              />
            </div>
          </div>

          {/* Legend */}
          <div className="mt-12 pt-8 border-t border-blue-200">
            <div className="text-center mb-6">
              <h4 className="font-bold text-xl mb-2 text-primary">Legend & Quick Reference</h4>
              <div className="flex justify-center gap-4 mb-4">
                <StaticIcon icon={ShoppingCart} className="bg-blue-100 text-blue-600" />
                <StaticIcon icon={Package} className="bg-green-100 text-green-600" />
                <StaticIcon icon={Box} className="bg-orange-100 text-orange-600" />
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
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-blue-700">Steps per Flow</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <div className="text-2xl font-bold text-green-600">3</div>
              <div className="text-sm text-green-700">Order Types</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <div className="text-2xl font-bold text-orange-600">2</div>
              <div className="text-sm text-orange-700">Upload Methods</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
