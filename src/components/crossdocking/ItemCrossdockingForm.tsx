
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CSVUploadSection } from "@/components/order/sections/CSVUploadSection";
import { Button } from "@/components/ui/button";
import { Package, MapPin, Building2, Plus } from "lucide-react";
import { useState } from "react";

export const ItemCrossdockingForm = () => {
  const [selectedChannel, setSelectedChannel] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const channels = ["retail", "pharma", "outright", "dropship"];
  
  const crossdockOrders = [
    "CD-ORD-001",
    "CD-ORD-002", 
    "CD-ORD-003",
    "CD-ORD-004"
  ];

  const locations = {
    retail: ["Delhi Warehouse", "Mumbai Warehouse", "Bangalore Warehouse"],
    pharma: ["Delhi Pharma Hub", "Mumbai Pharma Center"],
    outright: ["Gurgaon Distribution Center", "Pune Warehouse"],
    dropship: ["Delhi Dropship Center", "Mumbai Dropship Hub"]
  };

  const getLocationsForChannel = () => {
    return selectedChannel ? locations[selectedChannel as keyof typeof locations] || [] : [];
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Channel Selection */}
        <Card className="border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Building2 className="h-4 w-4" />
              Channel Selection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="channel">Channel Name</Label>
              <Select value={selectedChannel} onValueChange={setSelectedChannel}>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Select channel" />
                </SelectTrigger>
                <SelectContent>
                  {channels.map((channel) => (
                    <SelectItem key={channel} value={channel}>
                      {channel.charAt(0).toUpperCase() + channel.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

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
              <Label htmlFor="order">Cross dock Order ID</Label>
              <Select value={selectedOrder} onValueChange={setSelectedOrder}>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Select or type order ID" />
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
              <Select 
                value={selectedLocation} 
                onValueChange={setSelectedLocation}
                disabled={!selectedChannel}
              >
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder={!selectedChannel ? "Select channel first" : "Select location"} />
                </SelectTrigger>
                <SelectContent>
                  {getLocationsForChannel().map((location) => (
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
            <Package className="h-4 w-4" />
            Item Cross dock Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CSVUploadSection />
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <Button variant="outline" className="rounded-lg">
          Save as Draft
        </Button>
        <Button className="rounded-lg gap-2">
          <Plus className="h-4 w-4" />
          Create Cross dock Plan
        </Button>
      </div>
    </div>
  );
};
