
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PartnerCreationForm } from "@/components/partners/PartnerCreationForm";
import { PartnerLocationForm } from "@/components/partners/PartnerLocationForm";

const Partners = () => {
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
                <h1 className="text-lg font-bold text-primary">Increff Channel App</h1>
                <p className="text-xs text-muted-foreground">Partner Management</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            dhl-ae-omni | raghav.mehta
          </div>
        </div>
      </header>

      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Partner Management</h1>
          <p className="text-muted-foreground">Create and manage your business partners and their locations</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <Tabs defaultValue="partner-creation" className="w-full">
            <div className="border-b bg-slate-50/50 px-6 py-4">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="partner-creation" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                  Partner Creation
                </TabsTrigger>
                <TabsTrigger value="partner-location" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                  Partner Location Creation
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="partner-creation" className="p-6 mt-0">
              <PartnerCreationForm />
            </TabsContent>
            
            <TabsContent value="partner-location" className="p-6 mt-0">
              <PartnerLocationForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Partners;
