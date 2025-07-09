
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ItemCrossdockingForm } from "./ItemCrossdockingForm";
import { BoxCrossdockingForm } from "./BoxCrossdockingForm";
import { Package, Box } from "lucide-react";

export const CrossdockingTabs = () => {
  return (
    <Tabs defaultValue="item-crossdocking" className="w-full">
      <div className="border-b bg-gradient-to-r from-blue-50 to-orange-50 px-8 py-6">
        <TabsList className="grid w-full max-w-lg grid-cols-2 h-12">
          <TabsTrigger 
            value="item-crossdocking" 
            className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md flex items-center gap-2 text-sm font-medium"
          >
            <Package className="h-4 w-4" />
            Item Crossdocking
          </TabsTrigger>
          <TabsTrigger 
            value="box-crossdocking" 
            className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md flex items-center gap-2 text-sm font-medium"
          >
            <Box className="h-4 w-4" />
            Box Crossdocking
          </TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="item-crossdocking" className="p-8 mt-0">
        <ItemCrossdockingForm />
      </TabsContent>
      
      <TabsContent value="box-crossdocking" className="p-8 mt-0">
        <BoxCrossdockingForm />
      </TabsContent>
    </Tabs>
  );
};
