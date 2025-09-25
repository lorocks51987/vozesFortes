import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import MonicaSection from "@/components/MonicaSection";
import ConsciousnessSection from "@/components/ConsciousnessSection";
import EditorialSection from "@/components/EditorialSection";
import CoursesSection from "@/components/CoursesSection";
import DigitalProjectsSection from "@/components/DigitalProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatWeDoSection />
      <MonicaSection />
      <ConsciousnessSection />
      <EditorialSection />
      <CoursesSection />
      <DigitalProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;