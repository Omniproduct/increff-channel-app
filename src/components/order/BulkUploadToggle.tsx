
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface BulkUploadToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const BulkUploadToggle = ({ value, onChange }: BulkUploadToggleProps) => {
  return (
    <div className="flex items-center space-x-2 p-4 bg-orange-50 rounded-lg border border-orange-200">
      <Switch
        id="bulk-upload"
        checked={value}
        onCheckedChange={onChange}
      />
      <Label htmlFor="bulk-upload" className="text-sm font-medium">
        Enable Bulk Upload
      </Label>
      <span className="text-xs text-muted-foreground ml-2">
        {value ? "Upload multiple orders via CSV" : "Single order creation"}
      </span>
    </div>
  );
};
