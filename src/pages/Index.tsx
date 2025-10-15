import HeroSection from "@/components/HeroSection";
import { Suspense, lazy } from "react";

const WhatWeDoSection = lazy(() => import("@/components/WhatWeDoSection"));
const MonicaSection = lazy(() => import("@/components/MonicaSection"));
const ConsciousnessSection = lazy(() => import("@/components/ConsciousnessSection"));
const EditorialSection = lazy(() => import("@/components/EditorialSection"));
const CoursesSection = lazy(() => import("@/components/CoursesSection"));
const AmplifyVoicesSection = lazy(() => import("@/components/AmplifyVoicesSection"));
const DigitalProjectsSection = lazy(() => import("@/components/DigitalProjectsSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
    return (
        <main id="main" className="min-h-screen">
            <HeroSection />
            <Suspense fallback={<div className="py-10" />}>
                <WhatWeDoSection />
            </Suspense>
            <Suspense fallback={<div className="py-10" />}>
                <MonicaSection />
            </Suspense>
            <Suspense fallback={<div className="py-10" />}>
                <ConsciousnessSection />
            </Suspense>
            <Suspense fallback={<div className="py-10" />}>
                <EditorialSection />
            </Suspense>
            <Suspense fallback={<div className="py-10" />}>
                <CoursesSection />
            </Suspense>
            <Suspense fallback={<div className="py-10" />}>
                <AmplifyVoicesSection />
            </Suspense>
            <Suspense fallback={<div className="py-10" />}>
                <DigitalProjectsSection />
            </Suspense>
            <Suspense fallback={<div className="py-10" />}>
                <Footer />
            </Suspense>
        </main>
    );
};

export default Index;