
import { useState } from "react";
import { OrderCreationTabs } from "@/components/order/OrderCreationTabs";
import { EmptyState } from "@/components/order/EmptyState";
import { Button } from "@/components/ui/button";
import { MapIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [hasOrders, setHasOrders] = useState(false);

  if (!hasOrders) {
    return <EmptyState onStartOrder={() => setHasOrders(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-14 items-center">
          <h1 className="text-lg font-semibold text-primary">Increff Channel App</h1>
          <div className="ml-auto flex items-center gap-4">
            <Link to="/journey">
              <Button variant="outline" size="sm" className="gap-2">
                <MapIcon className="h-4 w-4" />
                View Journey
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              dhl-ae-omni | raghav.mehta
            </div>
          </div>
        </div>
      </header>
      <main className="container py-6">
        <OrderCreationTabs />
      </main>
    </div>
  );
};

export default Index;
