
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, MapPin, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center">
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
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary">Increff Channel App</h1>
                <p className="text-xs text-muted-foreground">Partner Management</p>
              </div>
            </div>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            dhl-ae-omni | raghav.mehta
          </div>
        </div>
      </header>

      <main className="container py-6">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="bg-purple-100 text-purple-600 rounded-full p-4 inline-flex animate-float">
              <Users className="h-12 w-12" />
            </div>
            <h1 className="text-3xl font-bold text-primary">Partner Management</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manage your business partners and their locations for efficient channel operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Partner Creation
                </CardTitle>
                <CardDescription>
                  Add new business partners to your channel network
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full gap-2">
                  <Plus className="h-4 w-4" />
                  Create New Partner
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  Partner Locations
                </CardTitle>
                <CardDescription>
                  Manage partner warehouse and distribution locations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full gap-2" variant="outline">
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
