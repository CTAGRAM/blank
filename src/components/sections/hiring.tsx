import React from 'react';
import Image from 'next/image';

const HiringSection: React.FC = () => {
  // Asset URL from the provided list
  const teamPhotoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/66b8443af5f5d1125a61eda1_Group_2027339-25.webp";

  return (
    <section className="py-[120px] px-[5%] bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row bg-[#F4F1E6] rounded-[16px] border border-[#E5E1D3] overflow-hidden soft-shadow">
          {/* Left Content Side */}
          <div className="flex-1 p-[40px] md:p-[64px] flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[48px] font-semibold text-[#333333] mb-[24px] leading-[1.2]">
              We are hiring
            </h2>
            <p className="text-[16px] text-[#666666] mb-[40px] leading-[1.6] max-w-[480px]">
              We are hiring for various roles across functions. If you&apos;re driven by innovation and thrive in a collaborative, fast-paced setting, we&apos;d love to hear from you
            </p>
            <div>
              <a 
                href="https://careers.kula.ai/sarvam-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#333333] hover:opacity-90 transition-opacity text-white text-[14px] font-semibold uppercase tracking-wider px-[24px] py-[14px] rounded-[4px] gap-2"
              >
                  <div className="w-[12px] h-[12px] flex items-center justify-center">
                    <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="currentColor"/>
                    </svg>
                  </div>
                  JOIN SAHAYAAK
                </a>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="flex-1 relative min-h-[300px] md:min-h-full">
            <Image
              src={teamPhotoUrl}
              alt="Sarvam AI Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;