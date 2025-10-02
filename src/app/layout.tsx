import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

// Fonts
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

// Metadata (sekme başlığı, favicon vs.)
export const metadata: Metadata = {
  title: "Infofluencer Dashboard",
  description: "Login and dashboard application",
  icons: {
    icon: "/infofluencer_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
