import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Services from "@/components/Services";
import Jobs from "@/components/Jobs";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Offers />
      <Services />
      <Jobs />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
