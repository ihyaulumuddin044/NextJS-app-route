'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./profile/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const DisableNav = ["/login", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {!DisableNav.includes(pathname) && <Navbar />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
