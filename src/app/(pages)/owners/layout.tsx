// src/app/(pages)/owners/layout.tsx
import { OwnerSidebar } from '@/components/molecules/owners/OwnerSidebar';
import Navbar from '@/components/molecules/Navbar'; // <-- Mengimpor Navbar GLOBAL
import { SidebarProvider } from "@/context/SidebarContext"; // Dibutuhkan oleh Navbar

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Data user palsu (nanti kita ambil dari session)
  // Sesuai dengan desain Dashboard.png Anda
  const currentUser = {
    name: "Sarah Johnson",
    role: "Owner",
    avatar: "https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg", // Ganti dengan path yang benar
    title: "Owner Portal" // Sesuai desain di Dashboard.png
  };

  return (
    <SidebarProvider> 
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        
        {/* Sidebar KHUSUS Owner */}
        <OwnerSidebar />

        {/* Main Wrapper */}
        <div className="flex flex-col flex-1 min-h-screen">
          
          {/* Navbar GLOBAL (dengan props) */}
          <div className="sticky top-0 z-30">
            <Navbar 
              title={currentUser.title}
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