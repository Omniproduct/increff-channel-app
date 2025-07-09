import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Info } from "lucide-react";

interface SingleLocationPartnerFormProps {
  onBack: () => void;
}

export const SingleLocationPartnerForm = ({ onBack }: SingleLocationPartnerFormProps) => {
  const [partnerType, setPartnerType] = useState("supplier");
  const [channel, setChannel] = useState("");
  const [excessGrnAllowed, setExcessGrnAllowed] = useState("no");
  const [gstApplicable, setGstApplicable] = useState(true);
  const [partnerCode, setPartnerCode] = useState("");
  const [locationCode, setLocationCode] = useState("");
  const { toast } = useToast();

  const channelOptions = [
    "Amazon", "Flipkart", "Myntra", "Nykaa", "Ajio", "Meesho", "Shopify", "Direct"
  ];

  // Auto-generate location code when partner code changes
  const handlePartnerCodeChange = (value: string) => {
    setPartnerCode(value);
    if (value) {
      setLocationCode(`${value}-LOC001`);
    } else {
      setLocationCode("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Partner with location created successfully!",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
    setChannel("");
    setExcessGrnAllowed("no");
    setPartnerType("supplier");
    setPartnerCode("");
    setLocationCode("");
    setGstApplicable(true);
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Selection
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Create Partner with Single Location</h2>
          <p className="text-muted-foreground">All partner and location details in one streamlined form</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Partner Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Partner Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="partner-code" className="text-sm">
                    Partner Code <span className="text-brand-red">*</span>
                  </Label>
                  <Input
                    id="partner-code"
                    value={partnerCode}
                    onChange={(e) => handlePartnerCodeChange(e.target.value)}
                    placeholder="Enter partner code"
                    required
                    className="border-gray-200 focus:border-brand-blue h-9"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="location-code" className="text-sm">
                    Location Code <span className="text-brand-red">*</span>
                  </Label>
                  <Input
                    id="location-code"
                    value={locationCode}
                    onChange={(e) => setLocationCode(e.target.value)}
                    placeholder="Auto-generated from partner code"
                    required
                    className="border-gray-200 focus:border-brand-blue h-9"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="channel" className="text-sm">
                    Channel <span className="text-brand-red">*</span>
                  </Label>
                  <Select value={channel} onValueChange={setChannel} required>
                    <SelectTrigger className="border-gray-200 focus:border-brand-blue h-9">
                      <SelectValue placeholder="Select channel" />
                    </SelectTrigger>
                    <SelectContent>
                      {channelOptions.map((option) => (
                        <SelectItem key={option} value={option.toLowerCase()}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="priority" className="text-sm">Priority</Label>
                  <Input
                    id="priority"
                    type="number"
                    placeholder="Enter priority"
                    className="border-gray-200 focus:border-brand-blue h-9"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="excess-grn" className="text-sm">
                    Excess GRN Allowed <span className="text-brand-red">*</span>
                  </Label>
                  <Select value={excessGrnAllowed} onValueChange={setExcessGrnAllowed}>
                    <SelectTrigger className="border-gray-200 focus:border-brand-blue h-9">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="gstin" className="flex items-center gap-2 text-sm">
                    GSTIN
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </Label>
                  <Input
                    id="gstin"
                    placeholder="Enter GSTIN"
                    disabled={!gstApplicable}
                    className="border-gray-200 focus:border-brand-blue h-9"
                  />
                  <div className="flex items-center space-x-2 mt-1">
                    <Checkbox
                      id="gst-not-applicable"
                      checked={!gstApplicable}
                      onCheckedChange={(checked) => setGstApplicable(!checked)}
                    />
                    <Label htmlFor="gst-not-applicable" className="text-xs text-muted-foreground">
                      GST Not Applicable
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Partner Type <span className="text-brand-red">*</span></Label>
                <RadioGroup value={partnerType} onValueChange={setPartnerType} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="supplier" id="supplier" />
                    <Label htmlFor="supplier" className="text-sm">Supplier</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="customer" id="customer" />
                    <Label htmlFor="customer" className="text-sm">Customer</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Address Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Address Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-sm">
                    Contact Name <span className="text-brand-red">*</span>
                  </Label>
                  <Input id="name" placeholder="Enter contact name" required className="border-gray-200 focus:border-brand-blue h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-sm">
                    Phone <span className="text-brand-red">*</span>
                  </Label>
                  <Input id="phone" placeholder="Enter phone number" required className="border-gray-200 focus:border-brand-blue h-9" />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm">
                  Email <span className="text-brand-red">*</span>
                </Label>
                <Input id="email" type="email" placeholder="Enter email address" required className="border-gray-200 focus:border-brand-blue h-9" />
              </div>

              <div className="space-y-1">
                <Label htmlFor="address1" className="text-sm">
                  Address Line 1 <span className="text-brand-red">*</span>
                </Label>
                <Input id="address1" placeholder="Enter address line 1" required className="border-gray-200 focus:border-brand-blue h-9" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="address2" className="text-sm">Address Line 2</Label>
                  <Input id="address2" placeholder="Enter address line 2" className="border-gray-200 focus:border-brand-blue h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="address3" className="text-sm">Address Line 3</Label>
                  <Input id="address3" placeholder="Enter address line 3" className="border-gray-200 focus:border-brand-blue h-9" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="city" className="text-sm">
                    City <span className="text-brand-red">*</span>
                  </Label>
                  <Input id="city" placeholder="Enter city" required className="border-gray-200 focus:border-brand-blue h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="state" className="text-sm">
                    State <span className="text-brand-red">*</span>
                  </Label>
                  <Input id="state" placeholder="Enter state" required className="border-gray-200 focus:border-brand-blue h-9" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="zipcode" className="text-sm">
                    Zip Code <span className="text-brand-red">*</span>
                  </Label>
                  <Input id="zipcode" placeholder="Enter zip code" required className="border-gray-200 focus:border-brand-blue h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="country" className="text-sm">
                    Country <span className="text-brand-red">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:border-brand-blue h-9">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end gap-4 pt-6 border-t">
          <Button type="button" variant="outline" onClick={onBack}>
            Cancel
          </Button>
          <Button type="submit" className="px-8">
            Create Partner & Location
          </Button>
        </div>
      </form>
    </div>
  );
};