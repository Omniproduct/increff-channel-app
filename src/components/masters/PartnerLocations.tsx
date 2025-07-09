import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, MapPin } from "lucide-react";

interface Location {
  id: string;
  locationCode: string;
  gstin: string;
  billingAddress: string;
  shippingAddress: string;
  status: "active" | "inactive";
}

interface PartnerLocationsProps {
  partnerId: string;
  partnerName: string;
  onBack: () => void;
  onAddLocation: () => void;
}

// Mock data - replace with actual data fetching
const mockLocations: Location[] = [
  {
    id: "1",
    locationCode: "LOC001",
    gstin: "27AAAAA0000A1Z5",
    billingAddress: "123 Business Street, Mumbai, Maharashtra 400001",
    shippingAddress: "123 Business Street, Mumbai, Maharashtra 400001",
    status: "active"
  },
  {
    id: "2",
    locationCode: "LOC002", 
    gstin: "27BBBBB1111B2Z6",
    billingAddress: "456 Warehouse District, Mumbai, Maharashtra 400002",
    shippingAddress: "789 Distribution Center, Mumbai, Maharashtra 400003",
    status: "active"
  },
  {
    id: "3",
    locationCode: "LOC003",
    gstin: "27CCCCC2222C3Z7",
    billingAddress: "321 Corporate Plaza, Mumbai, Maharashtra 400004",
    shippingAddress: "321 Corporate Plaza, Mumbai, Maharashtra 400004", 
    status: "inactive"
  }
];

export const PartnerLocations = ({ partnerId, partnerName, onBack, onAddLocation }: PartnerLocationsProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Partners
          </Button>
          <div>
            <CardTitle className="text-2xl font-bold">Locations for {partnerName}</CardTitle>
            <p className="text-muted-foreground mt-1">Manage locations for this partner</p>
          </div>
        </div>
        <Button onClick={onAddLocation} className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Location
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Location Code</TableHead>
                <TableHead>GSTIN</TableHead>
                <TableHead>Billing Address</TableHead>
                <TableHead>Shipping Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLocations.map((location) => (
                <TableRow key={location.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <Badge variant="outline">{location.locationCode}</Badge>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{location.gstin}</TableCell>
                  <TableCell className="max-w-xs truncate" title={location.billingAddress}>
                    {location.billingAddress}
                  </TableCell>
                  <TableCell className="max-w-xs truncate" title={location.shippingAddress}>
                    {location.shippingAddress}
                  </TableCell>
                  <TableCell>
                    <Badge variant={location.status === "active" ? "default" : "secondary"}>
                      {location.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};