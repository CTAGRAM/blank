"use client";

import React from 'react';
import Image from 'next/image';
import { Linkedin, Twitter, Youtube, ArrowUpRight, Star } from 'lucide-react';

const Footer = () => {
  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/16eba484-7d4e-4aac-be91-a0d66ced5f03-sarvam-ai/assets/images/68a419158e1a4f685bd26ff7_sarvam-new-wordmark-white-12.png";

  return (
    <footer className="bg-[#0F172A] text-white pt-[120px] relative overflow-hidden">
      <div className="container mx-auto px-[5%] pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Logo Section */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-white fill-current" />
                  </div>
                  <span className="text-[32px] font-bold text-white tracking-tighter" style={{ fontFamily: "Twkeverett, sans-serif" }}>
                    Sahayaak
                  </span>
                </div>
                <p className="text-white opacity-60 text-lg font-normal mb-12">
                  AI for India's Governance starts here
                </p>
              </div>
              
                <div className="mt-auto hidden md:block">
                  <a 
                    href="/dashboard" 
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded px-4 py-2 transition-colors duration-200"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-[12px] font-semibold uppercase tracking-wider">Experience Sahayaak</span>
                  </a>
                </div>
              </div>

            {/* Links Section */}
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {/* Products Column */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white mb-2">Products</h4>
                <a href="/dashboard" className="text-[13px] font-medium uppercase text-white/60 hover:text-white transition-colors duration-200">Sahayaak Samvaad</a>
                <a href="/dashboard" className="text-[13px] font-medium uppercase text-white/60 hover:text-white transition-colors duration-200">Gov-Tech Platform</a>
              </div>

              {/* API Column */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white mb-2">Services</h4>
                <nav className="flex flex-col gap-3">
                  <a href="/dashboard" className="text-[13px] font-medium uppercase text-white/60 hover:text-white transition-colors duration-200">Find Services</a>
                  <a href="/dashboard" className="text-[13px] font-medium uppercase text-white/60 hover:text-white transition-colors duration-200">Track Applications</a>
                  <a href="/dashboard" className="text-[13px] font-medium uppercase text-white/60 hover:text-white transition-colors duration-200">Document Wallet</a>
                </nav>
              </div>

              {/* Company Column */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white mb-2">Company</h4>
                <nav className="flex flex-col gap-3">
                  <a href="/blogs" className="text-[13px] font-medium uppercase text-white/60 hover:text-white transition-colors duration-200">About Us</a>
                  <a href="/dashboard" className="text-[13px] font-medium uppercase text-white/60 hover:text-white transition-colors duration-200">Careers</a>
                  <a href="/privacy" className="text-[13px] font-medium uppercase text-white/60 hover:text-white transition-colors duration-200">Privacy Policy</a>
                </nav>
              </div>
            </div>
            
              {/* Mobile Experience Button */}
              <div className="md:hidden mt-8">
                <a 
                  href="/dashboard" 
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded px-4 py-2"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-[12px] font-semibold uppercase tracking-wider">Experience Sahayaak</span>
                </a>
              </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 my-16"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="text-[14px] text-white/60 font-medium">
              <p>© 2026 Sahayaak AI (Gov-Tech Private Limited)</p>
              <p>All rights reserved, New Delhi- 110001</p>
            </div>
          
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex gap-6">
              <a href="/terms" className="text-[13px] text-white/60 hover:text-white transition-colors">Terms of Use</a>
              <a href="/privacy" className="text-[13px] text-white/60 hover:text-white transition-colors">Privacy policy</a>
            </div>
            
            <div className="flex gap-5 ml-0 md:ml-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Border Pattern */}
      <div className="w-full h-12 md:h-16 flex overflow-hidden opacity-30 mt-10">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap">
          {Array.from({ length: 40 }).map((_, i) => (
            <svg key={i} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
              <path d="M20 0L24.5 15.5H40L27.5 24.5L32 40L20 31L8 40L12.5 24.5L0 15.5H15.5L20 0Z" fill="#1E40AF" />
              <path d="M20 10L22 18H30L23.5 22.5L26 30L20 25.5L14 30L16.5 22.5L10 18H18L20 10Z" fill="white" />
            </svg>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee whitespace-nowrap">
          {Array.from({ length: 40 }).map((_, i) => (
            <svg key={i} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
              <path d="M20 0L24.5 15.5H40L27.5 24.5L32 40L20 31L8 40L12.5 24.5L0 15.5H15.5L20 0Z" fill="#1E40AF" />
              <path d="M20 10L22 18H30L23.5 22.5L26 30L20 25.5L14 30L16.5 22.5L10 18H18L20 10Z" fill="white" />
            </svg>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;