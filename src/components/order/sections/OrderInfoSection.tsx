
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OrderInfoSectionProps {
  isB2B?: boolean;
}

export const OrderInfoSection = ({ isB2B }: OrderInfoSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="parent-order-id">Parent Order ID</Label>
          <Input
            id="parent-order-id"
            placeholder="Enter Parent Order ID"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="order-id">
            Order ID {!isB2B && <span className="text-destructive">*</span>}
          </Label>
          <Input
            id="order-id"
            placeholder={isB2B ? "Order Code" : "Enter Order ID"}
            className="rounded-lg"
          />
          {!isB2B && (
            <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              Please fill out this field.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
