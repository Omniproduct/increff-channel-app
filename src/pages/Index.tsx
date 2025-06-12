
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapIcon, ShoppingCart, Package, Box, Truck, Upload, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const AnimatedIcon = ({ icon: Icon, className, delay = 0 }: { icon: any; className?: string; delay?: number }) => (
    <div className={`inline-flex p-3 rounded-full ${className} animate-float transform-3d`} style={{ animationDelay: `${delay}s` }}>
      <Icon className="h-8 w-8" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header with Logo */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/baed4694-6705-4b8a-9c7c-5a711fcda920.png" 
                alt="Increff Logo" 
                className="h-10 w-10 transition-transform duration-300 hover:scale-110 animate-glow"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">Increff Channel App</h1>
              <p className="text-xs text-muted-foreground">Order Management System</p>
            </div>
          </div>
          <div className="ml-auto">
            <div className="text-sm text-muted-foreground">
              dhl-ae-omni | raghav.mehta
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Landing Page */}
      <main className="container py-12">
        {/* Animated Hero Section */}
        <div className="text-center space-y-8 mb-12">
          <div className="flex justify-center items-center gap-6 mb-8">
            <AnimatedIcon icon={ShoppingCart} className="bg-blue-100 text-blue-600 shadow-3d" delay={0} />
            <AnimatedIcon icon={Package} className="bg-green-100 text-green-600 shadow-3d" delay={0.5} />
            <AnimatedIcon icon={Box} className="bg-orange-100 text-orange-600 shadow-3d" delay={1} />
            <AnimatedIcon icon={Truck} className="bg-purple-100 text-purple-600 shadow-3d" delay={1.5} />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-primary animate-fade-in">
              Welcome to Increff Channel App
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Streamline your order management with our comprehensive platform
            </p>
          </div>

          {/* Feature Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 inline-flex mb-3 group-hover:scale-110 transition-transform shadow-3d transform-3d">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-primary">B2C Orders</h3>
              <p className="text-sm text-muted-foreground">Direct customer orders</p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 text-green-600 rounded-full p-4 inline-flex mb-3 group-hover:scale-110 transition-transform shadow-3d transform-3d">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-primary">B2B Inward</h3>
              <p className="text-sm text-muted-foreground">Inventory management</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 text-orange-600 rounded-full p-4 inline-flex mb-3 group-hover:scale-110 transition-transform shadow-3d transform-3d">
                <Box className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-primary">B2B Outward</h3>
              <p className="text-sm text-muted-foreground">Business distribution</p>
            </div>
            <div className="text-center group">
              <div className="bg-purple-100 text-purple-600 rounded-full p-4 inline-flex mb-3 group-hover:scale-110 transition-transform shadow-3d transform-3d">
                <Upload className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-primary">Bulk Upload</h3>
              <p className="text-sm text-muted-foreground">CSV file processing</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Link to="/order-upload">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <FileText className="mr-2 h-5 w-5" />
                Start New Order
              </Button>
            </Link>
            <Link to="/journey">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg gap-2 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <MapIcon className="h-5 w-5" />
                View Order Journey
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
