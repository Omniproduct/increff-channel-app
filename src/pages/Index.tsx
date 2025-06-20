
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Users, ArrowLeftRight, Upload, BarChart3, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/baed4694-6705-4b8a-9c7c-5a711fcda920.png" 
                alt="Increff Logo" 
                className="h-10 w-10 transition-transform duration-300 hover:scale-110 rounded-lg shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Increff Channel App</h1>
              <p className="text-sm text-gray-600">Warehouse Management System</p>
            </div>
          </div>
          <Badge variant="outline" className="font-mono text-sm border-brand-blue text-brand-blue">
            dhl-ae-omni | raghav.mehta
          </Badge>
        </div>
      </header>

      <main className="container py-12">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <div className="bg-brand-blue/10 text-brand-blue rounded-full p-8 inline-flex border border-brand-blue/20 shadow-lg">
              <Package className="h-16 w-16" />
            </div>
            <div className="space-y-3">
              <h1 className="text-5xl font-bold text-gray-900">Channel Operations Hub</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Streamline your warehouse operations with comprehensive order management, 
                partner coordination, and crossdocking solutions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link to="/order-upload">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-gray-200 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="bg-brand-blue/10 text-brand-blue rounded-full p-6 inline-flex mx-auto mb-4 border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-colors">
                    <ShoppingCart className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Orders</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Create and manage B2B and B2C orders with comprehensive tracking
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white shadow-md hover:shadow-lg transition-all">
                    Manage Orders
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/partners">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-gray-200 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="bg-brand-red/10 text-brand-red rounded-full p-6 inline-flex mx-auto mb-4 border border-brand-red/20 group-hover:bg-brand-red/20 transition-colors">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Partners</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Manage business partners and their distribution locations
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button variant="outline" className="w-full border-brand-red text-brand-red hover:bg-brand-red hover:text-white shadow-md hover:shadow-lg transition-all">
                    Manage Partners
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/crossdocking">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-gray-200 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gray-600/10 text-gray-700 rounded-full p-6 inline-flex mx-auto mb-4 border border-gray-300 group-hover:bg-gray-600/20 transition-colors">
                    <ArrowLeftRight className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Crossdocking</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Efficient bulk and item crossdocking operations management
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button variant="outline" className="w-full border-gray-400 text-gray-700 hover:bg-gray-700 hover:text-white shadow-md hover:shadow-lg transition-all">
                    Manage Operations
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/order-journey">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-gray-200 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="bg-brand-blue/10 text-brand-blue rounded-full p-6 inline-flex mx-auto mb-4 border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-colors">
                    <Upload className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Order Journey</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Track and visualize the complete order fulfillment process
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white shadow-md hover:shadow-lg transition-all">
                    View Journey
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-gray-200 bg-white lg:col-span-2">
              <CardHeader className="text-center pb-4">
                <div className="bg-gray-600/10 text-gray-700 rounded-full p-6 inline-flex mx-auto mb-4 border border-gray-300 group-hover:bg-gray-600/20 transition-colors">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Analytics & Reporting</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Comprehensive insights and performance metrics for your channel operations
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-700 hover:text-white shadow-md hover:shadow-lg transition-all">
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
