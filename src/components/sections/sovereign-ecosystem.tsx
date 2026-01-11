import React from 'react';
import Image from 'next/image';

/**
 * SovereignEcosystem component
 * 
 * This component clones the "Building India's Sovereign AI Ecosystem" section.
 * It features a split layout:
 * - Left: An illustrative map of India with AI node markers.
 * - Right: Headline text, description, and a "LEARN MORE" button.
 * 
 * Based on the design system:
 * - Background: #F9F7F0
 * - Card Background: #F4F1E6
 * - Border: #E5E1D3
 * - Primary Color: #C65D3C
 */

const SovereignEcosystem: React.FC = () => {
  // Asset from the provided list
  const mapIllustration = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/16eba484-7d4e-4aac-be91-a0d66ced5f03/image-1768108627424.png?width=8000&height=8000&resize=contain";

  return (
    <section className="w-full py-[120px] bg-[#F9F7F0] flex justify-center px-[5%]">
      <div className="max-w-[1280px] w-full">
        <div 
          className="flex flex-col md:flex-row items-stretch bg-[#F4F1E6] rounded-[16px] border border-[#E5E1D3] overflow-hidden soft-shadow"
          style={{ minHeight: '520px' }}
        >
          {/* Left Side: Illustrative Map */}
          <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-full bg-white">
            <div className="absolute inset-0 w-full h-full p-6 md:p-8 flex items-center justify-center">
              <div className="relative w-full h-full rounded-[12px] overflow-hidden">
                <Image
                  src={mapIllustration}
                  alt="Sahayaak Scholarship Search Illustration"
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Decorative Pattern / Mask overlay if needed based on screenshots */}
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMGwyMCAyMC0yMCAyMEwwIDIweiIgZmlsbD0iI0M2NUQzQyIgLz48L3N2Zz4=')] bg-repeat" />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16 relative">
            {/* Visual Divider/Notebook Detail for the edge between sections */}
            <div className="hidden md:block absolute left-0 top-12 bottom-12 w-[1px] opacity-30 bg-repeat-y" 
                 style={{ backgroundImage: 'linear-gradient(to bottom, #D1CDBE 50%, transparent 50%)', backgroundSize: '1px 8px' }} 
            />

              <div className="max-w-[480px]">
                  <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] text-[#333333] mb-6 tracking-tight">
                    Smart Scholarship Discovery for Every Student
                  </h2>
                  
                  <p className="text-[16px] md:text-[18px] text-[#666666] leading-[1.6] mb-10">
                    Leverage AI to find and apply for scholarships tailored to your profile. Sahayaak simplifies the complex landscape of educational funding, ensuring every student has access to the support they deserve.
                  </p>

                  <a 
                    href="/dashboard"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#333333] rounded-[4px] text-[14px] font-semibold uppercase tracking-wider text-[#333333] hover:bg-[#333333] hover:text-white transition-colors duration-200"
                  >
                    EXPLORE SCHOLARSHIPS
                  </a>

              {/* Geometric pattern background element at the bottom right */}
              <div className="absolute bottom-8 right-8 opacity-20 hidden lg:block">
                 <div className="flex gap-1">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-4 h-4 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 0L12 6L6 12L0 6L6 0Z" fill={i % 3 === 0 ? "#C65D3C" : "#D1CDBE"} />
                        </svg>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SovereignEcosystem;