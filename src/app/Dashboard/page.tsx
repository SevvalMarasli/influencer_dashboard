import DashboardKPIs from "@/components/DashboardKPIs/page";
import FollowerChart from "@/components/FollowerChart/page";

export default function DashboardPage() {
  return (
    <>
      <DashboardKPIs />

      {/* Takipçi Grafik Kartı */}
      <div className="bg-cardBg p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-bold text-darkText mb-4">
          Haftalık Takipçi Grafiği
        </h2>
        <FollowerChart />
      </div>
    </>
  );
}
