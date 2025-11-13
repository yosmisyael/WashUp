'use client';

import {useRouter} from "next/navigation";

const navLinks = [
    {
        route: "/customers/new-order/",
        index: 1,
    },
    {
        route: "/customers/new-order/services",
        index: 2,
    },
    {
        route: "/customers/new-order/review",
        index: 3,
    }
]

export function OrderNavigator({ currentPosition }: { currentPosition: number }) {
    const router = useRouter();
    return (
        <div className="flex items-center space-x-1">
            { navLinks.map(({ route }, index) => (
                ( <>
                        <div onClick={() => router.push(route)} className={`cursor-pointer w-8 h-8 rounded-full ${ index + 1 <= currentPosition ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600' } flex items-center justify-center text-sm font-semibold`}>
                            { index + 1 }
                        </div>
                        { index != navLinks.length - 1 && (
                            <div className="w-6 h-px bg-gray-300"></div>
                        )}
                </>
                )
            ))}
        </div>
    )
}