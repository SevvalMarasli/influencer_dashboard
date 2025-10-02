import Header from "../../components/Header/page";
import Sidebar from "../../components/Sidebar/page";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sidebarBg flex flex-col p-8 gap-12">

      <Header />

      <div className="flex flex-1 gap-8 max-w-[1024px] w-full mx-auto">
        <Sidebar />

        <main className="flex-1 rounded-xl p-6 shadow-sm">
          {children}
        </main>

      </div>
    </div>
  );
}
