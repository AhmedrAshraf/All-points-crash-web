import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Bebas_Neue, Poppins } from "next/font/google";

export const metadata: Metadata = { title: "Crash All-Points" };

// Create a CSS variable for the font
const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-Poppins",
  weight: ["500", "400"],
});

const fontBebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-Bebas_Neue",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontBebas.variable,
          fontPoppins.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
