import {OwnerSidebar} from '@/components/molecules/owners/OwnerSidebar';
import Navbar from '@/components/molecules/Navbar';
import {SidebarProvider} from "@/context/SidebarContext";
import {getCurrentSession} from "@/lib/session-repository";
import {toTitleCase} from "@/lib/utils";

export default async function OwnerLayout({
                                              children,
                                          }: {
    children: React.ReactNode;
}) {
    const session = await getCurrentSession();

    const currentUser = {
        name: session?.name ?? "Default Name",
        role: session?.role ? toTitleCase(session?.role) : "Unknown",
        avatar: "https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg",
    };

    return (
        <SidebarProvider>
            <div className="flex h-screen bg-gray-100 overflow-hidden">

                <OwnerSidebar/>

                {/* Main Wrapper */}
                <div className="flex flex-col flex-1 min-h-screen">

                    <div className="sticky top-0 z-30">
                        <Navbar
                            userName={currentUser.name}
                            userRole={currentUser.role}
                            userAvatar={currentUser.avatar}
                        />
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 overflow-y-auto p-8 bg-gray-100">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}