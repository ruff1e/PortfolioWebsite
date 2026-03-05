import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0a0a0a]">
        <div className="bg-grid" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}