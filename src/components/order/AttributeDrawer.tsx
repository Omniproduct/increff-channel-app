
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

interface AttributeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AttributeDrawer = ({ isOpen, onClose }: AttributeDrawerProps) => {
  const orderAttributes = [
    { name: "accountNumber", description: "Customer account identifier", required: true },
    { name: "incoterm", description: "International commercial terms", required: false },
    { name: "serviceCode", description: "Service type code", required: true },
    { name: "currency", description: "Order currency (e.g., USD, EUR)", required: true },
  ];

  const orderItemAttributes = [
    { name: "HS CODE", description: "Harmonized System commodity code", required: true },
    { name: "Country of Origin", description: "Manufacturing country", required: false },
    { name: "Inbound Bill of Entry", description: "Import documentation reference", required: false },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Order Attribute Reference
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          <Accordion type="single" collapsible defaultValue="order-attrs">
            <AccordionItem value="order-attrs">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  Order Attributes
                  <Badge variant="secondary">{orderAttributes.length}</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {orderAttributes.map((attr) => (
                    <div key={attr.name} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {attr.name}
                        </code>
                        {attr.required && (
                          <Badge variant="destructive" className="text-xs">
                            Required
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {attr.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-attrs">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  Order Item Attributes
                  <Badge variant="secondary">{orderItemAttributes.length}</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {orderItemAttributes.map((attr) => (
                    <div key={attr.name} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {attr.name}
                        </code>
                        {attr.required && (
                          <Badge variant="destructive" className="text-xs">
                            Required
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {attr.description}
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
                <p>These are the custom order and order item attributes configured in the OMS system</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
