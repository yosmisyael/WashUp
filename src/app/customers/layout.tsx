import {ReactNode} from "react";
import Sidebar from "@/components/molecules/customers/Sidebar";
import Navbar from "@/components/molecules/Navbar";
import {SidebarProvider} from "@/context/SidebarContext";
import {getCurrentSession} from "@/lib/session-repository";
import {toTitleCase} from "@/lib/utils";

export default async function CustomerLayout({children}: { children: ReactNode }) {
    const session = await getCurrentSession();

    const currentUser = {
        name: session?.name ?? "Default Name",
        role: session?.role ? toTitleCase(session?.role) : "Unknown",
        avatar: "https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg",
    };

    return (
        <SidebarProvider>
            <div className="flex h-screen bg-layout overflow-hidden">
                {/* Sidebar */}
                <Sidebar/>

                {/* Main Wrapper */}
                <div className="flex flex-col flex-1 min-h-screen transition-all duration-300 lg:ml-64">
                    {/* Navbar */}
                    <div className="fixed top-0 right-0 left-0 lg:left-64 z-30">
                        <Navbar
                            userName={currentUser.name}
                            userRole={currentUser.role}
                            userAvatar={currentUser.avatar}
                        />
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 overflow-y-auto pt-24 px-6 pb-6">
                        <div className="min-h-full">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
