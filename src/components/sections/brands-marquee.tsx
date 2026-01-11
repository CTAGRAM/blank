import React from 'react';
import Image from 'next/image';

const BRANDS = [
  {
    name: "Tata Capital",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afc5a811dab939d22ce_67ee56777e6e941bfeed837f_-13.svg",
  },
  {
    name: "Government of India",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afcfe915c32b2a7e4f0_67ee56777e6e941bfeed83a5_-14.svg",
  },
  {
    name: "NITI Aayog",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afc8a2e5f5aa9471395_67ee56777e6e941bfeed83bb_-15.svg",
  },
  {
    name: "Neowise",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afbda87046661f16d00_67ee56777e6e941bfeed836a_-16.svg",
  },
  {
    name: "Godrej",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afb7836504654fd819f_67ee56777e6e941bfeed83bc_-17.svg",
  },
  {
    name: "Infosys",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afbb518cdbd3fd01697_67ee56777e6e941bfeed83a3_-18.svg",
  },
  {
    name: "Aadhaar",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afbffc43c452562a8d3_67ee56777e6e941bfeed83a9_-19.svg",
  },
  {
    name: "Urban Company",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afbf7f5b5e5ef7dfcdc_67ee56777e6e941bfeed83a2_-20.svg",
  },
  {
    name: "Tata Technologies",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/67ee6afa3f7d82abb02ae860_67ee56777e6e941bfeed83a6_-21.svg",
  },
];

/**
 * BrandsMarquee Component
 * A pixel-perfect clone of the scrolling logos section with a soft orange gradient background.
 */
export default function BrandsMarquee() {
  return (
    <section className="relative w-full overflow-hidden py-[120px]">
      {/* Mesh Gradient Background */}
      <div 
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, #FF9D66 0%, rgba(251, 248, 241, 0) 70%)',
          zIndex: 0
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto">
        <div className="marquee-container w-full overflow-hidden whitespace-nowrap">
          {/* Animated Track - Duplicated for infinite effect */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] items-center gap-[80px]">
            {/* First Set */}
            {BRANDS.map((brand, index) => (
              <div 
                key={`brand-1-${index}`} 
                className="flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="relative h-[48px] w-[160px]">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    priority={index < 4}
                  />
                </div>
              </div>
            ))}
            {/* Duplicated Set for Seamless Loop */}
            {BRANDS.map((brand, index) => (
              <div 
                key={`brand-2-${index}`} 
                className="flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="relative h-[48px] w-[160px]">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 40px));
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}