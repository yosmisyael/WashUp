const HowItWorks: React.FC = () => {
    const steps = [
        {
            num: 1,
            title: 'Schedule Pickup',
            description: 'Choose your preferred pickup time and location through our easy-to-use app or website.',
        },
        {
            num: 2,
            title: 'Professional Cleaning',
            description: 'Our trained professionals handle your laundry with care, using premium, eco-friendly methods.',
        },
        {
            num: 3,
            title: 'Fast Delivery',
            description: 'Get your freshly cleaned laundry delivered back to your doorstep at your convenience.',
        },
    ];

    return (
        <section className="bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        How It Works
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Simple steps to get your laundry done professionally
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step) => (
                        <div key={step.num} className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                    {step.num}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
