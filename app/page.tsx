import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyAurixo from "@/components/WhyAurixo";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-black">
      <Navigation />
      <Hero />
      <Services />
      <WhyAurixo />
      <Process />
      <TechStack />
      <ContactCTA />
      <Footer />
    </main>
  );
}
