"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "languages",
    title: "Support in 22+ Languages",
    description: "Converse with our AI in your native language to understand complex government schemes and requirements.",
    link: "Explore Languages",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/66ae5c4bb66e3bd1bc39f3e5_Placeholder_20Lightbox-2.avif",
  },
  {
    id: "discovery",
    title: "Personalized Service Discovery",
    description: "Input your profile details once and let Sahayaak find the best-matched welfare schemes for you and your family.",
    link: "Find Services",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/66ae5c4bb66e3bd1bc39f3e5_Placeholder_20Lightbox-2.avif",
  },
  {
    id: "guidance",
    title: "Application Guidance",
    description: "Get step-by-step assistance on document requirements, eligibility criteria, and how to apply online or offline.",
    link: "View Guide",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/66ae5c4bb66e3bd1bc39f3e5_Placeholder_20Lightbox-2.avif",
  },
];

const SahayaakSamvaad = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <section className="bg-[#F9F7F0] py-[120px] px-[5%] w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Container Card */}
        <div className="bg-[#F4F1E6] rounded-[16px] border border-[#E5E1D3] shadow-sm p-10 md:p-16 relative">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-[#C65D3C] block mb-4">
              Sahayaak Samvaad
            </span>
            <h2 className="text-[32px] md:text-[48px] font-semibold text-[#333333] leading-[1.2] max-w-[800px] mx-auto">
              Your intelligent companion for all government interactions
            </h2>
          </div>

          {/* Interactive Content Shell */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            
            {/* Left: Tabbed Interface */}
            <div className="w-full lg:w-2/5 space-y-6">
              {TABS.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "cursor-pointer group flex flex-col pt-6 pb-8 transition-all duration-300 border-b border-[#E5E1D3]",
                    activeTab === tab.id ? "opacity-100" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-[#333333] mb-4">
                    {tab.title}
                  </h3>
                  
                  {activeTab === tab.id && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                      <p className="text-[16px] text-[#666666] leading-[1.6] mb-6">
                        {tab.description}
                      </p>
                      {tab.link && (
                        <a 
                          href="#" 
                          className="inline-flex items-center text-[14px] font-semibold text-[#C65D3C] uppercase tracking-wide group"
                        >
                          {tab.link}
                          <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Dynamic Visual */}
            <div className="w-full lg:w-3/5 flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-white/50 border border-[#E5E1D3] soft-shadow">
                {/* Simulated Dashboard Visual */}
                <div className="absolute inset-0 p-2 md:p-4">
                  <div className="w-full h-full bg-white rounded-[8px] overflow-hidden shadow-inner relative flex items-center justify-center">
                    {/* Background Image Placeholder from Assets */}
                    <div className="absolute inset-0 opacity-20 bg-center bg-cover grayscale" 
                         style={{ backgroundImage: `url(${TABS.find(t => t.id === activeTab)?.image})` }} 
                    />
                    
                    {/* Dashboard Interface Overlay (Static Mockup Part) */}
                    <div className="relative z-10 w-full max-w-[90%] space-y-4">
                      {activeTab === 'languages' && (
                        <div className="bg-white p-6 rounded-lg shadow-xl border border-[#D1CDBE] animate-in zoom-in-95 duration-700">
                           <div className="flex justify-between items-center pb-4 border-b border-[#F4F1E6] mb-4">
                              <div className="h-4 w-24 bg-[#F4F1E6] rounded" />
                              <div className="h-6 w-20 bg-[#C65D3C]/10 rounded-full" />
                           </div>
                           <div className="space-y-3">
                              <div className="h-8 w-3/4 bg-[#333333] rounded-md opacity-10" />
                              <div className="h-24 w-full bg-[#F4F1E6]/50 rounded-lg flex items-center justify-center">
                                 <div className="text-[14px] font-medium text-[#C65D3C]">Translating to Hindi (हिन्दी)...</div>
                              </div>
                           </div>
                        </div>
                      )}
                      
                      {activeTab === 'discovery' && (
                        <div className="bg-white p-6 rounded-lg shadow-xl border border-[#D1CDBE] animate-in zoom-in-95 duration-700">
                           <div className="grid grid-cols-2 gap-4">
                              <div className="p-4 border border-[#E5E1D3] rounded bg-[#F9F7F0] flex flex-col items-center">
                                 <div className="h-8 w-8 rounded-full bg-[#25D366]/20 mb-2" />
                                 <div className="text-[10px] font-bold text-[#333333]">PM-KISAN</div>
                              </div>
                              <div className="p-4 border border-[#E5E1D3] rounded bg-[#F9F7F0] flex flex-col items-center">
                                 <div className="h-8 w-8 rounded-full bg-[#4A4E3A]/20 mb-2" />
                                 <div className="text-[10px] font-bold text-[#333333]">Ayushman Bharat</div>
                              </div>
                           </div>
                        </div>
                      )}

                      {activeTab === 'guidance' && (
                        <div className="bg-white p-6 rounded-lg shadow-xl border border-[#D1CDBE] animate-in zoom-in-95 duration-700">
                           <div className="flex gap-4 mb-4">
                              <div className="h-16 flex-1 bg-[#C65D3C] opacity-20 rounded p-2">
                                <div className="h-2 w-full bg-[#C65D3C]/40 rounded mb-1" />
                                <div className="h-2 w-2/3 bg-[#C65D3C]/40 rounded" />
                              </div>
                              <div className="h-16 flex-1 bg-[#4A4E3A] opacity-20 rounded p-2">
                                <div className="h-2 w-full bg-[#4A4E3A]/40 rounded mb-1" />
                                <div className="h-2 w-2/3 bg-[#4A4E3A]/40 rounded" />
                              </div>
                           </div>
                           <div className="h-20 w-full bg-[#f4f1e6] rounded relative overflow-hidden flex items-center justify-center">
                              <div className="text-[12px] font-semibold text-[#333333]">Step 1: Aadhaar Verification</div>
                              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#C65D3C]/10 to-transparent" />
                           </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Notebook edge detail - right side */}
          <div className="absolute right-0 top-10 bottom-10 w-[1px] opacity-20 pointer-events-none">
             <div className="h-full w-full" style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 4px, #333 4px, #333 8px)" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SahayaakSamvaad;
