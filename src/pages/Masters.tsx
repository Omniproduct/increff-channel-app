import { useState } from "react";
import { PartnerCreationForm } from "@/components/partners/PartnerCreationForm";
import { PartnerLocationForm } from "@/components/partners/PartnerLocationForm";
import { PartnerCreationSelector } from "@/components/partners/PartnerCreationSelector";
import { SingleLocationPartnerForm } from "@/components/partners/SingleLocationPartnerForm";
import { MultipleLocationFlow } from "@/components/partners/MultipleLocationFlow";
import { PartnersList } from "@/components/masters/PartnersList";
import { PartnerLocations } from "@/components/masters/PartnerLocations";
import { MastersHelpDrawer } from "@/components/help/MastersHelpDrawer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MapIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ScreenHeader } from "@/components/ui/screen-header";
const Masters = () => {
  const [currentView, setCurrentView] = useState<'list' | 'locations' | 'selection' | 'single' | 'multiple' | 'legacy'>('list');
  const [selectedPartner, setSelectedPartner] = useState<{
    id: string;
    name: string;
    code?: string;
  } | null>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const handleSelectionChange = (selection: 'single' | 'multiple') => {
    setCurrentView(selection);
  };
  const handleBackToSelection = () => {
    setCurrentView('selection');
  };
  const handleViewLocations = (partnerId: string, partnerName: string, partnerCode?: string) => {
    setSelectedPartner({
      id: partnerId,
      name: partnerName,
      code: partnerCode
    });
    setCurrentView('locations');
  };
  const handleBackToList = () => {
    setSelectedPartner(null);
    setCurrentView('list');
  };
  const handleCreatePartner = () => {
    setCurrentView('selection');
  };
  const handleAddLocation = () => {
    // Navigate to multiple location flow with existing partner context
    if (selectedPartner) {
      setCurrentView('multiple');
    } else {
      setCurrentView('legacy'); // fallback to legacy form
    }
  };
  const renderContent = () => {
    switch (currentView) {
      case 'list':
        return <PartnersList onViewLocations={handleViewLocations} onCreatePartner={handleCreatePartner} />;
      case 'locations':
        return selectedPartner ? <PartnerLocations partnerId={selectedPartner.id} partnerName={selectedPartner.name} onBack={handleBackToList} onAddLocation={handleAddLocation} /> : null;
      case 'single':
        return <SingleLocationPartnerForm onBack={handleBackToSelection} />;
      case 'multiple':
        return <MultipleLocationFlow onBack={selectedPartner ? handleBackToList : handleBackToSelection} existingPartner={selectedPartner ? {
          id: selectedPartner.id,
          name: selectedPartner.name,
          code: selectedPartner.code || `PARTNER${selectedPartner.id.padStart(3, '0')}`
        } : null} />;
      case 'legacy':
        return <Tabs defaultValue="partner" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="partner">Partner Creation</TabsTrigger>
              <TabsTrigger value="location">Partner Location</TabsTrigger>
            </TabsList>
            <TabsContent value="partner">
              <PartnerCreationForm />
            </TabsContent>
            <TabsContent value="location">
              <PartnerLocationForm />
            </TabsContent>
          </Tabs>;
      case 'selection':
        return <PartnerCreationSelector onSelectionChange={handleSelectionChange} />;
      default:
        return <PartnersList onViewLocations={handleViewLocations} onCreatePartner={handleCreatePartner} />;
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-4">
            <Link to="/main">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Back to Main
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="/lovable-uploads/baed4694-6705-4b8a-9c7c-5a711fcda920.png" alt="Increff Logo" className="h-10 w-10 transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary">Increff OMS Console</h1>
                <p className="text-xs text-muted-foreground">Master Data Management</p>
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Link to="/journey">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-white">
                <MapIcon className="h-4 w-4" />
                View Journey
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              dhl-ae-omni | raghav.mehta
            </div>
          </div>
        </div>
      </header>
      <main className="w-full px-[8%] py-6">
        <ScreenHeader title="Master Data Management" subtitle="Create and manage partners and their locations for seamless channel operations">
          {currentView !== 'list' && currentView !== 'locations' && <div className="flex items-center gap-3">
              <Label htmlFor="legacy-mode" className="text-sm font-medium">
                Legacy Mode
              </Label>
              <Switch id="legacy-mode" checked={currentView === 'legacy'} onCheckedChange={checked => {
            if (checked) {
              setCurrentView('legacy');
            } else {
              setCurrentView('selection');
            }
          }} />
            </div>}
          <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-white" onClick={() => setIsHelpOpen(true)}>
            Need Help?
          </Button>
        </ScreenHeader>
        
        {renderContent()}
      </main>
      
      <MastersHelpDrawer isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>;
};
export default Masters;