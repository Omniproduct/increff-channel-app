import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { OrderCSVUploadSection } from "./sections/OrderCSVUploadSection";
import { SLADateTimePicker } from "./SLADateTimePicker";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit } from "lucide-react";

export const ASNManagement = () => {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [isBoxItemUpload, setIsBoxItemUpload] = useState(false);
  const [asnCode, setAsnCode] = useState("");
  const [orderCode, setOrderCode] = useState("");
  const [locationCode, setLocationCode] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [updateFields, setUpdateFields] = useState({
    asnCode: false,
    orderCode: false,
    locationCode: false,
    invoiceNo: false,
    shipmentTime: false
  });
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: isUpdateMode ? "ASN Updated Successfully!" : "ASN Created Successfully!",
      description: `ASN ${asnCode} has been ${isUpdateMode ? 'updated' : 'created'}.`,
    });
  };

  const handleFieldUpdate = (field: string, checked: boolean) => {
    setUpdateFields(prev => ({ ...prev, [field]: checked }));
  };

  return (
    <Card className="border-blue-200 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {isUpdateMode ? <Edit className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
            ASN {isUpdateMode ? 'Update' : 'Creation'}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Label htmlFor="update-mode" className="text-sm">Update Mode</Label>
            <Switch
              id="update-mode"
              checked={isUpdateMode}
              onCheckedChange={setIsUpdateMode}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* ASN Code */}
          <div className="space-y-3">
            <div className="space-y-2">
              {isUpdateMode && (
                <div className="flex items-center space-x-2 mb-1">
                  <Checkbox
                    id="update-asn-code"
                    checked={updateFields.asnCode}
                    onCheckedChange={(checked) => handleFieldUpdate('asnCode', checked as boolean)}
                  />
                  <Label htmlFor="update-asn-code" className="text-xs text-muted-foreground">
                    Update ASN Code
                  </Label>
                </div>
              )}
              <Label htmlFor="asn-code" className="text-sm font-medium">ASN Code</Label>
              <Input
                id="asn-code"
                placeholder="Enter ASN Code"
                value={asnCode}
                onChange={(e) => setAsnCode(e.target.value)}
                className="h-9 rounded-lg bg-white border-blue-200 focus:border-primary"
                disabled={isUpdateMode && !updateFields.asnCode}
              />
            </div>
          </div>

          {/* Order Code */}
          <div className="space-y-3">
            <div className="space-y-2">
              {isUpdateMode && (
                <div className="flex items-center space-x-2 mb-1">
                  <Checkbox
                    id="update-order-code"
                    checked={updateFields.orderCode}
                    onCheckedChange={(checked) => handleFieldUpdate('orderCode', checked as boolean)}
                  />
                  <Label htmlFor="update-order-code" className="text-xs text-muted-foreground">
                    Update Order Code
                  </Label>
                </div>
              )}
              <Label htmlFor="order-code" className="text-sm font-medium">Order Code</Label>
              <Select 
                value={orderCode} 
                onValueChange={setOrderCode}
                disabled={isUpdateMode && !updateFields.orderCode}
              >
                <SelectTrigger className="h-9 rounded-lg bg-white border-blue-200 focus:border-primary">
                  <SelectValue placeholder="Search & Select Order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ORD001">ORD001 - Purchase Order A</SelectItem>
                  <SelectItem value="ORD002">ORD002 - Return Order B</SelectItem>
                  <SelectItem value="ORD003">ORD003 - Open PO C</SelectItem>
                  <SelectItem value="ORD004">ORD004 - Purchase Order D</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <div className="space-y-2">
              {isUpdateMode && (
                <div className="flex items-center space-x-2 mb-1">
                  <Checkbox
                    id="update-location-code"
                    checked={updateFields.locationCode}
                    onCheckedChange={(checked) => handleFieldUpdate('locationCode', checked as boolean)}
                  />
                  <Label htmlFor="update-location-code" className="text-xs text-muted-foreground">
                    Update Location
                  </Label>
                </div>
              )}
              <Label htmlFor="location-code" className="text-sm font-medium">Location</Label>
              <Select 
                value={locationCode} 
                onValueChange={setLocationCode}
                disabled={isUpdateMode && !updateFields.locationCode}
              >
                <SelectTrigger className="h-9 rounded-lg bg-white border-blue-200 focus:border-primary">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gurgaon">Gurgaon warehouse</SelectItem>
                  <SelectItem value="mumbai">Mumbai warehouse</SelectItem>
                  <SelectItem value="bangalore">Bangalore warehouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Invoice No */}
          {!isBoxItemUpload && (
            <div className="space-y-2">
              {isUpdateMode && (
                <div className="flex items-center space-x-2 mb-1">
                  <Checkbox
                    id="update-invoice-no"
                    checked={updateFields.invoiceNo}
                    onCheckedChange={(checked) => handleFieldUpdate('invoiceNo', checked as boolean)}
                  />
                  <Label htmlFor="update-invoice-no" className="text-xs text-muted-foreground">
                    Update Invoice No
                  </Label>
                </div>
              )}
              <Label htmlFor="invoice-no" className="text-sm font-medium">Invoice No</Label>
              <Input
                id="invoice-no"
                placeholder="Enter Invoice Number"
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
                className="h-9 rounded-lg bg-white border-blue-200 focus:border-primary"
                disabled={isUpdateMode && !updateFields.invoiceNo}
              />
            </div>
          )}
        </div>

        {/* Second Row - Shipment Time */}
        {!isBoxItemUpload && (
          <div className="space-y-2">
            {isUpdateMode && (
              <div className="flex items-center space-x-2 mb-1">
                <Checkbox
                  id="update-shipment-time"
                  checked={updateFields.shipmentTime}
                  onCheckedChange={(checked) => handleFieldUpdate('shipmentTime', checked as boolean)}
                />
                <Label htmlFor="update-shipment-time" className="text-xs text-muted-foreground">
                  Update Shipment Time
                </Label>
              </div>
            )}
            <div className={isUpdateMode && !updateFields.shipmentTime ? "opacity-50 pointer-events-none" : ""}>
              <SLADateTimePicker />
            </div>
          </div>
        )}

        {/* Upload Configuration */}
        <div className="flex items-center gap-2 py-1 border-t border-blue-100 pt-3">
          <Switch
            id="box-item-upload"
            checked={isBoxItemUpload}
            onCheckedChange={setIsBoxItemUpload}
          />
          <Label htmlFor="box-item-upload" className="text-sm">Box-Item Code Mapping</Label>
        </div>
        <Card className="border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50 py-2">
            <CardTitle className="text-sm">
              {isBoxItemUpload ? "Box-Item Code Mapping" : "Items CSV Upload"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <OrderCSVUploadSection />
          </CardContent>
        </Card>

        <div className="flex justify-center pt-3">
          <Button 
            onClick={handleSubmit}
            className="px-8 bg-primary hover:bg-primary/90"
          >
            {isUpdateMode ? 'Update ASN' : 'Create ASN'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};