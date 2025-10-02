import {
  LayoutDashboard,
  Users,
  Settings,
  User,
  Globe,
  TrendingUp,
} from "lucide-react";

// ---------------------------
// 1. MENÜ ÖĞELERİ
// ---------------------------
export const menuItems = [
  {
    name: "Dashboard",
    href: "/Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Influencerlar",
    href: "/Dashboard/influencers",
    icon: Users,
  },
  {
    name: "Ayarlar",
    href: "/Dashboard/settings",
    icon: Settings,
  },
];

// ---------------------------
// 2. GRAFİK VERİLERİ
// ---------------------------
export const followerData = [
  { week: "1. Hafta", followers: 200 },
  { week: "2. Hafta", followers: 450 },
  { week: "3. Hafta", followers: 300 },
  { week: "4. Hafta", followers: 600 },
];

export const chartColor = "#562576";

// ---------------------------
// 3. KPI VERİLERİ
// ---------------------------
export const kpiData = [
  {
    title: "Toplam Influencer",
    value: "3",
    icon: User,
    color: "royalPurple",
  },
  {
    title: "Toplam Takipçi",
    value: "102.400",
    icon: Globe,
    color: "deepNavy",
  },
  {
    title: "Ortalama Etkileşim",
    value: "4.7%",
    icon: TrendingUp,
    color: "accentPink",
  },
];
