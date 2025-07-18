import HeroSection from "@/components/HeroSection";
import RecognitionSection from "@/components/RecognitionSection";
import ServicesSection from "@/components/ServicesSection";
import SoftConversionSection from "@/components/SoftConversionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MapSection from "@/components/MapSection";
import TelegramSection from "@/components/TelegramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RecognitionSection />
      <ServicesSection />
      <SoftConversionSection />
      <TestimonialsSection />
      <MapSection />
      <TelegramSection />
      <Footer />
    </div>
  );
};

export default Index;
