
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { LocationBasicInfoSection } from "./sections/LocationBasicInfoSection";
import { LocationAddressInfoSection } from "./sections/LocationAddressInfoSection";
import { FormActions } from "./sections/FormActions";

export const PartnerLocationForm = () => {
  const [partnerType, setPartnerType] = useState("supplier");
  const [gstApplicable, setGstApplicable] = useState(true);
  const [selectedPartner, setSelectedPartner] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Partner location added successfully!",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
    setSelectedPartner("");
    setGstApplicable(true);
    setPartnerType("supplier");
  };

  // Mock partner data with their types
  const existingPartners = [
    { code: "PARTNER001 - ABC Suppliers", type: "supplier" },
    { code: "PARTNER002 - XYZ Distributors", type: "supplier" }, 
    { code: "PARTNER003 - Global Retailers", type: "customer" },
    { code: "PARTNER004 - Regional Wholesalers", type: "customer" }
  ];

  const channelOptions = [
    "Amazon",
    "Flipkart", 
    "Myntra",
    "Nykaa",
    "Ajio",
    "Meesho",
    "Shopify",
    "Direct"
  ];

  // Auto-determine partner type when partner is selected
  useEffect(() => {
    if (selectedPartner) {
      const partner = existingPartners.find(p => p.code === selectedPartner);
      if (partner) {
        setPartnerType(partner.type);
      }
    }
  }, [selectedPartner]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column - Basic Information */}
        <div>
          <LocationBasicInfoSection
            selectedPartner={selectedPartner}
            setSelectedPartner={setSelectedPartner}
            partnerType={partnerType}
            setPartnerType={setPartnerType}
            gstApplicable={gstApplicable}
            setGstApplicable={setGstApplicable}
            existingPartners={existingPartners}
            channelOptions={channelOptions}
          />
        </div>

        {/* Right Column - Address Information */}
        <div>
          <LocationAddressInfoSection />
        </div>
      </div>

      <FormActions submitButtonText="Add Location" />
    </form>
  );
};
