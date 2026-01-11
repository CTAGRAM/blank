"use client";

import * as React from "react";
import { 
  MessageSquare, 
  GraduationCap, 
  FileText, 
  History, 
  Star,
  Search,
  Plus
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
} from "@/components/ui/sidebar";

const data = {
  flows: [
    {
      title: "AI Chat",
      url: "#",
      icon: MessageSquare,
      isActive: true,
    },
    {
      title: "Saved Scholarships",
      url: "#",
      icon: GraduationCap,
    },
    {
      title: "Saved Documents",
      url: "#",
      icon: FileText,
    },
  ],
  history: [
    {
      title: "Applying for PM Scholarship",
      url: "#",
    },
    {
      title: "Documents for Aadhaar Update",
      url: "#",
    },
    {
      title: "Farmer Welfare Schemes",
      url: "#",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-[4px] bg-primary text-primary-foreground">
                    <Star className="size-4 fill-current" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-bold text-charcoal tracking-tight">Sahayaak</span>
                    <span className="truncate text-[10px] uppercase tracking-wider text-muted-foreground font-medium">AI Workspace</span>
                  </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Flows</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.flows.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon className="text-terracotta" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel className="flex items-center justify-between w-full">
            <span>History</span>
            <SidebarMenuAction showOnHover>
                <Plus className="size-4" />
            </SidebarMenuAction>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.history.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <History className="size-4 text-muted-foreground" />
                      <span className="truncate">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {data.history.length === 0 && (
                <div className="px-2 py-4 text-xs text-muted-foreground italic text-center">
                    Start a new flow to begin
                </div>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-sidebar-accent">
                <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-bone border border-border">
                    <span className="text-xs font-bold text-charcoal">JD</span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium text-charcoal">John Doe</span>
                  <span className="truncate text-xs text-muted-foreground">john@example.com</span>
                </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
