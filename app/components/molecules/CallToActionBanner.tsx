import React from "react";
import Button from "@/app/components/atoms/Button";
import {Apple, Smartphone} from "lucide-react";

const CallToActionBanner: React.FC = () => {
    return (
        <section className="bg-linear-to-r from-secondary to-primary">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
                <h2 className="text-3xl font-extrabold text-white">
                    Ready to Transform Your Laundry Experience?
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                    Join thousands of satisfied customers who trust WashUp for their
                    laundry needs.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="primary"
                        icon={<Apple size={18} />}
                        className="w-full sm:w-auto"
                    >
                        Download for iOS
                    </Button>
                    <Button
                        variant="secondary"
                        icon={<Smartphone size={18} />} // Using Smartphone as a stand-in for Android
                        className="w-full sm:w-auto"
                    >
                        Download for Android
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CallToActionBanner;