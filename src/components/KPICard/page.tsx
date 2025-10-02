import React from 'react';
import { LucideIcon } from 'lucide-react';

interface KPICardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    color: 'royalPurple' | 'deepNavy' | 'accentPink';
}

// Tailwind dinamik sınıfları algılanmıyor.
const colorMap = {
    royalPurple: {
        text: 'text-royalPurple',
        iconBg: 'bg-royalPurple',
    },
    deepNavy: {
        text: 'text-deepNavy',
        iconBg: 'bg-deepNavy',
    },
    accentPink: {
        text: 'text-accentPink',
        iconBg: 'bg-accentPink',
    },
};

export default function KPICard({ title, value, icon: Icon, color }: KPICardProps) {
    const styles = colorMap[color];

    return (
        <div className="flex flex-col p-6 bg-cardBg rounded-xl shadow-xl border border-gray-100 gap-5">

            <div className="flex items-center justify-between gap-3">
                <h3 className="text-grayText text-sm font-bold font-lato uppercase tracking-wider">{title}</h3>
                <div className={`p-2 rounded-full ${styles.iconBg}`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
            </div>

            <div className={`text-4xl font-bold ${styles.text}`}>
                {value}
            </div>

        </div>
    );
}