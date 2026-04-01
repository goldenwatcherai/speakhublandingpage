import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AgentCarousel from "@/components/AgentCarousel";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import CalBooking from "@/components/CalBooking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AgentCarousel />
        <Features />
        <Pricing />
        <Faq />
        <Cta />
        <CalBooking />
      </main>
      <Footer />
    </div>
  );
}
