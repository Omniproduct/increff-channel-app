
import { OMSDropdown } from "../OMSDropdown";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface PartnerDetailsSectionProps {
  onFocus?: () => void;
  onBlur?: () => void;
  isB2B?: boolean;
  variant?: "inward" | "outward";
}

export const PartnerDetailsSection = ({ onFocus, onBlur, isB2B, variant }: PartnerDetailsSectionProps) => {
  const getPartnerNameOptions = () => {
    if (variant === "inward") {
      return ["ABC Suppliers Ltd", "XYZ Trading Co", "Premium Goods Inc", "Quality Parts LLC"];
    } else {
      return ["Customer Corp", "Retail Chain Ltd", "Business Partners Inc", "Enterprise Solutions"];
    }
  };

  const getUseCaseOptions = () => {
    if (variant === "inward") {
      return ["Purchase", "Return", "Open PO", "Open Return"];
    } else {
      return ["Sales", "Stock Transfer", "Return to Vendor"];
    }
  };

  return (
    <div className="space-y-4">
      <OMSDropdown
        label="Channel *"
        placeholder="Select Channel"
        options={[
          "CHANNEL APP",
          "MDX-CHANNEL-APP", 
          "ANK TRADING LLC_ERP",
          "ANK TRADING LLC",
          "DR HONEY SALE OF HONEY_MP"
        ]}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      
      <OMSDropdown
        label="Location Code *"
        placeholder="Select Location Code"
        options={["LOC001", "LOC002", "LOC003"]}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      
      {isB2B && (
        <>
          <div className="space-y-2">
            <Label>
              {variant === "inward" ? "Supplier Name" : "Customer Name"} <span className="text-destructive">*</span>
            </Label>
            <Select required>
              <SelectTrigger 
                className="rounded-lg bg-white border-blue-200 focus:border-primary"
                onFocus={onFocus}
                onBlur={onBlur}
              >
                <SelectValue placeholder={`Select ${variant === "inward" ? "Supplier" : "Customer"}`} />
              </SelectTrigger>
              <SelectContent>
                {getPartnerNameOptions().map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Use Case</Label>
            <Select>
              <SelectTrigger 
                className="rounded-lg bg-white border-blue-200 focus:border-primary"
                onFocus={onFocus}
                onBlur={onBlur}
              >
                <SelectValue placeholder="Select Use Case" />
              </SelectTrigger>
              <SelectContent>
                {getUseCaseOptions().map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </>
      )}
    </div>
  );
};
