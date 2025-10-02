import Header from "../../components/Header/page";
import Sidebar from "../../components/Sidebar/page";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sidebarBg flex flex-col p-9 gap-12"> 
      
      <Header />

      <div className="flex flex-1 gap-8 max-w-[1024px] w-full mx-auto">
        <Sidebar />

        <main className="flex-1 flex flex-col gap-8">
          {children} 
        </main>
      </div>
    </div>
  );
}
