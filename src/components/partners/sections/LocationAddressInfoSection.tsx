
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const LocationAddressInfoSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Billing Address */}
      <div className="bg-slate-50/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-6 text-foreground">Billing Address</h3>
        <div className="space-y-6">
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

          <div className="space-y-2">
            <Label htmlFor="billing-address1">
              Address Line 1 <span className="text-brand-red">*</span>
            </Label>
            <Input id="billing-address1" placeholder="Enter address line 1" required className="border-gray-200 focus:border-brand-blue" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="billing-address2">Address Line 2</Label>
            <Input id="billing-address2" placeholder="Enter address line 2" className="border-gray-200 focus:border-brand-blue" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="billing-address3">Address Line 3</Label>
            <Input id="billing-address3" placeholder="Enter address line 3" className="border-gray-200 focus:border-brand-blue" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="billing-zipcode">
                Zip Code <span className="text-brand-red">*</span>
              </Label>
              <Input id="billing-zipcode" placeholder="Enter zip code" required className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2">
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
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-slate-50/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-6 text-foreground">Shipping Address</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="shipping-name">
              Name <span className="text-brand-red">*</span>
            </Label>
            <Input id="shipping-name" placeholder="Enter name" required className="border-gray-200 focus:border-brand-blue" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="shipping-phone">
              Phone <span className="text-brand-red">*</span>
            </Label>
            <Input id="shipping-phone" placeholder="Enter phone number" required className="border-gray-200 focus:border-brand-blue" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="shipping-email">
              Email <span className="text-brand-red">*</span>
            </Label>
            <Input id="shipping-email" type="email" placeholder="Enter email address" required className="border-gray-200 focus:border-brand-blue" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="shipping-address1">
              Address Line 1 <span className="text-brand-red">*</span>
            </Label>
            <Input id="shipping-address1" placeholder="Enter address line 1" required className="border-gray-200 focus:border-brand-blue" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="shipping-address2">Address Line 2</Label>
            <Input id="shipping-address2" placeholder="Enter address line 2" className="border-gray-200 focus:border-brand-blue" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="shipping-address3">Address Line 3</Label>
            <Input id="shipping-address3" placeholder="Enter address line 3" className="border-gray-200 focus:border-brand-blue" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="shipping-city">
                City <span className="text-brand-red">*</span>
              </Label>
              <Input id="shipping-city" placeholder="Enter city" required className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shipping-state">
                State <span className="text-brand-red">*</span>
              </Label>
              <Input id="shipping-state" placeholder="Enter state" required className="border-gray-200 focus:border-brand-blue" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="shipping-zipcode">
                Zip Code <span className="text-brand-red">*</span>
              </Label>
              <Input id="shipping-zipcode" placeholder="Enter zip code" required className="border-gray-200 focus:border-brand-blue" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shipping-country">
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
  );
};
