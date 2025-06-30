
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ItemCrossdockingForm } from "./ItemCrossdockingForm";
import { BoxCrossdockingForm } from "./BoxCrossdockingForm";
import { Package, Box } from "lucide-react";

export const CrossdockingTabs = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Crossdocking Operations</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Create and manage crossdocking plans for efficient item and box transfers
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <Tabs defaultValue="item-crossdocking" className="w-full">
          <div className="border-b bg-slate-50/50 px-6 py-4">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger 
                value="item-crossdocking" 
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex items-center gap-2"
              >
                <Package className="h-4 w-4" />
                Item Crossdocking
              </TabsTrigger>
              <TabsTrigger 
                value="box-crossdocking" 
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex items-center gap-2"
              >
                <Box className="h-4 w-4" />
                Box Crossdocking
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="item-crossdocking" className="p-6 mt-0">
            <ItemCrossdockingForm />
          </TabsContent>
          
          <TabsContent value="box-crossdocking" className="p-6 mt-0">
            <BoxCrossdockingForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
