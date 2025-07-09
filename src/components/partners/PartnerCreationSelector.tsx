import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, MapPin, Clock, Users, ArrowRight } from "lucide-react";

interface PartnerCreationSelectorProps {
  onSelectionChange: (selection: 'single' | 'multiple') => void;
}

export const PartnerCreationSelector = ({ onSelectionChange }: PartnerCreationSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState<'single' | 'multiple' | null>(null);

  const handleSelection = (option: 'single' | 'multiple') => {
    setSelectedOption(option);
    onSelectionChange(option);
  };

  return (
    <div className="w-full space-y-6">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold text-foreground">Choose Your Partner Creation Flow</h2>
        <p className="text-muted-foreground">Select the option that best fits your needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Single Location Option */}
        <Card 
          className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
            selectedOption === 'single' 
              ? 'border-primary shadow-lg ring-2 ring-primary/20' 
              : 'border-gray-200 hover:border-primary/50'
          }`}
          onClick={() => handleSelection('single')}
        >
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl">Partner with Single Location</CardTitle>
            <CardDescription className="text-sm">
              Perfect for partners with one primary location
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Estimated time: 2-3 minutes</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Creates partner + location in one go</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>Recommended for new partners</span>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="font-medium mb-2">What you'll provide:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Partner details (name, code, type)</li>
                <li>• Single location information</li>
                <li>• Address details</li>
              </ul>
            </div>

            {selectedOption === 'single' && (
              <Button className="w-full gap-2 animate-fade-in">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Multiple Locations Option */}
        <Card 
          className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
            selectedOption === 'multiple' 
              ? 'border-primary shadow-lg ring-2 ring-primary/20' 
              : 'border-gray-200 hover:border-primary/50'
          }`}
          onClick={() => handleSelection('multiple')}
        >
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-3 rounded-full bg-orange-100">
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
            <CardTitle className="text-xl">Partner with Multiple Locations</CardTitle>
            <CardDescription className="text-sm">
              For partners with multiple warehouses or stores
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Estimated time: 5+ minutes</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Wizard-guided setup process</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>For enterprise partners</span>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="font-medium mb-2">What you'll do:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Create partner profile first</li>
                <li>• Add multiple locations step-by-step</li>
                <li>• Manage location-specific settings</li>
              </ul>
            </div>

            {selectedOption === 'multiple' && (
              <Button className="w-full gap-2 animate-fade-in">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      {selectedOption && (
        <div className="text-center pt-4 animate-fade-in">
          <Button 
            variant="outline" 
            onClick={() => setSelectedOption(null)}
            className="gap-2"
          >
            Change Selection
          </Button>
        </div>
      )}
    </div>
  );
};