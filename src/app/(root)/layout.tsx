import Footer from "@/components/footer";
import Header from "@/components/Share/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Header />
      <body className={` antialiased`}>{children}</body>
      <Footer />
    </html>
  );
}
