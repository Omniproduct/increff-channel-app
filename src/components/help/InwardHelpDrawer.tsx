import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

interface InwardHelpDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InwardHelpDrawer = ({ isOpen, onClose }: InwardHelpDrawerProps) => {
  const orderInfoFields = [
    { name: "Order Type", description: "Select 'B2B Inward' for purchase orders and returns", required: true },
    { name: "Purpose", description: "Choose Cross dock or Storage based on operation type", required: true },
    { name: "Order ID", description: "Unique identifier for the inward order", required: true },
    { name: "Parent Order ID", description: "Reference to parent order if applicable", required: false },
  ];

  const channelFields = [
    { name: "Channel", description: "Distribution channel for the order", required: true },
    { name: "Location", description: "Warehouse or storage location", required: true },
    { name: "Partner", description: "Supplier or vendor information", required: true },
  ];

  const itemFields = [
    { name: "SKU", description: "Stock Keeping Unit identifier", required: true },
    { name: "Quantity", description: "Number of items to receive", required: true },
    { name: "Unit Price", description: "Cost per item", required: false },
    { name: "Expiry Date", description: "Product expiration date if applicable", required: false },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Inward Order Help Guide
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

            <AccordionItem value="channel-location">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  Channel & Location
                  <Badge variant="secondary">{channelFields.length}</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {channelFields.map((field) => (
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
          </Accordion>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-2">
              <HelpCircle className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-1">Need more help?</p>
                <p>Fill in all required fields marked with red asterisks (*) to proceed through the workflow</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};