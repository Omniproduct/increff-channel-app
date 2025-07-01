
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Package, Clock } from "lucide-react";
import { ErrorDetailsModal } from "./ErrorDetailsModal";

interface UploadSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderType: string;
  itemCount: number;
  errorCount: number;
}

export const UploadSummaryModal = ({ 
  isOpen, 
  onClose, 
  orderType, 
  itemCount, 
  errorCount 
}: UploadSummaryModalProps) => {
  const [isErrorDetailsOpen, setIsErrorDetailsOpen] = useState(false);
  const isSuccess = errorCount === 0;

  const handleClose = () => {
    onClose();
    setIsErrorDetailsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {isSuccess ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-orange-500" />
              )}
              {isSuccess ? "🎉 Order uploaded!" : "Upload Complete with Issues"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              {isSuccess 
                ? "Here's your summary." 
                : "Your order has been processed but some items need attention."
              }
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex items-center space-x-2 p-4">
                  <Package className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{itemCount}</div>
                    <div className="text-xs text-muted-foreground">Items</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-2 p-4">
                  <AlertCircle className={`h-4 w-4 ${errorCount > 0 ? 'text-destructive' : 'text-green-600'}`} />
                  <div>
                    <div className="text-2xl font-bold">{errorCount}</div>
                    <div className="text-xs text-muted-foreground">Errors</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Uploaded at:</span>
                  <span className="font-medium">{new Date().toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Order Type:</span>
                  <span className="font-medium">{orderType}</span>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Button onClick={handleClose} className="flex-1">
                Continue
              </Button>
              {errorCount > 0 && (
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setIsErrorDetailsOpen(true)}
                >
                  View Error Details
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ErrorDetailsModal
        isOpen={isErrorDetailsOpen}
        onClose={() => setIsErrorDetailsOpen(false)}
        errors={[]}
      />
    </>
  );
};
