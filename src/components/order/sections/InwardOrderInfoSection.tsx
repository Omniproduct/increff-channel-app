import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface InwardOrderInfoSectionProps {
  purpose: string;
  setPurpose: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const InwardOrderInfoSection = ({ 
  purpose, 
  setPurpose, 
  onFocus, 
  onBlur 
}: InwardOrderInfoSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="parent-order-id">Parent Order ID</Label>
          <Input
            id="parent-order-id"
            placeholder="Enter Parent Order ID"
            className="rounded-lg bg-white border-blue-200 focus:border-primary"
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="order-id">Order ID</Label>
          <Input
            id="order-id"
            placeholder="Order Code"
            className="rounded-lg bg-white border-blue-200 focus:border-primary"
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="purpose">Purpose</Label>
        <Select value={purpose} onValueChange={setPurpose}>
          <SelectTrigger className="rounded-lg bg-white border-blue-200 focus:border-primary">
            <SelectValue placeholder="Select Purpose" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cross-dock">Cross dock</SelectItem>
            <SelectItem value="storage">Storage</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="text-sm text-primary bg-blue-50 p-2 rounded border border-blue-200">
        <strong>Order Direction:</strong> Inward
      </div>
    </div>
  );
};