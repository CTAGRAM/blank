import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import BrandMarquee from "@/components/sections/brand-marquee";
import FoundationalAI from "@/components/sections/foundational-ai";
import SahayaakSamvaad from "@/components/sections/sahayaak-samvaad";
import BuildWithSahayaak from "@/components/sections/build-with-sahayaak";
import SovereignEcosystem from "@/components/sections/sovereign-ecosystem";
import LatestResearch from "@/components/sections/latest-research";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[100px]">
        <Hero />
        <BrandMarquee />
        <FoundationalAI />
        <SahayaakSamvaad />
        <BuildWithSahayaak />
        <SovereignEcosystem />
        <LatestResearch />
      </main>
      <Footer />
    </div>
  );
}
