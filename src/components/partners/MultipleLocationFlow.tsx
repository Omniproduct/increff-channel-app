import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Check, Plus } from "lucide-react";
import { PartnerCreationForm } from "./PartnerCreationForm";
import { PartnerLocationForm } from "./PartnerLocationForm";

interface MultipleLocationFlowProps {
  onBack: () => void;
}

type FlowStep = 'partner' | 'locations' | 'complete';

export const MultipleLocationFlow = ({ onBack }: MultipleLocationFlowProps) => {
  const [currentStep, setCurrentStep] = useState<FlowStep>('partner');
  const [createdPartner, setCreatedPartner] = useState<string>("");
  const [locations, setLocations] = useState<Array<{ code: string; name: string }>>([]);

  const steps = [
    { key: 'partner', title: 'Create Partner', description: 'Basic partner information' },
    { key: 'locations', title: 'Add Locations', description: 'Manage partner locations' },
    { key: 'complete', title: 'Complete', description: 'Review and finish' }
  ];

  const currentStepIndex = steps.findIndex(step => step.key === currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handlePartnerCreated = (partnerCode: string) => {
    setCreatedPartner(partnerCode);
    setCurrentStep('locations');
  };

  const handleLocationAdded = (locationCode: string, locationName: string) => {
    setLocations(prev => [...prev, { code: locationCode, name: locationName }]);
  };

  const handleComplete = () => {
    setCurrentStep('complete');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'partner':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Step 1: Create Partner</h3>
              <p className="text-muted-foreground">First, let's create the basic partner profile</p>
            </div>
            <PartnerCreationForm />
            <div className="flex justify-end pt-4">
              <Button onClick={() => handlePartnerCreated("PARTNER005")} className="px-8">
                Continue to Locations
              </Button>
            </div>
          </div>
        );
      
      case 'locations':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Step 2: Manage Locations</h3>
                <p className="text-muted-foreground">Add locations for partner: {createdPartner}</p>
              </div>
              {locations.length > 0 && (
                <Button onClick={handleComplete} className="gap-2">
                  <Check className="h-4 w-4" />
                  Finish Setup
                </Button>
              )}
            </div>

            {locations.length > 0 && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Added Locations ({locations.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {locations.map((location, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-green-50 rounded border border-green-200">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="font-medium">{location.code}</span>
                        <span className="text-muted-foreground">- {location.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PartnerLocationForm />
                <div className="flex justify-end gap-4 pt-4 mt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={() => handleLocationAdded(`LOC00${locations.length + 1}`, `Location ${locations.length + 1}`)}
                  >
                    Add Another Location
                  </Button>
                  {locations.length === 0 && (
                    <Button onClick={() => handleLocationAdded("LOC001", "Main Location")}>
                      Add First Location
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'complete':
        return (
          <div className="text-center space-y-6 py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-green-700">Setup Complete!</h3>
              <p className="text-muted-foreground">
                Successfully created partner <strong>{createdPartner}</strong> with {locations.length} location(s)
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 w-full">
              <h4 className="font-medium mb-2">Summary:</h4>
              <div className="text-sm space-y-1 text-left">
                <div>Partner: {createdPartner}</div>
                <div>Locations: {locations.length}</div>
                {locations.map((location, index) => (
                  <div key={index} className="pl-4">• {location.code}</div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={onBack}>
                Create Another Partner
              </Button>
              <Button onClick={() => window.location.reload()}>
                Go to Dashboard
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Selection
        </Button>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground">Create Partner with Multiple Locations</h2>
          <p className="text-muted-foreground">Step-by-step wizard to set up your partner and locations</p>
        </div>
      </div>

      {/* Progress Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
            
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <div 
                  key={step.key} 
                  className={`flex flex-col items-center text-center space-y-1 ${
                    index <= currentStepIndex ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index < currentStepIndex 
                      ? 'bg-green-100 text-green-700' 
                      : index === currentStepIndex 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100'
                  }`}>
                    {index < currentStepIndex ? <Check className="h-4 w-4" /> : index + 1}
                  </div>
                  <div className="text-xs font-medium">{step.title}</div>
                  <div className="text-xs">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <div className="animate-fade-in">
        {renderStepContent()}
      </div>
    </div>
  );
};