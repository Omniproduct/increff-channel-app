
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface OrderTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const OrderTypeSelector = ({ value, onChange }: OrderTypeSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="order-type">Order Type</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="rounded-lg bg-white border-blue-200 focus:border-primary">
          <SelectValue placeholder="Select Order Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="b2c">B2C Order</SelectItem>
          <SelectItem value="b2b-inward">B2B Inward Order</SelectItem>
          <SelectItem value="b2b-outward">B2B Outward Order</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
