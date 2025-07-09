import { Check, FileText, MapPin, Settings, Upload, Tags } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrderProgressBarProps {
  currentStep: number;
}

const steps = [
  { id: 1, title: "Order Information", icon: FileText },
  { id: 2, title: "Channel & Location", icon: MapPin },
  { id: 3, title: "Additional Configuration", icon: Settings },
  { id: 4, title: "Upload Order Items", icon: Upload },
  { id: 5, title: "Add Custom Attributes", icon: Tags },
];

export const OrderProgressBar = ({ currentStep }: OrderProgressBarProps) => {
  const progress = ((Math.min(currentStep, steps.length) - 1) / (steps.length - 1)) * 100;
  
  return (
    <div className="w-full px-4 py-6">
      {/* Progress percentage */}
      <div className="flex justify-between text-sm mb-4">
        <span>Progress</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      
      <div className="flex items-center justify-between relative">
        {/* Progress line background */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-muted mx-6"></div>
        
        {/* Active progress line */}
        <div 
          className="absolute top-6 left-0 h-0.5 bg-primary mx-6 transition-all duration-500 ease-out"
          style={{ 
            width: `calc((${Math.min(currentStep - 1, steps.length - 1)} / ${steps.length - 1}) * calc(100% - 3rem))` 
          }}
        ></div>

        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const Icon = step.icon;

          return (
            <div key={step.id} className="flex flex-col items-center relative z-10">
              {/* Step circle */}
              <div
                className={cn(
                  "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110",
                  isCompleted
                    ? "bg-primary border-primary text-primary-foreground animate-scale-in"
                    : isCurrent
                    ? "bg-background border-primary text-primary shadow-lg ring-4 ring-primary/20 animate-[pulse_5s_ease-in-out_infinite]"
                    : "bg-background border-muted-foreground/30 text-muted-foreground hover:border-muted-foreground/50"
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Icon className={cn("w-5 h-5", isCurrent && "animate-[pulse_5s_ease-in-out_infinite]")} />
                )}
              </div>
              
              {/* Step title */}
              <div
                className={cn(
                  "mt-3 text-sm font-medium text-center max-w-24 transition-all duration-300",
                  isCompleted || isCurrent
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {step.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};