
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
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/baed4694-6705-4b8a-9c7c-5a711fcda920.png" 
                alt="Increff Logo" 
                className="h-10 w-10 transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">Increff Channel App</h1>
              <p className="text-xs text-muted-foreground">Order Management System</p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Link to="/journey">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
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
