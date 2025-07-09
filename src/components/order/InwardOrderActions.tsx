import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { OrderCSVUploadSection } from "./sections/OrderCSVUploadSection";
import { useToast } from "@/hooks/use-toast";
import { Edit, Lock, X, AlertTriangle } from "lucide-react";

export const InwardOrderActions = () => {
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [orderID, setOrderID] = useState("");
  const [locationName, setLocationName] = useState("");
  const [updateFields, setUpdateFields] = useState({
    items: false,
    qcStatus: false,
    paymentType: false,
    poolStrategy: false,
    sla: false
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
      <div className="space-y-3 mt-3 p-3 border border-blue-200 rounded-lg bg-blue-50/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="action-order-id" className="text-sm font-medium">Order ID <span className="text-destructive">*</span></Label>
            <Select 
              value={orderID} 
              onValueChange={setOrderID}
              required
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
          <div className="space-y-2">
            <Label htmlFor="action-location" className="text-sm font-medium">Location <span className="text-destructive">*</span></Label>
            <Select 
              value={locationName} 
              onValueChange={setLocationName}
              required
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

        {activeAction === 'update' && (
          <>
            {/* Additional Update Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-1">
                  <Checkbox
                    id="update-qc-status"
                    checked={updateFields.qcStatus}
                    onCheckedChange={(checked) => handleFieldUpdate('qcStatus', checked as boolean)}
                  />
                  <Label htmlFor="update-qc-status" className="text-xs text-muted-foreground">
                    Update QC Status
                  </Label>
                </div>
                <Label htmlFor="qc-status" className="text-sm font-medium">QC Status</Label>
                <Select disabled={!updateFields.qcStatus}>
                  <SelectTrigger className="h-9 rounded-lg bg-white border-blue-200 focus:border-primary">
                    <SelectValue placeholder="Select QC Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="passed">Passed</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-1">
                  <Checkbox
                    id="update-payment-type"
                    checked={updateFields.paymentType}
                    onCheckedChange={(checked) => handleFieldUpdate('paymentType', checked as boolean)}
                  />
                  <Label htmlFor="update-payment-type" className="text-xs text-muted-foreground">
                    Update Payment Type
                  </Label>
                </div>
                <Label htmlFor="payment-type" className="text-sm font-medium">Payment Type</Label>
                <Select disabled={!updateFields.paymentType}>
                  <SelectTrigger className="h-9 rounded-lg bg-white border-blue-200 focus:border-primary">
                    <SelectValue placeholder="Select Payment Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prepaid">Prepaid</SelectItem>
                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                    <SelectItem value="credit">Credit</SelectItem>
                    <SelectItem value="net_banking">Net Banking</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-1">
                  <Checkbox
                    id="update-pool-strategy"
                    checked={updateFields.poolStrategy}
                    onCheckedChange={(checked) => handleFieldUpdate('poolStrategy', checked as boolean)}
                  />
                  <Label htmlFor="update-pool-strategy" className="text-xs text-muted-foreground">
                    Update Pool Strategy
                  </Label>
                </div>
                <Label htmlFor="pool-strategy" className="text-sm font-medium">Pool Strategy</Label>
                <Select disabled={!updateFields.poolStrategy}>
                  <SelectTrigger className="h-9 rounded-lg bg-white border-blue-200 focus:border-primary">
                    <SelectValue placeholder="Select Pool Strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fifo">First In First Out (FIFO)</SelectItem>
                    <SelectItem value="lifo">Last In First Out (LIFO)</SelectItem>
                    <SelectItem value="fefo">First Expired First Out (FEFO)</SelectItem>
                    <SelectItem value="random">Random</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-1">
                  <Checkbox
                    id="update-sla"
                    checked={updateFields.sla}
                    onCheckedChange={(checked) => handleFieldUpdate('sla', checked as boolean)}
                  />
                  <Label htmlFor="update-sla" className="text-xs text-muted-foreground">
                    Update SLA
                  </Label>
                </div>
                <Label htmlFor="sla" className="text-sm font-medium">SLA</Label>
                <div className={!updateFields.sla ? "opacity-50 pointer-events-none" : ""}>
                  <Input
                    id="sla"
                    placeholder="Enter SLA in hours"
                    type="number"
                    className="h-9 rounded-lg bg-white border-blue-200 focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Item Details Section */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-1">
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
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50 py-2">
                    <CardTitle className="text-sm">Item Details</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3">
                    <OrderCSVUploadSection />
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
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

        <div className="flex gap-2 justify-end pt-2">
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
      <CardContent className="p-4 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Button
            variant={activeAction === 'update' ? 'default' : 'outline'}
            onClick={() => setActiveAction(activeAction === 'update' ? null : 'update')}
            className={`h-10 ${
              activeAction === 'update' 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'border-primary text-primary hover:bg-primary hover:text-white'
            }`}
          >
            <Edit className="h-4 w-4 mr-2" />
            Update Order
          </Button>
          
          <Button
            variant={activeAction === 'lock' ? 'default' : 'outline'}
            onClick={() => setActiveAction(activeAction === 'lock' ? null : 'lock')}
            className={`h-10 ${
              activeAction === 'lock' 
                ? 'bg-orange-500 text-white hover:bg-orange-600' 
                : 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
            }`}
          >
            <Lock className="h-4 w-4 mr-2" />
            Lock Order
          </Button>
          
          <Button
            variant={activeAction === 'close' ? 'default' : 'outline'}
            onClick={() => setActiveAction(activeAction === 'close' ? null : 'close')}
            className={`h-10 ${
              activeAction === 'close' 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
            }`}
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