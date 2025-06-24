
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface BasicInfoSectionProps {
  channel: string;
  setChannel: (value: string) => void;
  excessGrnAllowed: string;
  setExcessGrnAllowed: (value: string) => void;
  partnerType: string;
  setPartnerType: (value: string) => void;
}

export const BasicInfoSection = ({
  channel,
  setChannel,
  excessGrnAllowed,
  setExcessGrnAllowed,
  partnerType,
  setPartnerType,
}: BasicInfoSectionProps) => {
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

  return (
    <div className="bg-slate-50/50 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Basic Information</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="partner-code" className="text-sm">
              Partner Code <span className="text-brand-red">*</span>
            </Label>
            <Input
              id="partner-code"
              placeholder="Enter partner code"
              required
              className="border-gray-200 focus:border-brand-blue h-9"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="channel" className="text-sm">
              Channel <span className="text-brand-red">*</span>
            </Label>
            <Select value={channel} onValueChange={setChannel} required>
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

          <div className="space-y-1">
            <Label htmlFor="excess-grn" className="text-sm">
              Excess GRN Allowed <span className="text-brand-red">*</span>
            </Label>
            <Select value={excessGrnAllowed} onValueChange={setExcessGrnAllowed}>
              <SelectTrigger className="border-gray-200 focus:border-brand-blue h-9">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm">Partner Type <span className="text-brand-red">*</span></Label>
          <RadioGroup value={partnerType} onValueChange={setPartnerType} className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="supplier" id="supplier" />
              <Label htmlFor="supplier" className="text-sm">Supplier</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="customer" id="customer" />
              <Label htmlFor="customer" className="text-sm">Customer</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
