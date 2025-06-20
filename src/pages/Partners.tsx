
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, MapPin, Plus } from "lucide-react";
import { Link } from "react-router-dom";

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

      <main className="container py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="bg-purple-100 text-purple-600 rounded-full p-6 inline-flex border-2 border-purple-200 shadow-lg">
              <Users className="h-12 w-12" />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground">Partner Management</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Manage your business partners and their locations for efficient channel operations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-purple-200">
              <CardHeader className="text-center">
                <div className="bg-purple-100 text-purple-600 rounded-full p-4 inline-flex mx-auto mb-4 border-2 border-purple-200">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Partner Creation</CardTitle>
                <CardDescription className="text-center">
                  Add new business partners to your channel network
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full gap-2 shadow-md hover:shadow-lg transition-shadow">
                  <Plus className="h-4 w-4" />
                  Create New Partner
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-orange-200">
              <CardHeader className="text-center">
                <div className="bg-orange-100 text-orange-600 rounded-full p-4 inline-flex mx-auto mb-4 border-2 border-orange-200">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Partner Locations</CardTitle>
                <CardDescription className="text-center">
                  Manage partner warehouse and distribution locations
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full gap-2 shadow-md hover:shadow-lg transition-shadow">
                  <Plus className="h-4 w-4" />
                  Add Partner Location
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Partners;
