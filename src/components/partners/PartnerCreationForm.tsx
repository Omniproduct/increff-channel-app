
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export const PartnerCreationForm = () => {
  const [partnerType, setPartnerType] = useState("supplier");
  const [shippingSameAsBilling, setShippingSameAsBilling] = useState(false);
  const [billingExpanded, setBillingExpanded] = useState(true);
  const [shippingExpanded, setShippingExpanded] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Partner created successfully",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
    setShippingSameAsBilling(false);
    setBillingExpanded(true);
    setShippingExpanded(false);
  };

  const handleShippingSameChange = (checked: boolean) => {
    setShippingSameAsBilling(checked);
    setShippingExpanded(!checked);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information Section */}
      <div className="bg-slate-50/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-6 text-foreground">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <Label htmlFor="excess-grn">Excess GRN Allowed</Label>
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-brand-blue">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 md:col-span-2 lg:col-span-4">
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

      {/* Address Information */}
      <div className="space-y-6">
        {/* Billing Address Section */}
        <Collapsible open={billingExpanded} onOpenChange={setBillingExpanded}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
            <h3 className="text-lg font-semibold">Billing Address</h3>
            <ChevronDown className={cn("h-5 w-5 transition-transform", billingExpanded && "rotate-180")} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 border rounded-lg bg-white">
              <div className="space-y-2">
                <Label htmlFor="billing-name">
                  Name <span className="text-brand-red">*</span>
                </Label>
                <Input id="billing-name" placeholder="Enter name" required className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-phone">
                  Phone <span className="text-brand-red">*</span>
                </Label>
                <Input id="billing-phone" placeholder="Enter phone number" required className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-email">
                  Email <span className="text-brand-red">*</span>
                </Label>
                <Input id="billing-email" type="email" placeholder="Enter email address" required className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2 md:col-span-2 lg:col-span-3">
                <Label htmlFor="billing-address1">
                  Address Line 1 <span className="text-brand-red">*</span>
                </Label>
                <Input id="billing-address1" placeholder="Enter address line 1" required className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2 md:col-span-2 lg:col-span-3">
                <Label htmlFor="billing-address2">Address Line 2</Label>
                <Input id="billing-address2" placeholder="Enter address line 2" className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-city">
                  City <span className="text-brand-red">*</span>
                </Label>
                <Input id="billing-city" placeholder="Enter city" required className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-state">
                  State <span className="text-brand-red">*</span>
                </Label>
                <Input id="billing-state" placeholder="Enter state" required className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-zipcode">
                  Zip Code <span className="text-brand-red">*</span>
                </Label>
                <Input id="billing-zipcode" placeholder="Enter zip code" required className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2 md:col-span-2 lg:col-span-3">
                <Label htmlFor="billing-country">
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
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="shipping-same"
                checked={shippingSameAsBilling}
                onCheckedChange={handleShippingSameChange}
              />
              <Label htmlFor="shipping-same" className="text-sm">
                Shipping Address same as Billing Address
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Shipping Address Section */}
        <Collapsible open={shippingExpanded} onOpenChange={setShippingExpanded}>
          <CollapsibleTrigger 
            className="flex items-center justify-between w-full p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            disabled={shippingSameAsBilling}
          >
            <h3 className={cn("text-lg font-semibold", shippingSameAsBilling && "text-muted-foreground")}>
              Shipping Address
            </h3>
            <ChevronDown className={cn("h-5 w-5 transition-transform", shippingExpanded && "rotate-180")} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 border rounded-lg bg-white">
              <div className="space-y-2">
                <Label htmlFor="shipping-name">Name</Label>
                <Input id="shipping-name" placeholder="Enter name" className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-phone">Phone</Label>
                <Input id="shipping-phone" placeholder="Enter phone number" className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-email">Email</Label>
                <Input id="shipping-email" type="email" placeholder="Enter email address" className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2 md:col-span-2 lg:col-span-3">
                <Label htmlFor="shipping-address1">Address Line 1</Label>
                <Input id="shipping-address1" placeholder="Enter address line 1" className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2 md:col-span-2 lg:col-span-3">
                <Label htmlFor="shipping-address2">Address Line 2</Label>
                <Input id="shipping-address2" placeholder="Enter address line 2" className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-city">City</Label>
                <Input id="shipping-city" placeholder="Enter city" className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-state">State</Label>
                <Input id="shipping-state" placeholder="Enter state" className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-zipcode">Zip Code</Label>
                <Input id="shipping-zipcode" placeholder="Enter zip code" className="border-gray-200 focus:border-brand-blue" />
              </div>
              <div className="space-y-2 md:col-span-2 lg:col-span-3">
                <Label htmlFor="shipping-country">Country</Label>
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
          </CollapsibleContent>
        </Collapsible>
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
