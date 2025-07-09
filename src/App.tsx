
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OrderUpload from "./pages/OrderUpload";
import OrderJourney from "./pages/OrderJourney";
import Masters from "./pages/Masters";
import Crossdocking from "./pages/Crossdocking";
import Inwards from "./pages/Inwards";
import Outwards from "./pages/Outwards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <main className="flex-1">
            <Routes>
              <Route path="/main" element={<Index />} />
              <Route path="/order-upload" element={<OrderUpload />} />
              <Route path="/journey" element={<OrderJourney />} />
              <Route path="/masters" element={<Masters />} />
              <Route path="/crossdocking" element={<Crossdocking />} />
              <Route path="/inwards" element={<Inwards />} />
              <Route path="/outwards" element={<Outwards />} />
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
