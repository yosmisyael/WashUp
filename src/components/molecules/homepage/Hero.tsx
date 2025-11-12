"use client";

import { Button } from "@/components/atoms/Button";
import {CheckCircle, Rocket, WashingMachine} from "lucide-react";
import {router} from "next/client";

const Hero: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Hero Text Content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                            Laundry Made <span className="text-indigo-600">Simple</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Experience seamless laundry management with WashUp.
                            Connect with launderers and dry cleaners, and enjoy professional
                            cleaning services - all from your fingertips.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button
                                variant="primary"
                                icon={<Rocket size={18}/>}
                                className="w-full sm:w-auto"
                                onClick={() => router.push('/auth/login')}
                            >
                                Try Our Services!
                            </Button>
                            <Button
                                variant="secondary"
                                className="w-full sm:w-auto"
                            >
                                Learn More
                            </Button>
                        </div>
                        <div className="mt-8 flex justify-center md:justify-start gap-8">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-indigo-600">10k+</p>
                                <p className="text-sm text-gray-500">Happy Customers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-indigo-600">99%</p>
                                <p className="text-sm text-gray-500">Satisfaction Rate</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-indigo-600">24/7</p>
                                <p className="text-sm text-gray-500">Support</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image / App Mockup */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-sm">
                            <div className="relative z-10 bg-white border-8 border-gray-800 rounded-3xl shadow-2xl p-2">
                                <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 p-4 flex flex-col">
    <span className="text-lg font-bold text-gray-800 text-center mb-4">
        Laundry
        </span>
                                    <div className="flex-grow flex flex-col items-center justify-center space-y-4">
                                        <div
                                            className="w-24 h-24 bg-blue-500 rounded-full border-8 border-blue-300 flex items-center justify-center animate-pulse">
                                            <WashingMachine className="w-12 h-12 text-white"/>
                                        </div>
                                        <div
                                            className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                                            <CheckCircle size={12}/>
                                            Order in Progress
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Simple shadow element */}
                            <div
                                className="absolute inset-0 bg-gray-200 rounded-3xl transform rotate-3 translate-x-2 -translate-y-2 z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;