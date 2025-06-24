
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";

interface LocationBasicInfoSectionProps {
  selectedPartner: string;
  setSelectedPartner: (value: string) => void;
  partnerType: string;
  setPartnerType: (value: string) => void;
  gstApplicable: boolean;
  setGstApplicable: (value: boolean) => void;
  existingPartners: Array<{ code: string; type: string }>;
  channelOptions: string[];
}

export const LocationBasicInfoSection = ({
  selectedPartner,
  setSelectedPartner,
  partnerType,
  setPartnerType,
  gstApplicable,
  setGstApplicable,
  existingPartners,
  channelOptions
}: LocationBasicInfoSectionProps) => {
  return (
    <div className="bg-slate-50/50 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Basic Information</h3>
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="partner-location-code" className="text-sm">
            Partner Location Code <span className="text-brand-red">*</span>
          </Label>
          <Input
            id="partner-location-code"
            placeholder="Enter location code"
            required
            className="border-gray-200 focus:border-brand-blue h-9"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="partner-code" className="text-sm">
            Partner Code <span className="text-brand-red">*</span>
          </Label>
          <Select value={selectedPartner} onValueChange={setSelectedPartner}>
            <SelectTrigger className="border-gray-200 focus:border-brand-blue h-9">
              <SelectValue placeholder="Select existing partner" />
            </SelectTrigger>
            <SelectContent>
              {existingPartners.map((partner) => (
                <SelectItem key={partner.code} value={partner.code}>
                  {partner.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="channel" className="text-sm">Channel</Label>
            <Select>
              <SelectTrigger className="border-gray-200 focus:border-brand-blue h-9">
                <SelectValue placeholder="Select channel" />
              </SelectTrigger>
              <SelectContent>
                {channelOptions.map((option) => (
                  <SelectItem key={option} value={option.toLowerCase()}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="priority" className="text-sm">Priority</Label>
            <Input
              id="priority"
              type="number"
              placeholder="Enter priority"
              className="border-gray-200 focus:border-brand-blue h-9"
            />
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="gstin" className="flex items-center gap-2 text-sm">
            GSTIN
            <Info className="h-3 w-3 text-muted-foreground" />
          </Label>
          <Input
            id="gstin"
            placeholder="Enter GSTIN"
            disabled={!gstApplicable}
            className="border-gray-200 focus:border-brand-blue h-9"
          />
          <div className="flex items-center space-x-2 mt-1">
            <Checkbox
              id="gst-not-applicable"
              checked={!gstApplicable}
              onCheckedChange={(checked) => setGstApplicable(!checked)}
            />
            <Label htmlFor="gst-not-applicable" className="text-xs text-muted-foreground">
              GST Not Applicable
            </Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm">Partner Type <span className="text-brand-red">*</span></Label>
          <RadioGroup value={partnerType} onValueChange={setPartnerType} disabled={!!selectedPartner} className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="supplier" id="location-supplier" />
              <Label htmlFor="location-supplier" className="text-sm">Supplier</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="customer" id="location-customer" />
              <Label htmlFor="location-customer" className="text-sm">Customer</Label>
            </div>
          </RadioGroup>
          {selectedPartner && (
            <p className="text-xs text-muted-foreground">
              Type auto-determined based on selected partner
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
