
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const AddressInfoSection = () => {
  return (
    <div className="bg-slate-50/50 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Address Information</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-sm">
              Name <span className="text-brand-red">*</span>
            </Label>
            <Input id="name" placeholder="Enter name" required className="border-gray-200 focus:border-brand-blue h-9" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone" className="text-sm">
              Phone <span className="text-brand-red">*</span>
            </Label>
            <Input id="phone" placeholder="Enter phone number" required className="border-gray-200 focus:border-brand-blue h-9" />
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="email" className="text-sm">
            Email <span className="text-brand-red">*</span>
          </Label>
          <Input id="email" type="email" placeholder="Enter email address" required className="border-gray-200 focus:border-brand-blue h-9" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="address1" className="text-sm">
            Address Line 1 <span className="text-brand-red">*</span>
          </Label>
          <Input id="address1" placeholder="Enter address line 1" required className="border-gray-200 focus:border-brand-blue h-9" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="address2" className="text-sm">Address Line 2</Label>
          <Input id="address2" placeholder="Enter address line 2" className="border-gray-200 focus:border-brand-blue h-9" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="city" className="text-sm">
              City <span className="text-brand-red">*</span>
            </Label>
            <Input id="city" placeholder="Enter city" required className="border-gray-200 focus:border-brand-blue h-9" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="state" className="text-sm">
              State <span className="text-brand-red">*</span>
            </Label>
            <Input id="state" placeholder="Enter state" required className="border-gray-200 focus:border-brand-blue h-9" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="zipcode" className="text-sm">
              Zip Code <span className="text-brand-red">*</span>
            </Label>
            <Input id="zipcode" placeholder="Enter zip code" required className="border-gray-200 focus:border-brand-blue h-9" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="country" className="text-sm">
              Country <span className="text-brand-red">*</span>
            </Label>
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-brand-blue h-9">
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
  );
};
