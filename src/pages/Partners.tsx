
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PartnerCreationForm } from "@/components/partners/PartnerCreationForm";
import { PartnerLocationForm } from "@/components/partners/PartnerLocationForm";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/main">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
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
                <h1 className="text-lg font-bold text-foreground">Increff Channel App</h1>
                <p className="text-xs text-muted-foreground">Partner Management</p>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="font-mono text-xs">
            dhl-ae-omni | raghav.mehta
          </Badge>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Partner Management</h1>
            <p className="text-muted-foreground">Create and manage your business partners and their locations</p>
          </div>

          <Card className="shadow-lg border-0">
            <CardHeader className="border-b bg-slate-50/50">
              <CardTitle className="text-xl">Partner & Location Management</CardTitle>
              <CardDescription>
                Create new partners or add locations to existing partners
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="partner-creation" className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-none border-b">
                  <TabsTrigger value="partner-creation" className="data-[state=active]:bg-brand-blue/10 data-[state=active]:text-brand-blue">
                    Partner Creation
                  </TabsTrigger>
                  <TabsTrigger value="partner-location" className="data-[state=active]:bg-brand-blue/10 data-[state=active]:text-brand-blue">
                    Partner Location Creation
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="partner-creation" className="p-6 mt-0">
                  <PartnerCreationForm />
                </TabsContent>
                
                <TabsContent value="partner-location" className="p-6 mt-0">
                  <PartnerLocationForm />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Partners;
