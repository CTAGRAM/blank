"use client";

import React from 'react';
import Image from 'next/image';

const LatestResearch = () => {
    const researchData = [
      {
        title: "Sahayaak Bharat",
        description: "A centralized AI agent trained on thousands of central government schemes to provide accurate eligibility and application advice.",
        footerTitle: "SAHAYAAK - BHARAT",
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/68810b5a636e154e9c35d576_image_20492-8.png",
      },
      {
        title: "Sahayaak Rajya",
        description: "Specialized regional assistants that understand state-specific nuances, languages, and local welfare programs for all 28 states.",
        footerTitle: "SAHAYAAK -\nRAJYA",
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/68810b5a636e154e9c35d57f_SARVAM_20TRANSLATE-1-7.png",
      },
      {
        title: "Sahayaak Sewa",
        description: "AI-powered documentation assistant that helps you prepare, verify, and submit applications for essential services at your doorstep.",
        footerTitle: "SAHAYAAK - SEWA",
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/68810b5a636e154e9c35d57b_SARVAM_20TRANSLATE-6.png",
      }
    ];

    return (
      <section className="py-[120px] bg-[#F9F7F0]">
        <div className="container px-[5%] max-w-[1280px] mx-auto">
          <div className="mb-[48px]">
            <h2 className="text-[48px] font-semibold leading-[1.2] text-[#333333] tracking-[-0.02em]">
              Our Core Services
            </h2>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {researchData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#F4F1E6] rounded-[16px] border border-[#E5E1D3] overflow-hidden flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] group"
            >
              {/* Card Header Content */}
              <div className="p-[40px] flex-grow">
                <div className="flex justify-between items-start mb-[40px]">
                  <h3 className="text-[24px] font-semibold text-[#333333] leading-[1.3]">
                    {item.title}
                  </h3>
                  <div className="w-[32px] h-[32px] bg-[#E5E1D3]/50 rounded-full flex items-center justify-center">
                    <span className="text-[12px] font-bold text-[#666666]">अ</span>
                  </div>
                </div>
                <p className="text-[16px] leading-[1.6] text-[#666666] font-body">
                  {item.description}
                </p>
              </div>

              {/* Card Graphical Part */}
              <div className="relative h-[200px] w-full mt-auto">
                {/* Background Pattern/Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                   <div className="w-3/4 h-3/4 relative">
                      <Image 
                        src={item.icon} 
                        alt="" 
                        layout="fill" 
                        objectFit="contain"
                      />
                   </div>
                </div>

                {/* Orange Gradient Footer */}
                <div className="absolute bottom-[20px] left-[20px] right-[20px] h-[100px] rounded-[12px] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-[#E68A5C] via-[#D66B44] to-[#C65D3C]"
                    style={{
                      background: 'linear-gradient(135deg, #FFB788 0%, #C65D3C 100%)',
                      filter: 'drop-shadow(0px 8px 16px rgba(198, 93, 60, 0.2))'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <span className="text-white text-[20px] font-bold tracking-wider text-center whitespace-pre-line leading-tight">
                      {item.footerTitle}
                    </span>
                  </div>
                  
                  {/* Subtle grain overlay effect */}
                  <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/p6-mini.png')]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </section>
  );
};

export default LatestResearch;