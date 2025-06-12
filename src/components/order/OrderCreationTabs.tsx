
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { B2COrderForm } from "./B2COrderForm";
import { B2BOrderForm } from "./B2BOrderForm";

export const OrderCreationTabs = () => {
  const [activeTab, setActiveTab] = useState("b2c");

  return (
    <div className="max-w-7xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="b2c">B2C Order</TabsTrigger>
          <TabsTrigger value="b2b">B2B Order</TabsTrigger>
        </TabsList>
        
        <TabsContent value="b2c" className="space-y-6">
          <B2COrderForm />
        </TabsContent>
        
        <TabsContent value="b2b" className="space-y-6">
          <B2BOrderForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};
