import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { AppThemeProvider } from "@/components/primitives/AppThemeProvider";
import "./globals.css";

const fontSans = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const fontSerif = Inter({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "PCGA Kit",
  description: "Built with PCGA Kit",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} min-h-full bg-background text-foreground antialiased`}
      >
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
