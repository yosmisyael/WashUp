import React from 'react';

import Footer from "@/app/components/molecules/homepage/Footer";
import CallToActionBanner from "@/app/components/molecules/homepage/CallToActionBanner";
import Header from "@/app/components/molecules/homepage/Header";
import Hero from "@/app/components/molecules/homepage/Hero";
import HowItWorks from "@/app/components/molecules/homepage/StepSection";
import FeatureGrid from "@/app/components/molecules/homepage/FeatureGrid";

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
