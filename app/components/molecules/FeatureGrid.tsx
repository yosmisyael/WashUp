import {CalendarDays, Headset, Leaf, MapPin, ShieldCheck, Star} from "lucide-react";

const FeatureGrid: React.FC = () => {
    const features = [
        {
            icon: <MapPin className="w-6 h-6 text-indigo-600" />,
            title: 'Real-time Tracking',
            description: 'Track your laundry from pickup to delivery with live status updates and notifications.',
        },
        {
            icon: <CalendarDays className="w-6 h-6 text-indigo-600" />,
            title: 'Easy Scheduling',
            description: 'Schedule pickups and deliveries at your convenience and track the time slots.',
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
            title: 'Secure Payments',
            description: 'Multiple payment options with secure processing and digital receipts.',
        },
        {
            icon: <Leaf className="w-6 h-6 text-indigo-600" />,
            title: 'Eco-Friendly',
            description: 'Promoting sustainability with environmentally conscious practices and products.',
        },
        {
            icon: <Headset className="w-6 h-6 text-indigo-600" />,
            title: '24/7 Support',
            description: 'Reliable 24/7 customer support to assist with any questions or concerns.',
        },
        {
            icon: <Star className="w-6 h-6 text-indigo-600" />,
            title: 'Quality Guarantee',
            description: 'Top-notch cleaning services with professional-grade cleaning standards.',
        },
    ];

    return (
        <section className="bg-gray-50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Why Choose WashUp?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Experience the future of laundry management with our comprehensive
                        digital solution
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="mt-4 text-gray-600 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;