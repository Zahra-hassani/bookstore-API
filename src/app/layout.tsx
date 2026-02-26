import type { Metadata } from "next";
import { Amaranth, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Share/Header";
import Footer from "@/components/footer";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/contants/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amaranth = Amaranth({
  variable: "--font-amaranth",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}`
  },
  description: `${APP_DESCRIPTION}`,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${amaranth.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute='class'
        enableSystem
        defaultTheme="light"
        disableTransitionOnChange
        >
          <Header />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
