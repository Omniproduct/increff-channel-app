
import { useState } from "react";
import { AddressSection } from "./AddressSection";
import { useToast } from "@/hooks/use-toast";

export const LocationAddressInfoSection = () => {
  const [billingUseShipping, setBillingUseShipping] = useState(false);
  const [shippingUseBilling, setShippingUseBilling] = useState(false);
  const { toast } = useToast();

  const handleCopyAddress = (targetPrefix: string, sourcePrefix: string, checked: boolean) => {
    if (checked) {
      toast({
        title: "Address Copied",
        description: `${sourcePrefix} address will be used for ${targetPrefix} address.`,
      });
    }
  };

  const handleBillingCopy = (source: 'billing' | 'shipping', checked: boolean) => {
    if (source === 'shipping') {
      setBillingUseShipping(checked);
      if (checked) {
        setShippingUseBilling(false);
      }
      handleCopyAddress('billing', 'Shipping', checked);
    }
  };

  const handleShippingCopy = (source: 'billing' | 'shipping', checked: boolean) => {
    if (source === 'billing') {
      setShippingUseBilling(checked);
      if (checked) {
        setBillingUseShipping(false);
      }
      handleCopyAddress('shipping', 'Billing', checked);
    }
  };

  return (
    <div className="space-y-4">
      <AddressSection 
        title="Billing Address" 
        prefix="billing"
        onCopyFrom={handleBillingCopy}
        isHidden={billingUseShipping}
      />
      
      <AddressSection 
        title="Shipping Address" 
        prefix="shipping"
        onCopyFrom={handleShippingCopy}
        isHidden={shippingUseBilling}
      />
    </div>
  );
};
