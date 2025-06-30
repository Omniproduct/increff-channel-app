
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { CSVUploadSection } from "@/components/order/sections/CSVUploadSection";
import { ConfigurationDrawer } from "./ConfigurationDrawer";
import { Box, Package, MapPin, Settings, Plus } from "lucide-react";
import { useState } from "react";

export const BoxCrossdockingForm = () => {
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isConfigurationEnabled, setIsConfigurationEnabled] = useState(false);
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);

  const crossdockOrders = [
    "CD-ORD-001",
    "CD-ORD-002", 
    "CD-ORD-003",
    "CD-ORD-004"
  ];

  const locations = [
    "Delhi Warehouse",
    "Mumbai Warehouse", 
    "Bangalore Warehouse",
    "Pune Distribution Center"
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order Selection */}
        <Card className="border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Package className="h-4 w-4" />
              Order Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="order">Order Code</Label>
              <Select value={selectedOrder} onValueChange={setSelectedOrder}>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Select order code" />
                </SelectTrigger>
                <SelectContent>
                  {crossdockOrders.map((order) => (
                    <SelectItem key={order} value={order}>
                      {order}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Location Selection */}
        <Card className="border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-primary">
              <MapPin className="h-4 w-4" />
              Warehouse Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="location">Location Name</Label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CSV Upload Section */}
      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Box className="h-4 w-4" />
            Box Cross dock Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CSVUploadSection />
        </CardContent>
      </Card>

      {/* Configuration Section */}
      <Card className="border-orange-200 bg-orange-50/50">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-orange-700">
              <Settings className="h-4 w-4" />
              Storage Configuration
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowConfigDrawer(true)}
                className="gap-2 text-orange-700 border-orange-300 hover:bg-orange-100"
              >
                <Settings className="h-3 w-3" />
                Configure
              </Button>
              <div className="flex items-center gap-2">
                <Label htmlFor="config-toggle" className="text-sm text-orange-700">
                  Enable storage mode
                </Label>
                <Switch
                  id="config-toggle"
                  checked={isConfigurationEnabled}
                  onCheckedChange={setIsConfigurationEnabled}
                />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        {isConfigurationEnabled && (
          <CardContent>
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <p className="text-sm text-orange-700 mb-4">
                Storage mode enabled: Boxes will be moved to storage area instead of creating cross dock plan
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Storage Area</Label>
                  <Select>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select storage area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="area-a">Storage Area A</SelectItem>
                      <SelectItem value="area-b">Storage Area B</SelectItem>
                      <SelectItem value="area-c">Storage Area C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Priority Level</Label>
                  <Select>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <Button variant="outline" className="rounded-lg">
          Save as Draft
        </Button>
        <Button className="rounded-lg gap-2">
          <Plus className="h-4 w-4" />
          {isConfigurationEnabled ? "Move to Storage" : "Create Box Cross dock Plan"}
        </Button>
      </div>

      {/* Configuration Drawer */}
      <ConfigurationDrawer
        isOpen={showConfigDrawer}
        onClose={() => setShowConfigDrawer(false)}
        onSave={(config) => {
          console.log("Configuration saved:", config);
          setShowConfigDrawer(false);
        }}
      />
    </div>
  );
};
