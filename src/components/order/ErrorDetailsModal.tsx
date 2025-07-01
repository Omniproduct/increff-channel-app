
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ErrorDetail {
  row: number;
  field: string;
  value: string;
  error: string;
  rootCause: string;
  actionToFix: string;
}

interface ErrorDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  errors: ErrorDetail[];
}

export const ErrorDetailsModal = ({ isOpen, onClose, errors }: ErrorDetailsModalProps) => {
  const mockErrors: ErrorDetail[] = [
    {
      row: 2,
      field: "channelSkuCode",
      value: "INVALID_SKU_123",
      error: "SKU not found in OMS",
      rootCause: "The provided SKU code does not exist in the Order Management System",
      actionToFix: "Verify the SKU code with your inventory team and use a valid SKU from the system"
    },
    {
      row: 3,
      field: "shipping_address_line1",
      value: "Very long address that exceeds the maximum character limit of 255 characters which is not allowed in our system and needs to be shortened significantly",
      error: "Address too long",
      rootCause: "Shipping address info added is too long and breached 255 characters length",
      actionToFix: "Update the address details in address line 1 and line 2 to shorter length"
    },
    {
      row: 5,
      field: "quantity",
      value: "",
      error: "Required field is empty",
      rootCause: "Quantity field is mandatory for order processing",
      actionToFix: "Add a valid quantity value (must be greater than 0)"
    }
  ];

  const displayErrors = errors.length > 0 ? errors : mockErrors;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-orange-600">
            <AlertCircle className="h-5 w-5" />
            Error Details - {displayErrors.length} issue(s) found
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-4">
            {displayErrors.map((error, index) => (
              <Card key={index} className="border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-orange-800">Row {error.row}</span>
                        <span className="text-xs bg-orange-200 px-2 py-1 rounded text-orange-800">
                          {error.field}
                        </span>
                      </div>
                      <div className="text-sm text-orange-700">
                        <strong>Value:</strong> {error.value || <em>empty</em>}
                      </div>
                      <div className="text-sm text-red-600">
                        <strong>Error:</strong> {error.error}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm text-orange-700">
                        <strong>Root Cause:</strong>
                        <p className="mt-1 text-orange-600">{error.rootCause}</p>
                      </div>
                      <div className="text-sm text-green-700">
                        <strong>Action to Fix:</strong>
                        <p className="mt-1 text-green-600 bg-green-50 p-2 rounded border border-green-200">
                          {error.actionToFix}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            Fix and Re-upload
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
