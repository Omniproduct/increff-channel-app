
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface AddressData {
  name: string;
  phone: string;
  email: string;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

interface AddressSectionProps {
  title: string;
  prefix: string;
  onCopyFrom?: (source: 'billing' | 'shipping', checked: boolean) => void;
  isHidden?: boolean;
}

export const AddressSection = ({ title, prefix, onCopyFrom, isHidden = false }: AddressSectionProps) => {
  const [addressData, setAddressData] = useState<AddressData>({
    name: '',
    phone: '',
    email: '',
    address1: '',
    address2: '',
    address3: '',
    city: '',
    state: '',
    zipcode: '',
    country: ''
  });

  const handleCopyToggle = (checked: boolean) => {
    if (onCopyFrom) {
      const source = prefix === 'billing' ? 'shipping' : 'billing';
      onCopyFrom(source as 'billing' | 'shipping', checked);
    }
  };

  const getToggleLabel = () => {
    return prefix === 'billing' ? 'Same as Shipping Address' : 'Same as Billing Address';
  };

  if (isHidden) {
    return (
      <div className="bg-slate-50/50 rounded-lg p-4 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <div className="flex items-center gap-2">
            <Label htmlFor={`copy-toggle-${prefix}`} className="text-xs text-muted-foreground">
              {getToggleLabel()}
            </Label>
            <Switch
              id={`copy-toggle-${prefix}`}
              checked={true}
              onCheckedChange={handleCopyToggle}
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Using same address as {prefix === 'billing' ? 'shipping' : 'billing'} address
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 rounded-lg p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <div className="flex items-center gap-2">
          <Label htmlFor={`copy-toggle-${prefix}`} className="text-xs text-muted-foreground">
            {getToggleLabel()}
          </Label>
          <Switch
            id={`copy-toggle-${prefix}`}
            onCheckedChange={handleCopyToggle}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-name`} className="text-xs">
              Name <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-name`} 
              placeholder="Enter name" 
              required 
              className="border-gray-200 focus:border-brand-blue h-7 text-xs" 
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor={`${prefix}-phone`} className="text-xs">
              Phone <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-phone`} 
              placeholder="Enter phone number" 
              required 
              className="border-gray-200 focus:border-brand-blue h-7 text-xs" 
            />
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor={`${prefix}-email`} className="text-xs">
            Email <span className="text-brand-red">*</span>
          </Label>
          <Input 
            id={`${prefix}-email`} 
            type="email" 
            placeholder="Enter email address" 
            required 
            className="border-gray-200 focus:border-brand-blue h-7 text-xs" 
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor={`${prefix}-address1`} className="text-xs">
            Address Line 1 <span className="text-brand-red">*</span>
          </Label>
          <Input 
            id={`${prefix}-address1`} 
            placeholder="Enter address line 1" 
            required 
            className="border-gray-200 focus:border-brand-blue h-7 text-xs" 
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-address2`} className="text-xs">Address Line 2</Label>
            <Input 
              id={`${prefix}-address2`} 
              placeholder="Enter address line 2" 
              className="border-gray-200 focus:border-brand-blue h-7 text-xs" 
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-address3`} className="text-xs">Address Line 3</Label>
            <Input 
              id={`${prefix}-address3`} 
              placeholder="Enter address line 3" 
              className="border-gray-200 focus:border-brand-blue h-7 text-xs" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-city`} className="text-xs">
              City <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-city`} 
              placeholder="Enter city" 
              required 
              className="border-gray-200 focus:border-brand-blue h-7 text-xs" 
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-state`} className="text-xs">
              State <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-state`} 
              placeholder="Enter state" 
              required 
              className="border-gray-200 focus:border-brand-blue h-7 text-xs" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-zipcode`} className="text-xs">
              Zip Code <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-zipcode`} 
              placeholder="Enter zip code" 
              required 
              className="border-gray-200 focus:border-brand-blue h-7 text-xs" 
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-country`} className="text-xs">
              Country <span className="text-brand-red">*</span>
            </Label>
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-brand-blue h-7">
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
