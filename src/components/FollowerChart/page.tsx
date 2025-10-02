'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { followerData, chartColor } from '@/app/data';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-white border border-gray-200 shadow-lg rounded-md">
        <p className="text-sm font-semibold text-gray-700">{label}</p>
        <p className="text-lg font-bold text-royalPurple">{`${payload[0].value.toLocaleString()} Takipçi`}</p>
      </div>
    );
  }
  return null;
};


export default function FollowerChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={followerData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* Arka plan ızgarası, sadece yatay çizgiler */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />

          {/* X Ekseni (Haftalar) */}
          <XAxis dataKey="week"
            axisLine={false}
            tickLine={false}
            padding={{ left: 20, right: 20 }}
            stroke="#6B7280"
          />

          {/* Y Ekseni (Takipçi Sayısı) */}
          <YAxis axisLine={false} tickLine={false} stroke="#6B7280" />

          {/* Tooltip (Fare üzerine gelince bilgi gösterir) */}
          <Tooltip content={<CustomTooltip />} />

          {/* Alan Grafiği (Area) */}
          <Area
            type="monotone"
            dataKey="followers"
            stroke={chartColor}
            fill={chartColor}
            fillOpacity={0.2}
            strokeWidth={3}
            dot={{ r: 5, fill: chartColor, stroke: '#ffffff', strokeWidth: 2 }}
            activeDot={{ r: 7, fill: '#ffffff', stroke: chartColor, strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}