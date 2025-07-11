import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Inbox, Send, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  const AnimatedIcon = ({
    icon: Icon,
    className,
    delay = 0
  }: {
    icon: any;
    className?: string;
    delay?: number;
  }) => <div className={`inline-flex p-4 rounded-full ${className} transition-all duration-300 hover:scale-110`} style={{
    animationDelay: `${delay}s`
  }}>
      <Icon className="h-8 w-8" />
    </div>;
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
  }) => <Link to={to} className="group transition-all duration-300 hover:scale-105">
      <Card className="h-full border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300 bg-white min-h-[280px]">
        <CardHeader className="text-center pb-6 pt-8">
          <div className={`${className} rounded-full p-6 inline-flex mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Icon className="h-10 w-10" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground mb-2">{title}</CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <CardDescription className="text-center text-muted-foreground leading-relaxed text-base">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>;
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header with Logo */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="/lovable-uploads/baed4694-6705-4b8a-9c7c-5a711fcda920.png" alt="Increff Logo" className="h-10 w-10 transition-transform duration-300 hover:scale-110 rounded-lg shadow-sm" />
              <div className="absolute inset-0 rounded-lg bg-primary/10 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Increff OMS Console</h1>
              <p className="text-xs text-muted-foreground">Order Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/journey">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
                <BookOpen className="h-4 w-4" />
                User Guide
              </Button>
            </Link>
            <Badge variant="outline" className="font-mono text-xs">
              dhl-ae-omni | raghav.mehta
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 space-y-12">
        {/* Animated Hero Icons */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-8 mb-8">
            <AnimatedIcon icon={Inbox} className="bg-blue-100 text-blue-600 shadow-lg border-2 border-blue-200" delay={0} />
            <AnimatedIcon icon={Send} className="bg-green-100 text-green-600 shadow-lg border-2 border-green-200" delay={0.5} />
            <AnimatedIcon icon={Users} className="bg-purple-100 text-purple-600 shadow-lg border-2 border-purple-200" delay={1} />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">OMS Console</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline your operations with our comprehensive order management and partner coordination platform
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mx-auto px-[5%]">
          <FeatureCard icon={Inbox} title="Inwards" description="Create and manage B2B inward orders for purchase, returns, and open PO operations with comprehensive tracking and monitoring capabilities" to="/inwards" className="bg-blue-100 text-blue-600 border-2 border-blue-200" />
          
          <FeatureCard icon={Send} title="Outwards" description="Create and manage B2C and B2B outward orders for sales and distribution with real-time status updates and delivery tracking" to="/outwards" className="bg-green-100 text-green-600 border-2 border-green-200" />
          
          <FeatureCard icon={Users} title="Masters" description="Manage master data including partner relationships and location creation with complete address and configuration management" to="/masters" className="bg-purple-100 text-purple-600 border-2 border-purple-200" />
        </div>
      </main>
    </div>;
};
export default Index;