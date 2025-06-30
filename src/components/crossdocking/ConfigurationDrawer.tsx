
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Save, X } from "lucide-react";
import { useState } from "react";

interface ConfigurationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (config: any) => void;
}

export const ConfigurationDrawer = ({ isOpen, onClose, onSave }: ConfigurationDrawerProps) => {
  const [config, setConfig] = useState({
    storageArea: "",
    priority: "",
    autoAssign: false,
    maxBoxes: "",
    notes: ""
  });

  const handleSave = () => {
    onSave(config);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Storage Configuration
          </SheetTitle>
          <SheetDescription>
            Configure the storage settings for box crossdocking operations
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Storage Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="storage-area">Default Storage Area</Label>
                <Select value={config.storageArea} onValueChange={(value) => setConfig({...config, storageArea: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select storage area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="area-a">Storage Area A</SelectItem>
                    <SelectItem value="area-b">Storage Area B</SelectItem>
                    <SelectItem value="area-c">Storage Area C</SelectItem>
                    <SelectItem value="area-d">Storage Area D</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Default Priority</Label>
                <Select value={config.priority} onValueChange={(value) => setConfig({...config, priority: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-boxes">Max Boxes per Operation</Label>
                <Input
                  id="max-boxes"
                  type="number"
                  placeholder="Enter maximum number of boxes"
                  value={config.maxBoxes}
                  onChange={(e) => setConfig({...config, maxBoxes: e.target.value})}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Additional Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notes">Operation Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any special instructions or notes..."
                  value={config.notes}
                  onChange={(e) => setConfig({...config, notes: e.target.value})}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 pt-4">
            <Button onClick={onClose} variant="outline" className="flex-1">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleSave} className="flex-1">
              <Save className="h-4 w-4 mr-2" />
              Save Configuration
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
