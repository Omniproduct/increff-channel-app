
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package } from "lucide-react";

interface EmptyStateProps {
  onStartOrder: () => void;
}

export const EmptyState = ({ onStartOrder }: EmptyStateProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="max-w-md mx-auto text-center p-8">
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Package className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">No orders yet – let's fix that!</h2>
          <p className="text-muted-foreground">
            Create your first order to get started with the Increff Channel App.
          </p>
        </div>
        <Button onClick={onStartOrder} size="lg" className="w-full">
          Start New Order
        </Button>
      </Card>
    </div>
  );
};
