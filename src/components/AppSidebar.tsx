import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Users, 
  ArrowDown, 
  ArrowUp
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
  { title: "Inwards", url: "/inwards", icon: ArrowDown },
  { title: "Outwards", url: "/outwards", icon: ArrowUp },
  { title: "Masters", url: "/masters", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border bg-background">
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="w-full"
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          isActive 
                            ? "bg-primary text-primary-foreground shadow-md" 
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        } ${isCollapsed ? "justify-center" : ""}`
                      }
                    >
                      <item.icon className={`${isCollapsed ? "h-5 w-5" : "h-4 w-4"} shrink-0`} />
                      {!isCollapsed && <span className="truncate">{item.title}</span>}
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