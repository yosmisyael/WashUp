import React from 'react';

import Footer from "@/components/molecules/homepage/Footer";
import CallToActionBanner from "@/components/molecules/homepage/CallToActionBanner";
import Header from "@/components/molecules/homepage/Header";
import Hero from "@/components/molecules/homepage/Hero";
import HowItWorks from "@/components/molecules/homepage/StepSection";
import FeatureGrid from "@/components/molecules/homepage/FeatureGrid";

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            <Header/>
            <main>
                <Hero/>
                <FeatureGrid/>
                <HowItWorks/>
                <CallToActionBanner/>
            </main>
            <Footer/>
        </div>
    );
}
