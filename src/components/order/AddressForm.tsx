
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { CSVUploadSection } from "./sections/CSVUploadSection";

interface AddressFormProps {
  type: "shipping" | "billing";
  onFocus?: () => void;
  onBlur?: () => void;
}

export const AddressForm = ({ type, onFocus, onBlur }: AddressFormProps) => {
  const [useSameAddress, setUseSameAddress] = useState(false);

  if (type === "billing" && useSameAddress) {
    return (
      <Card className="border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
          <CardTitle className="flex items-center justify-between">
            Billing Address
            <div className="flex items-center space-x-2">
              <Switch
                checked={useSameAddress}
                onCheckedChange={setUseSameAddress}
              />
              <Label className="text-sm">Same as shipping</Label>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            Using same address as shipping address
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-blue-200">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
        <CardTitle className="flex items-center justify-between">
          {type === "shipping" ? "Shipping Address" : "Billing Address"}
          {type === "billing" && (
            <div className="flex items-center space-x-2">
              <Switch
                checked={useSameAddress}
                onCheckedChange={setUseSameAddress}
              />
              <Label className="text-sm">Same as shipping</Label>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="form">Manual Entry</TabsTrigger>
            <TabsTrigger value="csv">CSV Upload</TabsTrigger>
          </TabsList>
          
          <TabsContent value="form" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Name *</Label>
                <Input
                  placeholder="Enter name"
                  className="rounded-lg bg-white border-blue-200 focus:border-primary"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input
                  placeholder="Enter phone"
                  className="rounded-lg bg-white border-blue-200 focus:border-primary"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                placeholder="Enter email"
                type="email"
                className="rounded-lg bg-white border-blue-200 focus:border-primary"
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Address Line 1 *</Label>
              <Input
                placeholder="Enter address line 1"
                className="rounded-lg bg-white border-blue-200 focus:border-primary"
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Address Line 2</Label>
                <Input
                  placeholder="Enter address line 2"
                  className="rounded-lg bg-white border-blue-200 focus:border-primary"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <div className="space-y-2">
                <Label>Address Line 3</Label>
                <Input
                  placeholder="Enter address line 3"
                  className="rounded-lg bg-white border-blue-200 focus:border-primary"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>City *</Label>
                <Input
                  placeholder="Enter city"
                  className="rounded-lg bg-white border-blue-200 focus:border-primary"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <div className="space-y-2">
                <Label>State *</Label>
                <Input
                  placeholder="Enter state"
                  className="rounded-lg bg-white border-blue-200 focus:border-primary"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <div className="space-y-2">
                <Label>ZIP *</Label>
                <Input
                  placeholder="Enter ZIP"
                  className="rounded-lg bg-white border-blue-200 focus:border-primary"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Country *</Label>
              <Input
                placeholder="Enter country"
                className="rounded-lg bg-white border-blue-200 focus:border-primary"
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="csv" className="mt-4">
            <CSVUploadSection
              title={`${type === "shipping" ? "Shipping" : "Billing"} Address CSV`}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
