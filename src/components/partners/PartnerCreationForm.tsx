
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { BasicInfoSection } from "./sections/BasicInfoSection";
import { AddressInfoSection } from "./sections/AddressInfoSection";
import { FormActions } from "./sections/FormActions";

interface PartnerCreationFormProps {
  onSubmit?: (partnerData: { id: string; name: string; code: string }) => void;
}

export const PartnerCreationForm = ({ onSubmit }: PartnerCreationFormProps) => {
  const [partnerType, setPartnerType] = useState("supplier");
  const [channel, setChannel] = useState("");
  const [excessGrnAllowed, setExcessGrnAllowed] = useState("no");
  const [partnerName, setPartnerName] = useState("");
  const [partnerCode, setPartnerCode] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const partnerName = formData.get('partnerName') as string;
    const partnerCode = formData.get('partnerCode') as string;
    
    // Generate ID and create partner data
    const partnerId = `PARTNER${Date.now().toString().slice(-6)}`;
    const partnerData = {
      id: partnerId,
      name: partnerName || "New Partner",
      code: partnerCode || `PARTNER${partnerId.slice(-3)}`
    };
    
    toast({
      title: "Success",
      description: "Partner created successfully",
    });
    
    // Call parent callback if provided
    if (onSubmit) {
      onSubmit(partnerData);
    }
    
    // Reset form
    (e.target as HTMLFormElement).reset();
    setChannel("");
    setExcessGrnAllowed("no");
    setPartnerType("supplier");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column - Basic Information */}
        <div>
          <BasicInfoSection
            channel={channel}
            setChannel={setChannel}
            excessGrnAllowed={excessGrnAllowed}
            setExcessGrnAllowed={setExcessGrnAllowed}
            partnerType={partnerType}
            setPartnerType={setPartnerType}
          />
        </div>

        {/* Right Column - Address Information */}
        <div>
          <AddressInfoSection />
        </div>
      </div>

      <FormActions />
    </form>
  );
};
