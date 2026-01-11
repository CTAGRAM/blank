import React from 'react';
import Image from 'next/image';

const FoundationalAI = () => {
    const cards = [
      {
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/svgs/6880ec2f34a4a4375b30b602_Content-5.svg",
        title: "Trusted by Citizens",
        description: "AI infrastructure that prioritizes citizen privacy and delivers verified information from official government sources."
      },
      {
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/svgs/6880ec2f34a4a4375b30b603_Group_20_1_-2.svg",
        title: "Always Accessible",
        description: "Available 24/7 in 22+ Indian languages, ensuring every citizen can find help regardless of linguistic background."
      },
      {
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/svgs/6880ec2f34a4a4375b31e_icon3-3.svg",
        title: "Real-time Assistance",
        description: "Get instant guidance on eligibility, documentation, and application processes for welfare schemes and services."
      }
    ];

    return (
      <section className="relative w-full overflow-hidden bg-[#F9F7F0] pt-[120px] pb-[120px]">
        {/* Decorative Glow Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(198, 93, 60, 0.12) 0%, rgba(249, 247, 240, 0) 70%)'
          }}
        />
        
        <div className="container relative z-10 max-w-[1280px] px-[5%] mx-auto">
          <div className="bg-[#F4F1E6] rounded-[16px] border border-[#E5E1D3] p-[60px] md:p-[80px] shadow-sm">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#333333] text-center mb-[64px] tracking-tight">
              AI-driven governance for every Indian
            </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col bg-[#F9F7F0] border border-[#E5E1D3] rounded-[16px] p-10 min-h-[380px] transition-all duration-300 hover:shadow-md"
              >
                {/* Notebook Perforated Edge Detail */}
                <div 
                  className="absolute right-[12px] top-[20px] bottom-[20px] w-[1px]" 
                  style={{
                    backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, #D1CDBE 4px, #D1CDBE 8px)'
                  }}
                />
                <div 
                  className="absolute left-[12px] top-[20px] bottom-[20px] w-[1px]" 
                  style={{
                    backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, #D1CDBE 4px, #D1CDBE 8px)'
                  }}
                />

                {/* Content */}
                <div className="flex flex-col h-full">
                  <div className="mb-8 w-16 h-16 flex items-center justify-center bg-[#E5E1D3]/30 rounded-full">
                    <img 
                      src={card.icon} 
                      alt={card.title} 
                      className="w-10 h-10 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  
                  <h3 className="text-[24px] font-semibold text-[#333333] mb-4 tracking-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-[16px] text-[#666666] leading-[1.6] font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationalAI;