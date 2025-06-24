
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

export const PartnerCreationForm = () => {
  const [partnerType, setPartnerType] = useState("supplier");
  const [channel, setChannel] = useState("");
  const [excessGrnAllowed, setExcessGrnAllowed] = useState("no");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Partner created successfully",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
    setChannel("");
    setExcessGrnAllowed("no");
    setPartnerType("supplier");
  };

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

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information Section */}
      <div className="bg-slate-50/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-6 text-foreground">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="partner-code">
              Partner Code <span className="text-brand-red">*</span>
            </Label>
            <Input
              id="partner-code"
              placeholder="Enter partner code"
              required
              className="border-gray-200 focus:border-brand-blue"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="channel">
              Channel <span className="text-brand-red">*</span>
            </Label>
            <Select value={channel} onValueChange={setChannel} required>
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
            <Label htmlFor="excess-grn">
              Excess GRN Allowed <span className="text-brand-red">*</span>
            </Label>
            <Select value={excessGrnAllowed} onValueChange={setExcessGrnAllowed}>
              <SelectTrigger className="border-gray-200 focus:border-brand-blue">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 md:col-span-2 lg:col-span-3">
            <Label>Partner Type <span className="text-brand-red">*</span></Label>
            <RadioGroup value={partnerType} onValueChange={setPartnerType} className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="supplier" id="supplier" />
                <Label htmlFor="supplier">Supplier</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="customer" id="customer" />
                <Label htmlFor="customer">Customer</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Address Information Section */}
      <div className="bg-slate-50/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-6 text-foreground">Address Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-brand-red">*</span>
            </Label>
            <Input id="email" type="email" placeholder="Enter email address" required className="border-gray-200 focus:border-brand-blue" />
          </div>
          <div className="space-y-2 md:col-span-2 lg:col-span-3">
            <Label htmlFor="address1">
              Address Line 1 <span className="text-brand-red">*</span>
            </Label>
            <Input id="address1" placeholder="Enter address line 1" required className="border-gray-200 focus:border-brand-blue" />
          </div>
          <div className="space-y-2 md:col-span-2 lg:col-span-3">
            <Label htmlFor="address2">Address Line 2</Label>
            <Input id="address2" placeholder="Enter address line 2" className="border-gray-200 focus:border-brand-blue" />
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="zipcode">
              Zip Code <span className="text-brand-red">*</span>
            </Label>
            <Input id="zipcode" placeholder="Enter zip code" required className="border-gray-200 focus:border-brand-blue" />
          </div>
          <div className="space-y-2 md:col-span-2 lg:col-span-3">
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

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-6 border-t">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90">
          Create Partner
        </Button>
      </div>
    </form>
  );
};
