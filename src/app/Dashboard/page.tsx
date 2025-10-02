import Header from "../../components/Header/page";
import Sidebar from "../../components/Sidebar/page";
import FollowerChart from "../../components/FollowerChart/page";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sidebarBg flex flex-col p-8 gap-12">

      <Header />

      <div className="flex flex-1 gap-8 max-w-[1024px] w-full mx-auto">
        <Sidebar />

        <main className="flex-1 flex flex-col rounded-xl p-6 shadow-sm gap-8">
          <div className="bg-cardBg p-6 rounded-xl shadow-xl"></div>

          {/* Takipçi Grafik Kartı */}
          <div className="bg-cardBg p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-bold text-darkText mb-4">
              Haftalık Takipçi Grafiği
            </h2>
            <FollowerChart />
          </div>        </main>



      </div>
    </div>
  );
}
