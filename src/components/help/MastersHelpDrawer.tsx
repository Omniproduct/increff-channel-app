import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

interface MastersHelpDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MastersHelpDrawer = ({ isOpen, onClose }: MastersHelpDrawerProps) => {
  const partnerFields = [
    { name: "Partner Name", description: "Full legal name of the business partner", required: true },
    { name: "Partner Code", description: "Unique identifier code for the partner", required: true },
    { name: "Partner Type", description: "Category: Supplier, Customer, or Vendor", required: true },
    { name: "Contact Email", description: "Primary email for business communication", required: true },
    { name: "Phone Number", description: "Primary contact phone number", required: false },
  ];

  const addressFields = [
    { name: "Street Address", description: "Complete street address including building number", required: true },
    { name: "City", description: "City or town name", required: true },
    { name: "State/Province", description: "State, province, or region", required: true },
    { name: "Postal Code", description: "ZIP or postal code", required: true },
    { name: "Country", description: "Country name", required: true },
  ];

  const locationFields = [
    { name: "Location Code", description: "Unique identifier for each location", required: true },
    { name: "Location Name", description: "Descriptive name for the location", required: true },
    { name: "Location Type", description: "Warehouse, Store, Distribution Center, etc.", required: true },
    { name: "Contact Person", description: "Local contact at this location", required: false },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Masters Data Help Guide
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          <Accordion type="single" collapsible defaultValue="partner-info">
            <AccordionItem value="partner-info">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  Partner Information
                  <Badge variant="secondary">{partnerFields.length}</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {partnerFields.map((field) => (
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

            <AccordionItem value="address-info">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  Address Information
                  <Badge variant="secondary">{addressFields.length}</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {addressFields.map((field) => (
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

            <AccordionItem value="location-info">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  Location Details
                  <Badge variant="secondary">{locationFields.length}</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {locationFields.map((field) => (
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
                <p className="font-medium mb-1">Creating Partners & Locations</p>
                <p>Use "Single Location" for simple setups or "Multiple Locations" for complex partner hierarchies. Enable bulk upload for large datasets.</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};