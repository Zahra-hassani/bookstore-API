import type { Metadata } from "next";
// import "/globals.css";
import Header from "@/components/Share/Header";
import Footer from "@/components/footer";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/contants/app";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}`,
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
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
