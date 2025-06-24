
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
  onCopyFrom?: (source: 'billing' | 'shipping' | 'partner') => void;
}

export const AddressSection = ({ title, prefix, showCopyOptions = true, onCopyFrom }: AddressSectionProps) => {
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

  const handleCopyToggle = (source: 'billing' | 'shipping' | 'partner', checked: boolean) => {
    if (checked && onCopyFrom) {
      onCopyFrom(source);
    }
  };

  return (
    <div className="bg-slate-50/50 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
        {showCopyOptions && (
          <div className="space-y-3 border-t pt-4">
            <p className="text-sm text-muted-foreground mb-3">Copy address from:</p>
            <div className="space-y-3">
              {prefix === 'billing' && (
                <>
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`copy-from-shipping-${prefix}`} className="text-sm">
                      Use same as Shipping Address
                    </Label>
                    <Switch
                      id={`copy-from-shipping-${prefix}`}
                      onCheckedChange={(checked) => handleCopyToggle('shipping', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`copy-from-partner-${prefix}`} className="text-sm">
                      Use same as Partner Address
                    </Label>
                    <Switch
                      id={`copy-from-partner-${prefix}`}
                      onCheckedChange={(checked) => handleCopyToggle('partner', checked)}
                    />
                  </div>
                </>
              )}
              {prefix === 'shipping' && (
                <>
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`copy-from-billing-${prefix}`} className="text-sm">
                      Use same as Billing Address
                    </Label>
                    <Switch
                      id={`copy-from-billing-${prefix}`}
                      onCheckedChange={(checked) => handleCopyToggle('billing', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`copy-from-partner-${prefix}`} className="text-sm">
                      Use same as Partner Address
                    </Label>
                    <Switch
                      id={`copy-from-partner-${prefix}`}
                      onCheckedChange={(checked) => handleCopyToggle('partner', checked)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`${prefix}-name`}>
            Name <span className="text-brand-red">*</span>
          </Label>
          <Input 
            id={`${prefix}-name`} 
            placeholder="Enter name" 
            required 
            className="border-gray-200 focus:border-brand-blue" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${prefix}-phone`}>
            Phone <span className="text-brand-red">*</span>
          </Label>
          <Input 
            id={`${prefix}-phone`} 
            placeholder="Enter phone number" 
            required 
            className="border-gray-200 focus:border-brand-blue" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${prefix}-email`}>
            Email <span className="text-brand-red">*</span>
          </Label>
          <Input 
            id={`${prefix}-email`} 
            type="email" 
            placeholder="Enter email address" 
            required 
            className="border-gray-200 focus:border-brand-blue" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${prefix}-address1`}>
            Address Line 1 <span className="text-brand-red">*</span>
          </Label>
          <Input 
            id={`${prefix}-address1`} 
            placeholder="Enter address line 1" 
            required 
            className="border-gray-200 focus:border-brand-blue" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${prefix}-address2`}>Address Line 2</Label>
          <Input 
            id={`${prefix}-address2`} 
            placeholder="Enter address line 2" 
            className="border-gray-200 focus:border-brand-blue" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${prefix}-address3`}>Address Line 3</Label>
          <Input 
            id={`${prefix}-address3`} 
            placeholder="Enter address line 3" 
            className="border-gray-200 focus:border-brand-blue" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor={`${prefix}-city`}>
              City <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-city`} 
              placeholder="Enter city" 
              required 
              className="border-gray-200 focus:border-brand-blue" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${prefix}-state`}>
              State <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-state`} 
              placeholder="Enter state" 
              required 
              className="border-gray-200 focus:border-brand-blue" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor={`${prefix}-zipcode`}>
              Zip Code <span className="text-brand-red">*</span>
            </Label>
            <Input 
              id={`${prefix}-zipcode`} 
              placeholder="Enter zip code" 
              required 
              className="border-gray-200 focus:border-brand-blue" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${prefix}-country`}>
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
  );
};
