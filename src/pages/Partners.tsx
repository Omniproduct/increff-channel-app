
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, MapPin, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/main">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform border-gray-300 text-gray-700 hover:bg-gray-50">
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
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Increff Channel App</h1>
                <p className="text-xs text-gray-600">Partner Management</p>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="font-mono text-xs border-brand-blue text-brand-blue">
            dhl-ae-omni | raghav.mehta
          </Badge>
        </div>
      </header>

      <main className="container py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="bg-brand-red/10 text-brand-red rounded-full p-6 inline-flex border border-brand-red/20 shadow-lg">
              <Users className="h-12 w-12" />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Partner Management</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Manage your business partners and their locations for efficient channel operations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-gray-200 bg-white">
              <CardHeader className="text-center">
                <div className="bg-brand-red/10 text-brand-red rounded-full p-4 inline-flex mx-auto mb-4 border border-brand-red/20">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-gray-900">Partner Creation</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Add new business partners to your channel network
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full gap-2 shadow-md hover:shadow-lg transition-shadow bg-brand-red hover:bg-brand-red/90 text-white">
                  <Plus className="h-4 w-4" />
                  Create New Partner
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-gray-200 bg-white">
              <CardHeader className="text-center">
                <div className="bg-brand-blue/10 text-brand-blue rounded-full p-4 inline-flex mx-auto mb-4 border border-brand-blue/20">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-gray-900">Partner Locations</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Manage partner warehouse and distribution locations
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full gap-2 shadow-md hover:shadow-lg transition-shadow border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
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
