
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { AlertCircle, ChevronDown, ChevronRight, X } from "lucide-react";

interface UploadErrorCardProps {
  onDismiss: () => void;
}

export const UploadErrorCard = ({ onDismiss }: UploadErrorCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const resolutionTips = [
    "Check if channelSkuCode exists in OMS system",
    "Verify that all required fields are properly filled",
    "Ensure date formats match DD/MM/YYYY pattern"
  ];

  return (
    <Alert className="border-orange-200 bg-orange-50">
      <AlertCircle className="h-4 w-4 text-orange-600" />
      <AlertDescription>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-orange-800">
              We found some issues with your upload
            </p>
            <p className="text-sm text-orange-700 mt-1">
              Don't worry! Here are some common solutions that might help.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDismiss}
            className="text-orange-600 hover:text-orange-800"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-3">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="p-0 h-auto text-orange-700 hover:text-orange-900">
              <div className="flex items-center gap-1">
                {isOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">Show resolution tips</span>
              </div>
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="mt-2">
            <div className="space-y-2">
              {resolutionTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-orange-700">
                  <span className="flex-shrink-0 w-5 h-5 bg-orange-200 rounded-full flex items-center justify-center text-xs font-medium text-orange-800">
                    {index + 1}
                  </span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </AlertDescription>
    </Alert>
  );
};
