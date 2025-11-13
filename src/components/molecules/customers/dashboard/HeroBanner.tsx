"use client";
import {CalendarPlus2, Plus} from "lucide-react";
import {useRouter} from "next/navigation";

export default function HeroBanner() {
    const router = useRouter();
    return (
        <section className="w-full max-w-screen-2xl mx-auto overflow-hidden text-white">
            <div
                className="flex flex-col sm:flex-row items-start px-4 sm:px-6 lg:px-8 py-6 sm:items-center gradient-color rounded-2xl justify-between gap-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold">
                        Welcome back, Sarah!
                    </h2>
                    <p className="text-sm sm:text-base opacity-90">
                        {`Ready to get your laundry done? Let's make it effortless.`}
                    </p>
                </div>
            </div>
            <div
                className="mt-5 bg-white rounded-2xl text-gray-800 flex flex-col items-center shadow-sm justify-center py-10 border border-gray-300/50">
        <span className="text-3xl mb-2 border border-gray-500/50 rounded-full p-6 bg-gray-200">
          <Plus/>
        </span>
                <h3 className="text-lg font-semibold">Place New Order</h3>
                <p className="text-sm text-gray-500 mb-4 text-center max-w-sm">
                    Schedule your laundry pickup and delivery with just a few clicks.
                    We’ll handle the rest!
                </p>
                <button
                    onClick={() => router.push("/customers/new-order")}
                    className="primary-color flex items-center justify-between text-white font-medium px-7 py-3 rounded-md transition">
                    <CalendarPlus2 className="mr-4" size={20}/>
                    Start New Order
                </button>
            </div>
        </section>
    );
}
