// lib/data.ts
import { LayoutDashboard, Users, Settings } from "lucide-react"; // İkonlar için

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

export const followerData = [
    { "week": "1. Hafta", "followers": 200 },
    { "week": "2. Hafta", "followers": 450 },
    { "week": "3. Hafta", "followers": 300 },
    { "week": "4. Hafta", "followers": 600}
];