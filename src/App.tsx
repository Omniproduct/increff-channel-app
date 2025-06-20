
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OrderUpload from "./pages/OrderUpload";
import OrderJourney from "./pages/OrderJourney";
import Partners from "./pages/Partners";
import Crossdocking from "./pages/Crossdocking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Index />} />
          <Route path="/order-upload" element={<OrderUpload />} />
          <Route path="/journey" element={<OrderJourney />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/crossdocking" element={<Crossdocking />} />
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
