import AmplifyVoicesSection from "@/components/AmplifyVoicesSection";
import ConsciousnessSection from "@/components/ConsciousnessSection";
import CoursesSection from "@/components/CoursesSection";
import DigitalProjectsSection from "@/components/DigitalProjectsSection";
import EditorialSection from "@/components/EditorialSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MonicaSection from "@/components/MonicaSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";

const Index = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <WhatWeDoSection />
            <MonicaSection />
            <ConsciousnessSection />
            <EditorialSection />
            <CoursesSection />
            <AmplifyVoicesSection />
            <DigitalProjectsSection />
            <Footer />
        </div>
    );
};

export default Index;