import React from 'react';
import Image from 'next/image';

const BlogSection = () => {
  const blogs = [
    {
      date: 'May 20, 2025',
      title: 'Building a Sovereign AI Ecosystem for India',
      link: '#',
      color: 'bg-[#D15A3D]', // Terracotta
    },
    {
      date: 'April 26, 2025',
      title: "The Government of India selects Sarvam to build India's sovereign Large Language Model",
      link: '#',
      color: 'bg-[#3D4433]', // Forest Green
    },
  ];

  return (
    <section className="bg-[#FBF8F1] py-24 px-8 md:px-0">
      <div className="container mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-[#2D2D2D] font-sans">
            Fresh off the Blog
          </h2>
        </div>

        {/* Blog List */}
        <div className="flex flex-col gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row w-full gap-0 rounded-[12px] overflow-hidden border border-[#E5E1D8] transition-shadow hover:shadow-lg"
            >
              {/* Content Side */}
              <div className="flex-1 bg-white p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-[14px] font-semibold text-[#666666] tracking-wide mb-4 font-sans capitalize">
                    {blog.date}
                  </div>
                  <h3 className="text-[24px] md:text-[28px] font-semibold text-[#2D2D2D] leading-[1.3] mb-8 max-w-[600px] font-sans">
                    {blog.title}
                  </h3>
                </div>
                <div>
                  <a
                    href={blog.link}
                    className="inline-block px-4 py-2 border border-[#E5E1D8] text-[12px] font-bold text-[#D15A3D] uppercase tracking-wider rounded-sm transition-colors hover:bg-[#F5F2EA]"
                  >
                    READ MORE
                  </a>
                </div>
              </div>

              {/* Icon/Image Side */}
              <div className={`w-full md:w-[350px] aspect-[4/3] md:aspect-auto ${blog.color} flex items-center justify-center relative overflow-hidden group`}>
                {/* Abstract "Star" Icon Block */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/svgs/687a4909ada3b05a4675c003_Group_2027248-9.svg"
                    alt="Decorative Icon"
                    fill
                    className="object-contain opacity-40 brightness-0 invert"
                  />
                  {/* Inner star detail often seen in their UI */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white/20"
                    >
                      <path
                        d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative mesh pattern overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)' }}>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;