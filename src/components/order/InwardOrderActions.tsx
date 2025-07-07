import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { CSVUploadSection } from "./sections/CSVUploadSection";
import { useToast } from "@/hooks/use-toast";
import { Edit, Lock, X, AlertTriangle } from "lucide-react";

export const InwardOrderActions = () => {
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [orderID, setOrderID] = useState("");
  const [locationName, setLocationName] = useState("");
  const [updateFields, setUpdateFields] = useState({
    orderID: false,
    location: false,
    items: false
  });
  const [showPOAmendmentCheck, setShowPOAmendmentCheck] = useState(false);
  const { toast } = useToast();

  const handleFieldUpdate = (field: string, checked: boolean) => {
    setUpdateFields(prev => ({ ...prev, [field]: checked }));
  };

  const handleActionSubmit = (action: string) => {
    toast({
      title: `Order ${action === 'update' ? 'Updated' : action === 'lock' ? 'Locked' : 'Closed'} Successfully!`,
      description: `Inward order ${orderID} has been ${action === 'update' ? 'updated' : action === 'lock' ? 'locked' : 'closed'}.`,
    });
    setActiveAction(null);
    setOrderID("");
    setLocationName("");
  };

  const renderActionForm = () => {
    if (!activeAction) return null;

    return (
      <div className="space-y-4 mt-4 p-4 border border-blue-200 rounded-lg bg-blue-50/30">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            {activeAction === 'update' && (
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id="update-order-id"
                  checked={updateFields.orderID}
                  onCheckedChange={(checked) => handleFieldUpdate('orderID', checked as boolean)}
                />
                <Label htmlFor="update-order-id" className="text-xs text-muted-foreground">
                  Update Order ID
                </Label>
              </div>
            )}
            <Label htmlFor="action-order-id">Order ID</Label>
            <div className="relative">
              <Input
                id="action-order-id"
                placeholder="Enter Order ID"
                value={orderID}
                onChange={(e) => setOrderID(e.target.value)}
                className="rounded-lg bg-white border-blue-200 focus:border-primary pr-8"
                disabled={activeAction === 'update' && !updateFields.orderID}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                ⌄
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            {activeAction === 'update' && (
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id="update-location"
                  checked={updateFields.location}
                  onCheckedChange={(checked) => handleFieldUpdate('location', checked as boolean)}
                />
                <Label htmlFor="update-location" className="text-xs text-muted-foreground">
                  Update Location
                </Label>
              </div>
            )}
            <Label htmlFor="action-location">Location</Label>
            <Select 
              value={locationName} 
              onValueChange={setLocationName}
              disabled={activeAction === 'update' && !updateFields.location}
            >
              <SelectTrigger className="rounded-lg bg-white border-blue-200 focus:border-primary">
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

        {activeAction === 'update' && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <Checkbox
                id="update-items"
                checked={updateFields.items}
                onCheckedChange={(checked) => handleFieldUpdate('items', checked as boolean)}
              />
              <Label htmlFor="update-items" className="text-xs text-muted-foreground">
                Update Item Details
              </Label>
            </div>
            <div className={!updateFields.items ? "opacity-50 pointer-events-none" : ""}>
              <Card className="border-blue-200">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50 py-3">
                  <CardTitle className="text-base">Item Details</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <CSVUploadSection />
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeAction === 'lock' && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="po-amendment-check"
                checked={showPOAmendmentCheck}
                onCheckedChange={setShowPOAmendmentCheck}
              />
              <Label htmlFor="po-amendment-check" className="text-sm">
                Enable PO Amendment Configuration Check
              </Label>
            </div>
            {showPOAmendmentCheck && (
              <div className="text-sm text-orange-600 bg-orange-50 p-2 rounded border border-orange-200 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Please ensure PO Amendment configuration is enabled in OMS backend before proceeding.
              </div>
            )}
          </div>
        )}

        <div className="flex gap-2 justify-end">
          <Button
            variant="outline"
            onClick={() => setActiveAction(null)}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Cancel
          </Button>
          
          {activeAction === 'lock' ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Lock className="h-4 w-4 mr-2" />
                  Lock Order
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-orange-500" />
                    Confirm Order Lock
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    You are about to lock the inward order <strong>{orderID}</strong>. This will block any further amendments to it. Are you sure you want to proceed?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={() => handleActionSubmit('lock')}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Lock Order
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : activeAction === 'close' ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  <X className="h-4 w-4 mr-2" />
                  Close Order
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-500" />
                    Confirm Order Closure
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    You are about to close the inward order <strong>{orderID}</strong>. This will block any further GRN of goods. Are you sure you want to proceed?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={() => handleActionSubmit('close')}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    Close Order
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <Button 
              onClick={() => handleActionSubmit('update')}
              className="bg-primary hover:bg-primary/90"
            >
              <Edit className="h-4 w-4 mr-2" />
              Update Order
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <Card className="border-blue-200 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
        <CardTitle>Inward Order Actions</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Button
            variant={activeAction === 'update' ? 'default' : 'outline'}
            onClick={() => setActiveAction(activeAction === 'update' ? null : 'update')}
            className="h-12 border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Edit className="h-4 w-4 mr-2" />
            Update Order
          </Button>
          
          <Button
            variant={activeAction === 'lock' ? 'default' : 'outline'}
            onClick={() => setActiveAction(activeAction === 'lock' ? null : 'lock')}
            className="h-12 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <Lock className="h-4 w-4 mr-2" />
            Lock Order
          </Button>
          
          <Button
            variant={activeAction === 'close' ? 'default' : 'outline'}
            onClick={() => setActiveAction(activeAction === 'close' ? null : 'close')}
            className="h-12 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <X className="h-4 w-4 mr-2" />
            Close Order
          </Button>
        </div>

        {renderActionForm()}
      </CardContent>
    </Card>
  );
};