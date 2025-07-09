import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Upload, 
  Users, 
  ArrowRightLeft, 
  ArrowDown, 
  ArrowUp, 
  MapIcon 
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/main", icon: Home },
  { title: "Order Upload", url: "/order-upload", icon: Upload },
  { title: "Journey", url: "/journey", icon: MapIcon },
  { title: "Masters", url: "/masters", icon: Users },
  { title: "Crossdocking", url: "/crossdocking", icon: ArrowRightLeft },
  { title: "Inwards", url: "/inwards", icon: ArrowDown },
  { title: "Outwards", url: "/outwards", icon: ArrowUp },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-r bg-background">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                          isActive 
                            ? "bg-primary text-primary-foreground" 
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {state === "expanded" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}