import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import CustomCursor from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/Navbar";
import AnimatedBackground from "@/components/shared/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashutosh Pandey | Portfolio",
  description: "Personal portfolio of Ashutosh Pandey, CSE Data Science student at VIT Vellore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col relative overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AnimatedBackground />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
