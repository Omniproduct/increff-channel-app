
import { OMSDropdown } from "../OMSDropdown";

interface PartnerDetailsSectionProps {
  onFocus?: () => void;
  onBlur?: () => void;
}

export const PartnerDetailsSection = ({ onFocus, onBlur }: PartnerDetailsSectionProps) => {
  return (
    <div className="space-y-4">
      <OMSDropdown
        label="Channel"
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
        label="Location Code"
        placeholder="Select Location Code"
        options={["LOC001", "LOC002", "LOC003"]}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <OMSDropdown
        label="Partner Code"
        placeholder="Select Partner Code"
        options={["PART001", "PART002", "PART003"]}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <OMSDropdown
        label="Partner Location Code"
        placeholder="Select Partner Location Code"
        options={["PARTLOC001", "PARTLOC002", "PARTLOC003"]}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
