
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const AddressInfoSection = () => {
  return (
    <div className="bg-slate-50/50 rounded-lg p-3">
      <h3 className="text-sm font-medium mb-3 text-foreground">Address Information</h3>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-xs">
              Name <span className="text-brand-red">*</span>
            </Label>
            <Input id="name" placeholder="Enter name" required className="border-gray-200 focus:border-brand-blue h-8 text-xs" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone" className="text-xs">
              Phone <span className="text-brand-red">*</span>
            </Label>
            <Input id="phone" placeholder="Enter phone number" required className="border-gray-200 focus:border-brand-blue h-8 text-xs" />
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="email" className="text-xs">
            Email <span className="text-brand-red">*</span>
          </Label>
          <Input id="email" type="email" placeholder="Enter email address" required className="border-gray-200 focus:border-brand-blue h-8 text-xs" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="address1" className="text-xs">
            Address Line 1 <span className="text-brand-red">*</span>
          </Label>
          <Input id="address1" placeholder="Enter address line 1" required className="border-gray-200 focus:border-brand-blue h-8 text-xs" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="address2" className="text-xs">Address Line 2</Label>
            <Input id="address2" placeholder="Enter address line 2" className="border-gray-200 focus:border-brand-blue h-8 text-xs" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="address3" className="text-xs">Address Line 3</Label>
            <Input id="address3" placeholder="Enter address line 3" className="border-gray-200 focus:border-brand-blue h-8 text-xs" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="city" className="text-xs">
              City <span className="text-brand-red">*</span>
            </Label>
            <Input id="city" placeholder="Enter city" required className="border-gray-200 focus:border-brand-blue h-8 text-xs" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="state" className="text-xs">
              State <span className="text-brand-red">*</span>
            </Label>
            <Input id="state" placeholder="Enter state" required className="border-gray-200 focus:border-brand-blue h-8 text-xs" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="zipcode" className="text-xs">
              Zip Code <span className="text-brand-red">*</span>
            </Label>
            <Input id="zipcode" placeholder="Enter zip code" required className="border-gray-200 focus:border-brand-blue h-8 text-xs" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="country" className="text-xs">
              Country <span className="text-brand-red">*</span>
            </Label>
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-brand-blue h-8">
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
