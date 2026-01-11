"use client";

import React from "react";
import { ArrowRight, GraduationCap, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function FlowCards() {
  const flows = [
    {
      id: "scholarship",
      title: "Scholarship",
      description: "Find scholarships tailored to you",
      icon: GraduationCap,
      type: "primary",
      href: "/dashboard/scholarship",
    },
    {
      id: "coming-soon",
      title: "Coming Soon",
      description: "More AI flows on the way",
      icon: Sparkles,
      type: "secondary",
      href: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {flows.map((flow) => {
        const isPrimary = flow.type === "primary";
        
        return (
            <div
              key={flow.id}
              className={cn(
                "group relative overflow-hidden rounded-[4px] border border-border bg-card p-6 transition-all duration-300",
                isPrimary 
                  ? "cursor-pointer hover:border-primary hover:shadow-sm" 
                  : "opacity-60 grayscale cursor-not-allowed bg-muted/30"
              )}
            >
              <div className="flex flex-col h-full space-y-4">
                <div className={cn(
                    "w-10 h-10 rounded-[4px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105",
                    isPrimary ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                )}>
                  <flow.icon className="size-5" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-charcoal flex items-center justify-between tracking-tight">
                    {flow.title}
                    {isPrimary && (
                      <ArrowRight className="size-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {flow.description}
                  </p>
                </div>

                {isPrimary ? (
                    <div className="mt-auto pt-4 border-t border-border/50 text-[11px] font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                        <Star className="size-3 fill-primary text-primary" />
                        <span>Available Now</span>
                    </div>
                ) : (
                    <div className="mt-auto pt-4 border-t border-border/50 text-[11px] font-medium text-muted-foreground uppercase tracking-wider italic">
                        Coming Soon
                    </div>
                )}
              </div>
            </div>
        );
      })}
    </div>
  );
}
