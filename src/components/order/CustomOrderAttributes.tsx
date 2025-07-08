
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";

const orderAttributes = [
  { name: "comboOrder", label: "Combo Order", placeholder: "e.g., true/false" },
  { name: "giftOrder", label: "Gift Order", placeholder: "e.g., true/false" },
  { name: "priorityOrder", label: "Priority Order", placeholder: "e.g., high, medium, low" },
  { name: "expressDelivery", label: "Express Delivery", placeholder: "e.g., true/false" },
  { name: "customerType", label: "Customer Type", placeholder: "e.g., premium, standard" },
  { name: "salesChannel", label: "Sales Channel", placeholder: "e.g., online, retail" },
  { name: "promotionCode", label: "Promotion Code", placeholder: "e.g., SAVE20" },
  { name: "customerSegment", label: "Customer Segment", placeholder: "e.g., VIP, regular" }
];

interface CustomOrderAttributesProps {
  onFocus?: () => void;
  onBlur?: () => void;
}

export const CustomOrderAttributes = ({ onFocus, onBlur }: CustomOrderAttributesProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="transition-all duration-300 hover:shadow-md border-blue-200">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-blue-50">
            <CardTitle className="flex items-center justify-between">
              <span>Custom Order Attributes</span>
              {isOpen ? (
                <ChevronDown className="h-4 w-4 text-primary" />
              ) : (
                <ChevronRight className="h-4 w-4 text-primary" />
              )}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="space-y-4">
            {orderAttributes.map((attr) => (
              <div key={attr.name} className="space-y-2">
                <Input
                  id={attr.name}
                  placeholder={attr.placeholder}
                  className="w-full rounded-lg bg-white border-blue-200 focus:border-primary"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
            ))}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
