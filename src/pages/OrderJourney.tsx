
import { OrderJourneyFlow } from "@/components/order/OrderJourneyFlow";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OrderJourney = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-14 items-center">
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2 mr-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Orders
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-primary">Order Creation Journey</h1>
          <div className="ml-auto text-sm text-muted-foreground">
            dhl-ae-omni | raghav.mehta
          </div>
        </div>
      </header>
      <main className="container py-6">
        <OrderJourneyFlow />
      </main>
    </div>
  );
};

export default OrderJourney;
