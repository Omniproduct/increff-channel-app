
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapIcon, ShoppingCart, Package, Box, Truck, Upload, FileText, Users, ArrowLeftRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const AnimatedIcon = ({ icon: Icon, className, delay = 0 }: { icon: any; className?: string; delay?: number }) => (
    <div className={`inline-flex p-3 rounded-full ${className} animate-float transform-3d`} style={{ animationDelay: `${delay}s` }}>
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
    <Link to={to} className="group">
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 h-full">
        <div className={`${className} rounded-full p-4 inline-flex mb-4 group-hover:scale-110 transition-transform shadow-3d transform-3d`}>
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
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

      {/* Main Content */}
      <main className="container py-12">
        {/* Animated Hero Icons */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-6 mb-8">
            <AnimatedIcon icon={ShoppingCart} className="bg-blue-100 text-blue-600 shadow-3d" delay={0} />
            <AnimatedIcon icon={Package} className="bg-green-100 text-green-600 shadow-3d" delay={0.5} />
            <AnimatedIcon icon={Box} className="bg-orange-100 text-orange-600 shadow-3d" delay={1} />
            <AnimatedIcon icon={Truck} className="bg-purple-100 text-purple-600 shadow-3d" delay={1.5} />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={ShoppingCart}
            title="Orders"
            description="Create and manage B2B and B2C orders with comprehensive order processing"
            to="/order-upload"
            className="bg-blue-100 text-blue-600"
          />
          
          <FeatureCard
            icon={Users}
            title="Partners"
            description="Manage partner relationships and partner location creation for the channel"
            to="/partners"
            className="bg-purple-100 text-purple-600"
          />
          
          <FeatureCard
            icon={ArrowLeftRight}
            title="Crossdocking"
            description="Create item cross dock plans for bulk and item crossdocking operations"
            to="/crossdocking"
            className="bg-orange-100 text-orange-600"
          />
          
          <FeatureCard
            icon={Upload}
            title="Bulk Upload"
            description="Process multiple orders simultaneously using CSV file uploads"
            to="/order-upload"
            className="bg-red-100 text-red-600"
          />
          
          <FeatureCard
            icon={BookOpen}
            title="User Guide"
            description="View comprehensive user journey and application usage guidelines"
            to="/journey"
            className="bg-indigo-100 text-indigo-600"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
