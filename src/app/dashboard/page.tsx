"use client";

import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { FlowCards } from "@/components/dashboard/flow-cards";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">
                Workspace
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <main className="flex-1 overflow-auto p-6 md:p-10">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-charcoal">
              Namaste, John
            </h1>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              What can Sahayaak help you discover today? Choose a flow below or resume a recent conversation.
            </p>
          </div>

          <Separator className="my-8 opacity-50" />

          {/* Flows Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-charcoal">Available Flows</h2>
              <span className="text-sm text-muted-foreground italic">2 available</span>
            </div>
            <FlowCards />
          </div>

          {/* Secondary info / helper */}
          <div className="mt-12 p-8 rounded-2xl bg-muted/20 border border-dashed border-border flex flex-col items-center text-center space-y-4">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z" fill="currentColor" />
                </svg>
            </div>
            <div className="space-y-1">
                <h3 className="font-semibold text-charcoal">Need help with something else?</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                    Sahayaak is constantly learning. You can also start a general AI Chat from the sidebar to ask any question.
                </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
