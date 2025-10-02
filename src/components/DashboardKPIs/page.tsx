import React from 'react';
import KPICard from "../KPICard/page";
import { kpiData } from "@/app/data" ;

export default function DashboardKPIs() {
    return (
        // Grid yapısı: Küçük ekranda 1, orta ekranda 2, büyük ekranda 3 sütun
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kpiData.map((kpi) => (
                <KPICard
                    key={kpi.title}
                    title={kpi.title}
                    value={kpi.value}
                    icon={kpi.icon}
                    // Tipi kesinleştiriyoruz
                    color={kpi.color as 'royalPurple' | 'deepNavy' | 'accentPink'}
                />
            ))}
        </div>
    );
}