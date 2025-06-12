
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowRight, CheckCircle, Upload, FileText, Users, Package } from "lucide-react";

export const OrderJourneyFlow = () => {
  const FlowStep = ({ 
    icon: Icon, 
    title, 
    description, 
    isOptional = false,
    variant = "default" 
  }: {
    icon: any;
    title: string;
    description: string;
    isOptional?: boolean;
    variant?: "default" | "success" | "warning";
  }) => (
    <div className={`
      p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md
      ${variant === "success" ? "border-green-200 bg-green-50" : 
        variant === "warning" ? "border-orange-200 bg-orange-50" : 
        "border-blue-200 bg-blue-50"}
    `}>
      <div className="flex items-start gap-3">
        <div className={`
          p-2 rounded-full 
          ${variant === "success" ? "bg-green-100 text-green-600" : 
            variant === "warning" ? "bg-orange-100 text-orange-600" : 
            "bg-blue-100 text-blue-600"}
        `}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-sm">{title}</h4>
            {isOptional && (
              <Badge variant="outline" className="text-xs">Optional</Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </div>
  );

  const FlowArrow = ({ direction = "down" }: { direction?: "down" | "right" }) => (
    <div className="flex justify-center my-2">
      {direction === "down" ? (
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      ) : (
        <ArrowRight className="h-5 w-5 text-muted-foreground" />
      )}
    </div>
  );

  return (
    <Card className="border-blue-200">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          Order Creation Journey Flow
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* B2C Order Flow */}
          <div className="space-y-4">
            <div className="text-center">
              <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">
                B2C Order Flow
              </Badge>
            </div>
            
            <FlowStep
              icon={FileText}
              title="1. Order Configuration"
              description="Select B2C order type and set bulk upload preference"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={Package}
              title="2. Order Information"
              description="Enter Parent Order ID and Order ID (required)"
              variant="warning"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={Users}
              title="3. Partner Details"
              description="Select Channel, Location Code, and Partner Location Code"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={CheckCircle}
              title="4. Order Type & SLA"
              description="Set QC Status, Payment Type, and SLA Date/Time"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={Upload}
              title="5. Upload Order Items"
              description="Upload CSV file with order line items"
              variant="success"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={FileText}
              title="6. Shipping Address"
              description="Fill form manually or upload CSV"
              variant="warning"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={FileText}
              title="7. Billing Address"
              description="Fill form or use same as shipping address"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={CheckCircle}
              title="8. Submit Order"
              description="Review and submit the complete B2C order"
              variant="success"
            />
          </div>

          {/* B2B Inward Flow */}
          <div className="space-y-4">
            <div className="text-center">
              <Badge className="bg-orange-600 text-white px-4 py-2 text-sm font-medium">
                B2B Inward Flow
              </Badge>
            </div>
            
            <FlowStep
              icon={FileText}
              title="1. Order Configuration"
              description="Select B2B Inward order type and bulk upload preference"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={Package}
              title="2. Order Information"
              description="Enter Parent Order ID and Order Code"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={Users}
              title="3. Partner Details"
              description="Select Channel, Location Code, and Supplier Name"
              variant="warning"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={FileText}
              title="4. Use Case Selection"
              description="Choose from Purchase, Return, Open PO, Open Return"
              variant="warning"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={CheckCircle}
              title="5. Order Type & SLA"
              description="Set QC Status, Payment Type, and SLA Date/Time"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={Upload}
              title="6. Upload Order Items"
              description="Upload CSV file with inward order items"
              variant="success"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={FileText}
              title="7. Custom Attributes"
              description="Configure combo order, gift order, priority settings"
              isOptional
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={CheckCircle}
              title="8. Submit Order"
              description="Review and submit the complete B2B inward order"
              variant="success"
            />
          </div>

          {/* B2B Outward Flow */}
          <div className="space-y-4">
            <div className="text-center">
              <Badge className="bg-green-600 text-white px-4 py-2 text-sm font-medium">
                B2B Outward Flow
              </Badge>
            </div>
            
            <FlowStep
              icon={FileText}
              title="1. Order Configuration"
              description="Select B2B Outward order type and bulk upload preference"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={Package}
              title="2. Order Information"
              description="Enter Parent Order ID and Order Code"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={Users}
              title="3. Partner Details"
              description="Select Channel, Location Code, and Customer Name"
              variant="warning"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={FileText}
              title="4. Use Case Selection"
              description="Choose from Sales, Stock Transfer, Return to Vendor"
              variant="warning"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={CheckCircle}
              title="5. Order Type & SLA"
              description="Set QC Status, Payment Type, and SLA Date/Time"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={Upload}
              title="6. Upload Order Items"
              description="Upload CSV file with outward order items"
              variant="success"
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={FileText}
              title="7. Custom Attributes"
              description="Configure combo order, gift order, priority settings"
              isOptional
            />
            
            <FlowArrow />
            
            <FlowStep
              icon={CheckCircle}
              title="8. Submit Order"
              description="Review and submit the complete B2B outward order"
              variant="success"
            />
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-blue-200">
          <h4 className="font-medium text-sm mb-4">Legend:</h4>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-blue-200 bg-blue-50"></div>
              <span>Standard Step</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-orange-200 bg-orange-50"></div>
              <span>Required Field</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-green-200 bg-green-50"></div>
              <span>File Upload</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">Optional</Badge>
              <span>Optional Step</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
