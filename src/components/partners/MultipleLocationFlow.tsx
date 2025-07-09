import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check, Plus, Upload, Building2 } from "lucide-react";
import { PartnerCreationForm } from "./PartnerCreationForm";
import { PartnerLocationForm } from "./PartnerLocationForm";

interface MultipleLocationFlowProps {
  onBack: () => void;
  existingPartner?: { id: string; name: string; code: string } | null;
}

type FlowStep = 'partner' | 'locations' | 'complete';

export const MultipleLocationFlow = ({ onBack, existingPartner }: MultipleLocationFlowProps) => {
  const [currentStep, setCurrentStep] = useState<FlowStep>('partner');
  const [createdPartner, setCreatedPartner] = useState<string>("");
  const [partnerData, setPartnerData] = useState<{ id: string; name: string; code: string } | null>(existingPartner || null);
  const [locations, setLocations] = useState<Array<{ code: string; name: string }>>([]);
  const [isBulkMode, setIsBulkMode] = useState(false);

  const steps = [
    { key: 'partner', title: existingPartner ? 'Select Partner' : 'Create Partner', description: existingPartner ? 'Partner already selected' : 'Basic partner information' },
    { key: 'locations', title: 'Add Locations', description: 'Manage partner locations' },
    { key: 'complete', title: 'Complete', description: 'Review and finish' }
  ];

  const currentStepIndex = steps.findIndex(step => step.key === currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  // Auto-skip to step 2 if existing partner is provided
  useEffect(() => {
    if (existingPartner) {
      setPartnerData(existingPartner);
      setCreatedPartner(existingPartner.code);
      setCurrentStep('locations');
    }
  }, [existingPartner]);

  const handlePartnerCreated = (partnerData: { id: string; name: string; code: string }) => {
    setPartnerData(partnerData);
    setCreatedPartner(partnerData.code);
    setCurrentStep('locations');
  };

  const handleLocationAdded = (locationCode: string, locationName: string) => {
    setLocations(prev => [...prev, { code: locationCode, name: locationName }]);
  };

  const handleComplete = () => {
    setCurrentStep('complete');
  };

  const renderBulkUpload = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Bulk Upload
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium">Upload CSV File</h3>
          <p className="text-muted-foreground">Upload a CSV file with location details</p>
          <Button className="mt-4" variant="outline">
            Choose File
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-medium mb-2">CSV Format Required:</p>
          <p>locationCode, locationName, gstin, billingAddress, shippingAddress</p>
        </div>
      </CardContent>
    </Card>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 'partner':
        if (existingPartner) {
          return (
            <div className="space-y-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900">Partner Already Selected</h3>
                      <p className="text-blue-700">
                        Adding locations for: <strong>{existingPartner.name}</strong> ({existingPartner.code})
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center">
                <Button onClick={() => setCurrentStep('locations')} className="px-8">
                  Continue to Add Locations
                </Button>
              </div>
            </div>
          );
        }
        
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Step 1: Create Partner</h3>
              <p className="text-muted-foreground">First, let's create the basic partner profile</p>
            </div>
            
            {/* Bulk Mode Toggle */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="bulk-mode" className="text-base font-medium">Enable Bulk Creation</Label>
                    <p className="text-sm text-muted-foreground">Upload CSV files for faster partner and location creation</p>
                  </div>
                  <Switch
                    id="bulk-mode"
                    checked={isBulkMode}
                    onCheckedChange={setIsBulkMode}
                  />
                </div>
              </CardContent>
            </Card>

            {isBulkMode ? renderBulkUpload() : <PartnerCreationForm onSubmit={handlePartnerCreated} />}
            
            <div className="flex justify-end pt-4">
              <Button 
                onClick={() => setCurrentStep('locations')} 
                className="px-8"
                disabled={!partnerData && !isBulkMode}
              >
                Continue to Locations
              </Button>
            </div>
          </div>
        );
      
      case 'locations':
        return (
          <div className="space-y-6">
            {/* Partner Context Card */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Adding locations for: {partnerData?.name || createdPartner}
                    </h4>
                    <p className="text-sm text-blue-700">
                      Partner Code: {partnerData?.code || createdPartner}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Step 2: Add Locations</h3>
                <p className="text-muted-foreground">
                  {locations.length === 0 ? "Add your first location" : `${locations.length} location(s) added`}
                </p>
              </div>
              {locations.length > 0 && (
                <Button onClick={handleComplete} className="gap-2">
                  <Check className="h-4 w-4" />
                  Finish Setup ({locations.length} locations)
                </Button>
              )}
            </div>

            {/* Bulk Mode Toggle for Locations */}
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="bulk-location-mode" className="text-base font-medium">Bulk Location Upload</Label>
                    <p className="text-sm text-muted-foreground">Upload multiple locations via CSV file</p>
                  </div>
                  <Switch
                    id="bulk-location-mode"
                    checked={isBulkMode}
                    onCheckedChange={setIsBulkMode}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Added Locations List */}
            {locations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    Added Locations ({locations.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {locations.map((location, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-200">
                        <div className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="font-medium">{location.code}</span>
                          <span className="text-muted-foreground">- {location.name}</span>
                        </div>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Location Form or Bulk Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  {isBulkMode ? <Upload className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  {isBulkMode ? "Bulk Upload Locations" : "Add New Location"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isBulkMode ? (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium">Upload Locations CSV</h3>
                      <p className="text-muted-foreground">Upload a CSV file with location details</p>
                      <Button className="mt-4" variant="outline">
                        Choose File
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium mb-2">CSV Format Required:</p>
                      <p>locationCode, locationName, gstin, billingAddress, shippingAddress</p>
                    </div>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            {locations.length === 0 && (
              <div className="text-center py-4">
                <p className="text-muted-foreground mb-4">
                  You must add at least one location before proceeding
                </p>
                <Button 
                  onClick={() => handleLocationAdded("LOC001", "Main Location")}
                  className="px-8"
                >
                  Add First Location
                </Button>
              </div>
            )}
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
            
            <div className="bg-slate-50 rounded-lg p-4 max-w-md mx-auto">
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
              <Button onClick={onBack}>
                Back to Dashboard
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
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