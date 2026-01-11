"use client";

import React from "react";
import Image from "next/image";

/**
 * Hero component for Sarvam AI.
 * Incorporates a Rive animation background and the main CTA content.
 * Note: Rive integration in Next.js typically uses @rive-app/react-canvas.
 * Since I cannot install external packages, I'll structure the canvas placeholder
 * which would normally be handled by the Rive component.
 */
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9F7F0] min-h-[85vh] flex items-center justify-center">
      {/* Rive Background Containers - as seen in HTML structure */}
      <div className="absolute inset-0 z-0">
        {/* The Rive background is implemented via multiple artboards for responsiveness */}
        {/* We use the primary asset provided */}
        <div className="absolute inset-0 w-full h-full opacity-100">
          <canvas 
            id="rive-canvas"
            className="w-full h-full object-cover" 
            style={{ 
              display: 'block', 
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent'
            }}
          />
          {/* Note: This is where Sarvam uses a .riv file. 
              URL: https://cdn.prod.website-files.com/687a4909ada3b05a4675bf37/687f40ba4618b92ada17bdb7_sarvam_hero.riv 
          */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40 mix-blend-multiply"
          >
            {/* Fallback pattern for visual consistency if Rive isn't active */}
          </video>
        </div>
      </div>

      {/* Hero Glow Utility from globals.css */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[5%] py-20 text-center">
        <div className="max-w-[900px] mx-auto flex flex-col items-center">
          
          {/* Main Heading */}
          <h1 className="new-home-main-title text-[40px] md:text-[64px] font-semibold text-[#333333] leading-[1.1] tracking-[-0.02em] mb-6">
            Finding the best <br className="hidden md:block" /> Government Services for you
          </h1>
          
          {/* Subheading/Paragraph */}
          <p className="paragraph-6 text-[18px] md:text-[20px] text-[#666666] font-normal leading-[1.5] max-w-[680px] mb-10">
            Sahayaak is an AI-based platform that helps citizens discover, understand, and access government services across all fields with ease and transparency.
          </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="/dashboard" 
                  className="group relative flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white px-6 py-4 rounded-[4px] min-w-[200px] transition-all duration-200 shadow-sm"
                >
                  <span className="text-[14px] font-semibold uppercase tracking-wider">
                    Explore Services
                  </span>
                  <div className="w-4 h-4 text-white">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>

              <a 
                href="/how-it-works" 
                className="flex items-center justify-center bg-transparent border border-[#0F172A] hover:bg-[#0F172A] hover:text-white text-[#0F172A] px-6 py-4 rounded-[4px] min-w-[200px] transition-all duration-200"
              >
              <span className="text-[14px] font-semibold uppercase tracking-wider">
                LEARN MORE
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Visual Accents - Notebook edge style mentioned in requirements */}
      <div className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none opacity-20">
        <div className="notebook-edge h-full w-full" />
      </div>

      {/* Bottom Gradient Fade to Marquee Section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(249,247,240,0) 0%, rgba(249,247,240,1) 100%)'
        }}
      />

      <style jsx>{`
        .new-home-main-title {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .paragraph-6 {
          animation: fadeUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .hero-btn {
          animation: fadeUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}