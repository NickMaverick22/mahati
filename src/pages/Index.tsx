import HeroSection from "@/components/HeroSection";
import RecognitionSection from "@/components/RecognitionSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MapSection from "@/components/MapSection";
import TelegramSection from "@/components/TelegramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RecognitionSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <MapSection />
      <TelegramSection />
      <Footer />
    </div>
  );
};

export default Index;
