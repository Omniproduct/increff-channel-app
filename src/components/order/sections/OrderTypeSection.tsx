
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SLADateTimePicker } from "../SLADateTimePicker";

interface OrderTypeSectionProps {
  orderType?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const OrderTypeSection = ({ orderType, onFocus, onBlur }: OrderTypeSectionProps) => {
  const showPoolName = orderType === "b2c" || orderType === "b2b-outward";
  const showPoolStrategy = orderType === "b2b-inward";
  const showOutwardFields = orderType === "b2c" || orderType === "b2b-outward";

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="qc-status">QC Status</Label>
        <Select>
          <SelectTrigger 
            className="rounded-lg bg-white border-blue-200 focus:border-primary"
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
        <Label htmlFor="payment-type">Payment Type</Label>
        <Select>
          <SelectTrigger 
            className="rounded-lg bg-white border-blue-200 focus:border-primary"
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

      {showPoolName && (
        <div className="space-y-2">
          <Label htmlFor="pool-name">Pool Name</Label>
          <Select>
            <SelectTrigger 
              className="rounded-lg bg-white border-blue-200 focus:border-primary"
              onFocus={onFocus}
              onBlur={onBlur}
            >
              <SelectValue placeholder="Select Pool Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="common-pool">Common pool</SelectItem>
              <SelectItem value="reserve-pool-a">Reserve pool A</SelectItem>
              <SelectItem value="reserve-pool-b">Reserve pool B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {showPoolStrategy && (
        <div className="space-y-2">
          <Label htmlFor="pool-strategy">Pool Strategy</Label>
          <Select>
            <SelectTrigger 
              className="rounded-lg bg-white border-blue-200 focus:border-primary"
              onFocus={onFocus}
              onBlur={onBlur}
            >
              <SelectValue placeholder="Select Pool Strategy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="strategy-1">Strategy 1</SelectItem>
              <SelectItem value="strategy-2">Strategy 2</SelectItem>
              <SelectItem value="strategy-3">Strategy 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {showOutwardFields && (
        <>
          <div className="space-y-2">
            <Label htmlFor="onhold">Onhold (by default)</Label>
            <Select>
              <SelectTrigger 
                className="rounded-lg bg-white border-blue-200 focus:border-primary"
                onFocus={onFocus}
                onBlur={onBlur}
              >
                <SelectValue placeholder="Select Onhold Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority-order">Priority Order</Label>
            <Select>
              <SelectTrigger 
                className="rounded-lg bg-white border-blue-200 focus:border-primary"
                onFocus={onFocus}
                onBlur={onBlur}
              >
                <SelectValue placeholder="Select Priority Order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      )}

      <SLADateTimePicker onFocus={onFocus} onBlur={onBlur} />
    </div>
  );
};
