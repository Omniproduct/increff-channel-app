
import { useState } from "react";
import { OrderCreationTabs } from "@/components/order/OrderCreationTabs";
import { EmptyState } from "@/components/order/EmptyState";

const Index = () => {
  const [hasOrders, setHasOrders] = useState(false);

  if (!hasOrders) {
    return <EmptyState onStartOrder={() => setHasOrders(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <h1 className="text-lg font-semibold">Increff Channel App</h1>
          <div className="ml-auto text-sm text-muted-foreground">
            dhl-ae-omni | raghav.mehta
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
