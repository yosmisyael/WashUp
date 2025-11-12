import {ReactNode} from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main className="w-screen h-full bg-white py-10 border-red-500">
            {children}
        </main>
    );
};