
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface BulkUploadToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const BulkUploadToggle = ({ value, onChange }: BulkUploadToggleProps) => {
  return (
    <div className="flex items-center space-x-2 px-3 py-2 bg-orange-50 rounded-lg border border-orange-200">
      <Switch
        id="bulk-upload"
        checked={value}
        onCheckedChange={onChange}
      />
      <Label htmlFor="bulk-upload" className="text-sm font-medium whitespace-nowrap">
        Bulk Upload
      </Label>
    </div>
  );
};
