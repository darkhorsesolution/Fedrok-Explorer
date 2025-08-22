import type { Metadata } from "next";
import { Inter, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fedrok Explorer - Green Blockchain Explorer",
  description: "Explore Fedrok blockchain - The world's first green Layer 1 EVM blockchain with Proof of Green consensus. Track transactions, monitor blocks, and discover sustainable blockchain technology.",
  keywords: ["blockchain", "explorer", "fedrok", "green", "sustainable", "EVM", "cryptocurrency", "proof of green"],
  authors: [{ name: "Fedrok Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#22c55e",
  openGraph: {
    title: "Fedrok Explorer - Green Blockchain Explorer",
    description: "Explore the world's first green blockchain. Track transactions, monitor blocks, and discover sustainable blockchain technology.",
    type: "website",
    url: "https://explorer.fedrok.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fedrok Explorer - Green Blockchain Explorer",
    description: "Explore the world's first green blockchain technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${workSans.variable} ${jetbrainsMono.variable} antialiased bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
