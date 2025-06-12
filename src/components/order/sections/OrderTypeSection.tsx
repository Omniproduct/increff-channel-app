
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const OrderTypeSection = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="qc-status">QC Status</Label>
        <Select>
          <SelectTrigger className="rounded-lg">
            <SelectValue placeholder="PASS" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pass">PASS</SelectItem>
            <SelectItem value="fail">FAIL</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="payment-type">Payment Type</Label>
        <Select>
          <SelectTrigger className="rounded-lg">
            <SelectValue placeholder="COD" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cod">COD</SelectItem>
            <SelectItem value="prepaid">Prepaid</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sla">SLA</Label>
        <Input
          id="sla"
          placeholder="Number of Hours to Process the order"
          className="rounded-lg"
          type="number"
        />
      </div>
    </div>
  );
};
