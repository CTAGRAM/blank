"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

/**
 * BuildWithSahayaak Section
 */
const BuildWithSahayaak: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F9F7F0] py-[120px]">
      {/* Background Decorative Glow */}
      <div 
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(198, 93, 60, 0.15) 0%, rgba(249, 247, 240, 0) 70%)',
        }}
      />

      <div className="container relative z-10 mx-auto px-[5%]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5">
            <h2 className="mb-6 text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#333333]">
              Build with Sahayaak
            </h2>
            <p className="mb-8 text-[16px] leading-[1.6] text-[#666666]">
              Empower your applications with India's most comprehensive government service intelligence platform. Use our APIs to build local, helpful, and accurate citizen tools.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="https://dashboard.sahayaak.ai/signin"
                className="inline-flex h-[44px] items-center justify-center rounded-[4px] bg-[#C65D3C] px-6 text-[14px] font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              >
                API ACCESS
              </a>
              <a 
                href="/docs" 
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#333333] transition-colors hover:text-[#C65D3C]"
              >
                Developer Portal 
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="relative flex items-center justify-center lg:col-span-7">
            {/* Circular concentric background rings */}
            <div className="relative flex aspect-square w-full max-w-[600px] items-center justify-center">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-[#E5E1D3]/50" />
              {/* Middle Ring */}
              <div className="absolute inset-[15%] rounded-full border border-[#E5E1D3]/60" />
              {/* Inner Ring */}
              <div className="absolute inset-[30%] rounded-full border border-[#E5E1D3]" />

              {/* Floating Icons/Indicators */}
              <div className="absolute top-[10%] right-[35%] flex h-10 w-10 items-center justify-center rounded-full bg-[#C65D3C] text-[12px] font-bold text-white shadow-lg">
                स
              </div>
              <div className="absolute bottom-[10%] left-[45%] flex h-8 w-8 items-center justify-center rounded-full bg-[#4A4E3A] shadow-md">
                <div className="h-4 w-4 rounded-full border-2 border-white/40" />
              </div>

              {/* Central Code Card */}
              <div className="relative z-20 w-[85%] rounded-[12px] bg-white p-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden border border-[#E5E1D3]">
                {/* Editor Header */}
                <div className="flex items-center justify-between border-b border-[#E5E1D3] bg-[#F9F7F0] px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="text-[10px] font-medium text-[#666666]">TS</div>
                    <div className="text-[11px] font-medium text-[#333333]">sahayaak-init.ts</div>
                    <div className="h-3 w-3 text-[#666666] opacity-50">×</div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-[#E5E1D3]" />
                    <div className="h-2 w-2 rounded-full bg-[#E5E1D3]" />
                  </div>
                </div>

                {/* Code Snippet Content */}
                <div className="p-4 sm:p-6 font-mono text-[13px] leading-[1.5]">
                  <div className="mb-2">
                    <span className="text-[#8959A8]">import</span> {"{"} <span className="text-[#718C00]">SahayaakClient</span> {"}"} <span className="text-[#8959A8]">from</span> <span className="text-[#718C00]">&quot;@sahayaak/sdk&quot;</span>;
                  </div>
                  <div className="mb-4">
                    <span className="text-[#8959A8]">const</span> <span className="text-[#4271AE]">sahayaak</span> = <span className="text-[#8959A8]">new</span> <span className="text-[#4271AE]">SahayaakClient</span>({"{"}
                    <div className="pl-4">
                      <span className="text-[#3E999F]">apiKey</span>: <span className="text-[#718C00]">&quot;SAHAYAAK_PROD_KEY&quot;</span>
                    </div>
                    {"}"});
                  </div>
                  <div className="mb-4">
                    <span className="text-[#8959A8]">const</span> <span className="text-[#4271AE]">schemes</span> = <span className="text-[#8959A8]">await</span> <span className="text-[#4271AE]">sahayaak</span>.<span className="text-[#4271AE]">services</span>.<span className="text-[#4271AE]">find</span>({"{"}
                    <div className="pl-4">
                      <span className="text-[#3E999F]">query</span>: <span className="text-[#718C00]">&quot;educational grants for farmers kids&quot;</span>,
                      <br />
                      <span className="text-[#3E999F]">location</span>: <span className="text-[#718C00]">&quot;Uttar Pradesh&quot;</span>,
                      <br />
                      <span className="text-[#3E999F]">language</span>: <span className="text-[#718C00]">&quot;hi-IN&quot;</span>
                    </div>
                    {"}"});
                  </div>
                  <div>
                    <span className="text-[#4271AE]">renderResults</span>(<span className="text-[#4271AE]">schemes</span>);
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BuildWithSahayaak;
