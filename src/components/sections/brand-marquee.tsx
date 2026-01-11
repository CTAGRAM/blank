"use client";

import React from 'react';
import Image from 'next/image';

const BrandMarquee = () => {
  // Brand assets from the provided list, trying to match the order in the screenshot
  const brandLogos = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afbda87046661f16d00_67ee56777e6e941bfeed836a_-16.svg",
      alt: "Government of India Logo",
      width: 120
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afbf7f5b5e5ef7dfcdc_67ee56777e6e941bfeed83a2_-20.svg",
      alt: "NITI Aayog Logo",
      width: 80
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afbb518cdbd3fd01697_67ee56777e6e941bfeed83a3_-18.svg",
      alt: "Neowise Logo",
      width: 110
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afcfe915c32b2a7e4f0_67ee56777e6e941bfeed83a5_-14.svg",
      alt: "Godrej Logo",
      width: 80
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afa3f7d82abb02ae860_67ee56777e6e941bfeed83a6_-21.svg",
      alt: "Infosys Logo",
      width: 100
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afbffc43c452562a8d3_67ee56777e6e941bfeed83a9_-19.svg",
      alt: "Aadhaar Logo",
      width: 60
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afc5a811dab939d22ce_67ee56777e6e941bfeed837f_-13.svg",
      alt: "Urban Company Logo",
      width: 120
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afc8a2e5f5aa9471395_67ee56777e6e941bfeed83bb_-15.svg",
      alt: "Tata Technologies Logo",
      width: 120
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afb7836504654fd819f_67ee56777e6e941bfeed83bc_-17.svg",
      alt: "Tata Capital Logo",
      width: 120
    }
  ];

  // Double the list for seamless loop
  const duplicatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="relative w-full overflow-hidden py-16">
      {/* Background Gradient - matches 'soft orange gradient background' from instructions */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, #F9F7F0 0%, #F5DCC8 50%, #F9F7F0 100%)',
          opacity: 0.4
        }}
      />

      <div className="relative z-10">
        {/* Marquee Container */}
        <div className="flex overflow-hidden group select-none">
          <div className="flex animate-infinite-scroll whitespace-nowrap min-w-full items-center gap-16 md:gap-32">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ width: `${logo.width}px`, height: 'auto' }}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicated track for smooth infinite scroll */}
          <div className="flex animate-infinite-scroll whitespace-nowrap min-w-full items-center gap-16 md:gap-32" aria-hidden="true">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`clone-${index}`} 
                className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ width: `${logo.width}px`, height: 'auto' }}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandMarquee;