"use client";

import React from 'react';
import Image from 'next/image';

/**
 * BlogPreview component
 * Clones the "Fresh off the Blog" section with horizontal list items.
 * Theme: Light
 */
const BlogPreview: React.FC = () => {
    const blogPosts = [
      {
        date: 'October 15, 2026',
        title: 'Building a Citizen-Centric AI Ecosystem for India',
        link: '/blogs/building-a-citizen-centric-ai-ecosystem',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/6880ec2f34a4a4375b30b61b_Frame_202085662883_20_1_-10.png',
        bgColor: '#C65D3C', // Terracotta
      },
      {
        date: 'September 28, 2026',
        title: "How Sahayaak is revolutionizing access to Government Services through AI",
        link: '/blogs/revolutionizing-gov-services',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/6880ec2f34a4a4375b30b622_Frame_202085662893-11.png',
        bgColor: '#4A4E3A', // Moss Green
      },
    ];

  return (
    <section className="py-[120px] px-[5%] bg-[#F9F7F0]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[32px] md:text-[48px] font-semibold text-[#333333] mb-12 tracking-tight">
          Fresh off the Blog
        </h2>

        <div className="flex flex-col gap-6">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row bg-[#F4F1E6] rounded-[16px] overflow-hidden border border-[#E5E1D3] soft-shadow group cursor-pointer"
            >
              {/* Content Side */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-medium text-[#666666] uppercase tracking-wider mb-4 block">
                    {post.date}
                  </span>
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-[#333333] leading-[1.4] mb-8">
                    {post.title}
                  </h3>
                </div>
                
                <a 
                  href={post.link}
                  className="inline-flex items-center text-[12px] font-bold text-[#C65D3C] uppercase tracking-[0.1em] border border-[#C65D3C] px-6 py-2 rounded-[4px] w-fit transition-colors hover:bg-[#C65D3C] hover:text-white"
                >
                  READ MORE
                </a>
              </div>

              {/* Graphic Side */}
              <div 
                className="w-full md:w-[280px] h-[200px] md:h-auto flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: post.bgColor }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={post.image}
                    alt="Aesthetic geometric graphic"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .soft-shadow {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }
      `}</style>
    </section>
  );
};

export default BlogPreview;