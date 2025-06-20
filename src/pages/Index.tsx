
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package, Box, Truck, Upload, FileText, Users, ArrowLeftRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const AnimatedIcon = ({ icon: Icon, className, delay = 0 }: { icon: any; className?: string; delay?: number }) => (
    <div className={`inline-flex p-4 rounded-full ${className} transition-all duration-300 hover:scale-110`} style={{ animationDelay: `${delay}s` }}>
      <Icon className="h-8 w-8" />
    </div>
  );

  const FeatureCard = ({ 
    icon: Icon, 
    title, 
    description, 
    to, 
    className 
  }: { 
    icon: any; 
    title: string; 
    description: string; 
    to: string; 
    className: string; 
  }) => (
    <Link to={to} className="group transition-all duration-300 hover:scale-105">
      <Card className="h-full border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
        <CardHeader className="text-center pb-4">
          <div className={`${className} rounded-full p-4 inline-flex mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Icon className="h-8 w-8" />
          </div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header with Logo */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
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
              <p className="text-xs text-muted-foreground">Order Management System</p>
            </div>
          </div>
          <Badge variant="outline" className="font-mono text-xs">
            dhl-ae-omni | raghav.mehta
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 space-y-12">
        {/* Animated Hero Icons */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-8 mb-8">
            <AnimatedIcon icon={ShoppingCart} className="bg-blue-100 text-blue-600 shadow-lg border-2 border-blue-200" delay={0} />
            <AnimatedIcon icon={Package} className="bg-emerald-100 text-emerald-600 shadow-lg border-2 border-emerald-200" delay={0.5} />
            <AnimatedIcon icon={Box} className="bg-orange-100 text-orange-600 shadow-lg border-2 border-orange-200" delay={1} />
            <AnimatedIcon icon={Truck} className="bg-purple-100 text-purple-600 shadow-lg border-2 border-purple-200" delay={1.5} />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Channel Management Hub</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline your operations with our comprehensive order management and partner coordination platform
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={ShoppingCart}
            title="Orders"
            description="Create and manage B2B and B2C orders with comprehensive order processing and tracking capabilities"
            to="/order-upload"
            className="bg-blue-100 text-blue-600 border-2 border-blue-200"
          />
          
          <FeatureCard
            icon={Users}
            title="Partners"
            description="Manage partner relationships and partner location creation for seamless channel operations"
            to="/partners"
            className="bg-purple-100 text-purple-600 border-2 border-purple-200"
          />
          
          <FeatureCard
            icon={ArrowLeftRight}
            title="Crossdocking"
            description="Create item cross dock plans for efficient bulk and item crossdocking operations"
            to="/crossdocking"
            className="bg-orange-100 text-orange-600 border-2 border-orange-200"
          />
          
          <FeatureCard
            icon={Upload}
            title="Bulk Upload"
            description="Process multiple orders simultaneously using CSV file uploads for enhanced productivity"
            to="/order-upload"
            className="bg-red-100 text-red-600 border-2 border-red-200"
          />
          
          <FeatureCard
            icon={BookOpen}
            title="User Guide"
            description="View comprehensive user journey and application usage guidelines for optimal workflow"
            to="/journey"
            className="bg-indigo-100 text-indigo-600 border-2 border-indigo-200"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
