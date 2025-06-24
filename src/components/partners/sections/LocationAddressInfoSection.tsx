
import { AddressSection } from "./AddressSection";
import { useToast } from "@/hooks/use-toast";

export const LocationAddressInfoSection = () => {
  const { toast } = useToast();

  const handleCopyAddress = (targetPrefix: string, sourcePrefix: string) => {
    // In a real implementation, this would copy the actual form values
    toast({
      title: "Address Copied",
      description: `${sourcePrefix} address has been copied to ${targetPrefix} address.`,
    });
  };

  return (
    <div className="space-y-6">
      <AddressSection 
        title="Billing Address" 
        prefix="billing"
        onCopyFrom={(source) => {
          const sourceText = source === 'shipping' ? 'Shipping' : 'Partner';
          handleCopyAddress('billing', sourceText);
        }}
      />
      
      <AddressSection 
        title="Shipping Address" 
        prefix="shipping"
        onCopyFrom={(source) => {
          const sourceText = source === 'billing' ? 'Billing' : 'Partner';
          handleCopyAddress('shipping', sourceText);
        }}
      />
    </div>
  );
};
