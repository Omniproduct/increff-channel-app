
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CrossdockingTabs } from "@/components/crossdocking/CrossdockingTabs";
import { ScreenHeader } from "@/components/ui/screen-header";

const Crossdocking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/main">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Back to Main
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="/lovable-uploads/baed4694-6705-4b8a-9c7c-5a711fcda920.png" 
                  alt="Increff Logo" 
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110 rounded-lg shadow-sm"
                />
                <div className="absolute inset-0 rounded-lg bg-primary/10 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary">OMS Console</h1>
                <p className="text-xs text-muted-foreground">Crossdocking Operations</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            dhl-ae-omni | raghav.mehta
          </div>
        </div>
      </header>

      <main className="w-full px-[8%] py-8">
        <ScreenHeader 
          title="Crossdocking Operations"
          subtitle="Create and manage crossdocking plans for efficient item and box transfers across your warehouse operations"
        />

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
          <CrossdockingTabs />
        </div>
      </main>
    </div>
  );
};

export default Crossdocking;
