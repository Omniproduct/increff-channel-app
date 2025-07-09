import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

interface OutwardHelpDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OutwardHelpDrawer = ({ isOpen, onClose }: OutwardHelpDrawerProps) => {
  const orderInfoFields = [
    { name: "Order Type", description: "Select B2C for consumer orders or B2B for business orders", required: true },
    { name: "Purpose", description: "Choose Cross dock or Storage based on fulfillment strategy", required: true },
    { name: "Order ID", description: "Unique identifier for the outward order", required: true },
    { name: "Parent Order ID", description: "Reference to parent order if applicable", required: false },
  ];

  const customerFields = [
    { name: "Customer Name", description: "Full name or business name of the recipient", required: true },
    { name: "Email Address", description: "Customer's email for order notifications", required: true },
    { name: "Phone Number", description: "Contact number for delivery coordination", required: true },
    { name: "Shipping Address", description: "Complete delivery address", required: true },
  ];

  const itemFields = [
    { name: "SKU", description: "Stock Keeping Unit identifier", required: true },
    { name: "Quantity", description: "Number of items to ship", required: true },
    { name: "Unit Price", description: "Selling price per item", required: false },
    { name: "Discount", description: "Applied discount amount or percentage", required: false },
  ];

  const crossdockingFields = [
    { name: "Source Location", description: "Origin warehouse or distribution center", required: true },
    { name: "Destination", description: "Target location for crossdocking", required: true },
    { name: "Transfer Type", description: "Item-level or Box-level crossdocking", required: true },
    { name: "Priority", description: "Processing priority level", required: false },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Outward Order Help Guide
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          <Accordion type="single" collapsible defaultValue="order-info">
            <AccordionItem value="order-info">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  Order Information
                  <Badge variant="secondary">{orderInfoFields.length}</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {orderInfoFields.map((field) => (
                    <div key={field.name} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {field.name}
                        </code>
                        {field.required && (
                          <Badge variant="destructive" className="text-xs">
                            Required
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {field.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customer-info">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  Customer Details
                  <Badge variant="secondary">{customerFields.length}</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {customerFields.map((field) => (
                    <div key={field.name} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {field.name}
                        </code>
                        {field.required && (
                          <Badge variant="destructive" className="text-xs">
                            Required
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {field.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="items">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  Item Details
                  <Badge variant="secondary">{itemFields.length}</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {itemFields.map((field) => (
                    <div key={field.name} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {field.name}
                        </code>
                        {field.required && (
                          <Badge variant="destructive" className="text-xs">
                            Required
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {field.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="crossdocking">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  Crossdocking Options
                  <Badge variant="secondary">{crossdockingFields.length}</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {crossdockingFields.map((field) => (
                    <div key={field.name} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {field.name}
                        </code>
                        {field.required && (
                          <Badge variant="destructive" className="text-xs">
                            Required
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {field.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-2">
              <HelpCircle className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-1">Order Types & Crossdocking</p>
                <p>B2C orders use item-level crossdocking while B2B orders support box-level operations. Choose the appropriate tab for your workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};