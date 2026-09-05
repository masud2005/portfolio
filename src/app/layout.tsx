import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masud Rana - Executive Full Stack Developer & Digital Product Engineer",
  description:
    "Executive Full Stack Developer who builds digital products from idea to production. Scalable web applications, robust backend systems, and production-ready digital products.",
  keywords: [
    "Executive Full Stack Developer",
    "Digital Product Engineer",
    "Full Stack Architecture",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Masud Rana",
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAFCFB] text-[#0F172A] font-sans">
        {children}
      </body>
    </html>
  );
}
