
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export const PartnerLocationForm = () => {
  const [partnerType, setPartnerType] = useState("supplier");
  const [excessGrnAllowed, setExcessGrnAllowed] = useState("no");
  const [addressExpanded, setAddressExpanded] = useState(true);
  const [selectedPartner, setSelectedPartner] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Partner location added successfully!",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
    setSelectedPartner("");
    setAddressExpanded(true);
  };

  // Mock partner data
  const existingPartners = [
    "PARTNER001 - ABC Suppliers",
    "PARTNER002 - XYZ Distributors", 
    "PARTNER003 - Global Retailers",
    "PARTNER004 - Regional Wholesalers"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="partner-code">
            Partner Code <span className="text-brand-red">*</span>
          </Label>
          <Select value={selectedPartner} onValueChange={setSelectedPartner}>
            <SelectTrigger className="border-gray-200 focus:border-brand-blue">
              <SelectValue placeholder="Select existing partner" />
            </SelectTrigger>
            <SelectContent>
              {existingPartners.map((partner) => (
                <SelectItem key={partner} value={partner}>
                  {partner}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="channel">Channel</Label>
          <Select>
            <SelectTrigger className="border-gray-200 focus:border-brand-blue">
              <SelectValue placeholder="Select channel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="wholesale">Wholesale</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="b2b">B2B</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3 md:col-span-2">
          <Label>Partner Type</Label>
          <RadioGroup value={partnerType} onValueChange={setPartnerType} className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="supplier" id="location-supplier" />
              <Label htmlFor="location-supplier">Supplier</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="customer" id="location-customer" />
              <Label htmlFor="location-customer">Customer</Label>
            </div>
          </RadioGroup>
          <p className="text-sm text-muted-foreground">
            Type will be auto-selected based on chosen partner if already determined
          </p>
        </div>
      </div>

      {/* Address Section */}
      <Collapsible open={addressExpanded} onOpenChange={setAddressExpanded}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
          <h3 className="text-lg font-semibold">Address Information</h3>
          <ChevronDown className={cn("h-5 w-5 transition-transform", addressExpanded && "rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="location-name">
                Name <span className="text-brand-red">*</span>
              </Label>
              <Input id="location-name" placeholder="Enter location name" required className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location-phone">
                Phone <span className="text-brand-red">*</span>
              </Label>
              <Input id="location-phone" placeholder="Enter phone number" required className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="location-address1">
                Address Line 1 <span className="text-brand-red">*</span>
              </Label>
              <Input id="location-address1" placeholder="Enter address line 1" required className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="location-address2">Address Line 2</Label>
              <Input id="location-address2" placeholder="Enter address line 2" className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="location-address3">Address Line 3</Label>
              <Input id="location-address3" placeholder="Enter address line 3" className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location-city">
                City <span className="text-brand-red">*</span>
              </Label>
              <Input id="location-city" placeholder="Enter city" required className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location-state">
                State <span className="text-brand-red">*</span>
              </Label>
              <Input id="location-state" placeholder="Enter state" required className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location-zipcode">
                Zip Code <span className="text-brand-red">*</span>
              </Label>
              <Input id="location-zipcode" placeholder="Enter zip code" required className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location-country">
                Country <span className="text-brand-red">*</span>
              </Label>
              <Select>
                <SelectTrigger className="border-gray-200 focus:border-brand-blue">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in">India</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="location-email">
                Email <span className="text-brand-red">*</span>
              </Label>
              <Input id="location-email" type="email" placeholder="Enter email address" required className="border-gray-200 focus:border-brand-blue" />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Additional Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 border rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <Select>
            <SelectTrigger className="border-gray-200 focus:border-brand-blue">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label>Excess GRN Allowed</Label>
          <RadioGroup value={excessGrnAllowed} onValueChange={setExcessGrnAllowed} className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="grn-yes" />
              <Label htmlFor="grn-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="grn-no" />
              <Label htmlFor="grn-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 bg-white border-t p-4 flex justify-end gap-3 shadow-lg">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90">
          Add Location
        </Button>
      </div>
    </form>
  );
};
