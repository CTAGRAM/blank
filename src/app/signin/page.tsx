"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Mail, Github } from "lucide-react";

export default function SigninPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: Image/Illustration */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 jaali-pattern opacity-10" />
        <div className="relative z-10 w-full max-w-[500px]">
          <div className="mb-12">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-primary fill-current" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Empowering Every Citizen with Sahayaak
            </h1>
            <p className="text-bone/80 text-lg">
              Your AI-powered companion for discovering and accessing government services seamlessly across India.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <div className="text-white font-bold text-2xl mb-1">500+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wider">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <div className="text-white font-bold text-2xl mb-1">22</div>
              <div className="text-blue-100 text-sm uppercase tracking-wider">Languages</div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px]" />
      </div>

      {/* Right Side: Sign-in Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-20">
        <div className="w-full max-w-[420px]">
          <div className="lg:hidden flex items-center gap-2 mb-12">
            <div className="bg-[#1E40AF] w-8 h-8 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-2xl font-bold text-[#1E40AF] tracking-tighter">
              Sahayaak
            </span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
          <p className="text-slate-500 mb-10">Sign in to access Sahayaak services</p>

          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700">
              <Image src="/globe.svg" alt="Google" width={20} height={20} className="w-5 h-5" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700">
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm uppercase">
              <span className="bg-white px-4 text-slate-500 font-medium tracking-wider">Or continue with</span>
            </div>
          </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:opacity-90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]"
              >
                SIGN IN
              </button>
            </form>

          <p className="mt-8 text-center text-slate-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#1E40AF] font-bold hover:underline">
              Create an account
            </Link>
          </p>

          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
