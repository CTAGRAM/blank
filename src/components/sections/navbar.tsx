"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-[999] px-4 md:px-8 pt-5">
      {/* Announcement Banner */}
        <a
          href="/dashboard"
          className="flex items-center justify-center w-full bg-primary text-[rgba(243,237,237,0.9)] text-[12.8px] font-sans py-[8.32px] rounded-t-[12px] transition-opacity hover:opacity-90"
          style={{ fontFamily: "Twkeverett, sans-serif" }}
        >
          <span className="hidden md:inline">✦✦ Introducing Sahayaak Samvaad - AI Assistant for Government Services ✦✦</span>
          <span className="md:hidden">✦✦ Introducing Sahayaak Samvaad ✦✦</span>
        </a>

      {/* Main Navigation Bar */}
      <nav className="relative flex items-center justify-between w-full h-[61.6px] bg-[rgba(255,255,255,0.15)] backdrop-blur-[20px] px-6 py-[12.8px] border-x border-b border-[#E2E8F0] rounded-b-[12px]">
        <div className="flex items-center w-full justify-between">
          {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="text-[22px] md:text-[26px] font-bold text-[#0F172A] tracking-tighter" style={{ fontFamily: "Twkeverett, sans-serif" }}>
                Sahayaak
              </span>
            </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wider text-[#0F172A] cursor-pointer hover:opacity-70 transition-opacity">
                Products
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[480px]">
                  <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-xl overflow-hidden jaali-pattern">
                    <div className="grid grid-cols-2 p-6 gap-8">
                      <div className="flex flex-col gap-3">
                        <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-1">API</span>
                        <a href="/apis/speech-to-text" className="text-[14px] text-[#0F172A] hover:text-[#1E40AF] transition-colors">Speech to Text</a>
                        <a href="/apis/text-to-speech" className="text-[14px] text-[#0F172A] hover:text-[#1E40AF] transition-colors">Text to Speech</a>
                        <a href="/apis/asr-translate" className="text-[14px] text-[#0F172A] hover:text-[#1E40AF] transition-colors">Speech Translate</a>
                        <a href="/text" className="text-[14px] text-[#0F172A] hover:text-[#1E40AF] transition-colors">Text</a>
                        <a href="/api-pricing" className="text-[14px] text-[#0F172A] hover:text-[#1E40AF] transition-colors">API Pricing</a>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-1">Platform</span>
                        <a href="/products/conversational-agents" className="text-[14px] text-[#0F172A] hover:text-[#1E40AF] transition-colors">Conversational Agents</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button className="flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wider text-[#0F172A] cursor-pointer hover:opacity-70 transition-opacity">
                Company
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isCompanyOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCompanyOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[240px]">
                  <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-xl overflow-hidden jaali-pattern">
                    <div className="flex flex-col p-5 gap-4">
                      <a href="/about-us" className="text-[14px] text-[#0F172A] hover:text-[#1E40AF] transition-colors">About Us</a>
                      <a href="/signin" className="text-[14px] text-[#0F172A] hover:text-[#1E40AF] transition-colors">Sovereign AI</a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/blogs" className="text-[13px] font-semibold uppercase tracking-wider text-[#0F172A] hover:opacity-70 transition-opacity">Blog</a>
            <a href="/signin" className="text-[13px] font-semibold uppercase tracking-wider text-[#0F172A] hover:opacity-70 transition-opacity">Careers</a>
          </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <a 
                href="/dashboard" 
                className="hidden sm:flex h-[36px] items-center px-4 border border-[#0F172A] text-[#0F172A] text-[12px] font-bold uppercase tracking-wider rounded-[4px] hover:bg-[#0F172A] hover:text-white transition-all duration-300"
              >
                Gov-Tech Platform
              </a>
              <a 
                href="/dashboard" 
                className="flex items-center h-[36px] gap-2 px-4 bg-primary text-white text-[12px] font-bold uppercase tracking-wider rounded-[4px] hover:bg-opacity-90 transition-all duration-300"
              >
                Find Services
                <Star className="w-3 h-3 fill-white" />
              </a>
            
            {/* Mobile Menu Icon (Visual Only for Clone) */}
            <div className="lg:hidden flex flex-col gap-1.5 ml-2 cursor-pointer p-1">
              <div className="w-6 h-[2px] bg-[#0F172A]"></div>
              <div className="w-6 h-[2px] bg-[#0F172A]"></div>
              <div className="w-6 h-[2px] bg-[#0F172A]"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;