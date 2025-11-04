import React from 'react';

import Footer from "@/app/components/molecules/Footer";
import CallToActionBanner from "@/app/components/molecules/CallToActionBanner";
import Header from "@/app/components/molecules/Header";
import Hero from "@/app/components/molecules/Hero";
import HowItWorks from "@/app/components/molecules/StepSection";
import FeatureGrid from "@/app/components/molecules/FeatureGrid";

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
