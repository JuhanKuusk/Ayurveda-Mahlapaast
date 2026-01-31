import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JuicesSection from "@/components/JuicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import DoshaQuiz from "@/components/DoshaQuiz";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <JuicesSection />
        <ProgramsSection />
        <DoshaQuiz />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
