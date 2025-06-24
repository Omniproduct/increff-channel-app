
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { BasicInfoSection } from "./sections/BasicInfoSection";
import { AddressInfoSection } from "./sections/AddressInfoSection";
import { FormActions } from "./sections/FormActions";

export const PartnerCreationForm = () => {
  const [partnerType, setPartnerType] = useState("supplier");
  const [channel, setChannel] = useState("");
  const [excessGrnAllowed, setExcessGrnAllowed] = useState("no");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Partner created successfully",
    });
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
