
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OrderInfoSectionProps {
  isB2B?: boolean;
  variant?: "inward" | "outward";
  onFocus?: () => void;
  onBlur?: () => void;
}

export const OrderInfoSection = ({ isB2B, variant, onFocus, onBlur }: OrderInfoSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="parent-order-id" className="text-gray-700">Parent Order ID</Label>
          <Input
            id="parent-order-id"
            placeholder="Enter Parent Order ID"
            className="rounded-lg bg-white border-gray-200 focus:border-brand-blue focus:ring-brand-blue"
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="order-id" className="text-gray-700">
            Order ID {!isB2B && <span className="text-brand-red">*</span>}
          </Label>
          <Input
            id="order-id"
            placeholder={isB2B ? "Order Code" : "Enter Order ID"}
            className="rounded-lg bg-white border-gray-200 focus:border-brand-blue focus:ring-brand-blue"
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {!isB2B && (
            <div className="text-xs text-gray-600 bg-red-50 px-2 py-1 rounded border border-red-200">
              Please fill out this field.
            </div>
          )}
        </div>
      </div>
      {isB2B && variant && (
        <div className="text-sm text-brand-blue bg-blue-50 p-2 rounded border border-blue-200">
          <strong>Order Direction:</strong> {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </div>
      )}
    </div>
  );
};
