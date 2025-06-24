
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const PartnerLocationForm = () => {
  const [partnerType, setPartnerType] = useState("supplier");
  const [gstApplicable, setGstApplicable] = useState(true);
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
    setGstApplicable(true);
    setPartnerType("supplier");
  };

  // Mock partner data with their types
  const existingPartners = [
    { code: "PARTNER001 - ABC Suppliers", type: "supplier" },
    { code: "PARTNER002 - XYZ Distributors", type: "supplier" }, 
    { code: "PARTNER003 - Global Retailers", type: "customer" },
    { code: "PARTNER004 - Regional Wholesalers", type: "customer" }
  ];

  const channelOptions = [
    "Amazon",
    "Flipkart", 
    "Myntra",
    "Nykaa",
    "Ajio",
    "Meesho",
    "Shopify",
    "Direct"
  ];

  // Auto-determine partner type when partner is selected
  useEffect(() => {
    if (selectedPartner) {
      const partner = existingPartners.find(p => p.code === selectedPartner);
      if (partner) {
        setPartnerType(partner.type);
      }
    }
  }, [selectedPartner]);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Basic Information */}
        <div className="bg-slate-50/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-6 text-foreground">Basic Information</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="partner-location-code">
                Partner Location Code <span className="text-brand-red">*</span>
              </Label>
              <Input
                id="partner-location-code"
                placeholder="Enter location code"
                required
                className="border-gray-200 focus:border-brand-blue"
              />
            </div>

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
                    <SelectItem key={partner.code} value={partner.code}>
                      {partner.code}
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
                  {channelOptions.map((option) => (
                    <SelectItem key={option} value={option.toLowerCase()}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Input
                id="priority"
                type="number"
                placeholder="Enter priority"
                className="border-gray-200 focus:border-brand-blue"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gstin" className="flex items-center gap-2">
                GSTIN
                <Info className="h-4 w-4 text-muted-foreground" />
              </Label>
              <Input
                id="gstin"
                placeholder="Enter GSTIN"
                disabled={!gstApplicable}
                className="border-gray-200 focus:border-brand-blue"
              />
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="gst-not-applicable"
                  checked={!gstApplicable}
                  onCheckedChange={(checked) => setGstApplicable(!checked)}
                />
                <Label htmlFor="gst-not-applicable" className="text-sm text-muted-foreground">
                  GST Not Applicable
                </Label>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Partner Type <span className="text-brand-red">*</span></Label>
              <RadioGroup value={partnerType} onValueChange={setPartnerType} disabled={!!selectedPartner} className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="supplier" id="location-supplier" />
                  <Label htmlFor="location-supplier">Supplier</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="customer" id="location-customer" />
                  <Label htmlFor="location-customer">Customer</Label>
                </div>
              </RadioGroup>
              {selectedPartner && (
                <p className="text-xs text-muted-foreground">
                  Type auto-determined based on selected partner
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Address Information */}
        <div className="bg-slate-50/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-6 text-foreground">Address Information</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-brand-red">*</span>
                </Label>
                <Input id="name" placeholder="Enter name" required className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone <span className="text-brand-red">*</span>
                </Label>
                <Input id="phone" placeholder="Enter phone number" required className="border-gray-200 focus:border-brand-blue" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-brand-red">*</span>
              </Label>
              <Input id="email" type="email" placeholder="Enter email address" required className="border-gray-200 focus:border-brand-blue" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address1">
                Address Line 1 <span className="text-brand-red">*</span>
              </Label>
              <Input id="address1" placeholder="Enter address line 1" required className="border-gray-200 focus:border-brand-blue" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address2">Address Line 2</Label>
              <Input id="address2" placeholder="Enter address line 2" className="border-gray-200 focus:border-brand-blue" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address3">Address Line 3</Label>
              <Input id="address3" placeholder="Enter address line 3" className="border-gray-200 focus:border-brand-blue" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-brand-red">*</span>
                </Label>
                <Input id="city" placeholder="Enter city" required className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">
                  State <span className="text-brand-red">*</span>
                </Label>
                <Input id="state" placeholder="Enter state" required className="border-gray-200 focus:border-brand-blue" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zipcode">
                  Zip Code <span className="text-brand-red">*</span>
                </Label>
                <Input id="zipcode" placeholder="Enter zip code" required className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">
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
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-6 border-t">
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
