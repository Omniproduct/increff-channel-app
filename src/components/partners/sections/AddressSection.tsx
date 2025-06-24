
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
  showCopyOptions?: boolean;
  onCopyFrom?: (source: 'billing' | 'shipping', checked: boolean) => void;
  isHidden?: boolean;
}

export const AddressSection = ({ title, prefix, showCopyOptions = true, onCopyFrom, isHidden = false }: AddressSectionProps) => {
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

  const handleCopyToggle = (source: 'billing' | 'shipping', checked: boolean) => {
    if (onCopyFrom) {
      onCopyFrom(source, checked);
    }
  };

  if (isHidden) {
    return (
      <div className="bg-slate-50/50 rounded-lg p-3">
        <h3 className="text-sm font-medium text-foreground mb-2">{title}</h3>
        <p className="text-xs text-muted-foreground">
          Using same address as {prefix === 'billing' ? 'shipping' : 'billing'} address
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 rounded-lg p-3">
      <div className="mb-3">
        <h3 className="text-sm font-medium text-foreground mb-2">{title}</h3>
        {showCopyOptions && (
          <div className="space-y-1.5 border-t pt-2">
            <p className="text-xs text-muted-foreground">Copy address from:</p>
            <div className="space-y-1.5">
              {prefix === 'billing' && (
                <div className="flex items-center justify-between">
                  <Label htmlFor={`copy-from-shipping-${prefix}`} className="text-xs">
                    Same as Shipping Address
                  </Label>
                  <Switch
                    id={`copy-from-shipping-${prefix}`}
                    onCheckedChange={(checked) => handleCopyToggle('shipping', checked)}
                  />
                </div>
              )}
              {prefix === 'shipping' && (
                <div className="flex items-center justify-between">
                  <Label htmlFor={`copy-from-billing-${prefix}`} className="text-xs">
                    Same as Billing Address
                  </Label>
                  <Switch
                    id={`copy-from-billing-${prefix}`}
                    onCheckedChange={(checked) => handleCopyToggle('billing', checked)}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-name`} className="text-xs">
              Name <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-name`} 
              placeholder="Enter name" 
              required 
              className="border-gray-200 focus:border-brand-blue h-8 text-xs" 
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
              className="border-gray-200 focus:border-brand-blue h-8 text-xs" 
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
            className="border-gray-200 focus:border-brand-blue h-8 text-xs" 
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
            className="border-gray-200 focus:border-brand-blue h-8 text-xs" 
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-address2`} className="text-xs">Address Line 2</Label>
            <Input 
              id={`${prefix}-address2`} 
              placeholder="Enter address line 2" 
              className="border-gray-200 focus:border-brand-blue h-8 text-xs" 
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-address3`} className="text-xs">Address Line 3</Label>
            <Input 
              id={`${prefix}-address3`} 
              placeholder="Enter address line 3" 
              className="border-gray-200 focus:border-brand-blue h-8 text-xs" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-city`} className="text-xs">
              City <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-city`} 
              placeholder="Enter city" 
              required 
              className="border-gray-200 focus:border-brand-blue h-8 text-xs" 
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
              className="border-gray-200 focus:border-brand-blue h-8 text-xs" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-zipcode`} className="text-xs">
              Zip Code <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-zipcode`} 
              placeholder="Enter zip code" 
              required 
              className="border-gray-200 focus:border-brand-blue h-8 text-xs" 
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor={`${prefix}-country`} className="text-xs">
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
