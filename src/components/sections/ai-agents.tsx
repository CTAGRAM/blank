import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const AiAgents = () => {
  return (
    <section className="relative w-full py-[120px] px-8 bg-[#FBF8F1] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <p className="text-[14px] font-semibold text-[#666666] tracking-[0.05em] uppercase mb-4">
            Sarvam Samvaad
          </p>
          <h2 className="text-[48px] font-bold text-[#2D2D2D] leading-[1.1] max-w-[800px] mx-auto tracking-[-0.02em]">
            Effortlessly build, customize, and launch AI Agents tailored for India
          </h2>
        </div>

        {/* Feature Interactive Area */}
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[12px] p-8 lg:p-12 border border-[#E5E1D8] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] relative overflow-hidden">
          {/* Left Side: Accordion/Tabs */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {/* Tab 1: Active */}
            <div className="border-b border-[#E5E1D8] pb-8">
              <h3 className="text-[24px] font-semibold text-[#2D2D2D] mb-4">
                One Agent, 11 Languages
              </h3>
              <p className="text-[18px] text-[#666666] leading-[1.6] mb-4 max-w-[400px]">
                Effortlessly deploy AI Agents that understand and respond naturally in 11 Indian languages
              </p>
              <a 
                href="/products/conversational-agents" 
                className="inline-flex items-center text-[14px] font-semibold text-[#D15A3D] uppercase tracking-wider group"
              >
                Learn More 
                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Tab 2: Inactive */}
            <div className="border-b border-[#E5E1D8] py-8 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-[24px] font-semibold text-[#2D2D2D]">
                Available across Channels
              </h3>
            </div>

            {/* Tab 3: Inactive */}
            <div className="py-8 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
              <h3 className="text-[24px] font-semibold text-[#2D2D2D]">
                Insights from every interaction
              </h3>
            </div>
          </div>

          {/* Right Side: Mockup Image */}
          <div className="flex-1 relative flex items-center justify-center min-h-[400px]">
            <div className="relative w-full aspect-square max-w-[500px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/6882470207d4b36d59e6d860_BANNER_20IMAGE_2001-3.png"
                alt="Sarvam Samvaad Dashboard Mockup"
                fill
                className="object-contain"
                priority
              />
              {/* Decorative shadow under the image to match the "floating" feel from screenshots */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/5 blur-xl rounded-full" />
            </div>
          </div>
          
          {/* Perforated Edge Detail (Matching high-level design) */}
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-transparent via-[#E5E1D8] to-transparent opacity-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default AiAgents;