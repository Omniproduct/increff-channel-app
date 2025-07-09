import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, Plus, Building2 } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  code: string;
  excessGrnAllowed: boolean;
  address: string;
  locationCount: number;
}

interface PartnersListProps {
  onViewLocations: (partnerId: string, partnerName: string, partnerCode?: string) => void;
  onCreatePartner: () => void;
}

// Mock data - replace with actual data fetching
const mockPartners: Partner[] = [
  {
    id: "1",
    name: "ABC Suppliers",
    code: "PARTNER001",
    excessGrnAllowed: true,
    address: "123 Business Street, Mumbai, Maharashtra 400001",
    locationCount: 3
  },
  {
    id: "2", 
    name: "XYZ Logistics",
    code: "PARTNER002",
    excessGrnAllowed: false,
    address: "456 Industrial Area, Delhi, Delhi 110001",
    locationCount: 1
  },
  {
    id: "3",
    name: "Global Trading Co",
    code: "PARTNER003", 
    excessGrnAllowed: true,
    address: "789 Export Zone, Bangalore, Karnataka 560001",
    locationCount: 5
  }
];

export const PartnersList = ({ onViewLocations, onCreatePartner }: PartnersListProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl font-bold">Partners</CardTitle>
          <p className="text-muted-foreground mt-1">Manage your business partners and their locations</p>
        </div>
        <Button onClick={onCreatePartner} className="gap-2">
          <Plus className="h-4 w-4" />
          Create New Partner
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Partner Name</TableHead>
                <TableHead>Partner Code</TableHead>
                <TableHead>Excess GRN</TableHead>
                <TableHead>Primary Address</TableHead>
                <TableHead>Locations</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPartners.map((partner) => (
                <TableRow key={partner.id}>
                  <TableCell className="font-medium">{partner.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{partner.code}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={partner.excessGrnAllowed ? "default" : "secondary"}>
                      {partner.excessGrnAllowed ? "Allowed" : "Not Allowed"}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate" title={partner.address}>
                    {partner.address}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span>{partner.locationCount}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onViewLocations(partner.id, partner.name, partner.code)}
                      className="gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      View Locations
                    </Button>
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