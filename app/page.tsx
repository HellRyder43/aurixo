import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import WhyAurixo from "@/components/WhyAurixo";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ContactFab from "@/components/ContactFab";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-snow-white dark:bg-deep-black">
        <Navigation />
        <Hero />
        <Services />
        <FeaturedWork />
        <WhyAurixo />
        <Process />
        <TechStack />
        <ContactCTA />
        <Footer />
      </main>
      <ContactFab />
    </>
  );
}
