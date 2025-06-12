
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

interface OMSDropdownProps {
  label: string;
  placeholder: string;
  options: string[];
}

export const OMSDropdown = ({ label, placeholder, options }: OMSDropdownProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasError(Math.random() > 0.8); // 20% chance of error
    }, Math.random() * 2000 + 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, options]);

  const getStatusIcon = () => {
    if (isLoading) return <Loader2 className="h-4 w-4 animate-spin" />;
    if (hasError) return <AlertCircle className="h-4 w-4 text-destructive" />;
    return <CheckCircle className="h-4 w-4 text-green-600" />;
  };

  const getStatusText = () => {
    if (isLoading) return "Pulling latest from OMS...";
    if (hasError) return "Failed to sync with OMS";
    return `${options.length} options loaded`;
  };

  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        {label}
        {getStatusIcon()}
        <span className="text-xs text-muted-foreground">{getStatusText()}</span>
      </Label>
      
      {isLoading ? (
        <Select disabled>
          <SelectTrigger className="rounded-lg">
            <SelectValue placeholder="Loading..." />
          </SelectTrigger>
        </Select>
      ) : hasError ? (
        <Select disabled>
          <SelectTrigger className="rounded-lg border-destructive">
            <SelectValue placeholder="Failed to load options" />
          </SelectTrigger>
        </Select>
      ) : (
        <Select>
          <SelectTrigger className="rounded-lg">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <div className="p-2">
              <Input
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="mb-2"
              />
            </div>
            {filteredOptions.length === 0 ? (
              <div className="p-2 text-sm text-muted-foreground text-center">
                No options found
              </div>
            ) : (
              filteredOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};
