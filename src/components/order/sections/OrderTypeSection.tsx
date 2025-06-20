
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SLADateTimePicker } from "../SLADateTimePicker";

interface OrderTypeSectionProps {
  onFocus?: () => void;
  onBlur?: () => void;
}

export const OrderTypeSection = ({ onFocus, onBlur }: OrderTypeSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="qc-status" className="text-gray-700">QC Status</Label>
        <Select>
          <SelectTrigger 
            className="rounded-lg bg-white border-gray-200 focus:border-brand-blue"
            onFocus={onFocus}
            onBlur={onBlur}
          >
            <SelectValue placeholder="PASS" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pass">PASS</SelectItem>
            <SelectItem value="fail">FAIL</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="payment-type" className="text-gray-700">Payment Type</Label>
        <Select>
          <SelectTrigger 
            className="rounded-lg bg-white border-gray-200 focus:border-brand-blue"
            onFocus={onFocus}
            onBlur={onBlur}
          >
            <SelectValue placeholder="COD" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cod">COD</SelectItem>
            <SelectItem value="prepaid">Prepaid</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <SLADateTimePicker onFocus={onFocus} onBlur={onBlur} />
    </div>
  );
};
