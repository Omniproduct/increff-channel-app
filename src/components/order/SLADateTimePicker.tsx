
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface SLADateTimePickerProps {
  onFocus?: () => void;
  onBlur?: () => void;
}

export const SLADateTimePicker = ({ onFocus, onBlur }: SLADateTimePickerProps) => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("12:00");
  const [relativeValue, setRelativeValue] = useState("");
  const [relativeUnit, setRelativeUnit] = useState("hours");

  return (
    <div className="space-y-2">
      <Label>SLA</Label>
      <Tabs defaultValue="relative" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="relative">Relative</TabsTrigger>
          <TabsTrigger value="absolute">Absolute</TabsTrigger>
        </TabsList>
        
        <TabsContent value="relative" className="space-y-2 mt-2">
          <div className="flex gap-2">
            <Input
              placeholder="Enter number"
              type="number"
              value={relativeValue}
              onChange={(e) => setRelativeValue(e.target.value)}
              className="rounded-lg bg-white border-blue-200 focus:border-primary"
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <Select value={relativeUnit} onValueChange={setRelativeUnit}>
              <SelectTrigger className="w-32 rounded-lg bg-white border-blue-200 focus:border-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="minutes">Minutes</SelectItem>
                <SelectItem value="hours">Hours</SelectItem>
                <SelectItem value="days">Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-xs text-muted-foreground">
            From current time
          </p>
        </TabsContent>
        
        <TabsContent value="absolute" className="space-y-2 mt-2">
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "flex-1 justify-start text-left font-normal rounded-lg bg-white border-blue-200 focus:border-primary",
                    !date && "text-muted-foreground"
                  )}
                  onFocus={onFocus}
                  onBlur={onBlur}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-32 rounded-lg bg-white border-blue-200 focus:border-primary"
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
