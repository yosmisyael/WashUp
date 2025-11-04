import {ReactNode} from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main className="w-screen h-full bg-white">
            {children}
        </main>
    );
};